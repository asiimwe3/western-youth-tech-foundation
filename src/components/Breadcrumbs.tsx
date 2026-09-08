import { Link, useLocation } from "wouter";
import { ChevronRight } from "lucide-react";

const NAMES: Record<string, string> = {
  "/about": "About",
  "/programs": "Programs",
  "/vision-mission": "Vision & Mission",
  "/founders-story": "Founder's Story",
  "/board": "Board",
  "/savings": "Save & Invest",
  "/register": "Apply",
  "/fundraising": "Donate",
  "/faq": "FAQ",
  "/insights": "Insights",
  "/privacy": "Privacy Policy",
  "/terms": "Terms of Service"
};

export function Breadcrumbs() {
  const [location] = useLocation();
  const path = location.replace(/\/$/, "");

  // Article pages: /insights/:slug
  const parts: { label: string; href?: string }[] = [{ label: "Home", href: "/" }];
  if (path.startsWith("/insights/")) {
    parts.push({ label: "Insights", href: "/insights" });
    parts.push({ label: "Article" });
  } else if (NAMES[path]) {
    parts.push({ label: NAMES[path] });
  } else {
    return null;
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: parts.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.label,
      item: `https://western-youth-tech-foundation.vercel.app${p.href ?? path}`
    }))
  };

  return (
    <nav aria-label="Breadcrumb" className="border-b bg-muted/30">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="container px-4 sm:px-6 lg:px-8 py-2.5">
        <ol className="flex items-center gap-1.5 text-xs text-muted-foreground overflow-x-auto whitespace-nowrap">
          {parts.map((p, i) => (
            <li key={i} className="flex items-center gap-1.5">
              {i > 0 && <ChevronRight className="h-3 w-3 shrink-0" />}
              {p.href ? (
                <Link href={p.href} className="hover:text-primary transition-colors">{p.label}</Link>
              ) : (
                <span className="text-foreground/80 font-medium">{p.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
