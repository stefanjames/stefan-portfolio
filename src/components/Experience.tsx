"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  ShieldCheck,
  GitBranch,
  ClipboardCheck,
  Shield,
  Lock,
  Server,
} from "lucide-react";

const experiences = [
  {
    date: "Aug 2021 – Present",
    title: "Security Consultant & Cloud Security Engineer",
    company: "James Consulting Group, LLC",
    icon: Briefcase,
    clients: [
      "IRS",
      "USDA",
      "HHS",
      "NIH",
      "SEC",
      "VA",
      "USPTO",
      "USCIS",
      "DHCF",
      "Prince George's County",
      "State of Maryland",
    ],
    bullets: [
      "Directed security control assessments for IRS and NIH systems, validating compliance with NIST 800-53, FedRAMP, HIPAA, and IRS Pub 1075, securing multiple ATOs across hybrid AWS/on-prem environments.",
      "Performed AWS cloud security assessments, reviewing IAM, encryption, logging, and networking; authored SSPs, POA&Ms, SARs, and CAPs supporting ATO packages.",
      "Administered AWS Security Hub and GuardDuty, maintaining 90%+ compliance and prioritizing remediation timelines (critical <14 days).",
      "Automated POA&M creation, evidence reviews, and audit reporting using Generative AI (OpenAI, Claude), cutting audit prep time by 50%.",
      "Integrated Jenkins with SonarQube (SAST/DAST) in CI/CD pipelines, blocking 600+ vulnerabilities pre-production.",
    ],
    tags: ["RMF", "NIST 800-53", "FedRAMP", "AWS", "DevSecOps", "AI Automation"],
  },
  {
    date: "Sept 2020 – Aug 2021",
    title: "Sr. Cyber Security Engineer",
    company: "Infor, Inc",
    icon: ShieldCheck,
    subtitle: "Infor Government Solutions (IGS)",
    bullets: [
      "Conducted vulnerability assessments using Nessus, Qualys, DBProtect, and AquaSec across government customer systems, networks, and applications.",
      "Executed a cost-optimization initiative implementing Nessus Manager instead of DBProtect, achieving $204K in savings.",
      "Performed security control assessments, conducted interviews, reviewed documentation, and validated compliance with NIST controls.",
      "Generated Security Assessment Reports (SARs) documenting findings, vulnerabilities, and residual risks in compliance with NIST guidelines.",
    ],
    tags: ["Vuln Mgmt", "Nessus", "Qualys", "SCA", "NIST", "FedRAMP"],
  },
  {
    date: "Jan 2020 – Sept 2020",
    title: "DevSecOps Engineer",
    company: "Infor, Inc",
    icon: GitBranch,
    subtitle: "Learning Management Systems (LMS)",
    bullets: [
      "Integrated SonarQube SAST in Jenkins CI/CD pipelines, blocking 600+ critical security defects pre-production.",
      "Developed automated CI/CD build/deployment pipelines using Jenkins, Terraform, and GitLab.",
      "Collaborated with development teams to remediate security issues identified by SonarQube, ensuring secure software delivery.",
      "Conducted security training and awareness programs for development and operations teams.",
      "Assisted in GitLab setup, installation, and migration projects; managed users, groups, projects, upgrades, and patches.",
    ],
    tags: ["Jenkins", "SonarQube", "Terraform", "GitLab", "CI/CD", "SAST"],
  },
  {
    date: "Jan 2018 – Jan 2020",
    title: "Security Control Assessor (FedRAMP, NIST SP)",
    company: "Veterinarian Electronic Assistant (VEA)",
    icon: ClipboardCheck,
    clients: ["NIH (OLAW)"],
    bullets: [
      "Supported security control assessments for information systems using NIST SP 800-53 Rev. 4 security controls.",
      "Developed security authorization documents including SSPs, POA&Ms, Risk Assessments, and security control baselines.",
      "Collaborated with ISSOs to create and manage POA&M items for system vulnerabilities and track remediation to closure.",
    ],
    tags: ["NIST 800-53", "FedRAMP", "SCA", "SSP", "POA&M"],
  },
  {
    date: "Mar 2016 – Jan 2018",
    title: "Sr. Cyber Security Specialist",
    company: "Grove Research Solutions, Inc",
    icon: Shield,
    clients: ["NIH (NHLBI)"],
    bullets: [
      "Analyzed log files from host, network, firewall, and IDS sources to identify threats to network security.",
      "Performed vulnerability scans and continuous monitoring using NIST 800-137 with Nessus across Windows and Linux environments.",
      "Conducted risk and vulnerability assessments of planned and installed information systems to identify protection needs.",
    ],
    tags: ["NIH", "NIST 800-137", "Nessus", "Incident Response", "FISMA"],
  },
  {
    date: "Mar 2014 – Mar 2016",
    title: "Sr. Cyber Security Specialist",
    company: "Medical Science & Computing, LLC",
    icon: Shield,
    clients: ["NIH (NHLBI)"],
    bullets: [
      "Ran ACAS scans, monitored environment for abnormalities, and submitted hardening/patching reports to senior admin.",
      "Implemented firewall blocks on malicious domains, emails, URLs, hashes, and IOCs to prevent enterprise compromise.",
      "Collaborated with ISSO on cybersecurity analysis of organizational policies and procedures for compliance.",
    ],
    tags: ["ACAS", "Active Directory", "Firewall", "NIH", "Compliance"],
  },
  {
    date: "Oct 2013 – Mar 2014",
    title: "Information Security Specialist",
    company: "Collabera, Inc",
    icon: Lock,
    clients: ["USPTO"],
    bullets: [
      "Monitored SIEM and logging environments with Splunk for security events, threats, and intrusions.",
      "Performed security evaluations, audits, and server logging reviews to verify secure operations.",
      "Conducted security assessments to determine effectiveness and compliance of implemented security controls.",
    ],
    tags: ["Splunk", "SIEM", "USPTO", "Security Assessments"],
  },
  {
    date: "Aug 2007 – Aug 2013",
    title: "IT Specialist",
    company: "U.S. Department of Agriculture",
    icon: Server,
    bullets: [
      "Implemented a custom web application converting hard copy personnel folders to electronic personnel folders (e-OPF).",
      "Managed user accounts, permissions, and access rights; enforced security policies and authentication controls.",
      "Deployed server and OS patching, maintained IT asset inventory, and ensured compliance with licensing agreements.",
    ],
    tags: ["USDA", "System Admin", "Access Management", "FISMA"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative border-t border-white/5 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="mono-label mb-4 block">Experience</span>
          <h2 className="font-[family-name:var(--font-outfit)] text-3xl font-bold text-foreground md:text-5xl">
            Career <span className="text-gradient">Timeline</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted">
            16+ years delivering measurable security impact across federal
            agencies, healthcare, and private sector.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mt-16">
          {/* Vertical line */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-primary/30 to-transparent md:left-1/2 md:-ml-px" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.title + exp.company}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className={`relative flex flex-col gap-4 pl-8 md:w-1/2 md:pl-0 ${
                  i % 2 === 0
                    ? "md:pr-12 md:text-right"
                    : "md:ml-auto md:pl-12 md:text-left"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute top-1 h-3 w-3 rounded-full border-2 border-primary bg-background ${
                    i % 2 === 0
                      ? "left-[-6px] md:left-auto md:right-[-6px]"
                      : "left-[-6px] md:left-[-6px]"
                  }`}
                />

                <span className="font-[family-name:var(--font-space-grotesk)] text-xs tracking-wider text-primary uppercase">
                  {exp.date}
                </span>

                <div className="glass-card p-6 text-left">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <exp.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-[family-name:var(--font-outfit)] text-lg font-semibold text-foreground">
                        {exp.title}
                      </h3>
                      <p className="mt-1 font-[family-name:var(--font-space-grotesk)] text-sm text-primary">
                        {exp.company}
                      </p>
                      {exp.subtitle && (
                        <p className="text-xs text-muted italic">{exp.subtitle}</p>
                      )}
                      {exp.clients && (
                        <p className="mt-1 text-xs text-muted">
                          Clients: {exp.clients.join(", ")}
                        </p>
                      )}
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {exp.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="text-sm leading-relaxed text-muted"
                      >
                        <span className="mr-2 text-primary">&bull;</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
