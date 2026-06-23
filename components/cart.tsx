"use client";

import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import type { Product } from "./product-catalog";

export interface CartItem extends Product {
  quantity: number;
}

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQty: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

export default function Cart({
  isOpen,
  onClose,
  items,
  onUpdateQty,
  onRemove,
}: CartProps) {
  const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 transition-opacity duration-400"
        style={{
          background: "rgba(0,0,0,0.7)",
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
        }}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <aside
        role="dialog"
        aria-label="Shopping cart"
        aria-modal="true"
        className="fixed top-0 right-0 h-full z-50 flex flex-col w-full max-w-md transition-transform duration-400"
        style={{
          background: "#0d0d0d",
          borderLeft: "1px solid #1e1e1e",
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
        }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-8 py-6"
          style={{ borderBottom: "1px solid #1e1e1e" }}
        >
          <div className="flex items-center gap-3">
            <ShoppingBag size={18} strokeWidth={1.5} style={{ color: "#c9a84c" }} />
            <h2
              className="text-sm tracking-[0.3em] uppercase text-foreground"
              style={{ fontFamily: "var(--font-playfair), serif" }}
            >
              Your Bag
            </h2>
            {items.length > 0 && (
              <span
                className="text-xs px-2 py-0.5"
                style={{
                  color: "#c9a84c",
                  border: "1px solid rgba(201,168,76,0.4)",
                  fontFamily: "var(--font-cormorant), serif",
                }}
              >
                {items.reduce((s, i) => s + i.quantity, 0)}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            aria-label="Close cart"
            className="text-foreground/50 hover:text-foreground transition-colors duration-200"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-8 py-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-foreground/40">
              <ShoppingBag size={40} strokeWidth={1} />
              <p
                className="text-sm tracking-[0.2em] uppercase"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                Your bag is empty
              </p>
            </div>
          ) : (
            <ul className="flex flex-col gap-6">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex gap-5"
                  style={{ paddingBottom: "1.5rem", borderBottom: "1px solid #1a1a1a" }}
                >
                  {/* Product image thumbnail */}
                  <div className="w-20 h-24 flex-shrink-0 overflow-hidden" style={{ background: "#111" }}>
                    <img src="https://v3b.fal.media/files/b/0a9f8082/Iuzh3GqqJs3NYi_4Rk0jf_image.png" alt="product" className="w-full h-full object-cover" />
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex items-start justify-between">
                      <div>
                        <p
                          className="text-sm text-foreground tracking-wide"
                          style={{ fontFamily: "var(--font-playfair), serif" }}
                        >
                          {item.name}
                        </p>
                        <p
                          className="text-sm mt-1"
                          style={{ color: "#c9a84c", fontFamily: "var(--font-cormorant), serif" }}
                        >
                          £{item.price}
                        </p>
                      </div>
                      <button
                        onClick={() => onRemove(item.id)}
                        aria-label={`Remove ${item.name}`}
                        className="text-foreground/30 hover:text-foreground/70 transition-colors mt-0.5"
                      >
                        <X size={14} strokeWidth={1.5} />
                      </button>
                    </div>

                    {/* Quantity */}
                    <div className="flex items-center gap-3 mt-3">
                      <button
                        onClick={() => onUpdateQty(item.id, -1)}
                        aria-label="Decrease quantity"
                        className="w-7 h-7 flex items-center justify-center text-foreground/60 hover:text-foreground transition-colors"
                        style={{ border: "1px solid #2a2a2a" }}
                      >
                        <Minus size={11} strokeWidth={1.5} />
                      </button>
                      <span
                        className="text-sm w-5 text-center text-foreground"
                        style={{ fontFamily: "var(--font-cormorant), serif" }}
                      >
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQty(item.id, 1)}
                        aria-label="Increase quantity"
                        className="w-7 h-7 flex items-center justify-center text-foreground/60 hover:text-foreground transition-colors"
                        style={{ border: "1px solid #2a2a2a" }}
                      >
                        <Plus size={11} strokeWidth={1.5} />
                      </button>
                      <span
                        className="ml-auto text-sm"
                        style={{ color: "#c9a84c", fontFamily: "var(--font-cormorant), serif" }}
                      >
                        £{(item.price * item.quantity).toFixed(0)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div
            className="px-8 py-6 flex flex-col gap-4"
            style={{ borderTop: "1px solid #1e1e1e" }}
          >
            {/* Free shipping note */}
            <p
              className="text-xs tracking-[0.15em] text-foreground/50 text-center uppercase"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Complimentary shipping on orders over £150
            </p>

            {/* Subtotal */}
            <div className="flex items-center justify-between">
              <span
                className="text-xs tracking-[0.2em] uppercase text-foreground/60"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                Subtotal
              </span>
              <span
                className="text-lg tracking-wide text-foreground"
                style={{ fontFamily: "var(--font-playfair), serif" }}
              >
                £{subtotal}
              </span>
            </div>

            {/* Checkout button */}
            <button
              className="w-full py-4 text-xs tracking-[0.3em] uppercase text-background transition-all duration-300 hover:opacity-90"
              style={{
                background: "#c9a84c",
                fontFamily: "var(--font-cormorant), serif",
              }}
            >
              Proceed to Checkout
            </button>

            <button
              onClick={onClose}
              className="w-full py-3 text-xs tracking-[0.25em] uppercase text-foreground/60 hover:text-foreground transition-colors duration-300 text-center"
              style={{ fontFamily: "var(--font-cormorant), serif" }}
            >
              Continue Shopping
            </button>
          </div>
        )}
      </aside>
    </>
  );
}
