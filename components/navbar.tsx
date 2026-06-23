"use client";

import { useState, useEffect } from "react";
import { ShoppingBag, Menu, X } from "lucide-react";

interface NavbarProps {
  cartCount: number;
  onCartOpen: () => void;
}

export default function Navbar({ cartCount, onCartOpen }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Women", href: "#women" },
    { label: "Men", href: "#men" },
    { label: "Our Story", href: "#story" },
    { label: "Contact", href: "#newsletter" },
  ];

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(8,8,8,0.95)"
            : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(201,168,76,0.15)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
          {/* Left nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.slice(0, 2).map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="link-gold text-xs tracking-[0.2em] uppercase text-foreground/70 hover:text-gold transition-colors duration-300"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Logo */}
          <a
            href="#"
            className="absolute left-1/2 -translate-x-1/2 font-serif text-xl tracking-[0.35em] uppercase text-foreground"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            <span className="gold-shimmer">TRAHATSJA</span>
          </a>

          {/* Right nav */}
          <div className="flex items-center gap-8">
            <nav className="hidden md:flex items-center gap-10">
              {navLinks.slice(2).map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="link-gold text-xs tracking-[0.2em] uppercase text-foreground/70 hover:text-gold transition-colors duration-300"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  {l.label}
                </a>
              ))}
            </nav>

            {/* Cart */}
            <button
              onClick={onCartOpen}
              aria-label={`Open cart, ${cartCount} items`}
              className="relative cursor-pointer text-foreground/80 hover:text-gold transition-colors duration-300"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span
                  className="absolute -top-2 -right-2 w-4 h-4 rounded-full text-[9px] font-medium flex items-center justify-center text-background"
                  style={{ background: "#c9a84c" }}
                >
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden text-foreground/80 hover:text-gold transition-colors"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
          style={{ background: "rgba(8,8,8,0.97)" }}
        >
          <button
            className="absolute top-6 right-6 text-foreground/60 hover:text-gold"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
          >
            <X size={22} strokeWidth={1.5} />
          </button>
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="font-serif text-3xl tracking-widest uppercase text-foreground hover:text-gold transition-colors duration-300"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
