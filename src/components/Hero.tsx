"use client";

import { motion } from "framer-motion";
import { ArrowRight, FileText, ChevronDown, Award, ShieldCheck, Lock } from "lucide-react";
import TypewriterCard from "./TypewriterCard";

export default function Hero() {
  return (
    <section className="noise-overlay relative flex min-h-[90vh] items-center overflow-hidden px-6">
      {/* Decorative blurred orbs */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-48 w-48 rounded-full bg-secondary/10 blur-3xl" />
      <div className="pointer-events-none absolute right-1/3 top-1/3 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />

      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        {/* Left: Text content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Availability badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="font-[family-name:var(--font-space-grotesk)] text-xs tracking-widest text-primary uppercase">
              Open to Opportunities
            </span>
          </div>

          {/* Greeting heading */}
          <h1 className="font-[family-name:var(--font-outfit)] text-5xl font-bold leading-tight tracking-tight text-foreground md:text-7xl">
            Hello, I&apos;m{" "}
            <span className="text-gradient">Stefan.</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 whitespace-nowrap text-sm text-muted sm:text-base md:text-lg">
            Security Consultant | Cloud Security Engineer | Blockchain Enthusiast
          </p>

          {/* Description — concise, enterprise-focused */}
          <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
            Security professional with 16+ years of experience securing federal
            and enterprise environments. I specialize in cloud security
            architecture, NIST RMF compliance, and building DevSecOps pipelines
            that harden infrastructure without slowing teams down.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="btn-glow inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3 font-semibold text-background transition-all duration-300 hover:bg-primary-hover hover:shadow-[0_0_25px_rgba(6,182,212,0.6)]"
            >
              Get in Touch
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/stefan-james/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/10 px-8 py-3 font-semibold text-foreground transition-all duration-300 hover:border-primary/30 hover:bg-white/5"
            >
              <FileText className="h-4 w-4" />
              View LinkedIn
            </a>
          </div>

          {/* Trust signals */}
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted">
            {[
              { label: "AWS Security Specialty", icon: Award },
              { label: "CISM & CISA Certified", icon: ShieldCheck },
              { label: "Zero Trust Architecture", icon: Lock },
            ].map((item) => (
              <span key={item.label} className="flex items-center gap-2">
                <item.icon className="h-3.5 w-3.5 text-primary" />
                {item.label}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Right: Stats / visual card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="hidden lg:block"
        >
          <TypewriterCard />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-muted transition-colors hover:text-primary"
        aria-label="Scroll to about section"
      >
        <ChevronDown className="h-6 w-6" />
      </a>
    </section>
  );
}
