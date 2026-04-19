"use client";

import { siteConfig } from "@/data";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--border)] py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[var(--fg-muted)]">
        <p>
          &copy; {year}{" "}
          <span className="font-semibold text-[var(--fg)]">{siteConfig.name}</span>{" "}
          — All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a
            href={siteConfig.contact.serverInvite}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent-light)] transition-colors"
          >
            Discord
          </a>
          <a
            href={`https://instagram.com/${siteConfig.contact.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent-light)] transition-colors"
          >
            Instagram
          </a>
          <a
            href={`https://youtube.com/@${siteConfig.contact.youtube}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent-light)] transition-colors"
          >
            YouTube
          </a>
        </div>
      </div>
    </footer>
  );
}
