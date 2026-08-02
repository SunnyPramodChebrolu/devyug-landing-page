"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-14" aria-label="Site footer">
      <div className="sp">
        <div className="border-t mb-12" style={{ borderTopColor: "var(--border-bright)" }} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo mark + tagline */}
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2.5">
              <div className="relative w-4 h-4 shrink-0">
                <div
                  className="absolute inset-0 border rotate-45"
                  style={{ borderColor: "rgba(59,130,246,0.5)" }}
                />
                <div
                  className="absolute inset-[3px] rotate-[22deg]"
                  style={{ backgroundColor: "rgba(37,99,235,0.7)" }}
                />
              </div>
              <span
                className="text-xs font-semibold tracking-[0.18em] text-white uppercase select-none"
                style={{ fontFamily: "var(--font-g)" }}
              >
                DevYug
              </span>
            </div>
            <span className="mono text-[10px]" style={{ color: "var(--fg-dim)" }}>
              Engineering Tomorrow.
            </span>
          </div>

          {/* Navigation */}
          <nav className="flex items-center justify-start md:justify-center gap-6" aria-label="Footer navigation">
            {[
              { label: "About", href: "#about" },
              { label: "Engineering", href: "#engineering" },
              { label: "Tech Stack", href: "#technology" },
              { label: "Values", href: "#values" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="mono text-[9px] tracking-[0.15em] uppercase transition-colors hover:text-white/80"
                style={{ color: "var(--fg-dim)" }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Legal / Social */}
          <div className="flex items-center justify-start md:justify-end gap-6">
            <span className="mono text-[9px]" style={{ color: "var(--fg-dim)" }}>
              © {year} DevYug
            </span>
            <a
              href="https://linkedin.com/company/devyug"
              target="_blank"
              rel="noopener noreferrer"
              className="mono text-[9px] tracking-[0.12em] uppercase transition-colors hover:text-white/80"
              style={{ color: "var(--fg-dim)" }}
              aria-label="DevYug LinkedIn"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
