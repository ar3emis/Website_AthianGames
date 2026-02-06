"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Download, ExternalLink, Package } from "lucide-react";
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
  if (purchases.length === 0) {
    return (
      <div className="text-center py-16">
        <Package className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
        <h2 className="text-xl font-semibold mb-2">Your library is empty</h2>
        <p className="text-muted-foreground mb-6">Purchase products to see them here</p>
        <Link href="/products"><Button>Browse Products</Button></Link>
      </div>
    );
  }
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {purchases.map((purchase) => (
        <Card key={purchase.id} className="overflow-hidden p-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="font-bold line-clamp-1">{purchase.productName}</h3>
            <Badge variant="accent">Owned</Badge>
          </div>
          <p className="text-sm text-muted-foreground mb-4">
            Purchased {new Date(purchase.createdAt).toLocaleDateString()}
          </p>
          <Link href={`/products/` + purchase.productSlug}>
            <Button variant="outline" className="w-full" size="sm">
              <ExternalLink className="w-4 h-4 mr-2" />View Product
            </Button>
          </Link>
        </Card>
      ))}
    </div>
  );
}
