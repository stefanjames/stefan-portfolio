"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, ArrowRight, MapPin } from "lucide-react";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/stefanjames",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/stefan-james/",
    icon: Linkedin,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="noise-overlay relative border-t border-white/5 px-6 py-24 md:py-32">
      {/* Decorative orbs */}
      <div className="pointer-events-none absolute left-1/3 top-1/4 h-48 w-48 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/3 right-1/4 h-32 w-32 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mono-label mb-4 block">Contact</span>
          <h2 className="font-[family-name:var(--font-outfit)] text-3xl font-bold text-foreground md:text-5xl">
            Ready to <span className="text-gradient">Connect</span>?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted">
            Whether you&apos;re looking for a Security Consultant, need a cloud
            security assessment, or want to collaborate — I&apos;d love to hear
            from you.
          </p>

          {/* Location */}
          <div className="mt-6 inline-flex items-center gap-2 text-sm text-muted">
            <MapPin className="h-4 w-4 text-primary" />
            Bowie, MD &bull; Washington DC Metropolitan Area
          </div>
        </motion.div>

        {/* Mission block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card mx-auto mt-12 max-w-2xl border-t-2 border-primary/50 p-8"
        >
          <h3 className="font-[family-name:var(--font-outfit)] text-xl font-bold text-foreground">
            My Mission
          </h3>
          <p className="mt-4 text-muted italic">
            &ldquo;To bring the maturity, rigor, and process of enterprise
            cybersecurity to every organization — enabling teams to move fast
            without compromising their security posture.&rdquo;
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12"
        >
          <a
            href="mailto:stefan@stefanjames.io"
            className="btn-glow inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-lg font-semibold text-background transition-all duration-300 hover:bg-primary-hover hover:shadow-[0_0_25px_rgba(6,182,212,0.6)]"
          >
            <Mail className="h-5 w-5" />
            stefan@stefanjames.io
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex items-center justify-center gap-6"
        >
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-sm text-muted transition-colors hover:text-primary"
              aria-label={social.label}
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 transition-colors group-hover:bg-primary/10">
                <social.icon className="h-4 w-4" />
              </div>
              {social.label}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
