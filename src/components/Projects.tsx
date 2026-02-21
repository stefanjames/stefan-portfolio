"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ProjectCard, { Project } from "./ProjectCard";

const projects: Project[] = [
  {
    title: "AWS Cloud Security Assessment",
    description:
      "End-to-end AWS cloud security assessment aligned with NIST 800-53, HIPAA, and IRS Pub 1075 frameworks. Includes audit checklist, remediation roadmap, and sample security report deliverable.",
    tags: ["AWS", "NIST 800-53", "HIPAA", "IRS 1075"],
    github: "https://github.com/stefanjames/aws-cloud-security-assessment",
  },
  {
    title: "AWS Lambda Inactive IAM Users",
    description:
      "Automated Lambda function that detects and optionally disables IAM users inactive for 90+ days. Enforces least-privilege hygiene across AWS accounts.",
    tags: ["AWS Lambda", "IAM", "Python", "Automation"],
    github: "https://github.com/stefanjames/aws-lambda-inactive-iam-users",
  },
  {
    title: "Pharma Chain — Blockchain Supply Chain DApp",
    description:
      "Web3-enabled pharmaceutical supply chain tracking application. Conducted a comprehensive security audit of Solidity contracts, identifying access control vulnerabilities and publishing a structured audit report aligned with SWC Registry standards.",
    tags: ["Solidity", "React", "TypeScript", "Hardhat"],
    github: "https://github.com/stefanjames/secure-pharma-tracker",
  },
  {
    title: "ChainTix — Event Ticketing DApp",
    description:
      "Decentralized event ticketing platform on Ethereum. Create, purchase, transfer, and refund tickets on-chain. 77 Foundry tests, 100% line coverage, full SWC Registry audit, and pull-over-push refund pattern.",
    tags: ["Solidity", "Foundry", "React", "ethers.js"],
    github: "https://github.com/stefanjames/event-ticketing-dapp",
  },
  {
    title: "Smart Contract Security Audit Portfolio",
    description:
      "Public portfolio documenting smart contract security assessments and vulnerability findings. Combines manual code review with automated analysis using Hardhat, Foundry, and Slither.",
    tags: ["Solidity", "Foundry", "Slither", "Security"],
    github: "https://github.com/stefanjames/security-audit-portfolio",
  },
  {
    title: "SonarQube CI/CD Integration",
    description:
      "Jenkins pipeline integration with SonarQube SAST/DAST tooling. Blocked 600+ critical security defects pre-production and enforced DevSecOps compliance across build pipelines.",
    tags: ["Jenkins", "SonarQube", "DevSecOps", "CI/CD"],
    github: "https://github.com/stefanjames/sonarqube-integration",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative border-t border-white/5 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mono-label mb-4 block">Projects</span>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="font-[family-name:var(--font-outfit)] text-3xl font-bold text-foreground md:text-5xl">
                Things I&apos;ve <span className="text-gradient">Built</span>
              </h2>
              <p className="mt-4 max-w-xl text-muted">
                Security assessments, cloud automation, DevSecOps tooling, and
                Web3 security research.
              </p>
            </div>
            <a
              href="https://github.com/stefanjames"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary-hover"
            >
              View All on GitHub
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.title}
              project={project}
              delay={i * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
