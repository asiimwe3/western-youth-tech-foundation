export type ArticleBlock = { h?: string; p: string };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  keywords: string[];
  readMins: number;
  image: string;
  imageAlt: string;
  blocks: ArticleBlock[];
};

export const articles: Article[] = [
  {
    slug: "spot-and-avoid-online-scams-uganda",
    title: "How to Spot and Avoid Online Scams in Uganda: A Youth's Guide",
    excerpt: "Uganda lost UGX 72 billion to cybercrime in 2024, and 1 in 3 mobile money users has been targeted by fraudsters. Here is how scammers actually operate — and the exact habits that keep you safe.",
    date: "2026-09-08",
    keywords: ["online scams Uganda", "cybersecurity Uganda", "online safety Uganda", "mobile money fraud", "cybersecurity training Uganda"],
    readMins: 7,
    image: "/og-image.png",
    imageAlt: "Western Youth Tech Foundation cyber-safety training in Uganda",
    blocks: [
      { p: "Uganda's police annual crime report recorded UGX 72.1 billion lost to cybercrime in 2024. Only about UGX 420 million was ever recovered. Behind those numbers are thousands of young people — students, hustlers, first-time smartphone owners — who lost school fees, savings, and borrowed money to scams they could have recognized in seconds if anyone had taught them." },
      { p: "At the Western Youth Tech Foundation in Kyenjojo, cyber-safety is a foundation subject, not a footnote. Here is the same material we teach in the first weeks of every cohort." },
      { h: "The five scam patterns behind most losses" },
      { p: "1. Money doubling and 'investment' schemes. A stranger or self-declared mentor promises to double your money through forex, crypto, or a mysterious trading platform. Ugandans have lost tens of billions of shillings to pyramid and doubling schemes in a single year. Real investment never arrives in your WhatsApp DMs asking for a small deposit first." },
      { p: "2. Mobile money impersonation. Fraudsters call or text pretending to be MTN or Airtel staff or agents, claiming a wrong deposit — then ask you to approve a PIN prompt or 'reverse' a transaction. No network employee will ever ask for your PIN. Ever. The moment someone does, hang up." },
      { p: "3. Fake jobs and registration fees. A WhatsApp group offers a data-entry or online job paying $50 a day — but first you pay a registration or activation fee. Real employers pay you; they do not charge you. Any online job that asks for money upfront is a scam, without exception." },
      { p: "4. Phishing links. 'Your account will be closed, click here to verify.' These links open convincing fake pages built to capture your passwords and one-time codes. No bank, SACCO, or telecom network will ever ask you to verify your account through a random link." },
      { p: "5. Romance and emergency scams. Someone you met online urgently needs money for a visa, a hospital bill, or a customs fee. If you have never met the person face to face, do not send them money. That single rule would end most losses before they start." },
      { h: "The habits that keep you safe" },
      { p: "First: never share your PIN, OTP, or password with anyone — including people claiming to be your mobile money agent or network staff. Second: never approve a mobile money prompt you did not personally initiate. Third: before paying anyone online, ask yourself — can I physically find this person if something goes wrong? If the answer is no, treat it as a scam." },
      { p: "Fourth: slow down. Scammers manufacture urgency — 'this offer closes in 30 minutes,' 'confirm now or lose your account.' Urgency is part of the product. Anything real will still be real tomorrow." },
      { h: "Report it — it matters" },
      { p: "If you are targeted, report to your telecom provider immediately and to the police. Reporting stops the same fraudster from reaching the next hundred people. And if a friend or family member mentions one of the five patterns above, stop them before they send the money." },
      { p: "Cyber-safety is one of the reasons the Foundation exists: Uganda's connectivity is not the challenge — the missing knowledge is. Want this training for yourself, your school, or your SACCO? Explore our programs or apply for the next cohort through our registration page." }
    ]
  },
  {
    slug: "free-ways-to-learn-coding-in-uganda",
    title: "Free Ways to Learn Coding in Uganda: The 2026 Guide for Beginners",
    excerpt: "You do not need money or a university to start coding in Uganda. Here is the realistic free path — from your first line of HTML to your first paid project — using the same tools our Kyenjojo cohorts use.",
    date: "2026-09-08",
    keywords: ["learn coding Uganda", "free coding Uganda", "coding training Uganda", "free computer training Uganda", "ICT training Uganda"],
    readMins: 8,
    image: "/program-web.webp",
    imageAlt: "Web development training at Western Youth Tech Foundation, Kyenjojo",
    blocks: [
      { p: "Every week young Ugandans ask us the same question: 'I want to learn coding, but I have no money for a course. Where do I start?' The honest answer: you can go further than most people believe using free resources, off-peak data bundles, and a borrowed phone. Here is the exact path." },
      { h: "Step 1: Learn how the web works (2 weeks)" },
      { p: "Start with HTML and CSS — the skeleton and skin of every website. Free resources like freeCodeCamp, The Odin Project, and MDN Web Docs cover everything, and most can be downloaded for offline study. One hour a day is enough. Build ten small pages before moving on: a personal profile, a church or school page, a menu for a local restaurant." },
      { h: "Step 2: JavaScript, the income language (3–4 months)" },
      { p: "JavaScript runs on every browser on earth and powers most freelance work you will find on Upwork and Fiverr. Do not rush it. Solve small problems daily on freeCodeCamp and Exercism. When you can build a working to-do list, a calculator, and a form that saves data, you are ready." },
      { h: "Step 3: Pick a direction and go deep (4–6 months)" },
      { p: "Frontend development (React), backend development (Node.js, databases), or WordPress — still the most requested skill from Ugandan small businesses. Choose based on the jobs you actually see advertised in your area, not what sounds cool on Twitter." },
      { h: "Beating the connectivity reality" },
      { p: "Download course videos at night when bundles are cheapest, use offline documentation (like DevDocs), and work on a phone if a laptop is not available yet — many developers started exactly there. And remember the point of skills: once you earn even UGX 300,000 a month from small client work, the data that funds your learning pays for itself." },
      { h: "When free is not enough" },
      { p: "Free resources teach you code but rarely teach you how to earn: dealing with clients, pricing projects, delivering under deadlines, or staying safe from scams. That is the gap the Western Youth Tech Foundation fills — free structured cohorts in Kyenjojo with real client projects through DeryCode's pipeline, mentorship, and cyber-safety from day one. Read our founder's story to see why we built it, or apply for the next cohort." }
    ]
  },
  {
    slug: "uganda-digital-skills-gap-connectivity-not-the-problem",
    title: "Uganda's Digital Skills Gap: Why Connectivity Is Not the Problem",
    excerpt: "Uganda has over 40 million mobile connections and some of the cheapest data in East Africa — yet only about a quarter of the population uses the internet meaningfully. The real bottleneck is skills, and the numbers prove it.",
    date: "2026-09-08",
    keywords: ["digital skills Uganda", "digital skills gap Uganda", "digital literacy Uganda", "ICT training Uganda", "youth technology Uganda"],
    readMins: 6,
    image: "/og-image.png",
    imageAlt: "Digital skills training in Western Uganda",
    blocks: [
      { p: "Uganda registered around 40.9 million mobile connections in 2025 — more lines than people. Data bundles can cost less than a soda. Yet only about 11.4 million Ugandans, roughly a quarter of the population, actually use the internet. The towers are up. The usage is down. Why?" },
      { p: "Because a connection without capability is just a bill. A smartphone with no skills is an entertainment device — and increasingly, a hunting ground for scammers." },
      { h: "The evidence: skills, not towers" },
      { p: "Uganda lost UGX 72 billion to cybercrime in 2024 while barely 3% of the losses were recovered — a direct tax on digital ignorance. Studies of government skilling programmes have found digital literacy deficits in over half of TVET graduates. Meanwhile 65% of Ugandans aged 20–24 are jobless, spending hours a day on platforms designed by other people to capture that attention and monetize it." },
      { h: "The quiet, real online economy" },
      { p: "The internet pays for value delivered, not attention given. Freelance development and design, remote jobs, data services for banks, SACCOs, schools and clinics, digital marketing for real businesses — these are the paths that earn. Our founder, Asiimwe Derick, built DeryCode Technologies from exactly this path: 100+ client projects delivered, all from skills learned in Kyenjojo, not followers." },
      { h: "What closes the gap" },
      { p: "Training that treats cyber-safety as a first-class subject. Curricula designed with working engineers around what employers actually need. Real client work from day one, so skills and income grow together. And a hub young people can physically walk into — which is what we are building in Kyenjojo for the Tooro region." },
      { p: "Uganda does not need more connectivity. It needs a generation that commands the connection it already has. See how our programs teach exactly that — or read the founder's story behind the mission." }
    ]
  },
  {
    slug: "how-youth-earn-online-safely-beyond-social-media",
    title: "How Young Ugandans Can Earn Online Safely — Beyond Social Media",
    excerpt: "Likes are not a business model. Here are the real online income paths for Ugandan youth — freelancing, remote work, digital services for local businesses — plus the safety rules that protect your earnings.",
    date: "2026-09-08",
    keywords: ["online income Uganda", "digital entrepreneurship Uganda", "freelancing Uganda", "youth employment technology Uganda", "digital skills training Uganda"],
    readMins: 7,
    image: "/program-data.webp",
    imageAlt: "Youth learning data and digital skills in Kyenjojo, Uganda",
    blocks: [
      { p: "Ask a young Ugandan how people make money online and most will say: posting content, gaining followers, going viral. That belief — pushed by courses-about-courses and screenshot flexes — is why so many spend years chasing algorithms instead of income. Here is the truth we teach at the Foundation: the internet pays for value delivered, not attention given." },
      { h: "1. Freelancing: sell a skill, not your face" },
      { p: "Web development, graphic design, writing, data entry, video editing — platforms like Upwork and Fiverr connect you to global clients from anywhere in Uganda. The barrier is a portfolio, not a following. Five solid sample projects beat 50,000 followers every time. Start local too: many Ugandan businesses need websites, posters, and social pages managed — and they pay in cash, today." },
      { h: "2. Remote work: a job like any other, just online" },
      { p: "Companies worldwide now hire developers, support agents, virtual assistants, and data analysts who never set foot in an office. These are salaried positions with contracts — the most stable form of online income. They require real skills and discipline, which is why structured training matters more than talent." },
      { h: "3. Digital services for local businesses" },
      { p: "Banks, SACCOs, schools, hotels, clinics, and shops across Uganda are digitizing — and most need help with websites, booking systems, data tracking, and digital marketing. This market needs no international bandwidth at all, and clients you can physically meet are clients you can trust and invoice reliably." },
      { h: "4. Build something of your own" },
      { p: "Once you have skills and clients, an agency or product of your own is the natural next step — the way DeryCode Technologies grew from one self-taught developer into 100+ delivered projects." },
      { h: "The safety rules that protect your earnings" },
      { p: "Never pay a fee to receive a job or unlock payment. Use platforms with escrow or take deposits before delivering work. Keep your accounts secured with strong passwords and two-factor authentication. And remember: anyone promising fast, effortless money online is planning to take yours — not give you theirs." },
      { p: "Earning online is real, but it is earned — skill first, income second. If you want the structured path — training, real client projects, mentorship, and a community — look at our programs or register for the next cohort in Kyenjojo." }
    ]
  }
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
