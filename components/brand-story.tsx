export default function BrandStory() {
  return (
    <section
      id="story"
      className="py-28 px-6 lg:px-10"
      style={{ background: "#0a0a0a" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left — text */}
        <div className="flex flex-col">
          <p
            className="text-xs tracking-[0.4em] uppercase mb-6"
            style={{ color: "#c9a84c", fontFamily: "var(--font-cormorant), serif" }}
          >
            Our Story
          </p>
          <h2
            className="text-4xl lg:text-5xl uppercase tracking-[0.1em] text-foreground leading-tight mb-8"
            style={{ fontFamily: "var(--font-playfair), serif" }}
          >
            Luxury
            <br />
            <span style={{ color: "#c9a84c" }}>Without</span>
            <br />
            Compromise
          </h2>

          <div
            className="mb-8"
            style={{ width: "50px", height: "1px", background: "#c9a84c" }}
          />

          <p
            className="text-base leading-relaxed text-foreground/70 mb-5"
            style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.1rem" }}
          >
            TRAHATSJA was born from a singular obsession: that what lies closest to the skin
            should be the most considered garment you own. Founded in the shadows of
            London&apos;s most secretive ateliers, we weave together heritage craftsmanship
            and unapologetic sensuality.
          </p>
          <p
            className="text-base leading-relaxed text-foreground/60"
            style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1.1rem" }}
          >
            Every thread is chosen with intention. Every cut sculpted to celebrate the
            body in its truest form. We do not make underwear — we craft armour
            for those bold enough to wear their confidence bare.
          </p>

          <div className="grid grid-cols-3 gap-6 mt-12">
            {[
              { num: "2019", label: "Founded" },
              { num: "14+", label: "Fabrics" },
              { num: "100%", label: "Ethical" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col gap-1">
                <span
                  className="text-2xl tracking-widest"
                  style={{ color: "#c9a84c", fontFamily: "var(--font-playfair), serif" }}
                >
                  {s.num}
                </span>
                <span
                  className="text-xs tracking-[0.2em] uppercase text-foreground/50"
                  style={{ fontFamily: "var(--font-cormorant), serif" }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — stacked image panels */}
        <div className="relative grid grid-cols-2 gap-4 h-[520px]">
          {/* Tall left panel */}
          <div
            className="row-span-2 overflow-hidden"
            style={{ background: "#111" }}
          >
            <img src="HERMES_PRODUCT_IMAGE_URL" alt="product" className="w-full h-full object-cover" />
          </div>

          {/* Top right */}
          <div
            className="overflow-hidden"
            style={{ background: "#111" }}
          >
            <img src="HERMES_PRODUCT_IMAGE_URL" alt="product" className="w-full h-full object-cover" />
          </div>

          {/* Bottom right */}
          <div
            className="overflow-hidden"
            style={{ background: "#111" }}
          >
            <img src="HERMES_PRODUCT_IMAGE_URL" alt="product" className="w-full h-full object-cover" />
          </div>

          {/* Gold accent corner */}
          <div
            className="absolute -bottom-4 -right-4 w-12 h-12 hidden lg:block"
            style={{
              border: "1px solid rgba(201,168,76,0.4)",
              borderTop: "none",
              borderLeft: "none",
            }}
          />
        </div>
      </div>

      {/* Quote band */}
      <div
        className="max-w-3xl mx-auto text-center mt-24 px-6"
      >
        <div
          className="mb-6"
          style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(201,168,76,0.4), transparent)" }}
        />
        <blockquote
          className="text-xl lg:text-2xl leading-relaxed text-foreground/70"
          style={{ fontFamily: "var(--font-playfair), serif", fontStyle: "italic" }}
        >
          &ldquo;Elegance is not about being noticed, it&apos;s about being remembered.&rdquo;
        </blockquote>
        <p
          className="mt-4 text-xs tracking-[0.3em] uppercase"
          style={{ color: "#c9a84c", fontFamily: "var(--font-cormorant), serif" }}
        >
          — The TRAHATSJA Manifesto
        </p>
        <div
          className="mt-6"
          style={{ height: "1px", background: "linear-gradient(to right, transparent, rgba(201,168,76,0.4), transparent)" }}
        />
      </div>
    </section>
  );
}
