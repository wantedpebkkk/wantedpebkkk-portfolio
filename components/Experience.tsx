"use client";

import { motion } from "framer-motion";
import { experience, type ExperienceRole } from "@/data";
import Section, { containerVariants, itemVariants } from "./Section";

const roleColors: Record<ExperienceRole, string> = {
  CEO: "bg-amber-500/10 text-amber-400 border-amber-400/20",
  Manager: "bg-violet-500/10 text-violet-400 border-violet-400/20",
  Management: "bg-violet-500/10 text-violet-400 border-violet-400/20",
  "Head Admin": "bg-blue-500/10 text-blue-400 border-blue-400/20",
  Admin: "bg-cyan-500/10 text-cyan-400 border-cyan-400/20",
  Staff: "bg-green-500/10 text-green-400 border-green-400/20",
};

export default function Experience() {
  return (
    <Section
      id="experience"
      label="Experience"
      title="Where I've Worked"
      subtitle="A track record of leadership across servers, communities, and creator platforms."
      className="bg-[var(--bg-card)]"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {experience.map((exp) => (
          <motion.div
            key={`${exp.role}-${exp.place}`}
            variants={itemVariants}
            className="card rounded-2xl p-5 flex items-start gap-4"
          >
            {/* Icon */}
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent-light)]">
              <BriefcaseIcon />
            </div>
            {/* Content */}
            <div className="min-w-0">
              <p className="font-bold text-[var(--fg)] truncate">{exp.place}</p>
              <span
                className={`mt-1.5 inline-block px-2.5 py-0.5 rounded-full border text-xs font-semibold ${
                  roleColors[exp.role] ?? "bg-gray-500/10 text-gray-400 border-gray-400/20"
                }`}
              >
                {exp.role}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

function BriefcaseIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}
