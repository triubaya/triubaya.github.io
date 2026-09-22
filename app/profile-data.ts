// Semua isi utama website ada di file ini. Ganti data mockup di bawah dengan data asli Anda.
export const profile = {
  name: "Tri Ubaya",
  role: "Software Engineer & Researcher",
  affiliation: "Your institution or organization",
  location: "Indonesia",
  email: "hello@triubaya.dev",
  avatarUrl: "https://github.com/triubaya.png?size=400",
  introduction:
    "I am a seismology and technology professional at BMKG with a background in Seismology, Information Technology, and Data Science.",
  about: [
    "My work focuses on developing seismological applications, earthquake and tsunami monitoring systems, seismic sensor networks, and operational monitoring tools. I also work with seismic data processing, system integration, networking, and real-time data services.",
    "I am particularly interested in combining seismology, software engineering, and data science to build reliable technologies that support earthquake monitoring, early warning, and geophysical research."
  ],
  interests: [
    "Seismology & Geophysics",
    "Seismological Software Development",
    "Seismic Monitoring & Sensor Networks",
    "Data Science & AI"
  ],
  publications: [
    {
      year: "2026",
      title: "A Sample Publication Title for Your Latest Research",
      authors: "Tri Ubaya, Collaborator One, Collaborator Two",
      venue: "Journal or Conference Name",
      href: null as string | null,
      note: "Replace with DOI or publication URL",
    },
    {
      year: "2025",
      title: "Another Research Article or Conference Paper",
      authors: "Tri Ubaya, Research Partner",
      venue: "Proceedings of a Relevant Conference",
      href: null as string | null,
      note: "Replace with paper or repository URL",
    },
    {
      year: "2024",
      title: "Earlier Work Related to Your Research Interest",
      authors: "Tri Ubaya",
      venue: "Research Journal Name",
      href: null as string | null,
      note: "Replace with the correct citation",
    },
  ],
  projects: [
    {
      period: "2026 — Present",
      title: "Current Research or Software Project",
      description:
        "A short explanation of the problem, your role, the approach, and the expected outcome of the project.",
      status: "In progress",
      href: null as string | null,
    },
    {
      period: "2025",
      title: "Selected Applied Technology Project",
      description:
        "Describe the people or organization served by the project and the most important contribution you made.",
      status: "Completed",
      href: null as string | null,
    },
    {
      period: "2024",
      title: "Open-source or Independent Project",
      description:
        "Use this space for a GitHub project, community initiative, prototype, or other work you would like to highlight.",
      status: "Completed",
      href: null as string | null,
    },
  ],
  scholarshipsAndFunding: [
    {
      year: "20XX",
      title: "LPDP Scholarship Awardee",
      organization: "Indonesia Endowment Fund for Education (LPDP)",
      description:
        "Add your study program, university, degree level, and scholarship period here.",
      type: "Scholarship",
    },
    {
      year: "20XX",
      title: "Funded Research Project",
      organization: "Funding organization name",
      description:
        "Add the project title, grant scheme, your role, and the relevant funding information.",
      type: "Research funding",
    },
    {
      year: "20XX",
      title: "Innovation or Community Project Grant",
      organization: "Funding organization name",
      description:
        "Use this entry for another funded project, institutional grant, or industry collaboration.",
      type: "Project funding",
    },
  ],
  news: [
    { date: "Sep 2026", text: "Launched a new personal academic and professional profile." },
    { date: "Aug 2026", text: "Started a new research or software development project." },
    { date: "Jul 2026", text: "Prepared selected publications and projects for this website." },
  ],
  links: [
    { label: "Email", href: "mailto:hello@triubaya.dev" },
    { label: "GitHub", href: "https://github.com/triubaya" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/triubaya" },
  ],
  navigation: [
    { label: "About", href: "#about" },
    { label: "Publications", href: "#publications" },
    { label: "Projects", href: "#projects" },
    { label: "Scholarships & Funding", href: "#funding" },
  ],
} as const;
