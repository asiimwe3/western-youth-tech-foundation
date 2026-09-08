import { Link } from "wouter";
import { AlertCircle, ArrowRight, GraduationCap, BookOpen, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-muted/30 py-24">
      <div className="container px-4 max-w-xl text-center">
        <div className="flex justify-center mb-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10">
            <AlertCircle className="h-8 w-8 text-primary" />
          </div>
        </div>
        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-2">404 — Page Not Found</p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">This page doesn't exist (yet)</h1>
        <p className="text-muted-foreground mb-8">
          The page you're looking for may have moved. Try one of these instead:
        </p>
        <div className="grid sm:grid-cols-3 gap-4 text-left">
          <Link href="/programs" className="bg-card border rounded-xl p-4 hover:shadow-md transition-shadow">
            <GraduationCap className="h-5 w-5 text-accent mb-2" />
            <p className="text-sm font-semibold text-primary">Programs</p>
          </Link>
          <Link href="/insights" className="bg-card border rounded-xl p-4 hover:shadow-md transition-shadow">
            <BookOpen className="h-5 w-5 text-accent mb-2" />
            <p className="text-sm font-semibold text-primary">Insights</p>
          </Link>
          <Link href="/faq" className="bg-card border rounded-xl p-4 hover:shadow-md transition-shadow">
            <HelpCircle className="h-5 w-5 text-accent mb-2" />
            <p className="text-sm font-semibold text-primary">FAQ</p>
          </Link>
        </div>
        <Button asChild className="mt-8 bg-primary hover:bg-primary/90">
          <Link href="/" className="flex items-center gap-2">
            Back to Home <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
