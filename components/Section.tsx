"use client";

import { motion } from "framer-motion";

interface Props {
  id: string;
  label: string;
  title: React.ReactNode;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Section({ id, label, title, subtitle, children, className = "" }: Props) {
  return (
    <section id={id} className={`py-24 px-4 sm:px-6 ${className}`}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={containerVariants}
          className="mb-12"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block text-xs font-bold uppercase tracking-widest text-[var(--accent-light)] mb-3"
          >
            {label}
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--fg)]"
          >
            {title}
          </motion.h2>
          {subtitle && (
            <motion.p
              variants={itemVariants}
              className="mt-3 text-[var(--fg-muted)] max-w-2xl"
            >
              {subtitle}
            </motion.p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}

export { containerVariants, itemVariants };
