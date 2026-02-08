import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { jsonStorage } from "@/lib/storage/jsonStorage";
import { sendBulkBetaInvites } from "@/lib/email/emailService";
import { getProductBySlug } from "@/lib/products/productData";

export const maxDuration = 60; // Allow up to 60 seconds for bulk emails

// POST - Send beta invites to pending signups
export async function POST(req: NextRequest) {
  try {
    const { productSlug, signupIds } = await req.json();

    if (!productSlug) {
      return NextResponse.json(
        { error: "Product slug is required" },
        { status: 400 }
      );
    }

    // Get product details
    const product = getProductBySlug(productSlug);
    if (!product) {
      return NextResponse.json(
        { error: "Product not found" },
        { status: 404 }
      );
    }

    // Get signups to invite
    let signups;
    try {
      if (signupIds && signupIds.length > 0) {
        // Invite specific signups
        signups = await prisma.betaSignup.findMany({
          where: {
            id: { in: signupIds },
            productSlug,
            status: "pending",
          },
        });
      } else {
        // Invite all pending signups for this product
        signups = await prisma.betaSignup.findMany({
          where: {
            productSlug,
            status: "pending",
          },
        });
      }
    } catch (dbError) {
      // Fallback to JSON storage
      console.warn("Prisma failed, using JSON storage fallback:", dbError);
      const allSignups = await jsonStorage.findMany({ productSlug, status: "pending" });
      
      if (signupIds && signupIds.length > 0) {
        signups = allSignups.filter(s => signupIds.includes(s.id));
      } else {
        signups = allSignups;
      }
    }

    if (signups.length === 0) {
      return NextResponse.json(
        { error: "No pending signups found" },
        { status: 404 }
      );
    }

    console.log(`📧 Preparing to send invites to ${signups.length} users for ${product.name}`);

    // Prepare email data
    const invites = signups.map((signup: any) => ({
      to: signup.email,
      name: signup.name || signup.email.split('@')[0],
      productName: product.name,
      downloadLink: (product as any).downloadUrl || (product as any).externalUrl,
      discordLink: (product as any).discordUrl,
      documentationLink: (product as any).documentationUrl,
    }));

    // Send bulk invites
    const results = await sendBulkBetaInvites(invites);

    // Update status for successfully sent emails
    const successfulEmails = results.success;
    const successfulSignupIds = signups
      .filter((s: any) => successfulEmails.includes(s.email))
      .map((s: any) => s.id);

    if (successfulSignupIds.length > 0) {
      try {
        // Update in Prisma
        await prisma.betaSignup.updateMany({
          where: {
            id: { in: successfulSignupIds },
          },
          data: {
            status: "invited",
            invitedAt: new Date(),
          },
        });
      } catch (dbError) {
        // Update in JSON storage
        console.warn("Prisma failed, updating JSON storage:", dbError);
        for (const id of successfulSignupIds) {
          await jsonStorage.update({
            where: { id },
            data: {
              status: "invited",
              invitedAt: new Date().toISOString(),
            },
          });
        }
      }
    }

    console.log(`✅ Sent ${results.success.length} invites, ${results.failed.length} failed`);

    return NextResponse.json({
      success: true,
      message: `Sent ${results.success.length} invites`,
      results: {
        sent: results.success.length,
        failed: results.failed.length,
        failedEmails: results.failed,
      },
    });
  } catch (error) {
    console.error("Failed to send beta invites:", error);
    return NextResponse.json(
      { 
        error: "Failed to send beta invites",
        details: error instanceof Error ? error.message : "Unknown error"
      },
      { status: 500 }
    );
  }
}

