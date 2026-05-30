"use client";

import { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  Calendar,
  Clock,
  Video,
  CheckCircle,
  MessageSquare,
  Code,
  Lightbulb,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const consultationTypes = [
  {
    id: "quick-consultation",
    name: "Quick Consultation",
    duration: "30 minutes",
    price: 30,
    description: "Perfect for quick questions, code review, or getting unstuck on a specific problem.",
    features: [
      "30-minute 1-on-1 video call",
      "Screen sharing enabled",
      "Quick problem solving",
      "Follow-up notes via email",
    ],
    icon: MessageSquare,
    popular: false,
  },
  {
    id: "standard-consultation",
    name: "Standard Consultation",
    duration: "1 hour",
    price: 50,
    description: "In-depth discussion for architecture planning, complex debugging, or implementation review.",
    features: [
      "60-minute 1-on-1 video call",
      "Screen sharing & live coding",
      "Detailed problem analysis",
      "Follow-up notes & resources",
      "1 week email support",
    ],
    icon: Code,
    popular: true,
  },
  {
    id: "extended-consultation",
    name: "Extended Session",
    duration: "2 hours",
    price: 90,
    description: "Comprehensive session for project planning, technical review, or multiple implementation topics.",
    features: [
      "2-hour 1-on-1 video call",
      "Screen sharing & live coding",
      "Multiple topics covered",
      "Detailed documentation",
      "2 weeks email support",
      "Priority scheduling",
    ],
    icon: Lightbulb,
    popular: false,
  },
];


export default function ServicesPage() {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="container-custom mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <Badge variant="primary" className="mb-4">
            Expert Consultation
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            1-on-1 Unreal Engine Consultation
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Get personalized help with your Unreal Engine projects. From quick
            debugging sessions to in-depth architecture planning, I'm here to
            help you move the project forward.
          </p>
          <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Video className="w-5 h-5 text-primary" />
              <span>Google Meet</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              <span>Flexible Scheduling</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" />
              <span>Secure Payment</span>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="container-custom mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Choose Your Session
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {consultationTypes.map((type) => {
            const Icon = type.icon;
            return (
              <Card
                key={type.id}
                className={`relative overflow-hidden transition-all hover:shadow-xl ${
                  type.popular ? "border-primary ring-2 ring-primary/20" : ""
                }`}
              >
                {type.popular && (
                  <div className="absolute top-4 right-4">
                    <Badge variant="primary">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">{type.name}</h3>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>{type.duration}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">{type.description}</p>
                  
                  <div className="text-3xl font-bold">
                    ${type.price}
                    <span className="text-base font-normal text-muted-foreground">
                      /session
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={`/services/book?type=${type.id}`}>
                    <Button
                      className="w-full"
                      variant={type.popular ? "primary" : "secondary"}
                    >
                      Book Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* What to Expect */}
      <section className="bg-card border-y border-border py-16 mb-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">
            What to Expect
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "1",
                title: "Book & Pay",
                description: "Select your session type and complete secure payment via PayPal",
              },
              {
                step: "2",
                title: "Receive Confirmation",
                description: "Get instant email confirmation with Google Meet link",
              },
              {
                step: "3",
                title: "Prepare",
                description: "Share your questions or project details before the call",
              },
              {
                step: "4",
                title: "Meet & Solve",
                description: "Join the video call and get expert guidance",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics Covered */}
      <section className="container-custom mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">
          Topics I Can Help With
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {[
            "Blueprint Architecture",
            "C++ Integration",
            "UI/UMG Development",
            "Shader & Materials",
            "Niagara VFX",
            "Performance Optimization",
            "Multiplayer & Networking",
            "AI & Behavior Trees",
            "Plugin Development",
            "Project Architecture",
            "Code Review",
            "Best Practices",
          ].map((topic) => (
            <div
              key={topic}
              className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 border border-border"
            >
              <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
              <span>{topic}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="container-custom">
        <h2 className="text-3xl font-bold text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              q: "How does the booking process work?",
              a: "Select your preferred session type, choose an available time slot, and complete payment via PayPal. You'll receive an instant confirmation email with a Google Meet link.",
            },
            {
              q: "What if I need to reschedule?",
              a: "You can reschedule up to 24 hours before your session at no extra charge. Contact me via email with your preferred new time.",
            },
            {
              q: "Can I get a refund?",
              a: "Full refunds are available if cancelled 48+ hours before the session. 50% refund for 24-48 hours notice. No refunds within 24 hours.",
            },
            {
              q: "What should I prepare before the call?",
              a: "Have your project ready to share via screen sharing. Prepare specific questions or problems you want to discuss. Share any relevant code or documentation beforehand via email.",
            },
          ].map((faq, idx) => (
            <Card key={idx}>
              <CardContent className="p-6">
                <h3 className="font-bold mb-2">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
