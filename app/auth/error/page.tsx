"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { AlertCircle } from "lucide-react";

const errorMessages: Record<string, { title: string; description: string }> = {
  Configuration: {
    title: "Server Configuration Error",
    description: "There's an issue with the authentication server configuration. Please contact support.",
  },
  AccessDenied: {
    title: "Access Denied",
    description: "You do not have permission to sign in.",
  },
  Verification: {
    title: "Verification Error",
    description: "The verification link may have expired or already been used.",
  },
  OAuthSignin: {
    title: "OAuth Sign-In Error",
    description: "Error in constructing an authorization URL. Check your Google OAuth configuration.",
  },
  OAuthCallback: {
    title: "OAuth Callback Error",
    description: "Error in handling the OAuth callback. This might be due to incorrect redirect URI.",
  },
  OAuthCreateAccount: {
    title: "Account Creation Error",
    description: "Could not create OAuth account in the database.",
  },
  EmailCreateAccount: {
    title: "Email Account Error",
    description: "Could not create email account in the database.",
  },
  Callback: {
    title: "Callback Error",
    description: "Error in the OAuth callback handler route.",
  },
  OAuthAccountNotLinked: {
    title: "Account Already Exists",
    description: "This email is already registered with a different sign-in method. Please use your original sign-in method.",
  },
  EmailSignin: {
    title: "Email Sign-In Error",
    description: "Failed to send the verification email.",
  },
  CredentialsSignin: {
    title: "Sign-In Failed",
    description: "Invalid email or password. Please check your credentials and try again.",
  },
  SessionRequired: {
    title: "Session Required",
    description: "You must be signed in to access this page.",
  },
  Default: {
    title: "Authentication Error",
    description: "An unexpected error occurred during authentication. Please try again.",
  },
};

export default function AuthErrorPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error") || "Default";
  
  const errorInfo = errorMessages[error] || errorMessages.Default;

  return (
    <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
      <div className="max-w-md w-full px-6 text-center">
        <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
          <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="w-8 h-8 text-red-500" />
          </div>

          <h1 className="text-2xl font-bold mb-2">{errorInfo.title}</h1>
          
          <p className="text-muted-foreground mb-6">
            {errorInfo.description}
          </p>

          {error === "OAuthCallback" && (
            <div className="mb-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg text-left">
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Common fixes:</strong>
              </p>
              <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
                <li>Check your Google OAuth redirect URI</li>
                <li>Ensure NEXTAUTH_URL matches your domain</li>
                <li>Verify Google Client ID and Secret are correct</li>
              </ul>
            </div>
          )}

          <div className="space-y-3">
            <Link href="/auth/login" className="block">
              <Button className="w-full">Try Again</Button>
            </Link>
            <Link href="/" className="block">
              <Button variant="ghost" className="w-full">Go Home</Button>
            </Link>
          </div>

          {process.env.NODE_ENV === "development" && (
            <div className="mt-6 p-4 bg-muted rounded-lg text-left">
              <p className="text-xs font-mono text-muted-foreground">
                Error Code: {error}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
