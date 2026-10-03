// All site copy lives here so the components stay presentational.

export const profile = {
  name: "Sifiso",
  fullName: "Sifiso Wayne Moyo",
  role: "Full-stack JavaScript developer",
  status: "Open to junior roles",
  github: "https://github.com/Westruva",
  githubHandle: "Westruva",
  portrait: {
    src: "/portrait.webp",
    alt: "Portrait of Sifiso Wayne Moyo wearing a grey zip-up jacket, against a white background.",
  },
};

// Order here is the order the buttons appear in Contact and the footer.
export const socials = [
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/sifiso-moyo-930b43221" },
  { id: "whatsapp", label: "WhatsApp", href: "https://wa.me/263789649257" },
  { id: "github", label: "GitHub", href: profile.github },
  { id: "x", label: "X", href: "https://x.com/Jack72684331" },
];

export const featuredProjects = [
  {
    title: "Where's Rick?",
    kicker: "Full-stack game",
    description:
      "A hidden-character game across three illustrated scenes. The Express API checks each guess against stored hit regions. It never trusts a client-side \"found\". Sessions, discoveries and the leaderboard live in PostgreSQL.",
    snippet: "click → { x: 0.42, y: 0.67 } → server verifies hit",
    tags: ["React", "Vite", "Express", "Prisma", "PostgreSQL", "Netlify + Railway"],
    links: [
      { label: "Play it", href: "https://dancing-gelato-c7d67f.netlify.app/" },
      { label: "Code", href: "https://github.com/Westruva/where-is-rick" },
    ],
    image: {
      src: "/projects/wheres-rick.webp",
      alt: "Where's Rick? game showing the Town Square scene, a scene picker, a timer, the characters still missing and a best-times leaderboard.",
    },
    size: "wide",
  },
  {
    title: "Margin Journal",
    kicker: "Blog platform",
    description:
      "One REST backend, two frontends: a public reading client and a separate publishing desk for writing and managing posts.",
    snippet: "web ⇄ API ⇄ admin",
    tags: ["Express", "Prisma", "PostgreSQL", "JWT", "Vite"],
    links: [
      { label: "Read it", href: "https://marginj.netlify.app/" },
      { label: "Admin", href: "https://marginjadmin.netlify.app/" },
      { label: "Code", href: "https://github.com/Westruva/my-blog-app" },
    ],
    image: {
      src: "/projects/margin-journal.webp",
      alt: "Margin Journal reading site with the headline \"Thoughts worth keeping close.\", a search box and the latest notes.",
    },
  },
  {
    title: "The Backpack",
    kicker: "File storage",
    description:
      "A personal file library with 50 MB uploads, search, download and delete. File metadata goes in PostgreSQL, and a small JSON API backs a vanilla JS interface.",
    tags: ["Express", "Prisma", "PostgreSQL", "Vanilla JS"],
    links: [
      { label: "Try it", href: "https://file-uploader-production-915d.up.railway.app/" },
      { label: "Code", href: "https://github.com/Westruva/file-uploader" },
    ],
    image: {
      src: "/projects/the-backpack.webp",
      alt: "The Backpack home screen with the headline \"Put your files somewhere useful\" and a drag-and-drop upload area.",
    },
  },
  {
    title: "CV Maker",
    kicker: "React app",
    description:
      "Edit a CV on one side and watch the formatted document update live on the other. Custom print styles export a clean PDF. Screenshot shows sample data.",
    tags: ["React", "CSS Grid", "Print CSS"],
    links: [
      { label: "Try it", href: "https://cv-application.waynesifiso71.workers.dev/" },
      { label: "Code", href: "https://github.com/Westruva/cv-application" },
    ],
    image: {
      src: "/projects/cv-maker.webp",
      alt: "CV Maker with the profile editor on the left and a live, formatted CV preview on the right.",
    },
  },
  {
    title: "MyStore",
    kicker: "E-commerce",
    description:
      "A shopping cart with products loaded from an external API, quantity merging, live subtotals, and loading and error states.",
    tags: ["React", "React Router", "Tailwind"],
    links: [
      { label: "Try it", href: "https://shoping-cart.waynesifiso71.workers.dev/shop" },
      { label: "Code", href: "https://github.com/Westruva/shoping-cart" },
    ],
    image: {
      src: "/projects/mystore.webp",
      alt: "MyStore shop catalogue showing product cards with images, categories, prices and Add to Cart buttons.",
    },
  },
  {
    title: "Members Only",
    kicker: "Auth",
    description:
      "A community board with sign-up, login and a shared message feed, backed by Express and PostgreSQL.",
    tags: ["Express", "PostgreSQL", "Auth"],
    links: [
      { label: "Try it", href: "https://members-only-production-b6ac.up.railway.app/" },
      { label: "Code", href: "https://github.com/Westruva/members-only" },
    ],
    image: {
      src: "/projects/members-only.webp",
      alt: "Members Only community board with a Join the conversation panel and a list of the latest messages.",
    },
    size: "half",
  },
  {
    title: "Memory Card",
    kicker: "React game",
    description:
      "Click each Rick and Morty character only once. The board shuffles after every pick, and the high score is kept between visits.",
    tags: ["React", "Rick & Morty API", "localStorage"],
    links: [{ label: "Code", href: "https://github.com/Westruva/memory-card" }],
    image: {
      src: "/projects/memory-card.webp",
      alt: "Rick and Morty memory game showing current score, high score, total cards and a grid of character cards.",
    },
    size: "half",
  },
];

export const moreProjects = [
  {
    title: "Inventory App",
    description: "Car-parts inventory with vehicle fitment. JSON API and EJS UI on one Postgres database.",
    href: "https://github.com/Westruva/inventory-app",
  },
  {
    title: "Battleship",
    description: "Player vs. AI that hunts nearby cells after a hit.",
    href: "https://github.com/Westruva/battleship",
  },
  {
    title: "Weather App",
    description: "Location search, live conditions and a °F/°C toggle.",
    href: "https://github.com/Westruva/weather-app",
  },
  {
    title: "Mini Message Board",
    description: "Server-rendered Express + EJS message board.",
    href: "https://github.com/Westruva/mini-message-board",
  },
  {
    title: "Data structures",
    description: "Linked lists, hash maps, binary search trees and a knight's shortest path, all from scratch.",
    href: "https://github.com/Westruva/knights-travails",
  },
];

export const recentlyShipped = [
  { date: "2026-10", label: "Oct 2026", text: "Margin Journal" },
  { date: "2026-10", label: "Oct 2026", text: "The Backpack" },
  { date: "2026-09", label: "Sep 2026", text: "Where's Rick?" },
  { date: "2026-09", label: "Sep 2026", text: "Members Only" },
  { date: "2026-09", label: "Sep 2026", text: "Inventory App" },
];

export const toolbox = [
  { group: "Frontend", items: ["React", "React Router", "Vite", "webpack", "Tailwind CSS", "HTML", "CSS"] },
  { group: "Backend", items: ["Node.js", "Express", "EJS", "REST APIs", "JWT auth"] },
  { group: "Data", items: ["PostgreSQL", "Prisma ORM", "SQL"] },
  { group: "Shipping", items: ["Git & GitHub", "Netlify", "Railway"] },
];

export const about = [
  "I'm a self-taught developer working through the full-stack JavaScript path of The Odin Project. I started with a sign-up form and a rock-paper-scissors game. Now I build and deploy apps with a separate API, a real database and more than one client.",
  "What I enjoy most is the part people don't see: validating input on the server, modelling data so it stays consistent, and writing a README that lets someone else run my project in five minutes.",
];
