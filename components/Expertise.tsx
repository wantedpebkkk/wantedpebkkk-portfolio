"use client";

import { motion } from "framer-motion";
import { expertise } from "@/data";
import Section, { containerVariants, itemVariants } from "./Section";

export default function Expertise() {
  return (
    <Section
      id="expertise"
      label="Expertise"
      title="What I Do"
      subtitle="A focused set of skills refined over 3+ years of hands-on community management."
      className="bg-[var(--bg-card)]"
    >
      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
      >
        {expertise.map((item, i) => (
          <motion.li
            key={item}
            variants={itemVariants}
            custom={i}
            className="card rounded-xl p-5 flex items-center gap-4"
          >
            <span className="flex-shrink-0 w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center text-[var(--accent-light)]">
              <CheckIcon />
            </span>
            <span className="font-semibold text-[var(--fg)]">{item}</span>
          </motion.li>
        ))}
      </motion.ul>
    </Section>
  );
}

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}
