"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const STORAGE_KEY = "peptivex_disclaimer_acknowledged_v1";

export default function DisclaimerModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [acknowledged, setAcknowledged] = useState(false);

  // On mount, check if the user has already acknowledged
  useEffect(() => {
    try {
      const seen = localStorage.getItem(STORAGE_KEY);
      if (!seen) {
        setIsOpen(true);
      }
    } catch {
      // localStorage unavailable (private browsing, etc.) — show modal anyway
      setIsOpen(true);
    }
  }, []);

  // Lock body scroll while the modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleContinue = () => {
    if (!acknowledged) return;
    try {
      localStorage.setItem(STORAGE_KEY, new Date().toISOString());
    } catch {
      // ignore storage errors
    }
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 px-4 py-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-modal-title"
    >
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-xl bg-white p-8 shadow-2xl sm:p-10">
        <h2
          id="disclaimer-modal-title"
          className="text-2xl font-bold text-slate-900 sm:text-3xl"
        >
          Before you continue
        </h2>

        <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-700 sm:text-base">
          <p>
            Peptivex is a research-information platform. We summarize published
            scientific research and clinical trials.{" "}
            <strong className="text-slate-900">
              We do not sell, prescribe, supply, or recommend the use of any
              peptide or compound.
            </strong>
          </p>

          <p>
            Content on Peptivex is for general informational and research
            purposes only. It is{" "}
            <strong className="text-slate-900">not medical advice</strong> and
            is not a substitute for consultation with a qualified, licensed
            healthcare professional.
          </p>

          <p>
            Many compounds discussed on Peptivex are investigational, off-label,
            or not approved by the FDA for any indication. Nothing on this site
            should be interpreted as recommending human use of any compound.
          </p>
        </div>

        <label className="mt-8 flex cursor-pointer items-start gap-3 rounded-lg border border-slate-200 bg-slate-50 p-4">
          <input
            type="checkbox"
            checked={acknowledged}
            onChange={(e) => setAcknowledged(e.target.checked)}
            className="mt-1 h-5 w-5 flex-shrink-0 cursor-pointer accent-blue-600"
          />
          <span className="text-sm text-slate-700">
            I understand Peptivex is a research-information platform, not a
            source of medical advice, prescriptions, dosing, or sourcing.
          </span>
        </label>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/disclaimer"
            className="text-sm text-blue-600 hover:underline"
          >
            Read the full Medical & Research Disclaimer →
          </Link>

          <button
            type="button"
            onClick={handleContinue}
            disabled={!acknowledged}
            className="rounded-lg bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            Continue to Peptivex
          </button>
        </div>
      </div>
    </div>
  );
}