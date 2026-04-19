"use client";

import { motion } from "framer-motion";
import { strengths } from "@/data";
import Section, { containerVariants, itemVariants } from "./Section";

const icons = ["🎯", "⚖️", "💬", "🔧", "🌐", "🏆"];

export default function Strengths() {
  return (
    <Section
      id="strengths"
      label="Strengths"
      title="Core Strengths"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {strengths.map((s, i) => (
          <motion.div
            key={s.title}
            variants={itemVariants}
            className="card rounded-2xl p-6 space-y-3"
          >
            <span className="text-2xl">{icons[i % icons.length]}</span>
            <h3 className="font-bold text-[var(--fg)]">{s.title}</h3>
            <p className="text-sm text-[var(--fg-muted)] leading-relaxed">{s.detail}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
