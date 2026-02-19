import { Shield, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 sm:grid-cols-3">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="font-[family-name:var(--font-outfit)] font-semibold text-foreground">
                Stefan James
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm text-muted">
              Security Consultant & Cloud Security Engineer delivering
              measurable value across federal, healthcare, and private sector
              engagements.
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="https://github.com/stefanjames"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-muted transition-all hover:bg-primary/10 hover:text-foreground"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/stefan-james/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 text-muted transition-all hover:bg-primary/10 hover:text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-[family-name:var(--font-space-grotesk)] text-xs font-semibold tracking-wide text-primary uppercase">
              Navigation
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {["About", "Projects", "Skills", "Experience", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="transition-colors hover:text-foreground"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-[family-name:var(--font-space-grotesk)] text-xs font-semibold tracking-wide text-primary uppercase">
              Contact
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li>
                <a
                  href="mailto:stefan@stefanjames.io"
                  className="transition-colors hover:text-foreground"
                >
                  stefan@stefanjames.io
                </a>
              </li>
              <li>
                <a
                  href="https://stefanjames.io"
                  className="transition-colors hover:text-foreground"
                >
                  stefanjames.io
                </a>
              </li>
              <li className="text-xs text-muted/60">
                Bowie, MD &bull; Washington DC Metro
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-6 text-xs text-muted sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Stefan James. All rights
            reserved.
          </p>
          <p>Built with Next.js &amp; Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
