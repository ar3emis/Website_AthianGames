"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { Users, Zap, BookOpen, Play, Mail, BarChart3 } from "lucide-react";
import { ProductVideo } from "@/components/products/ProductVideo";

interface Product {
  name: string;
  slug: string;
  description: string;
  summary: string;
  features: any[];
  demoVideos?: string[];
  [key: string]: any;
}

interface FabricAITabsProps {
  product: Product;
}

const HowItWorksContent = () => {
  return (
    <div className="space-y-12">
      {/* Architecture Overview */}
      <div>
        <h3 className="text-2xl font-bold mb-6">Architecture Overview</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              title: "MCP Server",
              description: "Multi-platform Control Protocol server integration for seamless AI-powered workflows",
              icon: "🔗",
            },
            {
              title: "API Providers",
              description: "Support for Claude, OpenRouter, and GitHub Copilot for diverse AI capabilities",
              icon: "🤖",
            },
            {
              title: "Python Scripts",
              description: "Dynamic Python scripting engine for asset generation and automation",
              icon: "🐍",
            },
            {
              title: "C++ Classes",
              description: "Native C++ runtime classes for high-performance asset manipulation",
              icon: "⚡",
            },
          ].map((item, idx) => (
            <Card key={idx} className="p-6 border-primary/30 hover:border-primary transition-colors">
              <div className="text-4xl mb-3">{item.icon}</div>
              <h4 className="font-bold mb-2">{item.title}</h4>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* How It Works - Step by Step */}
      <div>
        <h3 className="text-2xl font-bold mb-6">Step-by-Step Process</h3>
        <div className="space-y-6">
          {[
            {
              step: 1,
              title: "Initialize Plugin",
              description:
                "Load FabricAI into your Unreal Engine project. The custom C++ plugin establishes connection with MCP servers and AI providers.",
              details: [
                "Configure API keys for your preferred AI provider",
                "Select MCP server endpoints",
                "Define project-specific custom instructions",
              ],
            },
            {
              step: 2,
              title: "Define Custom Instructions",
              description:
                "Create tailored instructions that guide AI behavior for your specific use cases. These instructions are passed to the LLM for consistent results.",
              details: [
                "Material generation rules (colors, patterns, properties)",
                "Object spawning logic and constraints",
                "Naming conventions and organizational hierarchy",
              ],
            },
            {
              step: 3,
              title: "Generate Python Scripts",
              description:
                "FabricAI generates Python scripts that execute your custom instructions. These scripts interface with Unreal's Python API to manipulate assets.",
              details: [
                "Dynamic material parameterization",
                "Batch asset creation and modification",
                "Asset organization and cataloging",
              ],
            },
            {
              step: 4,
              title: "Execute via C++ Bridge",
              description:
                "C++ runtime classes act as a bridge between Python and Unreal Engine native systems. They handle resource management and performance optimization.",
              details: [
                "Native texture creation and memory management",
                "Real-time asset streaming",
                "Performance profiling and optimization",
              ],
            },
            {
              step: 5,
              title: "Asset Spawning & Customization",
              description:
                "Objects are spawned at runtime with dynamically generated or customized materials and properties. Parameterized colors and effects are applied in real-time.",
              details: [
                "Runtime material instance creation",
                "Procedural texture generation",
                "Parameter-based visual customization",
              ],
            },
            {
              step: 6,
              title: "In-Editor & Runtime Integration",
              description:
                "Use FabricAI both in the editor for content creation and at runtime for dynamic content generation in your shipped games.",
              details: [
                "Editor utilities for preview and testing",
                "Packaged game runtime support",
                "Automated pipeline for continuous generation",
              ],
            },
          ].map((item) => (
            <div key={item.step} className="border-l-4 border-primary/50 pl-6 py-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold">
                  {item.step}
                </div>
                <h4 className="text-xl font-bold">{item.title}</h4>
              </div>
              <p className="text-muted-foreground mb-3">{item.description}</p>
              <ul className="space-y-2">
                {item.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary mt-1">•</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Capabilities */}
      <div>
        <h3 className="text-2xl font-bold mb-6">Technical Capabilities</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 bg-gradient-to-br from-blue-500/10 to-transparent border-blue-500/30">
            <h4 className="font-bold mb-3 flex items-center gap-2">
              <Zap className="w-5 h-5 text-blue-500" />
              Python Integration
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Dynamic script generation from AI-provided code</li>
              <li>• Access to Unreal Engine Python API</li>
              <li>• Custom module loading and execution</li>
              <li>• Error handling and logging integration</li>
            </ul>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-purple-500/10 to-transparent border-purple-500/30">
            <h4 className="font-bold mb-3 flex items-center gap-2">
              <BarChart3 className="w-5 h-5 text-purple-500" />
              C++ Runtime
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Native texture and material creation</li>
              <li>• Memory pool management</li>
              <li>• Performance-critical asset operations</li>
              <li>• Plugin architecture for extensibility</li>
            </ul>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-emerald-500/10 to-transparent border-emerald-500/30">
            <h4 className="font-bold mb-3 flex items-center gap-2">
              <Users className="w-5 h-5 text-emerald-500" />
              Multi-Model Support
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Claude (Anthropic) - Advanced reasoning</li>
              <li>• OpenRouter - Model flexibility</li>
              <li>• GitHub Copilot - IDE integration</li>
              <li>• Easy provider switching</li>
            </ul>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-amber-500/10 to-transparent border-amber-500/30">
            <h4 className="font-bold mb-3 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-amber-500" />
              Customization
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• Per-project instruction sets</li>
              <li>• Custom C++ class extensions</li>
              <li>• Workflow automation</li>
              <li>• Batch processing support</li>
            </ul>
          </Card>
        </div>
      </div>

      {/* Use Cases */}
      <div>
        <h3 className="text-2xl font-bold mb-6">Typical Use Cases</h3>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            "Procedural material library generation",
            "Dynamic object spawning with AI variation",
            "Automated asset naming and organization",
            "Runtime environment customization",
            "Batch asset creation for content pipelines",
            "AI-powered shader parameter optimization",
          ].map((useCase, idx) => (
            <div key={idx} className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg border border-primary/20">
              <span className="text-primary font-bold">✓</span>
              <span className="text-sm">{useCase}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const DemonstrationContent = ({ demoVideos }: { demoVideos?: string[] }) => {
  if (!demoVideos || demoVideos.length === 0) {
    return (
      <div className="text-center py-16">
        <Play className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
        <h3 className="text-xl font-bold mb-2">Demo Videos Coming Soon</h3>
        <p className="text-muted-foreground">
          Check back soon for demonstration videos showcasing FabricAI in action.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 gap-6">
        {demoVideos.map((videoId: string, index: number) => (
          <div key={index} className="space-y-3">
            <ProductVideo videoId={videoId} title={`FabricAI Demo ${index + 1}`} />
            <p className="text-sm text-muted-foreground text-center">
              Demonstration {index + 1}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export function FabricAITabs({ product }: FabricAITabsProps) {
  const [activeTab, setActiveTab] = useState("demonstration");

  return (
    <div className="w-full">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger value="demonstration" className="flex items-center gap-2">
            <Play className="w-4 h-4" />
            Demonstration
          </TabsTrigger>
          <TabsTrigger value="how-it-works" className="flex items-center gap-2">
            <Zap className="w-4 h-4" />
            How It Works
          </TabsTrigger>
        </TabsList>

        <TabsContent value="demonstration" className="mt-6">
          <Card>
            <CardContent className="pt-6">
              <DemonstrationContent demoVideos={product.demoVideos} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="how-it-works" className="mt-6">
          <div className="space-y-6">
            <HowItWorksContent />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}

