import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Code, LineChart, Megaphone, Wrench, Users, Globe, BookOpen, HandHeart, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-primary/90">
        <div className="absolute inset-0 z-0">
          <img 
            src="/hero-bg.webp" 
            alt="Youth collaborating on technology at the Western Youth Tech Foundation hub in Kyenjojo, Uganda"
            width="1408" height="768"
            fetchPriority="high" decoding="async"
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />
        </div>
        
        <div className="container relative z-10 px-4 md:px-6">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={stagger}
            className="max-w-4xl mx-auto text-center space-y-8"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 bg-white/10 border border-white/20 rounded-full px-4 py-2 text-white/90 text-sm font-medium">
              <MapPin className="h-4 w-4 text-accent" />
              Western Uganda · Tooro Region — Uganda First, Tech for Uganda
            </motion.div>

            <motion.h1 
              variants={fadeIn}
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight"
            >
              Uganda First: Powering Western Uganda's Next Generation of <span className="text-accent">Tech Innovators</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeIn}
              className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl mx-auto font-medium"
            >
              Based in Kyenjojo and rooted in the Tooro region, we train young Ugandans in real digital skills and trades — then plug them straight into Uganda's growing tech economy through jobs, freelance work, and their own businesses. Backed by DeryCode Technologies, our graduates learn on real client projects, not classroom theory.
            </motion.p>
            
            <motion.div 
              variants={fadeIn}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <Button asChild size="lg" className="w-full sm:w-auto h-14 px-8 text-lg bg-accent text-accent-foreground hover:bg-accent/90" data-testid="hero-button-donate">
                <Link href="/fundraising">Support Our Mission</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto h-14 px-8 text-lg bg-transparent border-white text-white hover:bg-white/10" data-testid="hero-button-learn">
                <Link href="/programs">Explore Programs</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-muted">
            <div className="text-center px-4">
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">200+</p>
              <p className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider">Youth in Year 1</p>
            </div>
            <div className="text-center px-4">
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">4</p>
              <p className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider">Program Tracks</p>
            </div>
            <div className="text-center px-4">
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">2,500+</p>
              <p className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider">Target by Year 3</p>
            </div>
            <div className="text-center px-4">
              <p className="text-4xl md:text-5xl font-bold text-primary mb-2">40%</p>
              <p className="text-sm md:text-base text-muted-foreground font-medium uppercase tracking-wider">Self-Funded by Yr 3</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Disciplinary Pathways to Success</h2>
            <p className="text-lg text-muted-foreground">
              Four career tracks built for Uganda's economy — software, data, digital marketing, and skilled trades. Every graduate finishes with a portfolio of real Ugandan client work and a path to income.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Full-Stack Web Development",
                desc: "UI/UX principles, HTML5, CSS3, and modern JavaScript frameworks — taught by working DeryCode engineers. Students exit with a live portfolio built on real Ugandan client projects.",
                icon: <Code className="h-6 w-6 text-primary" />,
                image: "/program-web.webp"
              },
              {
                title: "Data Analysis & Business Intelligence",
                desc: "Spreadsheets, SQL, and data visualization — the exact skills Ugandan banks, SACCOs, and SMEs are hiring and outsourcing for right now.",
                icon: <LineChart className="h-6 w-6 text-secondary" />,
                image: "/program-data.webp"
              },
              {
                title: "Digital Marketing Mastery",
                desc: "SEO, social media, and conversion optimization. Graduates service real Ugandan SMEs — shops, hotels, schools — and can scale to international remote clients.",
                icon: <Megaphone className="h-6 w-6 text-accent" />,
                image: "/program-marketing.webp"
              },
              {
                title: "Advanced Vocational & Skilled Trades",
                desc: "Electrical installation, solar deployment, mechanical repair, and agro-tech — the trades powering Western Uganda's farms, factories, and homes.",
                icon: <Wrench className="h-6 w-6 text-primary" />,
                image: "/program-vocational.webp"
              }
            ].map((program, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
              >
                <Card className="h-full overflow-hidden border-border hover:shadow-lg transition-all duration-300 group" data-testid={`program-card-${i}`}>
                  <div className="h-44 overflow-hidden relative">
                    <img src={program.image} alt={program.title} width="900" height="490" loading="lazy" decoding="async" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    <div className="absolute top-4 left-4 bg-white p-2 rounded-lg shadow-md">
                      {program.icon}
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="text-lg font-bold mb-2 leading-snug">{program.title}</h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{program.desc}</p>
                    <Button variant="link" className="px-0 text-primary hover:text-primary/80 font-semibold group-hover:translate-x-1 transition-transform text-sm" asChild>
                      <Link href="/programs">
                        Learn details <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90" data-testid="button-view-all-programs">
              <Link href="/programs">View All Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Hub & Spoke Model */}
      <section className="py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold text-secondary border-secondary/20 bg-secondary/10 uppercase tracking-wider">
                Implementation Model
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
                The Hub & Spoke Approach
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Physical Central Tech Hubs in Kyenjojo provide high-speed power and connectivity backups with modular solar-array battery integration. Branch Spokes use lighter, offline-first digital learning nodes embedded in community halls, maximizing geographic scale without exponential real estate costs.
              </p>
              <ul className="space-y-3">
                {[
                  "Commercial-grade satellite and localized mesh networks",
                  "Solar-powered zero-downtime infrastructure",
                  "Lean-client hardware optimized for low power and long lifecycle",
                  "Offline-first learning nodes for remote communities"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground">
                    <span className="h-5 w-5 rounded-full bg-secondary/20 text-secondary flex items-center justify-center mt-0.5 shrink-0 text-xs font-bold">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild size="lg" className="bg-primary text-primary-foreground" data-testid="hub-learn-more">
                <Link href="/about">Learn About Our Approach</Link>
              </Button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-video lg:aspect-square rounded-2xl overflow-hidden shadow-2xl relative">
                <img src="/about-bg.webp" alt="Students learning computer skills at a community training center in Kyenjojo, Western Uganda" width="1400" height="763" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              
              <div className="absolute -bottom-6 -left-6 md:-left-12 bg-white p-6 rounded-xl shadow-xl border max-w-[240px]">
                <div className="flex items-center gap-4 mb-2">
                  <div className="h-10 w-10 bg-accent rounded-full flex items-center justify-center text-accent-foreground">
                    <HandHeart className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-primary">40%</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground font-medium leading-tight">self-funded through social enterprise revenue by Year 3</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Three Foundational Pillars</h2>
            <p className="text-lg text-muted-foreground">Three pillars designed to generate measurable, lasting change across Western Uganda — one district at a time.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="h-10 w-10 text-primary" />,
                title: "Equitable Access",
                desc: "No Ugandan youth left behind by geography or school fees. We bring technical training directly to towns and villages across the Tooro region — starting in Kyenjojo."
              },
              {
                icon: <BookOpen className="h-10 w-10 text-secondary" />,
                title: "Market Relevancy",
                desc: "Curricula built with DeryCode's working engineers and updated against what Uganda's employers actually hire for — so graduates are employable the day they certify."
              },
              {
                icon: <Users className="h-10 w-10 text-accent" />,
                title: "Sustained Independence",
                desc: "Graduates exit into salaried jobs, remote freelance careers, or their own micro-enterprises serving Ugandan businesses — economic independence at home, not migration."
              }
            ].map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="bg-white rounded-2xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow"
                data-testid={`pillar-card-${i}`}
              >
                <div className="mb-5">{pillar.icon}</div>
                <h3 className="text-xl font-bold mb-3">{pillar.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{pillar.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        <div className="container relative z-10 px-4 md:px-6 text-center max-w-4xl mx-auto">
          <Globe className="h-16 w-16 mx-auto mb-8 text-accent opacity-80" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Invest in Uganda's Next Tech Generation</h2>
          <p className="text-xl text-primary-foreground/90 mb-4 max-w-2xl mx-auto">
            Investors and donors: fund a transparent, high-impact pipeline that turns Western Ugandan youth into certified tech professionals — with DeryCode Technologies' business network ready to absorb them. Youth in the Tooro region: this is your invitation to learn real skills, earn from real clients, and build Uganda's future at home.
          </p>
          <p className="text-primary-foreground/70 mb-10 flex items-center justify-center gap-2 text-sm">
            <Mail className="h-4 w-4" /> deriick.asimwe849@gmail.com &nbsp;|&nbsp; <MapPin className="h-4 w-4" /> Central Block, Kyenjojo District, Western Uganda
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="h-14 px-8 text-lg bg-accent text-accent-foreground hover:bg-accent/90" data-testid="cta-donate">
              <Link href="/fundraising">Make a Donation</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg bg-transparent border-white text-white hover:bg-white/10" data-testid="cta-partner">
              <Link href="/fundraising">Secure Partnership Package</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
