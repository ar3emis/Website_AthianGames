import Link from "next/link";
import { Youtube, Twitter, Github } from "lucide-react";

const footerLinks = {
  products: [
    { name: "All Products", href: "/products" },
    { name: "Plugins", href: "/products?category=plugins" },
    { name: "Assets", href: "/products?category=assets" },
  ],
  company: [
    { name: "About Athian Games", href: "/about" },
    { name: "Personal", href: "/personal" },
    { name: "Contact", href: "/contact" },
  ],
  support: [
    { name: "Documentation", href: "/docs" },
    { name: "License Information", href: "/license" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
  ],
  creator: [
    { name: "YouTube Channel", href: "https://youtube.com/@athiangames" },
    { name: "Support on Patreon", href: "https://patreon.com/athiangames" },
    { name: "Discord Community", href: "https://discord.gg/athiangames" },
  ],
};

const socialLinks = [
  {
    name: "YouTube",
    href: "https://youtube.com/@athiangames",
    icon: Youtube,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/athiangames",
    icon: Twitter,
  },
  {
    name: "GitHub",
    href: "https://github.com/athiangames",
    icon: Github,
  },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Products
            </h3>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Creator */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4">
              Creator
            </h3>
            <ul className="space-y-3">
              {footerLinks.creator.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center font-bold text-sm">
              AG
            </div>
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Athian Games. All rights reserved.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-secondary hover:bg-secondary/80 transition-colors"
                  aria-label={link.name}
                >
                  <Icon className="w-5 h-5" />
                </Link>
              );
            })}
          </div>
        </div>

        {/* Tagline */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground font-mono">
            Serious tools for serious creators.
          </p>
        </div>
      </div>
    </footer>
  );
}
