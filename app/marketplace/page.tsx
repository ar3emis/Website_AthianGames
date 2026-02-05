import { Metadata } from "next";
import Link from "next/link";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "External Marketplace",
  description:
    "Find Athian Games products on Fab, Unreal Marketplace, and other platforms",
};

// Mock marketplace listings
const marketplaceListings = [
  {
    id: "1",
    name: "Advanced Lighting Toolkit",
    platform: "fab" as const,
    url: "https://fab.com/listings/athiangames-lighting-toolkit",
    price: 39.99,
    description:
      "Professional lighting tools and presets for cinematic scenes",
    thumbnail: "/images/marketplace/lighting-toolkit.jpg",
  },
  {
    id: "2",
    name: "Character Animation Suite",
    platform: "unreal-marketplace" as const,
    url: "https://unrealengine.com/marketplace/athiangames-animation-suite",
    price: 59.99,
    description: "Complete animation framework with retargeting support",
    thumbnail: "/images/marketplace/animation-suite.jpg",
  },
  {
    id: "3",
    name: "Environment Materials Pack",
    platform: "fab" as const,
    url: "https://fab.com/listings/athiangames-environment-materials",
    price: 29.99,
    description: "100+ photorealistic environment materials",
    thumbnail: "/images/marketplace/materials-pack.jpg",
  },
  {
    id: "4",
    name: "Blueprint Utilities Pro",
    platform: "gumroad" as const,
    url: "https://gumroad.com/athiangames/blueprint-utilities",
    price: 19.99,
    description: "Essential Blueprint utilities and helper functions",
    thumbnail: "/images/marketplace/blueprint-utils.jpg",
  },
];

const platformInfo = {
  fab: {
    name: "Fab",
    color: "bg-blue-500",
    textColor: "text-blue-500",
  },
  "unreal-marketplace": {
    name: "Unreal Marketplace",
    color: "bg-purple-500",
    textColor: "text-purple-500",
  },
  gumroad: {
    name: "Gumroad",
    color: "bg-pink-500",
    textColor: "text-pink-500",
  },
};

export default function MarketplacePage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container-custom">
        {/* Page header */}
        <div className="mb-12">
          <h1 className="mb-4">External Marketplace</h1>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Find Athian Games products on leading marketplace platforms.
            All purchases through these platforms are handled by their respective
            payment systems and license terms.
          </p>
        </div>

        {/* Info banner */}
        <div className="mb-12 p-6 bg-primary/5 border border-primary/20 rounded-xl">
          <p className="text-sm text-foreground">
            <strong>Note:</strong> Products purchased through external marketplaces
            are subject to their platform's licensing terms. For direct purchases
            with multi-project commercial licenses,{" "}
            <Link href="/store" className="text-primary hover:underline">
              visit our store
            </Link>
            .
          </p>
        </div>

        {/* Listings grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {marketplaceListings.map((listing) => {
            const platform = platformInfo[listing.platform];

            return (
              <Card key={listing.id} hover>
                <div className="aspect-video relative bg-muted overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">
                      Product Preview
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant="primary"
                      className={`${platform.color} border-transparent text-white`}
                    >
                      {platform.name}
                    </Badge>
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">External Purchase</Badge>
                  </div>
                </div>

                <CardHeader>
                  <h3 className="text-xl font-bold mb-2">{listing.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {listing.description}
                  </p>
                </CardHeader>

                <CardContent>
                  <div className="flex items-baseline gap-2">
                    <span className="text-2xl font-bold text-primary">
                      ${listing.price}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      on {platform.name}
                    </span>
                  </div>
                </CardContent>

                <CardFooter>
                  <Link
                    href={listing.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button variant="secondary" className="w-full" size="sm">
                      View on {platform.name}
                      <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            );
          })}
        </div>

        {/* Platform links */}
        <div className="mt-16 pt-12 border-t border-border">
          <h2 className="text-2xl font-bold mb-6">Browse by Platform</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Fab</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Epic's unified marketplace for digital content creators
                </p>
                <Link
                  href="https://fab.com/sellers/athiangames"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm">
                    View Store
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">
                  Unreal Marketplace
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Official Unreal Engine asset marketplace
                </p>
                <Link
                  href="https://unrealengine.com/marketplace/profile/athiangames"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm">
                    View Profile
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2">Gumroad</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Direct digital product sales and downloads
                </p>
                <Link
                  href="https://gumroad.com/athiangames"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="sm">
                    Visit Shop
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
