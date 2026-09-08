import { Link, useRoute } from "wouter";
import { ArrowRight, Calendar, Clock, ShieldCheck, GraduationCap, ArrowLeft } from "lucide-react";
import { getArticle, articles } from "@/data/articles";
import { Button } from "@/components/ui/button";
import NotFound from "@/pages/not-found";

export default function ArticlePage() {
  const [match, params] = useRoute("/insights/:slug");
  const article = params ? getArticle(params.slug) : undefined;

  if (!match || !article) return <NotFound />;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    dateModified: article.date,
    image: `https://western-youth-tech-foundation.vercel.app${article.image}`,
    keywords: article.keywords.join(", "),
    author: {
      "@type": "Person",
      "name": "Asiimwe Derick",
      "url": "https://western-youth-tech-foundation.vercel.app/founders-story"
    },
    publisher: {
      "@type": "NGO",
      "name": "Western Youth Tech Foundation",
      "logo": { "@type": "ImageObject", "url": "https://western-youth-tech-foundation.vercel.app/wytf-mark.png" }
    },
    mainEntityOfPage: `https://western-youth-tech-foundation.vercel.app/insights/${article.slug}`
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://western-youth-tech-foundation.vercel.app/" },
      { "@type": "ListItem", position: 2, name: "Insights", item: "https://western-youth-tech-foundation.vercel.app/insights" },
      { "@type": "ListItem", position: 3, name: article.title, item: `https://western-youth-tech-foundation.vercel.app/insights/${article.slug}` }
    ]
  };

  const related = articles.filter((a) => a.slug !== article.slug).slice(0, 2);

  return (
    <div className="min-h-screen bg-background">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <article className="py-14">
        <div className="container px-4 md:px-6 max-w-3xl">
          <Link href="/insights" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-8">
            <ArrowLeft className="h-4 w-4" /> All insights
          </Link>

          <h1 className="text-3xl md:text-4xl font-extrabold text-primary leading-tight mb-4">{article.title}</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> {new Date(article.date).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {article.readMins} min read</span>
            <span>By Asiimwe Derick</span>
          </div>

          <img src={article.image} alt={article.imageAlt} width="1200" height="630" className="w-full rounded-xl mb-10 shadow-md" fetchPriority="high" decoding="async" />

          <div className="space-y-5">
            {article.blocks.map((b, i) =>
              b.h ? (
                <h2 key={i} className="text-2xl font-bold text-primary pt-4">{b.h}</h2>
              ) : (
                <p key={i} className="text-foreground/90 leading-relaxed">{b.p}</p>
              )
            )}
          </div>

          {/* Internal links: article → programs / register / founder */}
          <div className="grid sm:grid-cols-3 gap-4 mt-14">
            <Link href="/programs" className="bg-card border rounded-xl p-5 hover:shadow-md transition-shadow">
              <GraduationCap className="h-6 w-6 text-accent mb-2" />
              <p className="font-semibold text-primary text-sm">Explore Our Programs</p>
              <p className="text-xs text-muted-foreground mt-1">Free ICT &amp; vocational training in Kyenjojo.</p>
            </Link>
            <Link href="/register" className="bg-card border rounded-xl p-5 hover:shadow-md transition-shadow">
              <ShieldCheck className="h-6 w-6 text-accent mb-2" />
              <p className="font-semibold text-primary text-sm">Apply for a Cohort</p>
              <p className="text-xs text-muted-foreground mt-1">Registration is free — cohorts admit regularly.</p>
            </Link>
            <Link href="/founders-story" className="bg-card border rounded-xl p-5 hover:shadow-md transition-shadow">
              <ArrowRight className="h-6 w-6 text-accent mb-2" />
              <p className="font-semibold text-primary text-sm">The Founder's Story</p>
              <p className="text-xs text-muted-foreground mt-1">Why skills, not connectivity, is Uganda's gap.</p>
            </Link>
          </div>

          {/* Related articles */}
          <div className="mt-14">
            <h2 className="text-xl font-bold text-primary mb-4">Keep reading</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {related.map((r) => (
                <Link key={r.slug} href={`/insights/${r.slug}`} className="bg-card border rounded-xl p-5 hover:shadow-md transition-shadow">
                  <p className="font-semibold text-primary text-sm leading-snug">{r.title}</p>
                  <p className="text-xs text-muted-foreground mt-2 line-clamp-2">{r.excerpt}</p>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-10 bg-primary text-primary-foreground rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm font-medium">Get the full training — free, structured, with real client projects.</p>
            <Button asChild className="bg-accent hover:bg-accent/90 text-primary shrink-0">
              <Link href="/register">Apply Now</Link>
            </Button>
          </div>
        </div>
      </article>
    </div>
  );
}
