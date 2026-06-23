"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

export interface Product {
  id: string;
  name: string;
  price: number;
  category: "women" | "men";
  tag?: string;
}

const products: Product[] = [
  { id: "w1", name: "Black Lace Set", price: 89, category: "women", tag: "Bestseller" },
  { id: "w2", name: "Satin Bodysuit", price: 75, category: "women", tag: "New" },
  { id: "w3", name: "Ivory Brief Set", price: 95, category: "women", tag: "Limited" },
  { id: "m1", name: "Black Boxer Briefs", price: 45, category: "men" },
  { id: "m2", name: "Ivory Trunks", price: 45, category: "men", tag: "New" },
];

interface ProductCatalogProps {
  onAddToCart: (product: Product) => void;
}

function ProductCard({
  product,
  onAddToCart,
}: {
  product: Product;
  onAddToCart: (p: Product) => void;
}) {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };

  return (
    <article className="group flex flex-col" style={{ background: "#0d0d0d" }}>
      {/* Image */}
      <div className="relative product-img-wrap aspect-[3/4] w-full">
        <img src="HERMES_PRODUCT_IMAGE_URL" alt="product" className="w-full h-full object-cover" />

        {/* Tag */}
        {product.tag && (
          <span
            className="absolute top-4 left-4 text-[9px] tracking-[0.25em] uppercase px-3 py-1 text-background"
            style={{
              background: "#c9a84c",
              fontFamily: "var(--font-cormorant), serif",
            }}
          >
            {product.tag}
          </span>
        )}

        {/* Quick-add overlay */}
        <div
          className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-400"
          style={{ background: "linear-gradient(to top, rgba(8,8,8,0.85) 0%, transparent 50%)" }}
        >
          <button
            onClick={handleAdd}
            className="w-full py-4 flex items-center justify-center gap-2 text-xs tracking-[0.25em] uppercase transition-all duration-300"
            style={{
              fontFamily: "var(--font-cormorant), serif",
              color: added ? "#c9a84c" : "#f5f0e8",
            }}
          >
            {added ? (
              "Added to bag"
            ) : (
              <>
                <Plus size={14} strokeWidth={1.5} />
                Add to Bag
              </>
            )}
          </button>
        </div>
      </div>

      {/* Details */}
      <div
        className="flex items-center justify-between px-4 py-4"
        style={{ borderTop: "1px solid #1e1e1e" }}
      >
        <div>
          <h3
            className="text-base tracking-wide text-foreground"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            {product.name}
          </h3>
          <p
            className="text-sm mt-0.5"
            style={{ color: "#c9a84c", fontFamily: "var(--font-cormorant), serif" }}
          >
            £{product.price}
          </p>
        </div>
        <button
          onClick={handleAdd}
          aria-label={`Add ${product.name} to cart`}
          className="w-8 h-8 flex items-center justify-center transition-colors duration-300 hover:text-gold"
          style={{ border: "1px solid #2a2a2a", color: "#f5f0e8" }}
        >
          <Plus size={14} strokeWidth={1.5} />
        </button>
      </div>
    </article>
  );
}

export default function ProductCatalog({ onAddToCart }: ProductCatalogProps) {
  const women = products.filter((p) => p.category === "women");
  const men = products.filter((p) => p.category === "men");

  return (
    <>
      {/* Women's Section */}
      <section id="women" className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-16">
          <p
            className="text-xs tracking-[0.4em] uppercase mb-4"
            style={{ color: "#c9a84c", fontFamily: "var(--font-cormorant), serif" }}
          >
            Curated for Her
          </p>
          <h2
            className="text-4xl lg:text-5xl uppercase tracking-[0.15em] text-foreground"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Women
          </h2>
          <div
            className="mt-5"
            style={{ width: "50px", height: "1px", background: "#c9a84c" }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {women.map((p) => (
            <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div style={{ height: "1px", background: "linear-gradient(to right, transparent, #c9a84c, transparent)" }} />
      </div>

      {/* Men's Section */}
      <section id="men" className="py-24 px-6 lg:px-10 max-w-7xl mx-auto">
        <div className="flex flex-col items-center text-center mb-16">
          <p
            className="text-xs tracking-[0.4em] uppercase mb-4"
            style={{ color: "#c9a84c", fontFamily: "var(--font-cormorant), serif" }}
          >
            Crafted for Him
          </p>
          <h2
            className="text-4xl lg:text-5xl uppercase tracking-[0.15em] text-foreground"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Men
          </h2>
          <div
            className="mt-5"
            style={{ width: "50px", height: "1px", background: "#c9a84c" }}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto lg:max-w-none lg:grid-cols-2">
          {men.map((p) => (
            <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
          ))}
        </div>
      </section>
    </>
  );
}
