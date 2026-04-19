export const siteConfig = {
  name: "Pebkkk",
  tagline: "Discord Server Manager & Community · Creator Manager",
  location: "Manchester, United Kingdom (UTC +00:00)",
  description:
    "20 years old, multicultural background with roots from Bangladesh, capable of communicating in Hindi and other languages. 3+ years of experience in server management — delivering professionalism, structure, and discipline every step of the way.",
  scaleHighlight: "Managed communities with 350k+ members",
  availability: "24/7 active & responsive",
  contact: {
    discord: "invinciblepebkkk",
    serverInvite: "https://discord.gg/UwrRvvxUCu",
    email: "anontoid71@gmail.com",
    instagram: "invincible_pebkkk",
    youtube: "invinciblepebkkk",
  },
  seo: {
    title: "Pebkkk — Discord Server & Community Manager",
    description:
      "Pebkkk is a Manchester-based Discord Server Manager and Community & Creator Manager with 3+ years experience building structured, professional, and fast-growing communities at scale (350k+ members).",
    ogImage: "/og.png",
    url: "https://pebkkk.vercel.app",
  },
};

export const expertise = [
  "Discord Server Management",
  "Management & Administration",
  "Creator Management",
  "Partnerships & Collaborations",
  "Event Management",
  "Media Marketing",
  "Community Building & Growth",
];

export const strengths = [
  {
    title: "Strong Leadership",
    detail: "Strong leadership and decision-making skills that keep teams aligned and communities thriving.",
  },
  {
    title: "Fairness & Structure",
    detail: "Strict adherence to rules and fairness — every member, every situation, same standard.",
  },
  {
    title: "Communication",
    detail: "High-level communication and negotiation across diverse communities and creator teams.",
  },
  {
    title: "Discord Expertise",
    detail: "Deep understanding of Discord ecosystems — architecture, bots, moderation, culture.",
  },
  {
    title: "Large-Scale Management",
    detail: "Ability to manage large communities efficiently, keeping quality high at any size.",
  },
  {
    title: "Professionalism",
    detail: "Consistent professionalism in all situations — from conflict resolution to partnerships.",
  },
];

export type ExperienceRole = "CEO" | "Manager" | "Management" | "Head Admin" | "Admin" | "Staff";

export interface Experience {
  role: ExperienceRole;
  place: string;
}

export const experience: Experience[] = [
  { role: "CEO", place: "Nova Island" },
  { role: "Manager", place: "Saaz" },
  { role: "Manager", place: "Alif Gaming" },
  { role: "Manager", place: "NaitikPlayz" },
  { role: "Manager", place: "Chichora YT" },
  { role: "Manager", place: "Minevale" },
  { role: "Management", place: "Lpio64" },
  { role: "Head Admin", place: "MinefxPlayz" },
  { role: "Admin", place: "MoonMC" },
  { role: "Admin", place: "RubySMP" },
  { role: "Staff", place: "FireMC" },
  { role: "Staff", place: "Piyush Joshi Gaming" },
  { role: "Staff", place: "Kapes Nation" },
];

export const tools = [
  {
    name: "Wick Bot",
    description: "Advanced moderation & security",
    icon: "🛡️",
  },
  {
    name: "Xieron Bot",
    description: "Anti-nuke & moderation",
    icon: "⚔️",
  },
  {
    name: "Krypton Bot",
    description: "Community utilities & automation",
    icon: "💠",
  },
  {
    name: "Carl-bot",
    description: "Anti-spam & advanced automation",
    icon: "🤖",
  },
  {
    name: "Bot Development",
    description: "Currently learning Discord bot development",
    icon: "🧩",
  },
];

export const philosophy = {
  headline: "Fairness. Discipline. Professionalism.",
  body: "I believe rules exist for a reason — and they apply to everyone equally, no exceptions. Whether it's a staff member or a regular community member, expectations stay consistent. My goal is always to create environments that feel safe, structured, and genuinely worth being part of.",
};

export const goals = [
  "Become a top-level influencer and creator manager",
  "Build a global network of creators, brands, and communities",
  "Help creators grow and achieve their vision at scale",
  "Connect the right brands with the right audiences",
  "Build structured, high-quality communities that stand the test of time",
];
