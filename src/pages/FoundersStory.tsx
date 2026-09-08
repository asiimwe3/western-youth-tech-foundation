import { motion } from "framer-motion";
import { Link } from "wouter";
import { ShieldAlert, Wifi, Brain, Coins, ArrowRight, Quote, CheckCircle, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FoundersStory() {
  const stats = [
    { figure: "40.9M", label: "active mobile connections in Uganda — the network is here" },
    { figure: "UGX 72B", label: "lost to cybercrime in Uganda in 2024 alone (Uganda Police Annual Crime Report)" },
    { figure: "1 in 3", label: "mobile money users has been targeted by fraudsters" },
    { figure: "65%", label: "of Ugandans aged 20–24 are jobless — while scrolling hours daily (UBOS)" }
  ];

  const myths = [
    {
      icon: <Wifi className="h-7 w-7 text-secondary" />,
      title: "\"Uganda's problem is connectivity\"",
      body: "We have over 40 million mobile connections and data bundles cheaper than a soda. A youth in Kyenjojo can watch a lecture from Harvard tonight. The network is not the wall. What is missing is the knowledge of what to do with it."
    },
    {
      icon: <ShieldAlert className="h-7 w-7 text-accent" />,
      title: "The real gap: skills and cyber-safety",
      body: "Nobody teaches our youth how the internet actually works — so scammers do. Uganda lost UGX 72 billion to cybercrime in 2024, and barely UGX 420 million was recovered. Our youth are not careless; they were simply never taught. Every scam victim is proof of a missing lesson."
    },
    {
      icon: <Brain className="h-7 w-7 text-primary" />,
      title: "The nonsense-content economy",
      body: "TikTok is now Uganda's most-used platform. Meanwhile, attention is being harvested — someone else earns from every hour our youth scroll, while they harvest stress, comparison, and moral decay. If we don't teach youth to create value online, the internet will teach them to consume it."
    },
    {
      icon: <Coins className="h-7 w-7 text-secondary" />,
      title: "The \"social media money\" myth",
      body: "Many young Ugandans believe likes, views, and follower counts are the only money online. That is a lie sold by people selling courses about courses. The real online economy is quiet: writing code, designing, managing data, running real digital marketing for real businesses. I know — I have earned from it for years."
    }
  ];

  const realPaths = [
    "Freelance web development and design for clients in Uganda and abroad",
    "Remote full-time jobs with foreign companies while living at home in Fort Portal",
    "Data and digital services for local banks, SACCOs, schools, hotels, and clinics",
    "Building your own product or agency — like I did with DeryCode Technologies, 100+ real client projects"
  ];

  const response = [
    {
      title: "Cyber-safety is a subject, not a warning",
      desc: "Scam-pattern recognition, password discipline, digital reputation, and fraud reporting are part of every cohort's foundation weeks — before any tool is opened."
    },
    {
      title: "Real clients, real money, from day one",
      desc: "Students work on actual Ugandan business projects through DeryCode's pipeline. You learn the internet as a workplace, not a playground."
    },
    {
      title: "Creation over consumption",
      desc: "Every graduate leaves with a portfolio, a professional online presence, and income skills — so the attention economy works for them, not on them."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-white py-24">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 20% 30%, #fff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="container relative px-4 md:px-6">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-sm font-medium mb-6">
            <Quote className="h-4 w-4 text-accent" /> A Letter from the Founder
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight max-w-4xl">
            The Network Is Here. <span className="text-accent">The Knowledge Is Not.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/80 max-w-3xl leading-relaxed">
            Uganda's connectivity is not our challenge. Our challenge is that 40 million connections arrived
            without a manual — and our youth are paying for it in scams, stress, and wasted potential.
            This is why the Western Youth Tech Foundation exists.
          </p>
          <p className="mt-6 text-sm text-white/60 uppercase tracking-widest">
            Asiimwe Derick · Founder, Western Youth Tech Foundation &amp; DeryCode Technologies
          </p>
        </div>
      </section>

      {/* My story */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">I grew up in Kyenjojo. The internet didn't fail us. We were never taught it.</h2>
              <p className="text-muted-foreground leading-relaxed">
                I taught myself to code on a secondhand laptop with borrowed bundles. No one showed me how.
                Today, my company DeryCode Technologies has delivered over 100 real projects — websites, systems,
                and platforms for clinics, hotels, SACCOs, and real estate companies across Uganda and beyond.
                Every shilling I have earned online came from a <em>skill</em>, not from followers.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                When I look at my peers, I don't see a generation that lacks internet. I see a generation that was
                handed the most powerful income tool in human history with zero instruction — and then left alone
                with scammers on one side and algorithmic nonsense on the other. Some of my friends lost their
                school fees to "doubling" scams. Others lost years to scrolling. The lucky ones, like me, stumbled
                into skills. Luck should not be the curriculum.
              </p>
              <p className="text-lg font-medium text-primary">
                That is my story. Here is the story of our country:
              </p>
            </div>
            <div className="lg:col-span-2 grid gap-4">
              {stats.map((s, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="bg-card border rounded-xl p-5 shadow-sm">
                  <p className="text-3xl font-extrabold text-accent">{s.figure}</p>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{s.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The myth vs reality */}
      <section className="py-16 bg-muted/40">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">What People Say vs. What Is True</h2>
          <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
            We keep building towers and subsidizing data. The towers are up. The knowledge is still down.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {myths.map((m, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-card border rounded-xl p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-3">
                  {m.icon}
                  <h3 className="font-semibold text-lg text-primary">{m.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed text-sm">{m.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The real online economy */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Where Online Money Actually Comes From</h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              The internet pays for <span className="font-semibold text-primary">value delivered</span>, not for
              attention given. These are the quiet, boring, real paths our graduates are prepared for:
            </p>
            <div className="space-y-4">
              {realPaths.map((p, i) => (
                <div key={i} className="flex items-start gap-3 bg-card border rounded-lg p-4 shadow-sm">
                  <CheckCircle className="h-5 w-5 text-secondary mt-0.5 shrink-0" />
                  <p className="text-foreground/90">{p}</p>
                </div>
              ))}
            </div>
            <p className="mt-8 text-muted-foreground leading-relaxed italic border-l-4 border-accent pl-5 py-1">
              Social media is a marketplace and a megaphone — a tool on top of a skill. It was never meant to
              be the skill itself. When you have something real to offer, the internet becomes your office.
            </p>
          </div>
        </div>
      </section>

      {/* Our response */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex items-center gap-3 mb-10">
            <HeartHandshake className="h-8 w-8 text-accent" />
            <h2 className="text-3xl md:text-4xl font-bold">Our Answer at the Foundation</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {response.map((r, i) => (
              <div key={i} className="bg-white/10 border border-white/15 rounded-xl p-6">
                <h3 className="font-semibold text-lg mb-2 text-accent">{r.title}</h3>
                <p className="text-sm text-primary-foreground/80 leading-relaxed">{r.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-12 text-lg max-w-3xl leading-relaxed text-primary-foreground/90">
            Uganda does not need more connectivity. It needs a generation that commands the connection it
            already has — skilled, scam-proof, and paid for what it creates. That generation starts in Kyenjojo.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90">
              <Link href="/register" className="flex items-center gap-2">
                Join a Cohort <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white/40 hover:bg-white/10">
              <Link href="/fundraising" className="flex items-center gap-2">
                Partner With Us <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Sign-off */}
      <section className="py-16">
        <div className="container px-4 md:px-6 text-center max-w-2xl">
          <p className="text-xl md:text-2xl font-medium text-primary leading-relaxed">
            "I am proof that a youth from Kyenjojo can earn from the internet — with skills, not luck.
            My mission is to make proof unnecessary."
          </p>
          <p className="mt-6 font-semibold uppercase tracking-widest text-sm text-muted-foreground">
            Asiimwe Derick — Founder, Western Youth Tech Foundation
          </p>
        </div>
      </section>
    </div>
  );
}
