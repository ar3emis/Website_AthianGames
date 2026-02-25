"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Package,
  Settings,
  FileText,
  TrendingUp,
  ExternalLink,
  ArrowRight,
  Loader2,
  Calendar,
} from "lucide-react";

export default function AdminPage() {
  const router = useRouter();
  const [isLocalhost, setIsLocalhost] = useState<boolean | null>(null);
  const [stats, setStats] = useState({
    totalProducts: 0,
    featuredProducts: 0,
    externalProducts: 0,
    categories: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if running on localhost
    const hostname = window.location.hostname;
    const isLocal =
      hostname === "localhost" ||
      hostname === "127.0.0.1" ||
      hostname.startsWith("192.168.") ||
      hostname.includes("localhost");

    setIsLocalhost(isLocal);

    if (!isLocal) {
      router.push("/");
    } else {
      fetchStats();
    }
  }, [router]);

  const fetchStats = async () => {
    try {
      const response = await fetch("/api/admin/stats");
      const data = await response.json();
      if (data.success) {
        setStats(data.stats);
      }
    } catch (error) {
      console.error("Failed to fetch stats:", error);
    } finally {
      setLoading(false);
    }
  };

  // Show loading while checking localhost
  if (isLocalhost === null) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (!isLocalhost) {
    return null;
  }

  const quickActions = [
    {
      title: "Manage Products",
      description: "Add, edit, or delete products",
      icon: Package,
      href: "/admin/products",
      color: "text-blue-500",
    },
    {
      title: "Beta Signups",
      description: "View and manage beta program signups",
      icon: FileText,
      href: "/admin/beta",
      color: "text-green-500",
    },
    {
      title: "Booking Availability",
      description: "Set available days, times, and block dates",
      icon: Calendar,
      href: "/admin/availability",
      color: "text-orange-500",
    },
    {
      title: "Site Configuration",
      description: "Update YouTube, Patreon, and trailer settings",
      icon: Settings,
      href: "/admin/config",
      color: "text-purple-500",
    },
    {
      title: "PayloadCMS",
      description: "Access full CMS interface",
      icon: FileText,
      href: "/admin/cms",
      color: "text-green-500",
    },
  ];

  return (
    <div className="max-w-7xl">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to your admin dashboard. Manage your website content from here.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-muted-foreground">Total Products</p>
              <Package className="w-5 h-5 text-muted-foreground" />
            </div>
            <p className="text-3xl font-bold">
              {loading ? "..." : stats.totalProducts}
            </p>
            <div className="flex items-center gap-1 mt-2 text-xs text-green-600">
              <TrendingUp className="w-3 h-3" />
              Active
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-muted-foreground">Featured</p>
              <Badge variant="primary">⭐</Badge>
            </div>
            <p className="text-3xl font-bold">
              {loading ? "..." : stats.featuredProducts}
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Shown on homepage
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-muted-foreground">External</p>
              <ExternalLink className="w-5 h-5 text-muted-foreground" />
            </div>
            <p className="text-3xl font-bold">
              {loading ? "..." : stats.externalProducts}
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Marketplace listings
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-muted-foreground">Categories</p>
              <FileText className="w-5 h-5 text-muted-foreground" />
            </div>
            <p className="text-3xl font-bold">
              {loading ? "..." : stats.categories}
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Product types
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {quickActions.map((action) => {
            const Icon = action.icon;
            return (
              <Link key={action.title} href={action.href}>
                <Card className="hover:border-primary transition-colors cursor-pointer h-full">
                  <CardContent className="p-6">
                    <Icon className={`w-8 h-8 mb-4 ${action.color}`} />
                    <h3 className="text-lg font-bold mb-2">{action.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {action.description}
                    </p>
                    <div className="flex items-center text-primary text-sm font-medium">
                      Open <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <h2 className="text-2xl font-bold">Getting Started</h2>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="text-primary font-bold">1</span>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Add Your Products</h3>
              <p className="text-sm text-muted-foreground">
                Start by adding your Unreal Engine products, plugins, and assets
                to the store.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="text-primary font-bold">2</span>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Configure Site Settings</h3>
              <p className="text-sm text-muted-foreground">
                Set up your YouTube channel, Patreon, and homepage trailer video.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
              <span className="text-primary font-bold">3</span>
            </div>
            <div>
              <h3 className="font-semibold mb-1">Preview Changes</h3>
              <p className="text-sm text-muted-foreground">
                All changes are reflected immediately on localhost. Deploy when
                ready.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-border">
            <p className="text-sm text-muted-foreground mb-2">
              <strong>Important:</strong> This admin panel is only accessible on
              localhost and will not be visible when deployed to production.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
