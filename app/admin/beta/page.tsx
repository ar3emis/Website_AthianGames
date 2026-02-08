"use client";

import { useEffect, useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Mail,
  User,
  Calendar,
  MessageSquare,
  Download,
  CheckCircle,
  Clock,
  UserCheck,
  XCircle,
  Trash2,
  RefreshCw,
} from "lucide-react";

interface BetaSignup {
  id: string;
  email: string;
  name: string | null;
  productSlug: string;
  productName: string;
  message: string | null;
  status: string;
  invitedAt: string | null;
  acceptedAt: string | null;
  createdAt: string;
}

interface ProductGroup {
  productSlug: string;
  productName: string;
  signups: BetaSignup[];
  stats: {
    total: number;
    pending: number;
    invited: number;
    accepted: number;
  };
}

export default function BetaSignupsPage() {
  const [loading, setLoading] = useState(true);
  const [signups, setSignups] = useState<BetaSignup[]>([]);
  const [byProduct, setByProduct] = useState<ProductGroup[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const [updating, setUpdating] = useState<string | null>(null);

  const fetchSignups = async () => {
    try {
      setLoading(true);
      const response = await fetch("/api/admin/beta/signups");
      const data = await response.json();

      if (data.success) {
        setSignups(data.signups);
        setByProduct(data.byProduct);
      }
    } catch (error) {
      console.error("Failed to fetch signups:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSignups();
  }, []);

  const updateStatus = async (id: string, status: string) => {
    try {
      setUpdating(id);
      const response = await fetch("/api/admin/beta/signups", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });

      if (response.ok) {
        await fetchSignups();
      }
    } catch (error) {
      console.error("Failed to update status:", error);
    } finally {
      setUpdating(null);
    }
  };

  const deleteSignup = async (id: string) => {
    if (!confirm("Are you sure you want to delete this signup?")) return;

    try {
      const response = await fetch(`/api/admin/beta/signups?id=${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        await fetchSignups();
      }
    } catch (error) {
      console.error("Failed to delete signup:", error);
    }
  };

  const exportEmails = (productSlug?: string) => {
    const filtered = productSlug
      ? signups.filter((s) => s.productSlug === productSlug)
      : signups;

    const emails = filtered.map((s) => s.email).join("\n");
    const blob = new Blob([emails], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `beta-emails-${productSlug || "all"}-${new Date().toISOString().split("T")[0]}.txt`;
    a.click();
  };

  const exportCSV = (productSlug?: string) => {
    const filtered = productSlug
      ? signups.filter((s) => s.productSlug === productSlug)
      : signups;

    const csv = [
      ["Email", "Name", "Product", "Status", "Message", "Signed Up"].join(","),
      ...filtered.map((s) =>
        [
          s.email,
          s.name || "",
          s.productName,
          s.status,
          (s.message || "").replace(/,/g, ";"),
          new Date(s.createdAt).toLocaleDateString(),
        ].join(",")
      ),
    ].join("\n");

    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `beta-signups-${productSlug || "all"}-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
  };

  const getStatusBadge = (status: string) => {
    const variants: Record<string, any> = {
      pending: { variant: "secondary", icon: Clock, text: "Pending" },
      invited: { variant: "primary", icon: Mail, text: "Invited" },
      accepted: { variant: "accent", icon: CheckCircle, text: "Accepted" },
      declined: { variant: "outline", icon: XCircle, text: "Declined" },
    };

    const config = variants[status] || variants.pending;
    const Icon = config.icon;

    return (
      <Badge variant={config.variant} className="flex items-center gap-1">
        <Icon className="w-3 h-3" />
        {config.text}
      </Badge>
    );
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  const displaySignups = selectedProduct
    ? signups.filter((s) => s.productSlug === selectedProduct)
    : signups;

  return (
    <div className="container mx-auto p-6 max-w-7xl">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Beta Signups</h1>
            <p className="text-muted-foreground">
              Manage beta testers and send invitations
            </p>
          </div>
          <Button onClick={fetchSignups} variant="outline">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-4">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Total Signups</p>
                  <p className="text-2xl font-bold">{signups.length}</p>
                </div>
                <User className="w-8 h-8 text-primary" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Pending</p>
                  <p className="text-2xl font-bold">
                    {signups.filter((s) => s.status === "pending").length}
                  </p>
                </div>
                <Clock className="w-8 h-8 text-yellow-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Invited</p>
                  <p className="text-2xl font-bold">
                    {signups.filter((s) => s.status === "invited").length}
                  </p>
                </div>
                <Mail className="w-8 h-8 text-blue-500" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">Accepted</p>
                  <p className="text-2xl font-bold">
                    {signups.filter((s) => s.status === "accepted").length}
                  </p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-500" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Product Filter */}
      <div className="mb-6 flex items-center gap-4 flex-wrap">
        <Button
          variant={selectedProduct === null ? "primary" : "outline"}
          onClick={() => setSelectedProduct(null)}
        >
          All Products ({signups.length})
        </Button>
        {byProduct.map((product) => (
          <Button
            key={product.productSlug}
            variant={selectedProduct === product.productSlug ? "primary" : "outline"}
            onClick={() => setSelectedProduct(product.productSlug)}
          >
            {product.productName} ({product.stats.total})
          </Button>
        ))}
      </div>

      {/* Export Buttons */}
      <div className="mb-6 flex gap-2">
        <Button
          variant="outline"
          onClick={() => exportEmails(selectedProduct || undefined)}
        >
          <Download className="w-4 h-4 mr-2" />
          Export Emails
        </Button>
        <Button
          variant="outline"
          onClick={() => exportCSV(selectedProduct || undefined)}
        >
          <Download className="w-4 h-4 mr-2" />
          Export CSV
        </Button>
      </div>

      {/* Signups List */}
      <Card>
        <CardHeader>
          <h2 className="text-xl font-bold">
            {selectedProduct
              ? byProduct.find((p) => p.productSlug === selectedProduct)?.productName
              : "All Signups"}
          </h2>
        </CardHeader>
        <CardContent>
          {displaySignups.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">
              No signups yet
            </p>
          ) : (
            <div className="space-y-4">
              {displaySignups.map((signup) => (
                <div
                  key={signup.id}
                  className="p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-semibold text-lg">{signup.email}</h3>
                        {getStatusBadge(signup.status)}
                      </div>
                      {signup.name && (
                        <p className="text-sm text-muted-foreground flex items-center gap-2">
                          <User className="w-4 h-4" />
                          {signup.name}
                        </p>
                      )}
                      <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                        <Calendar className="w-4 h-4" />
                        Signed up: {new Date(signup.createdAt).toLocaleDateString()}
                      </p>
                      {!selectedProduct && (
                        <p className="text-sm font-medium mt-2">
                          Product: {signup.productName}
                        </p>
                      )}
                    </div>

                    <div className="flex gap-2">
                      <select
                        value={signup.status}
                        onChange={(e) => updateStatus(signup.id, e.target.value)}
                        disabled={updating === signup.id}
                        className="px-3 py-2 bg-background border border-border rounded-lg text-sm"
                      >
                        <option value="pending">Pending</option>
                        <option value="invited">Invited</option>
                        <option value="accepted">Accepted</option>
                        <option value="declined">Declined</option>
                      </select>

                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => deleteSignup(signup.id)}
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  {signup.message && (
                    <div className="mt-3 p-3 bg-muted rounded-lg">
                      <p className="text-sm font-medium flex items-center gap-2 mb-1">
                        <MessageSquare className="w-4 h-4" />
                        Message:
                      </p>
                      <p className="text-sm text-muted-foreground">{signup.message}</p>
                    </div>
                  )}

                  {signup.invitedAt && (
                    <p className="text-xs text-muted-foreground mt-2">
                      Invited: {new Date(signup.invitedAt).toLocaleString()}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
