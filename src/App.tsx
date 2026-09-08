import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { AuthProvider } from "@/contexts/AuthContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DeryCodeAd } from "@/components/DeryCodeAd";

import Home from "@/pages/Home";
import About from "@/pages/About";
import Programs from "@/pages/Programs";
import VisionMission from "@/pages/VisionMission";
import Fundraising from "@/pages/Fundraising";
import Board from "@/pages/Board";
import Register from "@/pages/Register";
import Savings from "@/pages/Savings";
import FoundersStory from "@/pages/FoundersStory";
import Faq from "@/pages/Faq";
import Insights from "@/pages/Insights";
import ArticlePage from "@/pages/ArticlePage";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { getArticle } from "@/data/articles";
import Privacy from "@/pages/Privacy";
import Terms from "@/pages/Terms";
import AuthPage from "@/pages/AuthPage";
import Dashboard from "@/pages/Dashboard";

const queryClient = new QueryClient();

const PAGES_WITHOUT_FOOTER = ["/login", "/dashboard"];

import { useEffect } from "react";
import { useLocation } from "wouter";

const PAGE_META: Record<string, { title: string; desc: string }> = {
  "/": {
    title: "Western Youth Tech Foundation | Free Digital & Vocational Skills Training in Uganda",
    desc: "Income-ready digital and vocational skills for young Ugandans — starting in Kyenjojo, scaling across the Tooro region. Sponsor a student for $150."
  },
  "/founders-story": {
    title: "Founder's Story — The Network Is Here. The Knowledge Is Not. | WYTF",
    desc: "Uganda's connectivity is not the challenge — the skills gap and lack of cyber-safety knowledge is. Read Asiimwe Derick's letter on why 40 million connections arrived without a manual."
  },
  "/register": {
    title: "Apply Now — Join a Free Tech Training Cohort in Kyenjojo | WYTF",
    desc: "Apply for ICT and vocational training at Western Youth Tech Foundation's Kyenjojo hub. Web development, data analysis, digital marketing, and trades — cohorts keep 50/50 gender parity."
  },
  "/programs": {
    title: "Training Programs — Web Dev, Data Analysis, Digital Marketing | WYTF",
    desc: "Four program tracks co-designed with working engineers from DeryCode: Web & App Development, Data Analysis, Digital Marketing, and vocational trades with digital foundations."
  },
  "/about": {
    title: "About Us — Uganda's Next Technology Corridor | WYTF",
    desc: "Uganda's under-30 majority is a high-yield investment, not a charity case. Learn how WYTF is building Western Uganda into the country's next technology corridor."
  },
  "/vision-mission": {
    title: "Vision & Mission — Opportunity Lives Next Door | WYTF",
    desc: "A Uganda where talent is born everywhere and opportunity lives next door. Hubs across Tooro, industry-aligned curricula, and employment pipelines for every graduate."
  },
  "/fundraising": {
    title: "Donate — Train a Ugandan Youth for $150 | WYTF",
    desc: "Transparent impact metrics, graduate income tracking, and first-look hiring access for partners. $150 trains one student. Invest in Uganda's digital generation."
  },
  "/savings": {
    title: "Save & Invest — Youth Savings Groups | WYTF",
    desc: "Savings and investment groups for young Ugandans building capital together — financial literacy, collective savings, and small business micro-investment."
  },
  "/faq": {
    title: "FAQ — Free ICT Training in Kyenjojo, Uganda | WYTF",
    desc: "Is the ICT training really free? Who can apply? What programs are offered? Answers for Ugandan youth on free digital skills training, cyber-safety, and how to apply in Kyenjojo."
  },
  "/insights": {
    title: "Insights & Free Guides — Coding, Online Safety, Digital Careers | WYTF",
    desc: "Free practical guides for Uganda's digital generation: learn coding in Uganda, avoid online scams, earn online safely beyond social media, and close the digital skills gap."
  },
  "/board": {
    title: "Board & Leadership | Western Youth Tech Foundation",
    desc: "Meet the team leading Western Youth Tech Foundation's mission across the Tooro region."
  }
};

function usePageMeta() {
  const [location] = useLocation();
  useEffect(() => {
    const clean = location.replace(/\/$/, "");
    const articleMatch = clean.match(/^\/insights\/(.+)$/);
    const article = articleMatch ? getArticle(articleMatch[1]) : undefined;
    const meta = article
      ? { title: article.title + " | WYTF", desc: article.excerpt }
      : PAGE_META[clean] || PAGE_META["/"];
    document.title = meta.title;
    let tag = document.querySelector('meta[name="description"]');
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("name", "description");
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", meta.desc);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    ogTitle && ogTitle.setAttribute("content", meta.title);
    const ogDesc = document.querySelector('meta[property="og:description"]');
    ogDesc && ogDesc.setAttribute("content", meta.desc);
  }, [location]);
}

function Router() {
  usePageMeta();
  const path = typeof window !== "undefined" ? window.location.pathname : "/";
  const hideFooter = PAGES_WITHOUT_FOOTER.some((p) => path.endsWith(p));

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Breadcrumbs />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/programs" component={Programs} />
          <Route path="/vision-mission" component={VisionMission} />
          <Route path="/fundraising" component={Fundraising} />
          <Route path="/board" component={Board} />
          <Route path="/founders-story" component={FoundersStory} />
          <Route path="/faq" component={Faq} />
          <Route path="/insights" component={Insights} />
          <Route path="/insights/:slug" component={ArticlePage} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/terms" component={Terms} />
          <Route path="/register" component={Register} />
          <Route path="/savings" component={Savings} />
          <Route path="/login" component={AuthPage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route component={NotFound} />
        </Switch>
      </main>
      {!hideFooter && <Footer />}
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
            <Router />
          </WouterRouter>
          <Toaster />
          <DeryCodeAd />
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default App;
