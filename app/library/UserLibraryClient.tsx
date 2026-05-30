"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Download, ExternalLink, Package, CheckCircle } from "lucide-react";

interface Purchase {
  id: string;
  productSlug: string;
  productName: string;
  price: number;
  downloadUrl: string | null;
  downloadCount: number;
  maxDownloads: number;
  createdAt: Date;
}

export function UserLibraryClient({ purchases }: { purchases: Purchase[] }) {
  const [downloading, setDownloading] = useState<string | null>(null);
  const [downloadMessages, setDownloadMessages] = useState<Record<string, string>>({});

  const handleDownload = async (purchaseId: string, downloadUrl: string) => {
    setDownloading(purchaseId);
    setDownloadMessages({ ...downloadMessages, [purchaseId]: "Preparing download..." });

    try {
      // Call API to track download and get the URL
      const response = await fetch(`/api/library/download/${purchaseId}`, {
        method: "POST",
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Download failed");
      }

      // Open download URL in new tab
      window.open(downloadUrl, "_blank");
      
      setDownloadMessages({ 
        ...downloadMessages, 
        [purchaseId]: `Download started! (${data.downloadCount}/${data.maxDownloads} downloads used)` 
      });

      // Refresh the page after 2 seconds to update download count
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error: any) {
      setDownloadMessages({ 
        ...downloadMessages, 
        [purchaseId]: error.message || "Download failed" 
      });
    } finally {
      setDownloading(null);
    }
  };

  if (purchases.length === 0) {
    return (
      <div className="text-center py-16">
        <Package className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
        <h2 className="text-xl font-semibold mb-2">Your library is empty</h2>
        <p className="text-muted-foreground mb-6">
          Purchase products to see them here
        </p>
        <Link href="/products">
          <Button>Browse Products</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {purchases.map((purchase) => (
        <Card key={purchase.id} className="overflow-hidden">
          <CardContent className="p-6">
            <div className="flex justify-between items-start mb-3">
              <div>
                <h3 className="font-bold text-lg mb-1 line-clamp-2">
                  {purchase.productName}
                </h3>
                <Badge variant="accent" className="inline-flex items-center gap-1">
                  <CheckCircle className="w-3 h-3" />
                  Owned
                </Badge>
              </div>
            </div>

            <p className="text-sm text-muted-foreground mb-4">
              Purchased {new Date(purchase.createdAt).toLocaleDateString()}
            </p>

            {/* Download Information */}
            {purchase.downloadUrl && (
              <div className="mb-4 p-3 bg-muted rounded-lg">
                <p className="text-xs text-muted-foreground mb-1">
                  Downloads: {purchase.downloadCount}/{purchase.maxDownloads}
                </p>
                {purchase.downloadCount >= purchase.maxDownloads && (
                  <p className="text-xs text-orange-500">
                    Download limit reached. Contact support for more downloads.
                  </p>
                )}
              </div>
            )}

            {/* Download Message */}
            {downloadMessages[purchase.id] && (
              <p className="text-xs text-primary mb-3">
                {downloadMessages[purchase.id]}
              </p>
            )}

            {/* Action Buttons */}
            <div className="flex gap-2">
              {purchase.downloadUrl && purchase.downloadCount < purchase.maxDownloads ? (
                <Button
                  onClick={() => handleDownload(purchase.id, purchase.downloadUrl!)}
                  disabled={downloading === purchase.id}
                  className="flex-1"
                  size="sm"
                >
                  <Download className="w-4 h-4 mr-2" />
                  {downloading === purchase.id ? "Processing..." : "Download"}
                </Button>
              ) : purchase.downloadUrl && purchase.downloadCount >= purchase.maxDownloads ? (
                <Button variant="secondary" disabled className="flex-1" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Limit Reached
                </Button>
              ) : (
                <Button variant="secondary" disabled className="flex-1" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  No Download
                </Button>
              )}

              <Link href={`/products/${purchase.productSlug}`}>
                <Button variant="outline" size="sm">
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}


