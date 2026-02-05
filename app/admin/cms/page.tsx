"use client";

import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/Card";
import { ExternalLink } from "lucide-react";

export default function AdminCMSPage() {
  useEffect(() => {
    // Redirect to PayloadCMS admin
    const payloadAdminUrl = "/admin/payload";
    window.location.href = payloadAdminUrl;
  }, []);

  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardContent className="p-12 text-center">
          <ExternalLink className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
          <h2 className="text-2xl font-bold mb-2">Redirecting to PayloadCMS...</h2>
          <p className="text-muted-foreground mb-4">
            You are being redirected to the full CMS interface.
          </p>
          <a
            href="/admin/payload"
            className="text-primary hover:underline"
          >
            Click here if you are not redirected automatically
          </a>
        </CardContent>
      </Card>
    </div>
  );
}
