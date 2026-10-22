/**
 * ============================================================
 *  PORTFOLIO DATA — edit this file to update your portfolio
 *  After personal info changes, run: node scripts/sync-profile.cjs
 * ============================================================
 */

const PORTFOLIO = {

  /* ── Personal info ──────────────────────────────────────── */
  name: "Sharwin John Marbella",
  title: "Software Engineer & Open-Source Contributor",
  location: "Taguig, PH",
  bio: "I build thoughtful software that respects users. Currently focused on systems programming, developer tooling, and the occasional weekend distro hack.",
  avatar: "https://res.cloudinary.com/dcug5cq7c/image/upload/c_fill,w_320,h_320/f_auto/q_auto/v1790440300/240322-DSC08307_2_g1keuf.jpg", // 320px for a sharp 160px avatar. Run the profile sync script after changing this URL.
  resume: "", // Add a direct link to your resume PDF here, e.g. "/resume.pdf" or a Google Drive URL

  /* ── Social / contact links ─────────────────────────────── */
  links: [
    { label: "GitHub", url: "https://github.com/sharweng", icon: "github" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/sharwinjohnmarbella", icon: "linkedin" },
    { label: "Email", url: "mailto:marbellasharwinjohn@gmail.com", icon: "mail" },
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
      items: ["Hyprland", "Game development", "Game engines", "AI-assisted workflows"],
    },
  ],

  /* Certifications — copy the example for DataCamp or any other issuer.
     Use your actual title/date and public credential URL. image is optional.
     Dates use YYYY-MM; omit unknown fields. No example is published by default. */
  certifications: [
    // {
    //   name: "Your completed course or certification",
    //   issuer: "DataCamp",
    //   date: "2026-10",
    //   url: "https://www.datacamp.com/completed/statement-of-accomplishment/...",
    //   skills: ["Python", "Data Analysis"],
    //   image: "", // Optional small certificate preview URL or assets/certificate.webp
    // },
    {
      name: "SQL Fundamentals",
      issuer: "DataCamp",
      date: "2026-10",
      url: "https://www.datacamp.com/completed/statement-of-accomplishment/track/7f51154cb28356e3793901b9a50daa9e76c26b74",
      skills: ["SQL", "PostgreSQL", "Data Analyis", "Data Manipulation"],
      image: "https://res.cloudinary.com/dcug5cq7c/image/upload/c_limit,w_960/f_auto/q_auto/v1792640640/sql_fundamentals_tvq4o0.png",
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
      demo: "",       // e.g. a Loom/YouTube video URL, or leave empty to hide
      stars: "0",
      status: "active", // active | archived | wip
    },
    {
      name: "multimedia",
      description: "A website that contains my journey to learn Blender and rotoscope for animation.",
      tags: ["HTML", "JavaScript", "CSS"],
      url: "https://github.com/sharweng/multimedia",
      website: "https://sharweng.github.io/multimedia",
      demo: "",
      stars: "0",
      status: "active",
    },
    {
      name: "tupGradeCalc",
      description: "A simple calculator to calculate grades.",
      tags: ["HTML"],
      url: "https://github.com/sharweng/tupGradeCalc",
      website: "https://sharweng.github.io/tupGradeCalc",
      demo: "",
      stars: "0",
      status: "active",
    },
    {
      name: "Feed-A-Stray",
      description: "This is a sample website idea for feeding stray cats and dogs",
      tags: ["HTML"],
      url: "https://github.com/sharweng/Feed-A-Stray",
      website: "https://sharweng.github.io/Feed-A-Stray",
      demo: "",
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
      comingSoon: true,
    },
    {
      title: "Composing desktop environments with Quickshell",
      url: "https://yourblog.com/quickshell",
      date: "2025-05",
      comingSoon: true,
    },
    {
      title: "Atomic dotfile management in Rust",
      url: "https://yourblog.com/dotfiles-rust",
      date: "2025-02",
      comingSoon: true,
    },
  ],
};
