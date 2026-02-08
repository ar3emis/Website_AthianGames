import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { jsonStorage } from "@/lib/storage/jsonStorage";

// POST - Sign up for beta
export async function POST(req: NextRequest) {
  try {
    const { email, name, productSlug, productName, message } = await req.json();

    // Validation
    if (!email || !productSlug || !productName) {
      return NextResponse.json(
        { error: "Email, product slug, and product name are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    let existing, signup;
    let usedFallback = false;

    try {
      // Try Prisma first
      console.log(`🔍 Attempting Prisma signup for: ${email}`);
      existing = await prisma.betaSignup.findUnique({
        where: {
          email_productSlug: {
            email: email.toLowerCase(),
            productSlug,
          },
        },
      });

      if (existing) {
        console.log(`⚠️  User already exists in Prisma: ${email}`);
        return NextResponse.json(
          { error: "You're already signed up for this beta!" },
          { status: 409 }
        );
      }

      // Create beta signup
      signup = await prisma.betaSignup.create({
        data: {
          email: email.toLowerCase(),
          name: name || null,
          productSlug,
          productName,
          message: message || null,
          status: "pending",
        },
      });
      console.log(`✅ Prisma signup successful: ${signup.id}`);
    } catch (dbError) {
      // Fallback to JSON storage if Prisma fails
      console.warn("❌ Prisma failed, using JSON storage fallback:", dbError);
      usedFallback = true;

      existing = await jsonStorage.findUnique({
        email_productSlug: {
          email: email.toLowerCase(),
          productSlug,
        },
      });

      if (existing) {
        console.log(`⚠️  User already exists in JSON: ${email}`);
        return NextResponse.json(
          { error: "You're already signed up for this beta!" },
          { status: 409 }
        );
      }

      signup = await jsonStorage.create({
        data: {
          email: email.toLowerCase(),
          name: name || null,
          productSlug,
          productName,
          message: message || null,
          status: "pending",
          invitedAt: null,
          acceptedAt: null,
        },
      });
      console.log(`✅ JSON storage signup successful: ${signup.id}`);
    }

    console.log(`✅ Beta signup created: ${email} for ${productName}${usedFallback ? ' (JSON storage)' : ' (Prisma)'}`);

    return NextResponse.json({
      success: true,
      message: "Successfully signed up for beta! We'll contact you soon.",
      signup: {
        id: signup.id,
        email: signup.email,
        productName: signup.productName,
      },
    });
  } catch (error) {
    console.error("Beta signup error:", error);
    
    // Provide more specific error messages
    let errorMessage = "Failed to sign up for beta. Please try again later.";
    
    if (error instanceof Error) {
      errorMessage = `Error: ${error.message}`;
    }
    
    return NextResponse.json(
      { error: errorMessage },
      { status: 500 }
    );
  }
}

// GET - Check if email is already signed up for a product
export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const email = searchParams.get("email");
    const productSlug = searchParams.get("productSlug");

    if (!email || !productSlug) {
      return NextResponse.json(
        { error: "Email and product slug are required" },
        { status: 400 }
      );
    }

    const signup = await prisma.betaSignup.findUnique({
      where: {
        email_productSlug: {
          email: email.toLowerCase(),
          productSlug,
        },
      },
    });

    return NextResponse.json({
      signedUp: !!signup,
      status: signup?.status || null,
    });
  } catch (error) {
    console.error("Beta signup check error:", error);
    return NextResponse.json(
      { error: "Failed to check signup status" },
      { status: 500 }
    );
  }
}
