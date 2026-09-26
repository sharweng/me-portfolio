/**
 * ============================================================
 *  PORTFOLIO DATA — edit this file to update your portfolio
 * ============================================================
 */

const PORTFOLIO = {

  /* ── Personal info ──────────────────────────────────────── */
  name: "Sharwin John Marbella",
  title: "Software Engineer & Open-Source Contributor",
  location: "Taguig, PH",
  bio: "I build thoughtful software that respects users. Currently focused on systems programming, developer tooling, and the occasional weekend distro hack.",
  avatar: "https://res.cloudinary.com/dcug5cq7c/image/upload/v1790440300/240322-DSC08307_2_g1keuf.jpg", // GitHub profile pic — change to any image URL

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
      description: "This is a website I built to gain knowledge for virtual machines, Windows OS installation, & etc. ",
      tags: ["HTML", "CSS"],
      url: "https://github.com/sharweng/sjmOSwebsite",
      website: "https://sharweng.github.io/sjmOSwebsite",
      stars: "0",
      status: "active", // active | archived | wip
    },
    {
      name: "multimedia",
      description: "A website that contains my journey to learn Blender and rotoscope for animation.",
      tags: ["HTML", "JavaScript", "CSS"],
      url: "https://github.com/sharweng/multimedia",
      website: "https://sharweng.github.io/multimedia",
      stars: "0",
      status: "active",
    },
    {
      name: "tupGradeCalc",
      description: "A simple calculator to calculate grades.",
      tags: ["HTML"],
      url: "https://github.com/sharweng/tupGradeCalc",
      website: "https://sharweng.github.io/tupGradeCalc",
      stars: "0",
      status: "active",
    },
    {
      name: "Feed-A-Stray",
      description: "This is a sample website idea for feeding stray cats and dogs",
      tags: ["HTML"],
      url: "https://github.com/sharweng/Feed-A-Stray",
      website: "https://sharweng.github.io/Feed-A-Stray",
      stars: "0",
      status: "active",
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
