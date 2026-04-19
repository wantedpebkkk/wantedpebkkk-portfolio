"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/data";
import Section, { containerVariants, itemVariants } from "./Section";

export default function About() {
  return (
    <Section
      id="about"
      label="About Me"
      title={<>Who is <span className="gradient-text">Pebkkk</span>?</>}
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
        className="grid md:grid-cols-2 gap-8 items-start"
      >
        {/* Left – text */}
        <motion.div variants={itemVariants} className="space-y-4">
          <p className="text-[var(--fg-muted)] leading-relaxed text-lg">
            {siteConfig.description}
          </p>
          <p className="text-[var(--fg-muted)] leading-relaxed">
            I bring a structured, rules-first mindset to everything I do — whether
            it&apos;s moderating a 350k-member server or onboarding a new creator into
            a growing community. I take pride in staying{" "}
            <span className="text-[var(--fg)] font-semibold">
              {siteConfig.availability}
            </span>
            , ensuring operations never slip.
          </p>
        </motion.div>

        {/* Right – stat cards */}
        <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4">
          {[
            { value: "3+", label: "Years experience" },
            { value: "350k+", label: "Members managed" },
            { value: "13+", label: "Communities served" },
            { value: "24/7", label: "Active & responsive" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="card rounded-2xl p-5 text-center"
            >
              <p className="text-3xl font-extrabold gradient-text">{stat.value}</p>
              <p className="text-sm text-[var(--fg-muted)] mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </Section>
  );
}
