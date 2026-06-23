import { Instagram, Youtube } from "lucide-react";

export default function Footer() {
  const shopLinks = ["Women", "Men", "New Arrivals", "Sale"];
  const helpLinks = ["Sizing Guide", "Shipping & Returns", "Care Instructions", "Contact Us"];
  const legalLinks = ["Privacy Policy", "Terms & Conditions", "Cookie Policy"];

  return (
    <footer
      style={{
        background: "#060606",
        borderTop: "1px solid #1a1a1a",
      }}
    >
      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="lg:col-span-1 flex flex-col gap-5">
          <span
            className="text-xl tracking-[0.35em] uppercase"
            style={{ fontFamily: "var(--font-playfair), serif", color: "#c9a84c" }}
          >
            TRAHATSJA
          </span>
          <p
            className="text-sm leading-relaxed text-foreground/50"
            style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1rem" }}
          >
            Dark luxury lingerie and underwear crafted for those who demand beauty in every layer.
          </p>
          {/* Social */}
          <div className="flex items-center gap-4 mt-2">
            {[
              { icon: Instagram, label: "Instagram" },
              { icon: Youtube, label: "YouTube" },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center transition-all duration-300"
                style={{
                  border: "1px solid #2a2a2a",
                  color: "#f5f0e8",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#c9a84c";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#c9a84c";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#2a2a2a";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#f5f0e8";
                }}
              >
                <Icon size={15} strokeWidth={1.5} />
              </a>
            ))}
            {/* TikTok SVG (lucide doesn't include it) */}
            <a
              href="#"
              aria-label="TikTok"
              className="w-9 h-9 flex items-center justify-center transition-all duration-300"
              style={{ border: "1px solid #2a2a2a", color: "#f5f0e8" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#c9a84c";
                (e.currentTarget as HTMLAnchorElement).style.color = "#c9a84c";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#2a2a2a";
                (e.currentTarget as HTMLAnchorElement).style.color = "#f5f0e8";
              }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.14a8.26 8.26 0 004.84 1.55V7.25a4.85 4.85 0 01-1.07-.56z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Shop */}
        <div className="flex flex-col gap-5">
          <h3
            className="text-xs tracking-[0.3em] uppercase text-foreground/60"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            Shop
          </h3>
          <ul className="flex flex-col gap-3">
            {shopLinks.map((l) => (
              <li key={l}>
                <a
                  href="#"
                  className="link-gold text-sm text-foreground/70 hover:text-gold transition-colors duration-300"
                  style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1rem" }}
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Help */}
        <div className="flex flex-col gap-5">
          <h3
            className="text-xs tracking-[0.3em] uppercase text-foreground/60"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            Help
          </h3>
          <ul className="flex flex-col gap-3">
            {helpLinks.map((l) => (
              <li key={l}>
                <a
                  href="#"
                  className="link-gold text-sm text-foreground/70 hover:text-gold transition-colors duration-300"
                  style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1rem" }}
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-5">
          <h3
            className="text-xs tracking-[0.3em] uppercase text-foreground/60"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            Contact
          </h3>
          <div className="flex flex-col gap-3">
            {[
              { label: "Email", value: "hello@trahatsja.com" },
              { label: "Phone", value: "+44 20 7946 0000" },
              { label: "Address", value: "14 Mayfair Lane\nLondon W1K 1AA" },
            ].map((c) => (
              <div key={c.label} className="flex flex-col gap-0.5">
                <span
                  className="text-xs tracking-[0.2em] uppercase"
                  style={{ color: "rgba(201,168,76,0.6)", fontFamily: "var(--font-cormorant), serif" }}
                >
                  {c.label}
                </span>
                <span
                  className="text-sm text-foreground/60 whitespace-pre-line"
                  style={{ fontFamily: "var(--font-cormorant), serif", fontSize: "1rem" }}
                >
                  {c.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{ borderTop: "1px solid #1a1a1a" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p
            className="text-xs text-foreground/30 tracking-wide"
            style={{ fontFamily: "var(--font-cormorant), serif" }}
          >
            &copy; {new Date().getFullYear()} TRAHATSJA. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((l) => (
              <a
                key={l}
                href="#"
                className="text-xs text-foreground/30 hover:text-foreground/60 transition-colors duration-300 tracking-wide"
                style={{ fontFamily: "var(--font-cormorant), serif" }}
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
