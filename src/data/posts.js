export const posts = [
  {
    slug: "kalshi-cofounder-ballerina",
    section: "Latest News",
    title: "How Kalshi's Co-Founder Went From Professional Ballerina...",
    author: "Third Party",
    date: "Dec 3, 2025",
    readTime: "1 min read",
    hero: null, // later you can put an image URL here
    content: [
      "Hello :D",
    ],
  },
  {
    slug: "ces-ai-hardware-winner-fallen",
    section: "Opinion",
    title: "CES’s AI Hardware Winner Has Fallen. Meanwhile the Real AI Cash Cows...",
    author: "Kayna Huang",
    date: "Dec 2, 2025",
    readTime: "5 min read",
    hero: null,
    content: [
      "Hi",
    ],
  },
  {
    slug: "eddy-xu-raises-5m-ai-glasses",
    section: "Campus News",
    title: "Eddy Xu, Columbia Engineering ’29, raised $5M to win AI glasses",
    author: "CTI Scout",
    date: "Dec 3, 2025",
    readTime: "1 min read",
    hero: null,
    content: [
      "Hi",
    ],
  },
]

export function getPostBySlug(slug) {
  return posts.find((p) => p.slug === slug)
}

export function getPostsBySection(section) {
  return posts.filter((p) => p.section === section)
}
