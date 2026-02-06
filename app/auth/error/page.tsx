import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { AlertCircle } from "lucide-react";

export default function AuthErrorPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 flex items-center justify-center">
      <div className="max-w-md w-full px-6 text-center">
        <div className="bg-card border border-border rounded-xl p-8 shadow-lg">
          <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertCircle className="w-8 h-8 text-red-500" />
          </div>

          <h1 className="text-2xl font-bold mb-4">Authentication Error</h1>
          
          <p className="text-muted-foreground mb-6">
            There was a problem signing you in. Please try again.
          </p>

          <div className="space-y-3">
            <Link href="/auth/login" className="block">
              <Button className="w-full">Try Again</Button>
            </Link>
            <Link href="/" className="block">
              <Button variant="ghost" className="w-full">Go Home</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
