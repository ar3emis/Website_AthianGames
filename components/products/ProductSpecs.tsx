import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Package, Shield, Tag } from "lucide-react";

interface ProductSpecsProps {
  engineCompatibility: string[];
  license: string;
  category: string;
}

export function ProductSpecs({
  engineCompatibility,
  license,
  category,
}: ProductSpecsProps) {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-2xl font-bold">Technical Specifications</h2>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Engine Compatibility */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Package className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold">Engine Compatibility</h3>
            </div>
            <div className="space-y-2">
              {engineCompatibility.map((version) => (
                <div key={version} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-sm text-muted-foreground">
                    {version}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* License */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold">License Type</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {license}
            </p>
          </div>

          {/* Category */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Tag className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold">Category</h3>
            </div>
            <Badge variant="primary">{category}</Badge>
          </div>
        </div>

        {/* Additional info */}
        <div className="mt-8 pt-8 border-t border-border">
          <h3 className="font-semibold mb-4">Additional Information</h3>
          <div className="grid sm:grid-cols-2 gap-4 text-sm">
            <div className="flex justify-between">
              <span className="text-muted-foreground">File Size:</span>
              <span className="font-medium">~150 MB</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Last Updated:</span>
              <span className="font-medium">January 2026</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Support:</span>
              <span className="font-medium">Email & Discord</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Updates:</span>
              <span className="font-medium">Free for 12 months</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
