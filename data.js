/**
 * ============================================================
 *  PORTFOLIO DATA — edit this file to update your portfolio
 * ============================================================
 */

const PORTFOLIO = {

  /* ── Personal info ──────────────────────────────────────── */
  name: "Marbella, Sharwin John C.",
  title: "Software Engineer & Open-Source Contributor",
  location: "Taguig, PH",
  bio: "I build thoughtful software that respects users. Currently focused on systems programming, developer tooling, and the occasional weekend distro hack.",
  avatar: "", // URL or leave empty for initials

  /* ── Social / contact links ─────────────────────────────── */
  links: [
    { label: "GitHub", url: "https://github.com/sharweng", icon: "github" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/sharwinjohnmarbella", icon: "linkedin" },
    { label: "Email", url: "mailto:marbellasharwinjohn@gmail.com", icon: "mail" },
    { label: "Blog", url: "https://yourblog.com", icon: "rss" },
  ],

  /* ── Skills / credentials ───────────────────────────────── */
  credentials: [
    {
      category: "Languages",
      items: ["JavaScript", "Python", "Java", "C++", "TypeScript"],
    },
    {
      category: "Tools & Platforms",
      items: ["Linux (Arch)", "VSCode", "MongoDB", "Docker", "Neovim"],
    },
    {
      category: "Currently Exploring",
      items: ["Hyprland", "Wayland compositors", "WASM runtimes", "AI-assisted workflows"],
    },
  ],

  /* ── Projects ───────────────────────────────────────────── */
  projects: [
    {
      name: "sjmOSwebsite",
      description: "This is a website I built to gain knowledge for different Windows OS installation. ",
      tags: ["HTML", "CSS"],
      url: "https://github.com/sharweng/sjmOSwebsite",
      stars: "0",
      status: "active", // active | archived | wip
    },
    {
      name: "multimedia",
      description: "A website that contains my journey to learn Blender and rotoscope for animation.",
      tags: ["HTML", "JavaScript", "CSS"],
      url: "https://github.com/sharweng/multimedia",
      stars: "0",
      status: "active",
    },
    {
      name: "quickshell-bar",
      description: "A minimal, hackable status bar widget built with Quickshell. Keyboard-first, zero mouse required.",
      tags: ["QML", "Quickshell", "Wayland"],
      url: "https://github.com/yourusername/quickshell-bar",
      stars: "312",
      status: "wip",
    },
    {
      name: "pg-replica-watch",
      description: "Monitors PostgreSQL streaming replication lag and fires webhooks when thresholds are breached.",
      tags: ["Go", "PostgreSQL", "Ops"],
      url: "https://github.com/yourusername/pg-replica-watch",
      stars: "205",
      status: "archived",
    },
  ],

  /* ── Writing / posts (optional) ─────────────────────────── */
  posts: [
    {
      title: "Why I switched to Arch (again)",
      url: "https://yourblog.com/arch-again",
      date: "2025-08",
    },
    {
      title: "Composing desktop environments with Quickshell",
      url: "https://yourblog.com/quickshell",
      date: "2025-05",
    },
    {
      title: "Atomic dotfile management in Rust",
      url: "https://yourblog.com/dotfiles-rust",
      date: "2025-02",
    },
  ],
};
