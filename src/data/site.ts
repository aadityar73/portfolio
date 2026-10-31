// ─────────────────────────────────────────────────────────────
//  All the content on the site lives in this one file.
//  Edit the text between the quotes. Search for "TODO" to find
//  every placeholder that still needs your real details.
// ─────────────────────────────────────────────────────────────

export const site = {
  // Shown big in the hero, in the browser tab, and in link previews.
  firstName: 'Aaditya',
  lastName: 'Raikar',
  role: 'Full-Stack Developer',
  description:
    'Full-stack developer in Mumbai who likes finding the actual cause of a bug, not the first plausible one.',

  location: {
    city: 'Mumbai',
    timezone: 'Asia/Kolkata', // used for the live clock in the header
  },
  currently: ['Looking for a full-time developer role'],

  // Hero line. Wrap the words you want highlighted in [[double brackets]].
  intro:
    "I've worked on large production web apps, making slow queries fast and tracing errors back to [[where they actually start]].",

  // A square image of at least 600×600 in /public with the name "/photo.png".
  photo: '', // TODO

  about: [
    "I'm a full-stack developer from Mumbai. I recently completed my MCA at K. J. Somaiya Institute of Management, and my experience so far has been in backend and full-stack development.",
    'Over the past year I interned at ShypBuddy and then Rock Solid Solutions, which gave me [[hands-on exposure to live production systems]]. At ShypBuddy I built backend APIs and worked on the admin and reseller panels. At Rock Solid Solutions I worked on production issues around database performance and backend maintenance.',
    'Now I want to build on that experience and keep growing as a developer.',
  ],

  // Links. Leave a value as "" to hide that link.
  links: {
    email: 'aaditya.raikar.dev@gmail.com',
    github: 'https://github.com/aadityar73',
    linkedin: 'https://www.linkedin.com/in/aadityaraikar',
    resume: '', // resume.pdf in /public with the name "/resume.pdf"
  },

  // Optional image for link previews (LinkedIn…). 1200×630 PNG in /public.
  ogImage: '', // TODO: e.g. "/og.png"
};

// ── Experience ──────────────────────────────────────────────
//  logo: put the image in /public/logos and write "/logos/file.png".
//  Leave logo as "" to show the initials instead.
export const experience = [
  {
    company: 'Rock Solid Solutions',
    logo: '/logos/rock-solid.png',
    url: '',
    role: 'Full-Stack Developer Intern',
    start: 'Apr 2026',
    end: 'Nov 2026',
    points: [
      'Rewrote an hourly data import, cutting its runtime from 1.5 min to 17 s and its memory use from 4.5 GB to 71 MB.',
      'Sped up slow production queries, taking one from 177 s down to 41 ms.',
      'Fixed 15 security issues across four codebases, including SQL injection and XSS.',
    ],
    tech: ['PHP', 'PostgreSQL', 'Linux', 'Sentry', 'GitLab'],
  },
  {
    company: 'ShypBuddy',
    logo: '/logos/shypbuddy.webp',
    url: '',
    role: 'Web Developer Intern',
    start: 'Dec 2025',
    end: 'Mar 2026',
    points: [
      'Cut order loading time from about 8 s to 1 s by removing redundant database queries.',
      'Built invoice, order-search and catalogue features end to end, from database to admin UI.',
    ],
    tech: ['Next.js', 'Node.js', 'Express.js', 'Tailwind CSS'],
  },
];

// ── Education ───────────────────────────────────────────────
export const education = [
  {
    school: 'K. J. Somaiya Institute of Management',
    logo: '/logos/somaiya.webp',
    url: '',
    degree: 'Master of Computer Applications (MCA)',
    start: 'Aug 2024',
    end: 'Jul 2026',
    note: 'Somaiya Vidyavihar University · CGPA 8.52',
  },
  {
    school: "VPM's R. Z. Shah College",
    logo: '/logos/rz-shah.webp',
    url: '',
    degree: 'B.Sc. in Information Technology',
    start: 'Sep 2021',
    end: 'May 2024',
    note: 'University of Mumbai · CGPI 7.28',
  },
];

// ── Projects ────────────────────────────────────────────────
//  image: a screenshot in /public/projects (shown when hovering the row).
//  Leave image as "" and a coloured card with the title is shown instead.
//  links: each one is shown as "label ↗". A note is shown in grey after the link.
export const projects = [
  {
    title: 'Nifty 50 Tracker & WhatsApp Bot',
    description:
      'A scheduled Nifty 50 market-data tracker and a WhatsApp messaging bot, self-hosted on a hardened Ubuntu VPS with SSH-key login, a firewall, and PM2 for crash recovery.',
    tech: ['Node.js', 'node-cron', 'PM2', 'Linux'],
    image: '',
    links: [
      {
        label: 'Tracker code',
        href: 'https://github.com/aadityar73/nifty50-tracker',
      },
      {
        label: 'Bot code',
        href: 'https://github.com/aadityar73/whatsapp-daily-bot',
      },
    ],
  },
  {
    title: 'Bookify',
    description:
      'An online library for discovering, reading and downloading books across genres, with JWT login kept in HTTP-only cookies and reader reviews stored in MongoDB.',
    tech: ['JavaScript', 'Node.js', 'MongoDB', 'JWT'],
    image: '/projects/bookify.webp',
    links: [
      { label: 'Code', href: 'https://github.com/aadityar73/Bookify' },
      {
        label: 'Live',
        href: 'https://bookify-fnct.onrender.com/',
      },
    ],
  },
];

// ── Skills ──────────────────────────────────────────────────
//  Logos come from Simple Icons (simpleicons.org) and appear automatically
//  when the name matches; names without a logo are shown as text only.
export const skills = [
  { group: 'Languages', items: ['JavaScript', 'PHP'] },
  {
    group: 'Backend & data',
    items: ['Node.js', 'Express.js', 'PostgreSQL', 'MongoDB'],
  },
  { group: 'Frontend', items: ['Tailwind CSS'] },
  {
    group: 'DevOps & tools',
    items: [
      'Linux (Ubuntu)',
      'PM2',
      'Sentry',
      'Git',
      'GitHub',
      'GitLab',
      'Claude Code',
    ],
  },
];
