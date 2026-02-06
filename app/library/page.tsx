import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "@/lib/auth/authOptions";
import { prisma } from "@/lib/prisma";
import { UserLibraryClient } from "./UserLibraryClient";

export const metadata: Metadata = {
  title: "My Library - Athian Games",
  description: "Access your purchased products and downloads",
};

export default async function LibraryPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.id) {
    redirect("/auth/login?callbackUrl=/library");
  }

  // Get user's purchases
  const purchases = await prisma.purchase.findMany({
    where: {
      userId: session.user.id,
      status: "completed",
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My Library</h1>
          <p className="text-muted-foreground">
            Access your purchased products and downloads
          </p>
        </div>

        <UserLibraryClient purchases={purchases} />
      </div>
    </div>
  );
}
