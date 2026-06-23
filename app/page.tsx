"use client";

import { useState, useCallback } from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import ProductCatalog from "@/components/product-catalog";
import type { Product } from "@/components/product-catalog";
import Cart from "@/components/cart";
import type { CartItem } from "@/components/cart";
import BrandStory from "@/components/brand-story";
import Newsletter from "@/components/newsletter";
import Footer from "@/components/footer";

export default function Home() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = useCallback((product: Product) => {
    setCartItems((prev) => {
      const existing = prev.find((i) => i.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setCartOpen(true);
  }, []);

  const updateQty = useCallback((id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, quantity: i.quantity + delta } : i))
        .filter((i) => i.quantity > 0)
    );
  }, []);

  const removeItem = useCallback((id: string) => {
    setCartItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const cartCount = cartItems.reduce((s, i) => s + i.quantity, 0);

  return (
    <main className="min-h-screen" style={{ background: "#080808" }}>
      <Navbar cartCount={cartCount} onCartOpen={() => setCartOpen(true)} />

      <Hero />

      {/* Announcement bar */}
      <div
        className="w-full py-3 px-6 text-center text-xs tracking-[0.3em] uppercase"
        style={{
          background: "#0d0d0d",
          borderBottom: "1px solid #1a1a1a",
          color: "#c9a84c",
          fontFamily: "var(--font-cormorant), serif",
        }}
      >
        Complimentary worldwide shipping on orders over £150 &nbsp;&mdash;&nbsp; Free returns within 30 days
      </div>

      <ProductCatalog onAddToCart={addToCart} />

      <BrandStory />

      <Newsletter />

      <Footer />

      <Cart
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cartItems}
        onUpdateQty={updateQty}
        onRemove={removeItem}
      />
    </main>
  );
}
