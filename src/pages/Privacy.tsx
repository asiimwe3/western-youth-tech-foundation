import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container px-4 md:px-6 max-w-3xl">
        <Link href="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>
        <h1 className="text-3xl md:text-4xl font-extrabold text-primary mb-2">Privacy Policy</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: 8 September 2026</p>

        <div className="space-y-6 text-foreground/90 leading-relaxed">
          <p>Western Youth Tech Foundation ("WYTF", "we", "us") operates this website and its training programs in Kyenjojo, Uganda. This policy explains what personal information we collect and how we use it.</p>

          <h2 className="text-xl font-bold text-primary pt-2">What we collect</h2>
          <p>When you apply for a cohort, register for updates, or contact us, we collect the details you provide: your name, contact details (phone, email, WhatsApp), age, district, and program interest. For donors, we keep a record of your contribution. We use basic, privacy-respecting analytics to understand site usage.</p>

          <h2 className="text-xl font-bold text-primary pt-2">How we use it</h2>
          <p>We use your information only to: process applications and admissions, communicate about programs you applied for, send the newsletter you subscribed to (you can unsubscribe anytime), acknowledge donations, and improve our programs. We never sell or rent your personal information to anyone.</p>

          <h2 className="text-xl font-bold text-primary pt-2">WhatsApp and phone communication</h2>
          <p>Our intake line (+256 762 306 675) receives applications and questions by WhatsApp. Standard messaging practices apply; your conversations with us stay on your device and ours and are never shared publicly.</p>

          <h2 className="text-xl font-bold text-primary pt-2">Your rights</h2>
          <p>You may ask us at any time to show you, correct, or delete the personal information we hold about you, by contacting our intake line. Application data is retained only as long as needed for admissions and program administration, and alumni records for impact tracking.</p>

          <h2 className="text-xl font-bold text-primary pt-2">Children and young applicants</h2>
          <p>Applicants aged under 18 require a parent or guardian's consent, collected during the application process. Safeguarding is a priority in all our programs.</p>

          <h2 className="text-xl font-bold text-primary pt-2">Contact</h2>
          <p>Questions about this policy: WhatsApp +256 762 306 675, Kyenjojo District, Tooro Region, Uganda.</p>
        </div>
      </div>
    </div>
  );
}
