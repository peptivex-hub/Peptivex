"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { supabase } from "../../lib/supabase";

const ROLES = [
  "Healthcare Provider",
  "Researcher",
  "Independent Researcher",
  "Clinic Owner",
  "Investor",
  "Other",
];

const RESEARCH_INTERESTS = [
  "Weight Loss / Metabolic Health",
  "Longevity",
  "Performance",
  "Recovery / Injury",
  "Gut Health / Inflammation",
  "Cognitive Health",
  "Hormone Optimization",
  "General Research",
];

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [interest, setInterest] = useState("");
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [agreedToDisclaimer, setAgreedToDisclaimer] = useState(false);

  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const canSubmit =
    email.trim().length > 0 &&
    agreedToTerms &&
    agreedToDisclaimer &&
    status !== "submitting";

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;

    setStatus("submitting");
    setErrorMessage("");

    const { error } = await supabase.from("waitlist_signups").insert({
      email: email.trim().toLowerCase(),
      role: role || null,
      research_interest: interest || null,
      agreed_to_terms: agreedToTerms,
      agreed_to_disclaimer: agreedToDisclaimer,
      user_agent:
        typeof window !== "undefined" ? window.navigator.userAgent : null,
    });

    if (error) {
      // Special-case the unique-email error so the user sees a friendly message
      if (error.code === "23505" || error.message?.toLowerCase().includes("duplicate")) {
        setStatus("success"); // treat duplicate as success - they're already on the list
        return;
      }
      setStatus("error");
      setErrorMessage(
        "Something went wrong. Please try again, or email peptivex@gmail.com."
      );
      return;
    }

    setStatus("success");
  }

  // SUCCESS STATE
  if (status === "success") {
    return (
      <div className="rounded-2xl border border-slate-700 bg-slate-900/60 p-8 backdrop-blur-sm sm:p-10">
        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500/20">
          <svg
            className="h-6 w-6 text-emerald-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-white sm:text-3xl">
          You&rsquo;re on the list.
        </h3>
        <p className="mt-4 text-slate-300">
          Thanks for joining the Peptivex waitlist. We&rsquo;ll email you when
          early access opens.
        </p>
        <p className="mt-4 text-sm text-slate-400">
          While you wait: Peptivex is a research-information platform. We will
          never sell, prescribe, or recommend peptides or other compounds. When
          we launch, you&rsquo;ll get access to citation-first compound
          research, evidence scoring, and clinical-trial tracking.
        </p>
      </div>
    );
  }

  // FORM
  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-slate-700 bg-slate-900/60 p-6 backdrop-blur-sm sm:p-8"
    >
      <h3 className="text-2xl font-bold text-white sm:text-3xl">
        Request Early Access
      </h3>
      <p className="mt-2 text-sm text-slate-400">
        Get notified when Peptivex launches.
      </p>

      <div className="mt-6 space-y-4">
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-300">
            Email address <span className="text-red-400">*</span>
          </label>
          <input
            type="email"
            id="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="mt-2 block w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white placeholder-slate-500 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        {/* Role */}
        <div>
          <label htmlFor="role" className="block text-sm font-medium text-slate-300">
            I am a...
          </label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="mt-2 block w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="">Select a role</option>
            {ROLES.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>

        {/* Research interest */}
        <div>
          <label htmlFor="interest" className="block text-sm font-medium text-slate-300">
            Primary research interest
          </label>
          <select
            id="interest"
            value={interest}
            onChange={(e) => setInterest(e.target.value)}
            className="mt-2 block w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-white focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="">Select an interest</option>
            {RESEARCH_INTERESTS.map((r) => (
              <option key={r} value={r}>
                {r}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Consent checkboxes */}
      <div className="mt-6 space-y-3">
        <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-slate-700 bg-slate-950/60 p-4">
          <input
            type="checkbox"
            checked={agreedToTerms}
            onChange={(e) => setAgreedToTerms(e.target.checked)}
            className="mt-0.5 h-5 w-5 flex-shrink-0 cursor-pointer accent-blue-500"
          />
          <span className="text-sm text-slate-300">
            I have read and agree to the{" "}
            <Link href="/terms" className="text-blue-400 underline hover:text-blue-300">
              Terms of Service
            </Link>
            ,{" "}
            <Link href="/privacy" className="text-blue-400 underline hover:text-blue-300">
              Privacy Policy
            </Link>
            , and{" "}
            <Link href="/disclaimer" className="text-blue-400 underline hover:text-blue-300">
              Medical &amp; Research Disclaimer
            </Link>
            .
          </span>
        </label>

        <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-slate-700 bg-slate-950/60 p-4">
          <input
            type="checkbox"
            checked={agreedToDisclaimer}
            onChange={(e) => setAgreedToDisclaimer(e.target.checked)}
            className="mt-0.5 h-5 w-5 flex-shrink-0 cursor-pointer accent-blue-500"
          />
          <span className="text-sm text-slate-300">
            I understand Peptivex is a research-information platform and does{" "}
            <strong className="text-white">not</strong> sell, prescribe,
            recommend, or supply peptides or other compounds.
          </span>
        </label>
      </div>

      {/* Error message */}
      {status === "error" && (
        <div className="mt-4 rounded-lg border border-red-500/50 bg-red-500/10 p-4 text-sm text-red-300">
          {errorMessage}
        </div>
      )}

      {/* Submit button */}
      <button
        type="submit"
        disabled={!canSubmit}
        className="mt-6 w-full rounded-lg bg-white px-6 py-3 text-base font-semibold text-slate-900 transition hover:bg-slate-200 disabled:cursor-not-allowed disabled:bg-slate-600 disabled:text-slate-400"
      >
        {status === "submitting" ? "Submitting..." : "Request Early Access"}
      </button>

      <p className="mt-4 text-xs text-slate-500">
        By submitting, you confirm you are 18 or older. We will email you about
        Peptivex launches and updates. You can unsubscribe at any time.
      </p>
    </form>
  );
}