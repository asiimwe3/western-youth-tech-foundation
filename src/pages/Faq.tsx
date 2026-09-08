import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronDown, MessageCircle, ArrowRight } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const faqs = [
  {
    q: "Is the ICT training at Western Youth Tech Foundation really free?",
    a: "Yes. Training is free for admitted students — it is funded through donations, partners, and the Foundation's own digital production work. We do not charge tuition or registration fees. If anyone asks you for money to 'register' with WYTF, that is a scam — apply only through this website or our official WhatsApp line, +256 762 306 675."
  },
  {
    q: "Where is the training located?",
    a: "Our flagship Central Tech Hub is in Kyenjojo District, in the Tooro region of Western Uganda. We are building a hub-and-spoke network to reach Kabarole, Kyegegwa, Kamwenge, Bunyangabu, and Ntoroko districts so youth can train close to home."
  },
  {
    q: "Who can apply? Do I need a degree or prior computer knowledge?",
    a: "Any young Ugandan aged roughly 16–30 can apply. You do not need a university degree or prior computer skills — cohorts start from digital foundations. We actively reserve places for female and disadvantaged youth to keep gender parity across programs."
  },
  {
    q: "What programs do you offer?",
    a: "Four tracks: Web & App Development, Data Analysis, Digital Marketing, and Advanced Vocational & Skilled Trades (electrical, solar, mechanical, agro-tech) — all taught with digital foundations and cyber-safety from week one."
  },
  {
    q: "How long does training take?",
    a: "Programs are cohort-based and typically run several months, moving from digital foundations through specialized skills to real client projects. Every graduate leaves with a portfolio, not just a certificate."
  },
  {
    q: "Will you help me find work after training?",
    a: "Yes — employment pipelines are core to the model. Graduates are placed into salaried roles, remote work, and DeryCode Technologies' client pipeline, and graduate-owned startups are incubated with mentorship and first contracts."
  },
  {
    q: "Why do you teach cyber-safety alongside tech skills?",
    a: "Uganda lost UGX 72 billion to cybercrime in 2024 and 1 in 3 mobile money users has been targeted by fraudsters. We believe digital skills without cyber-safety are incomplete — scam-pattern recognition, password discipline, and fraud reporting are foundation subjects in every cohort."
  },
  {
    q: "Can I donate or sponsor a student?",
    a: "Yes. It costs about $150 to train one student. Donations, corporate partnerships, equipment donations, and mentorship are all welcome — visit our fundraising page to see exactly how funds are used and how impact is tracked."
  },
  {
    q: "Can organizations partner with you for community training?",
    a: "Yes. We partner with schools, SACCOs, churches, district offices, and NGOs to deliver digital literacy and cyber-safety outreaches across Western Uganda. Reach us via the contact details in the footer or on WhatsApp."
  },
  {
    q: "How do I apply?",
    a: "Use the registration form on this website or message our intake line on WhatsApp at +256 762 306 675. Admission is cohort-based — applying early improves your chances of a place."
  }
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a }
    }))
  };

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-16">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Everything young Ugandans ask us about free ICT training in Kyenjojo, eligibility, programs, and staying safe online.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="container px-4 md:px-6 max-w-3xl">
          <div className="space-y-3">
            {faqs.map((f, i) => (
              <div key={i} className="bg-card border rounded-xl overflow-hidden shadow-sm">
                <button
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                  onClick={() => setOpen(open === i ? null : i)}
                  aria-expanded={open === i}
                >
                  <span className="font-semibold text-primary">{f.q}</span>
                  <ChevronDown className={`h-5 w-5 shrink-0 text-accent transition-transform ${open === i ? "rotate-180" : ""}`} />
                </button>
                {open === i && (
                  <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="px-5 pb-5 text-muted-foreground leading-relaxed text-sm">
                    {f.a}
                  </motion.p>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Button asChild className="bg-primary hover:bg-primary/90">
              <Link href="/register" className="flex items-center gap-2">Apply for Training <ArrowRight className="h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline">
              <a href="https://wa.me/256762306675" target="_blank" rel="noopener" className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4" /> WhatsApp +256 762 306 675
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
