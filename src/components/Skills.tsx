"use client";

import { motion } from "framer-motion";
import {
  ClipboardCheck,
  Radar,
  Cloud,
  GitBranch,
  Users,
  Hexagon,
  Award,
} from "lucide-react";

const skillCategories = [
  {
    title: "Compliance & Frameworks",
    icon: ClipboardCheck,
    skills: [
      "NIST SP 800-53 / 800-171",
      "FedRAMP",
      "IRS Publication 1075",
      "DISA STIG",
      "NIST CSF",
      "Zero Trust Architecture",
    ],
  },
  {
    title: "Security Tools",
    icon: Radar,
    skills: [
      "Tenable",
      "Qualys",
      "AquaSec",
      "Zscaler",
      "ADAudit Plus",
      "DBProtect",
      "CrowdStrike",
      "Microsoft Defender",
      "Splunk",
      "CyberArk",
      "SentinelOne",
      "OneTrust",
      "BitSight",
      "Microsoft Threat Modeling Tool",
    ],
  },
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    skills: [
      "Amazon AWS",
      "Microsoft Azure",
      "VMware",
      "Citrix",
      "Active Directory",
      "Databricks",
    ],
  },
  {
    title: "DevSecOps & CI/CD",
    icon: GitBranch,
    skills: [
      "Jenkins",
      "Bitbucket",
      "GitHub",
      "GitLab",
      "SonarQube",
      "Docker",
      "Ansible",
      "Terraform",
      "OWASP",
    ],
  },
  {
    title: "Collaboration & ITSM",
    icon: Users,
    skills: [
      "Microsoft Office 365",
      "Jira",
      "Confluence",
      "ServiceNow",
      "Grafana",
      "OSTicket",
      "CSAM",
    ],
  },
  {
    title: "Web3 & Blockchain",
    icon: Hexagon,
    skills: [
      "Solidity",
      "Hardhat",
      "Foundry",
      "Slither",
      "Mythril",
      "Ethers.js",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative border-t border-white/5 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="mono-label mb-4 block">Skills</span>
          <h2 className="font-[family-name:var(--font-outfit)] text-3xl font-bold text-foreground md:text-5xl">
            Tools &amp; <span className="text-gradient">Technologies</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            The stack I use to secure, assess, and automate across cloud and
            enterprise environments.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => {
            const isWeb3 = category.title === "Web3 & Blockchain";
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`glass-card p-6 ${
                  isWeb3 ? "border-t-2 border-secondary/40" : ""
                }`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                      isWeb3 ? "bg-secondary/10" : "bg-primary/10"
                    }`}
                  >
                    <category.icon
                      className={`h-4 w-4 ${
                        isWeb3 ? "text-secondary" : "text-primary"
                      }`}
                    />
                  </div>
                  <h3
                    className={`font-[family-name:var(--font-space-grotesk)] text-sm font-semibold tracking-wide uppercase ${
                      isWeb3 ? "text-secondary" : "text-primary"
                    }`}
                  >
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={
                        isWeb3
                          ? "rounded-full border border-secondary/20 bg-secondary/10 px-3 py-1 text-xs font-medium text-secondary transition-all hover:border-secondary/40 hover:bg-secondary/20"
                          : "skill-badge"
                      }
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Certifications trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2">
            <Award className="h-4 w-4 text-primary" />
            <p className="mono-label">Certifications</p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted">
            {[
              "AWS Security Specialty",
              "CCSK",
              "AWS Solutions Architect",
              "AWS Developer Associate",
              "Azure Security Engineer",
              "CISM",
              "CISA",
              "CRISC",
              "CASP+ CE",
              "CySA+",
              "Security+ CE",
              "PenTest+",
              "Network+",
              "Project+",
              "LPI Linux Essentials",
              "Zscaler Zero Trust",
              "CyberArk Trustee",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
