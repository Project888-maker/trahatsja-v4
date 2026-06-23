export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Hero video — MUST be first child */}
      <video
        src="https://v3b.fal.media/files/b/0a9f8095/cXZleUdBFbORRaaBHs-U1_output.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />

      {/* Dark gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(8,8,8,0.3) 0%, rgba(8,8,8,0.1) 40%, rgba(8,8,8,0.55) 100%)",
        }}
      />

      {/* Gold corner accents */}
      <span
        className="absolute top-24 left-10 w-16 h-px hidden lg:block"
        style={{ background: "rgba(201,168,76,0.5)" }}
      />
      <span
        className="absolute top-24 left-10 w-px h-16 hidden lg:block"
        style={{ background: "rgba(201,168,76,0.5)" }}
      />
      <span
        className="absolute top-24 right-10 w-16 h-px hidden lg:block"
        style={{ background: "rgba(201,168,76,0.5)" }}
      />
      <span
        className="absolute top-24 right-10 w-px h-16 hidden lg:block"
        style={{ background: "rgba(201,168,76,0.5)" }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 flex flex-col items-center">
        {/* Overline */}
        <p
          className="fade-in-up text-xs tracking-[0.4em] uppercase mb-6"
          style={{ color: "#c9a84c", fontFamily: "var(--font-cormorant), serif" }}
        >
          The New Collection
        </p>

        {/* Brand name */}
        <h1
          className="fade-in-up-delay font-serif uppercase tracking-[0.25em] text-foreground leading-none mb-6"
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "clamp(3.5rem, 10vw, 9rem)",
            textShadow: "0 2px 40px rgba(0,0,0,0.6)",
          }}
        >
          TRAHATSJA
        </h1>

        {/* Gold rule */}
        <div
          className="fade-in-up-delay-2 mb-6"
          style={{ width: "80px", height: "1px", background: "#c9a84c" }}
        />

        {/* Tagline */}
        <p
          className="fade-in-up-delay-2 text-foreground/90 tracking-[0.18em] uppercase"
          style={{
            fontFamily: "var(--font-playfair), serif",
            fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
            fontStyle: "italic",
          }}
        >
          Wear Your Confidence
        </p>

        {/* CTA buttons */}
        <div className="fade-in-up-delay-3 flex flex-col sm:flex-row gap-4 mt-12">
          <a
            href="#women"
            className="px-10 py-3.5 text-xs tracking-[0.3em] uppercase transition-all duration-300 text-background"
            style={{
              background: "#c9a84c",
              fontFamily: "var(--font-cormorant), serif",
              letterSpacing: "0.25em",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#e2c47a";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#c9a84c";
            }}
          >
            Shop Women
          </a>
          <a
            href="#men"
            className="px-10 py-3.5 text-xs tracking-[0.3em] uppercase transition-all duration-300 text-foreground"
            style={{
              border: "1px solid rgba(201,168,76,0.6)",
              fontFamily: "var(--font-cormorant), serif",
              letterSpacing: "0.25em",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "#c9a84c";
              (e.currentTarget as HTMLAnchorElement).style.color = "#c9a84c";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(201,168,76,0.6)";
              (e.currentTarget as HTMLAnchorElement).style.color = "#f5f0e8";
            }}
          >
            Shop Men
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 fade-in-up-delay-3">
        <span
          className="text-[9px] tracking-[0.35em] uppercase"
          style={{ color: "rgba(201,168,76,0.7)", fontFamily: "var(--font-cormorant), serif" }}
        >
          Scroll
        </span>
        <div
          className="w-px h-10"
          style={{
            background: "linear-gradient(to bottom, rgba(201,168,76,0.7), transparent)",
          }}
        />
      </div>
    </section>
  );
}
