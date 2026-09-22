// Edit this file to update the text, links, focus areas, and recent updates.
export const profile = {
  name: "Tri Ubaya",
  initials: "TU",
  role: "Software Engineer · Builder · Lifelong Learner",
  location: "Indonesia",
  availability: "Open for thoughtful collaborations",
  email: "hello@triubaya.dev",
  avatarUrl: "https://github.com/triubaya.png?size=480",
  intro:
    "I design and build dependable digital products with a focus on clarity, usefulness, and the people who use them.",
  about: [
    "I’m a software engineer who enjoys turning complex ideas into focused, maintainable products. My work sits between product thinking, engineering, and continuous experimentation.",
    "This website is a living notebook for selected work, things I am learning, and ideas worth sharing. The content below is temporary for now—replace it with your own story whenever you are ready.",
  ],
  focusAreas: [
    {
      number: "01",
      title: "Product Engineering",
      description:
        "Building thoughtful web experiences from early discovery through reliable delivery.",
    },
    {
      number: "02",
      title: "Applied Technology",
      description:
        "Exploring practical uses of modern tools to solve real, measurable problems.",
    },
    {
      number: "03",
      title: "Knowledge Sharing",
      description:
        "Documenting lessons, useful patterns, and the thinking behind the work.",
    },
  ],
  updates: [
    {
      date: "Sep 2026",
      title: "Started rebuilding this personal site",
      description: "A quieter home for my work, notes, and experiments.",
      href: "#about",
    },
    {
      date: "Aug 2026",
      title: "Exploring a new engineering workflow",
      description: "Notes and findings will be published here soon.",
      href: "#focus",
    },
    {
      date: "Jul 2026",
      title: "Preparing a selected-project archive",
      description: "Case studies are currently being organized and rewritten.",
      href: "#updates",
    },
  ],
  links: [
    { label: "GitHub", href: "https://github.com/triubaya" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/triubaya" },
    { label: "Email", href: "mailto:hello@triubaya.dev" },
  ],
  navigation: [
    { label: "About", href: "#about" },
    { label: "Focus", href: "#focus" },
    { label: "Updates", href: "#updates" },
    { label: "Contact", href: "#contact" },
  ],
} as const;
