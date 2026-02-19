"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Cloud, Lock, Code, Shield } from "lucide-react";

const capabilities = [
  {
    icon: Cloud,
    title: "Cloud Security",
    subtitle: "AWS & Infrastructure Protection",
  },
  {
    icon: Shield,
    title: "NIST Compliance",
    subtitle: "RMF & 800-53 Standards",
  },
  {
    icon: Code,
    title: "DevSecOps",
    subtitle: "CI/CD Security Integration",
  },
  {
    icon: Lock,
    title: "Threat Models",
    subtitle: "STRIDE & DREAD Analysis",
  },
];

export default function About() {
  return (
    <section id="about" className="relative border-t border-white/5 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Left: Photo card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Decorative bracket */}
            <div className="relative">
              <div className="pointer-events-none absolute -left-4 -top-4 h-16 w-16 rounded-tl-2xl border-l-2 border-t-2 border-primary/30" />

              <div className="glass-card relative aspect-[3/4] w-full max-w-md overflow-hidden">
                {/* Photo */}
                <Image
                  src="/stefan.jpg"
                  alt="Stefan James"
                  fill
                  className="object-cover object-top"
                  priority
                />

                {/* Name overlay at bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 via-background/60 to-transparent p-6 pt-16">
                  <h3 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-foreground">
                    Stefan James
                  </h3>
                  <p className="font-[family-name:var(--font-space-grotesk)] text-sm text-primary">
                    Security Consultant &amp; Cloud Security Engineer
                  </p>
                </div>
              </div>

              {/* Decorative bracket bottom-right */}
              <div className="pointer-events-none absolute -bottom-4 -right-4 h-16 w-16 rounded-br-2xl border-b-2 border-r-2 border-secondary/30" />
            </div>
          </motion.div>

          {/* Right: Bio + capability grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="mono-label mb-4 block">About</span>
            <h2 className="font-[family-name:var(--font-outfit)] text-3xl font-bold text-foreground md:text-5xl">
              Enterprise Security,{" "}
              <span className="text-gradient">
                Cloud Scale
              </span>
            </h2>

            <div className="mt-8 space-y-4">
              <p className="leading-relaxed text-muted">
                I&apos;m a Security Consultant and Cloud Security Engineer with
                16+ years of hands-on experience protecting federal agencies,
                healthcare systems, and enterprise environments. My work spans
                cloud security architecture, NIST RMF compliance, vulnerability
                management, and DevSecOps — with a focus on building security
                programs that actually scale.
              </p>
              <p className="leading-relaxed text-muted">
                With a deep background in{" "}
                <strong className="text-foreground">AWS Cloud Security</strong>,{" "}
                <strong className="text-foreground">NIST RMF</strong>, and{" "}
                <strong className="text-foreground">
                  NIST 800-53 assessments
                </strong>
                , I bring an enterprise-grade mindset to every engagement. I
                don&apos;t just check compliance boxes — I look at the system as
                a whole and build controls that reduce real risk.
              </p>
              <p className="leading-relaxed text-muted">
                Outside of enterprise security, I&apos;m expanding into Web3
                security — applying vulnerability assessment methodology to
                smart contract auditing and decentralized applications.
              </p>
            </div>

            {/* Capability cards — 2x2 grid */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              {capabilities.map((cap, i) => (
                <motion.div
                  key={cap.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  className="glass-card p-4"
                >
                  <div className="mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                    <cap.icon className="h-4 w-4 text-primary" />
                  </div>
                  <h4 className="font-[family-name:var(--font-outfit)] text-sm font-semibold text-foreground">
                    {cap.title}
                  </h4>
                  <p className="mt-1 text-xs text-muted">{cap.subtitle}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
