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
  const [showAdmin, setShowAdmin] = useState(false);

  useEffect(() => {
    // Only show admin link on localhost (development)
    const isLocalhost = typeof window !== "undefined" && 
      (window.location.hostname === "localhost" || 
       window.location.hostname === "127.0.0.1");
    setShowAdmin(isLocalhost);
  }, []);

  const navigation = showAdmin 
    ? [...baseNavigation, { name: "Admin", href: "/admin" }]
    : baseNavigation;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white border-b border-gray-10 shadow-sm`}
      style={{ height: '64px' }}
    >
      <nav className="container-custom flex items-center justify-between h-full px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center group" style={{paddingTop: '8px', paddingBottom: '8px' }}>
          <Image
            src="/images/companylogowithname.png"
            alt="Athian Games"
            width={280}
            height={170}
            className="transition-transform group-hover:scale-105"
            style={{ height: '60px', width: 'auto', objectFit: 'contain' }}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-black hover:text-gray-600 transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center space-x-3">
          <Link
            href="https://www.fab.com/sellers/Athian%20Games"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-black hover:text-gray-600 transition-colors"
          >
            FAB Marketplace
          </Link>
          <Link
            href="https://youtube.com/@athiangames"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1.5 rounded-lg text-black hover:text-red-500 hover:bg-red-500/10 transition-colors"
            title="YouTube Channel"
          >
            <Youtube className="h-5 w-5" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden p-1.5 rounded-lg hover:bg-gray-100 transition-colors text-black"
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
        <div className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-xl">
          <div className="container-custom py-4 space-y-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-base font-medium text-black hover:text-gray-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-3 border-t border-gray-200">
              <Link
                href="https://www.fab.com/sellers/Athian%20Games"
                target="_blank"
                rel="noopener noreferrer"
                className="block py-2 text-base font-medium text-black hover:text-gray-600 transition-colors"
              >
                FAB Marketplace
              </Link>
              <Link
                href="https://youtube.com/@athiangames"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 py-2 text-base font-medium text-black hover:text-red-500 transition-colors"
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
