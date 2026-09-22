// Semua isi utama website ada di file ini. Ganti data mockup di bawah dengan data asli Anda.
export const profile = {
  name: "Tri Ubaya",
  role: "Software Engineer & Researcher",
  affiliation: "BMKG · Monash University Indonesia",
  location: "Jakarta, Indonesia",
  emails: ["mr.triubaya@gmail.com", "tri.ubaya@bmkg.go.id"],
  avatarUrl: "/profile.png",
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
      title: "Nationwide PM2.5 Concentration Prediction in Indonesia Using GRU, GRU-Attention, and BiGRU-Attention Models with Sentinel-5P and ERA5-Land Data",
      authors: "Lina Adrianti, Tukiyat Tukiyat, Makhsun Makhsun, Tri Ubaya",
      venue: "International Journal Software Engineering and Computer Science (IJSECS), 6(2), 853–867",
      href: "https://doi.org/10.35870/ijsecs.v6i2.7488" as string | null,
      note: "Journal article · Fourth author",
    },
    {
      year: "2025",
      title: "Empowering End Users in AI-Driven Geospatial Applications for Disaster Risk Reduction: A Series of SatGPT Case Studies",
      authors: "Sheryl Rose Reyes, Keran Wang, Haiqi Du, et al. — Tri Ubaya (Contributing Author)",
      venue: "United Nations ESCAP Working Paper",
      href: "https://hdl.handle.net/20.500.12870/8973" as string | null,
      note: "Working paper · Contributing author",
    },
    {
      year: "2020",
      title: "Analisis Pembaruan Point of Interest Sistem Diseminasi Informasi Gempabumi",
      authors: "Tri Ubaya",
      venue: "bmkg.go.id",
      href: null as string | null,
      note: "Makalah",
    },
    {
      year: "Oct 2019",
      title: "Analysis of Magnetic Field Anomalies Before Earthquakes Based on ULF (Ultra Low Frequency) Method Using Magnetic Sensor Data in Sumatra",
      authors: "Ade Fika Ramadhani, Syafriani, Rahmat Triyono, Tri Ubaya",
      venue: "Journal of Physics: Conference Series, 1317(1), 012044",
      href: "https://doi.org/10.1088/1742-6596/1317/1/012044" as string | null,
      note: "Journal article · Fourth author",
    },
    {
      year: "2019",
      title: "Interpretasi Geologi Bawah Permukaan pada Lapangan “K31–K35” Kawengan Berdasarkan Data Metode Gaya Berat Periode Tahun 2008",
      authors: "Tri Ubaya",
      venue: "Buletin MKG, Balai Besar BMKG Wilayah 2",
      href: null as string | null,
      note: "Jurnal",
    },
    {
      year: "2018",
      title: "Sistem Informasi Gempa Bumi dan Tsunami yang Terintegrasi dengan SeisComP-3 pada Stasiun Geofisika Padang Panjang",
      authors: "Tri Ubaya",
      venue: "Buletin MKG, Balai Besar BMKG Wilayah 2",
      href: null as string | null,
      note: "Jurnal",
    },
    {
      year: "2010",
      title: "Integrasi Jaringan InaTEWS dengan Jaringan Miniregional untuk Meningkatkan Kualitas Hasil Analisa Parameter Gempabumi Wilayah Sumatera Barat",
      authors: "Tri Ubaya",
      venue: "bmkg.go.id",
      href: null as string | null,
      note: "Makalah",
    },
    {
      year: "1980",
      title: "Pembuatan Software Perhitungan Anomali Gravitasi Menggunakan Matlab",
      authors: "Tri Ubaya",
      venue: "Prosiding Puslitbang BMKG 2010",
      href: null as string | null,
      note: "Jurnal — tahun mengikuti data pada gambar",
    },
  ],
  projectsAndFunding: [
    {
      period: "2026 — Present",
      title: "-------",
      description:
        "A short explanation of the problem, your role, the approach, and the expected outcome of the project.",
      status: "In progress",
      href: null as string | null,
    },
    {
      period: "2025",
      title: "-------",
      description:
        "Describe the people or organization served by the project and the most important contribution you made.",
      status: "Completed",
      href: null as string | null,
    },
    {
      period: "2024",
      title: "-------",
      description:
        "Use this space for a GitHub project, community initiative, prototype, or other work you would like to highlight.",
      status: "Completed",
      href: null as string | null,
    },
    {
      period: "2023",
      title: "LPDP Scholarship Awardee",
      description:
        "Indonesia Endowment Fund for Education (LPDP) scholarship for the Master of Data Science program at Monash University, Indonesia.",
      status: "Scholarship",
      href: null as string | null,
    },
    {
      period: "20XX",
      title: "Funded Research Project",
      description:
        "Add the project title, grant scheme, your role, and the relevant funding information.",
      status: "Research funding",
      href: null as string | null,
    },
    {
      period: "20XX",
      title: "Innovation or Community Project Grant",
      description:
        "Use this entry for another funded project, institutional grant, or industry collaboration.",
      status: "Project funding",
      href: null as string | null,
    },
  ],
  news: [
    { date: "Sep 2026", text: "Launched a new personal academic and professional profile." },
    { date: "Aug 2026", text: "Started a new research or software development project." },
    { date: "Jul 2026", text: "Prepared selected publications and projects for this website." },
  ],
  links: [
    { label: "GitHub", href: "https://github.com/triubaya" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/triubaya" },
  ],
  navigation: [
    { label: "About", href: "#about" },
    { label: "Publications", href: "#publications" },
    { label: "Projects & Funding", href: "#projects" },
  ],
} as const;
