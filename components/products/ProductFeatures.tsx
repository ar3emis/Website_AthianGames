import { Check } from "lucide-react";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";

interface ProductFeaturesProps {
  features: string[];
}

export function ProductFeatures({ features }: ProductFeaturesProps) {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-2xl font-bold">Key Features</h2>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Check className="w-4 h-4 text-primary" />
              </div>
              <span className="text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
