"use client";

import { motion } from "framer-motion";
import { goals } from "@/data";
import Section, { containerVariants, itemVariants } from "./Section";

export default function Goals() {
  return (
    <Section
      id="goals"
      label="Goals & Vision"
      title={<>Where I&apos;m <span className="gradient-text">Headed</span></>}
      subtitle="No agency, no shortcuts — just a clear vision built on consistency and craft."
    >
      <motion.ol
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
        className="space-y-4"
      >
        {goals.map((goal, i) => (
          <motion.li
            key={goal}
            variants={itemVariants}
            className="card rounded-xl p-5 flex items-start gap-4"
          >
            <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center text-sm font-bold text-[var(--accent-light)]">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-[var(--fg)] font-medium leading-relaxed">{goal}</span>
          </motion.li>
        ))}
      </motion.ol>
    </Section>
  );
}
