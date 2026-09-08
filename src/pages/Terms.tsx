import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function Terms() {
  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container px-4 md:px-6 max-w-3xl">
        <Link href="/" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary mb-8">
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>
        <h1 className="text-3xl md:text-4xl font-extrabold text-primary mb-2">Terms of Service</h1>
        <p className="text-sm text-muted-foreground mb-10">Last updated: 8 September 2026</p>

        <div className="space-y-6 text-foreground/90 leading-relaxed">
          <p>These terms govern your use of the Western Youth Tech Foundation website and enrollment in our programs.</p>

          <h2 className="text-xl font-bold text-primary pt-2">Training programs</h2>
          <p>Admission is cohort-based and subject to capacity and eligibility checks. Training is free for admitted students, but attendance and participation expectations apply, and places may be withdrawn for misconduct or repeated absence.</p>

          <h2 className="text-xl font-bold text-primary pt-2">No payment is ever required to apply</h2>
          <p>WYTF does not charge application or registration fees. Anyone demanding payment "on behalf of" the Foundation is committing fraud — report them to us immediately on +256 762 306 675.</p>

          <h2 className="text-xl font-bold text-primary pt-2">Website content</h2>
          <p>Articles and guides on this site are provided for general education. While we work to keep information accurate and current, we make no warranty of completeness. Nothing on this site is financial or investment advice.</p>

          <h2 className="text-xl font-bold text-primary pt-2">Intellectual property</h2>
          <p>Site content, branding, and materials are owned by WYTF and may be shared for educational, non-commercial use with attribution. Student projects belong to the students who build them; client projects to the clients who commissioned them.</p>

          <h2 className="text-xl font-bold text-primary pt-2">Code of conduct</h2>
          <p>All participants, mentors, staff, and partners are expected to treat one another with respect. Harassment, fraud, or misuse of Foundation resources leads to removal from programs.</p>
        </div>
      </div>
    </div>
  );
}
