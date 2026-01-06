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
      {
        type: "p",
        text:
          "There was a moment, not long ago, when the bright-orange Rabbit R1 dazzled the CES 2024 show floor. It billed itself as the device that would replace all your apps, becoming a smart intermediary between you and your phone."
      },
      {
        type: "p",
        text:
          "A year later, the once-hyped startup behind it is mired in pay freezes, walkouts, and a rapidly deteriorating reputation."
      },

      // Big numbered section title (like “01 The First-Mover’s Dilemma”)
      {
        type: "sectionTitle",
        number: "01",
        title: "The First-Mover’s Dilemma"
      },

      {
        type: "p",
        text:
          "If you followed last year’s Consumer Electronics Show, you probably remember that orange cube and the little white rabbit logo. Priced at $199, the Rabbit R1 promised to handle tasks, answer questions, identify objects, translate speech in real time, even place orders on your behalf."
      },

      // Paragraph with emphasis (bold phrases)
      {
        type: "p",
        parts: [
          { text: "Post-CES, social media exploded with excitement. Many hailed it as “the most likely device to change user behavior after the iPhone.” " },
          { text: "It sold 50,000 units in just two weeks", bold: true },
          { text: ", buoyed by attention and an early check from Amazon co-founder Joe Gebbia, despite ongoing internet debates about the founder Jesse Lyu’s resume." }
        ]
      }
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