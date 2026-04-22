export type Event = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  category: "training" | "consulting" | "integration" | "events";
  startAt: string;
  endAt: string;
  location: { venue: string; city: string; country: string };
  coverImage: string;
  price: { amount: number; currency: string };
  capacity: number;
  seatsRemaining: number;
  status: "upcoming" | "past" | "sold-out";
  agenda: { time: string; title: string }[];
  tags: string[];
};

export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  body: string;
  coverImage: string;
  category: string;
  date: string;
  author: string;
  tags: string[];
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

export const events: Event[] = [
  {
    id: "evt_001",
    slug: "audio-fundamentals-singapore-may-2026",
    title: "Audio Fundamentals for Worship Teams",
    summary: "A full-day hands-on training covering mixing consoles, gain staging, and monitoring for worship environments.",
    description: `<p>This intensive one-day workshop is designed for worship team leaders, sound engineers, and enthusiastic volunteers who want to level up their audio skills. We cover the fundamentals of signal flow, mic placement, console operation, and live monitoring — all in the context of a Sunday service.</p><p>No prior technical knowledge is required. You'll leave with a practical framework you can apply immediately, plus a resource pack to continue learning.</p>`,
    category: "training",
    startAt: "2026-05-15T09:00:00+08:00",
    endAt: "2026-05-15T17:00:00+08:00",
    location: { venue: "Grace Assembly of God", city: "Singapore", country: "SG" },
    coverImage: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&q=80",
    price: { amount: 15000, currency: "SGD" },
    capacity: 40,
    seatsRemaining: 12,
    status: "upcoming",
    agenda: [
      { time: "09:00", title: "Registration & coffee" },
      { time: "09:30", title: "Understanding signal flow" },
      { time: "11:00", title: "Console deep-dive & hands-on mixing" },
      { time: "13:00", title: "Lunch break" },
      { time: "14:00", title: "Mic placement & gain staging" },
      { time: "15:30", title: "Live monitoring for musicians" },
      { time: "16:30", title: "Q&A and wrap-up" },
      { time: "17:00", title: "Close" },
    ],
    tags: ["audio", "training", "worship", "singapore"],
  },
  {
    id: "evt_002",
    slug: "lighting-dmx-workshop-india-june-2026",
    title: "Lighting Design & DMX Control Workshop",
    summary: "Learn fixture programming, DMX patching, and scene design for modern church and event lighting.",
    description: `<p>Whether you're running a basic dimmer pack or a full MA Lighting rig, this workshop gives you the tools to design and operate lighting with confidence. We cover DMX fundamentals, fixture types, colour mixing, and how to build show files that work for your team.</p><p>Participants will get hands-on time with professional fixtures and a full MA console setup.</p>`,
    category: "training",
    startAt: "2026-06-07T09:00:00+05:30",
    endAt: "2026-06-08T17:00:00+05:30",
    location: { venue: "The Ark Community Church", city: "Hyderabad", country: "IN" },
    coverImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80",
    price: { amount: 8000, currency: "INR" },
    capacity: 25,
    seatsRemaining: 0,
    status: "sold-out",
    agenda: [
      { time: "Day 1 — 09:00", title: "DMX fundamentals & fixture types" },
      { time: "Day 1 — 11:00", title: "Console walkthrough (MA Lighting)" },
      { time: "Day 1 — 14:00", title: "Patch your first show" },
      { time: "Day 2 — 09:00", title: "Scene design & colour mixing" },
      { time: "Day 2 — 14:00", title: "Live design challenge" },
      { time: "Day 2 — 16:00", title: "Showcase & feedback" },
    ],
    tags: ["lighting", "dmx", "training", "india"],
  },
  {
    id: "evt_003",
    slug: "smaart-live-sound-masterclass-singapore-aug-2026",
    title: "SMAART & Live Sound Measurement Masterclass",
    summary: "A two-day deep dive into acoustic measurement, system optimisation, and speaker tuning using Rational Acoustics SMAART.",
    description: `<p>SMAART is the industry-standard tool for real-time acoustic measurement and system optimisation. In this intensive masterclass, you'll learn how to use SMAART to measure and optimise PA systems, identify problem frequencies, and tune systems for any room.</p><p>This workshop is aimed at experienced audio engineers who want to move beyond guesswork and make data-driven decisions at the console.</p>`,
    category: "training",
    startAt: "2026-08-20T09:00:00+08:00",
    endAt: "2026-08-21T17:00:00+08:00",
    location: { venue: "Production Brew Studio", city: "Singapore", country: "SG" },
    coverImage: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1200&q=80",
    price: { amount: 28000, currency: "SGD" },
    capacity: 16,
    seatsRemaining: 6,
    status: "upcoming",
    agenda: [
      { time: "Day 1 — 09:00", title: "Introduction to measurement fundamentals" },
      { time: "Day 1 — 11:00", title: "SMAART interface & workflow" },
      { time: "Day 1 — 14:00", title: "Measuring your PA system" },
      { time: "Day 2 — 09:00", title: "System alignment & delay tuning" },
      { time: "Day 2 — 13:00", title: "Real-world case studies" },
      { time: "Day 2 — 16:00", title: "Certification wrap-up" },
    ],
    tags: ["audio", "smaart", "advanced", "singapore"],
  },
  {
    id: "evt_004",
    slug: "pentecostal-world-congress-helsinki-2025",
    title: "Pentecostal World Congress — Helsinki 2025",
    summary: "Production Brew supported full AV production for one of the world's largest Pentecostal gatherings, in partnership with MA Lighting.",
    description: `<p>The Pentecostal World Congress brought together 15,000 delegates from over 100 countries in Helsinki, Finland. Production Brew was on the ground as the primary production technology partner, overseeing full AV setup including MA Lighting grandMA3 systems, Shure wireless, and multi-camera broadcast.</p>`,
    category: "events",
    startAt: "2025-09-10T08:00:00+03:00",
    endAt: "2025-09-14T22:00:00+03:00",
    location: { venue: "Helsinki Expo and Convention Centre", city: "Helsinki", country: "FI" },
    coverImage: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&q=80",
    price: { amount: 0, currency: "SGD" },
    capacity: 500,
    seatsRemaining: 0,
    status: "past",
    agenda: [],
    tags: ["events", "conference", "ma-lighting", "international"],
  },
];

export const posts: Post[] = [
  {
    slug: "smaart-training-recap",
    title: "SMAART Training Recap: What We Covered and Why It Matters",
    excerpt: "Our recent SMAART training session dove deep into measurement and system optimisation for live sound engineers.",
    body: `<p>Last month we ran our first SMAART training in Singapore, and the response was incredible. Here's a breakdown of what we covered and the key takeaways for engineers at every level.</p><h2>Why measure?</h2><p>Too many engineers still rely purely on their ears — and while that's a critical skill, measurement tools like SMAART give you objective data to back up what you're hearing. We spent the first session demystifying the interface and getting everyone comfortable with taking a basic transfer function measurement.</p><h2>The most common mistake</h2><p>Skipping the delay finder. Almost every PA system we see is misaligned — sub delays, delay fills, front fills. Getting alignment right before you touch EQ makes a massive difference to intelligibility and phase coherence.</p><p>Our next SMAART workshop runs in August — seats are limited, so register early.</p>`,
    coverImage: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1200&q=80",
    category: "Training",
    date: "March 15, 2026",
    author: "Production Brew Team",
    tags: ["audio", "smaart", "training"],
  },
  {
    slug: "ma-lighting-pentecostal-world-congress",
    title: "MA Lighting at Pentecostal World Congress, Helsinki",
    excerpt: "Production Brew was on the ground supporting one of the world's largest Pentecostal gatherings with MA Lighting systems.",
    body: `<p>The Pentecostal World Congress is one of the largest gatherings of its kind in the world — 15,000 delegates, 100+ countries, and five days of continuous programming across multiple venues. Production Brew had the privilege of serving as the primary AV production partner for the main auditorium.</p><h2>The setup</h2><p>We ran a full MA Lighting grandMA3 system for the main auditorium, with secondary networking for breakout sessions. The brief was simple: world-class production that serves the message, not overshadows it.</p><h2>Key learnings</h2><p>Events at this scale demand preparation. We spent three weeks in pre-production, building the show file, mapping out all the networking, and coordinating with the local crew in Helsinki. The on-site days were smooth because the prep was thorough.</p>`,
    coverImage: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&q=80",
    category: "Events",
    date: "February 3, 2026",
    author: "Production Brew Team",
    tags: ["events", "ma-lighting", "international"],
  },
  {
    slug: "volunteer-friendly-av-systems",
    title: "Building Volunteer-Friendly AV Systems for Churches",
    excerpt: "The best system is the one your team can actually operate. Here's our framework for designing with volunteers in mind.",
    body: `<p>We've integrated AV systems for dozens of churches, and the single biggest mistake we see isn't about the gear — it's designing a system that only one person can operate. When that person is sick on Sunday, everything falls apart.</p><h2>The principle</h2><p>Every system we design goes through what we call a "volunteer test": can a motivated but non-technical volunteer operate the Sunday service after one hour of training? If the answer is no, we redesign.</p><h2>Practical steps</h2><ul><li>Use scene recall on your console — one button for worship, one for preach</li><li>Label everything. Every channel, every cable, every input patch</li><li>Limit options. More channels on the desk doesn't mean better audio</li><li>Document the signal flow in a laminated one-pager at the console</li></ul><p>Want us to review your setup? Get in touch — we offer remote system audits.</p>`,
    coverImage: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=1200&q=80",
    category: "Consulting",
    date: "January 20, 2026",
    author: "Production Brew Team",
    tags: ["consulting", "churches", "integration"],
  },
  {
    slug: "networking-for-av-engineers",
    title: "IT Networking for AV Engineers: What You Actually Need to Know",
    excerpt: "AV is on the network now. Here's the minimum networking knowledge every live sound and video engineer needs in 2026.",
    body: `<p>A decade ago, networking was an IT problem. Today it's an AV problem. If you're running Dante, AVB, NDI, or any IP-based audio/video, you need to understand the basics of the network your signal is riding on.</p><h2>Start with VLANs</h2><p>The single most important concept for AV engineers is the VLAN — Virtual Local Area Network. Separating your AV traffic from the building's general data network prevents interference and gives you control over QoS (Quality of Service).</p><h2>QoS is non-negotiable</h2><p>Audio over IP is time-sensitive. Without QoS prioritisation on your switches, your Dante traffic will compete with someone's Netflix stream and lose. Always prioritise AV traffic on managed switches.</p>`,
    coverImage: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",
    category: "Training",
    date: "December 10, 2025",
    author: "Production Brew Team",
    tags: ["networking", "dante", "training", "av"],
  },
];

export const team: TeamMember[] = [
  {
    name: "Joel D'Souza",
    role: "Founder & Lead Consultant",
    bio: "15 years in live production across Singapore, India, and Europe. Joel leads consulting and integration projects and has overseen production for events of 50 to 15,000 attendees.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Priya Nair",
    role: "Training Director",
    bio: "Priya builds and delivers all Production Brew training programmes. With a background in broadcast and live theatre, she brings both technical depth and a gift for teaching.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
  {
    name: "Marcus Tan",
    role: "Systems Engineer",
    bio: "Marcus leads all integration projects across Asia. He specialises in AV-over-IP, networking, and large-scale system design — and has a particular love for making complex things simple.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
  },
  {
    name: "Ananya Krishnan",
    role: "Events Production Manager",
    bio: "Ananya manages end-to-end production for live events across India. Her calm under pressure and detail-oriented approach have made her indispensable to the team.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80",
  },
];
