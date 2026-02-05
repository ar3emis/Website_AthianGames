"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Youtube } from "lucide-react";

const baseNavigation = [
  { name: "Products", href: "/products" },
  { name: "Services", href: "/services" },
  { name: "Personal", href: "/personal" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showAdmin, setShowAdmin] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    
    // Only show admin link on localhost (development)
    const isLocalhost = typeof window !== "undefined" && 
      (window.location.hostname === "localhost" || 
       window.location.hostname === "127.0.0.1");
    setShowAdmin(isLocalhost);
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = showAdmin 
    ? [...baseNavigation, { name: "Admin", href: "/admin" }]
    : baseNavigation;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="container-custom flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 group">
          <Image
            src="/images/logo-sm.svg"
            alt="Athian Games"
            width={40}
            height={40}
            className="transition-transform group-hover:scale-110"
          />
          <Image
            src="/images/logo.svg"
            alt="Athian Games"
            width={160}
            height={41}
            className="hidden sm:block"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center space-x-4">
          <Link
            href="https://www.fab.com/sellers/Athian%20Games"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            FAB Marketplace
          </Link>
          <Link
            href="https://youtube.com/@athiangames"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-muted-foreground hover:text-red-500 hover:bg-red-500/10 transition-colors"
            title="YouTube Channel"
          >
            <Youtube className="h-5 w-5" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="container-custom py-4 space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-3 border-t border-border">
              <Link
                href="https://www.fab.com/sellers/Athian%20Games"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                FAB Marketplace
              </Link>
              <Link
                href="https://youtube.com/@athiangames"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-2 text-base font-medium text-muted-foreground hover:text-red-500 transition-colors"
              >
                <Youtube className="h-5 w-5" />
                YouTube
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
