"use client";

import { motion } from "framer-motion";
import { philosophy } from "@/data";
import Section from "./Section";

export default function Philosophy() {
  return (
    <Section
      id="philosophy"
      label="Work Philosophy"
      title="How I Operate"
      className="bg-[var(--bg-card)]"
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="relative max-w-3xl"
      >
        {/* Decorative quote mark */}
        <span className="absolute -top-6 -left-4 text-7xl text-[var(--accent)] opacity-20 font-serif leading-none select-none">&ldquo;</span>

        <h3 className="text-2xl sm:text-3xl font-extrabold gradient-text mb-5">
          {philosophy.headline}
        </h3>
        <p className="text-lg text-[var(--fg-muted)] leading-relaxed">
          {philosophy.body}
        </p>

        {/* Accent bar */}
        <div className="mt-8 h-1 w-24 rounded-full bg-gradient-to-r from-[var(--accent)] to-blue-500 opacity-70" />
      </motion.div>
    </Section>
  );
}
