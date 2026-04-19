"use client";

import { motion } from "framer-motion";
import { tools } from "@/data";
import Section, { containerVariants, itemVariants } from "./Section";

export default function Tools() {
  return (
    <Section
      id="tools"
      label="Tools & Bots"
      title="My Tech Stack"
      subtitle="The bots and tools I rely on to keep communities moderated, secure, and automated."
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {tools.map((tool) => (
          <motion.div
            key={tool.name}
            variants={itemVariants}
            className="card rounded-2xl p-6 space-y-3"
          >
            <span className="text-3xl">{tool.icon}</span>
            <h3 className="font-bold text-[var(--fg)]">{tool.name}</h3>
            <p className="text-sm text-[var(--fg-muted)]">{tool.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
