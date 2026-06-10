import Link from "next/link";
import { ReactNode } from "react";

type LegalPageLayoutProps = {
  title: string;
  lastUpdated: string;
  children: ReactNode;
};

export default function LegalPageLayout({ title, lastUpdated, children }: LegalPageLayoutProps) {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <Link href="/" className="mb-8 inline-block text-sm text-slate-500 hover:text-slate-900">
          ← Back to Peptivex
        </Link>
        <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 text-sm text-slate-500">
          Last updated: {lastUpdated}
        </p>
        <article className="prose prose-slate mt-10 max-w-none prose-h2:mt-12 prose-h2:text-2xl prose-h2:font-semibold prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline">
          {children}
        </article>
        <div className="mt-16 border-t border-slate-200 pt-8">
          <p className="text-sm text-slate-500">
            Questions? Contact us at <a href="mailto:peptivex@gmail.com" className="text-blue-600 hover:underline">peptivex@gmail.com</a>
          </p>
        </div>
      </div>
    </main>
  );
}