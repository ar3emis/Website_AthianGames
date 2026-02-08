import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

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

    // Check if already signed up
    const existing = await prisma.betaSignup.findUnique({
      where: {
        email_productSlug: {
          email: email.toLowerCase(),
          productSlug,
        },
      },
    });

    if (existing) {
      return NextResponse.json(
        { error: "You're already signed up for this beta!" },
        { status: 409 }
      );
    }

    // Create beta signup
    const signup = await prisma.betaSignup.create({
      data: {
        email: email.toLowerCase(),
        name: name || null,
        productSlug,
        productName,
        message: message || null,
        status: "pending",
      },
    });

    console.log(`✅ Beta signup created: ${email} for ${productName}`);

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
    return NextResponse.json(
      { error: "Failed to sign up for beta" },
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
