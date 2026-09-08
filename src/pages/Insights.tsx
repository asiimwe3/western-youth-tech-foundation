import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { articles } from "@/data/articles";

export default function Insights() {
  return (
    <div className="min-h-screen bg-background">
      <section className="bg-gradient-to-br from-primary to-primary/80 text-white py-16">
        <div className="container px-4 md:px-6">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Insights &amp; Knowledge Center</h1>
          <p className="text-lg text-white/80 max-w-2xl">
            Free, practical guides for Uganda's digital generation — coding roadmaps, online safety, digital careers, and the real online economy. Written by our team in Kyenjojo.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {articles.map((a, i) => (
              <motion.article
                key={a.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="bg-card border rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
              >
                <Link href={`/insights/${a.slug}`} data-testid={`article-card-${i}`}>
                  <div className="h-44 overflow-hidden">
                    <img src={a.image} alt={a.imageAlt} width="1200" height="630" loading="lazy" decoding="async" className="w-full h-full object-cover" />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-primary mb-2 leading-snug">{a.title}</h2>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{a.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {new Date(a.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</span>
                      <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {a.readMins} min read</span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary mt-3">
                      Read guide <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          <div className="mt-12 bg-muted/50 border rounded-xl p-6 text-center">
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Want this knowledge as structured training — with real client projects and mentorship?
            </p>
            <Link href="/register" className="inline-flex items-center gap-2 mt-3 font-semibold text-primary hover:text-primary/80">
              Apply for a free cohort <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
