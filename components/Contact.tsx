"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/data";
import Section, { containerVariants, itemVariants } from "./Section";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={copy}
      aria-label="Copy to clipboard"
      className="ml-2 p-1.5 rounded-md text-[var(--fg-muted)] hover:text-[var(--accent-light)] hover:bg-[var(--accent)]/10 transition-all"
    >
      {copied ? <CheckIcon /> : <CopyIcon />}
    </button>
  );
}

export default function Contact() {
  const c = siteConfig.contact;
  return (
    <Section
      id="contact"
      label="Contact"
      title={<>Get In <span className="gradient-text">Touch</span></>}
      subtitle="Reach out on Discord, email, or social — I'm always around."
      className="bg-[var(--bg-card)]"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={containerVariants}
        className="grid sm:grid-cols-2 gap-5 max-w-3xl"
      >
        {/* Discord */}
        <motion.div variants={itemVariants} className="card rounded-2xl p-5 space-y-2">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--fg-muted)]">Discord</p>
          <div className="flex items-center">
            <span className="font-semibold text-[var(--fg)]">{c.discord}</span>
            <CopyButton text={c.discord} />
          </div>
          <a
            href={`https://discord.com/users/${c.discord}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--accent-light)] hover:underline"
          >
            Open profile <ArrowIcon />
          </a>
        </motion.div>

        {/* Email */}
        <motion.div variants={itemVariants} className="card rounded-2xl p-5 space-y-2">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--fg-muted)]">Email</p>
          <div className="flex items-center">
            <span className="font-semibold text-[var(--fg)]">{c.email}</span>
            <CopyButton text={c.email} />
          </div>
          <a
            href={`mailto:${c.email}`}
            className="inline-flex items-center gap-1.5 text-sm text-[var(--accent-light)] hover:underline"
          >
            Send email <ArrowIcon />
          </a>
        </motion.div>

        {/* Discord Server */}
        <motion.div variants={itemVariants} className="card rounded-2xl p-5 space-y-2">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--fg-muted)]">Discord Server</p>
          <p className="font-semibold text-[var(--fg)] truncate">{c.serverInvite}</p>
          <a
            href={c.serverInvite}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-[var(--accent-light)] hover:underline"
          >
            Join server <ArrowIcon />
          </a>
        </motion.div>

        {/* Social */}
        <motion.div variants={itemVariants} className="card rounded-2xl p-5 space-y-3">
          <p className="text-xs font-bold uppercase tracking-widest text-[var(--fg-muted)]">Social</p>
          <a
            href={`https://instagram.com/${c.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-[var(--fg)] hover:text-[var(--accent-light)] transition-colors"
          >
            <InstagramIcon />
            @{c.instagram}
          </a>
          <a
            href={`https://youtube.com/@${c.youtube}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-[var(--fg)] hover:text-[var(--accent-light)] transition-colors"
          >
            <YoutubeIcon />
            @{c.youtube}
          </a>
        </motion.div>
      </motion.div>
    </Section>
  );
}

function CopyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-green-400">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
    </svg>
  );
}
