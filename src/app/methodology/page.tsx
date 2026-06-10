import LegalPageLayout from "../components/LegalPageLayout";

export const metadata = {
  title: "Methodology | Peptivex",
  description:
    "How Peptivex organizes and evaluates published scientific literature on peptides and longevity compounds.",
};

export default function MethodologyPage() {
  return (
    <LegalPageLayout title="Methodology" lastUpdated="June 9, 2026">
      <p>
        This page explains how Peptivex organizes and evaluates the scientific
        literature it summarizes. Methodology is published in the open because
        transparency is a core obligation of any research-information platform.
      </p>

      <h2>1. Scope</h2>
      <p>
        Peptivex covers peptides, GLP-1 receptor agonists, and other compounds
        discussed in the longevity, metabolic-health, and performance research
        literature. Coverage is selected based on:
      </p>
      <ul>
        <li>Volume and quality of published research</li>
        <li>Active or recently completed clinical trials</li>
        <li>Mechanistic relevance to indexed conditions</li>
        <li>Reader and practitioner interest</li>
      </ul>
      <p>Coverage decisions are not endorsements of any compound or use.</p>

      <h2>2. Sources</h2>
      <p>We prioritize, in order:</p>
      <ul>
        <li>Peer-reviewed publications indexed in PubMed and other reputable scientific databases</li>
        <li>Clinical trial registry entries (ClinicalTrials.gov, EU Clinical Trials Register, and equivalents)</li>
        <li>Regulatory documents (FDA, EMA, and equivalent agency labeling, briefing documents, and guidance)</li>
        <li>Reputable secondary sources where they aggregate or systematically review primary research</li>
      </ul>
      <p>We deprioritize or exclude:</p>
      <ul>
        <li>Vendor marketing materials</li>
        <li>Anecdotal forum and social-media content</li>
        <li>Affiliate-driven blogs</li>
        <li>Sources making promotional claims without primary citations</li>
      </ul>

      <h2>3. Indication Status Labels</h2>
      <p>
        Every compound and every compound-condition pairing is labeled with an
        indication status:
      </p>
      <ul>
        <li><strong>FDA-approved indication</strong> — the compound is approved by the U.S. Food and Drug Administration for the specified use</li>
        <li><strong>Off-label</strong> — the compound is FDA-approved for at least one indication but the discussion concerns a use outside that labeling</li>
        <li><strong>Investigational</strong> — the compound is being studied in registered human clinical trials but is not approved</li>
        <li><strong>Preclinical</strong> — research is limited to cell-culture, animal, or other non-human models</li>
        <li><strong>No established indication</strong> — no meaningful evidence supports use for the topic in question</li>
      </ul>
      <p>
        Status labels reflect U.S. regulatory status unless otherwise noted.
        Status can change; we update labels when we identify changes.
      </p>

      <h2>4. Evidence Levels</h2>
      <p>
        We assign every compound-condition pairing one of six evidence levels:
      </p>
      <ul>
        <li><strong>Level 5</strong> — FDA-approved indication or established standard-of-care use</li>
        <li><strong>Level 4</strong> — Multiple human randomized controlled trials, or strong replicated human studies</li>
        <li><strong>Level 3</strong> — Small human studies, observational data, or early clinical signal</li>
        <li><strong>Level 2</strong> — Animal data with coherent mechanistic rationale</li>
        <li><strong>Level 1</strong> — Mechanistic, in vitro, or theoretical rationale only</li>
        <li><strong>Level 0</strong> — No meaningful evidence; hype-driven, anecdotal, or unsubstantiated claims</li>
      </ul>
      <p>
        Evidence levels describe the <strong>strength and maturity of the
        published evidence base</strong>, not a recommendation. A higher level
        does not mean a compound is safe, effective, legal, or appropriate for
        anyone.
      </p>

      <h2>5. Peptivex Evidence Score</h2>
      <p>
        In addition to the evidence level, we may display a Peptivex Evidence
        Score on a 0.0–5.0 scale. The score is a weighted composite of the
        following components:
      </p>
      <ul>
        <li><strong>Human evidence quality</strong> — study design, randomization, blinding, sample size, endpoint validity</li>
        <li><strong>Human evidence replication</strong> — independent replication across studies and populations</li>
        <li><strong>Mechanistic plausibility</strong> — coherence between known mechanism and observed outcomes</li>
        <li><strong>Outcome consistency</strong> — agreement of effect direction and magnitude across studies</li>
        <li><strong>Safety clarity</strong> — completeness and quality of safety reporting in available studies</li>
        <li><strong>Recency</strong> — how current the evidence base is relative to the underlying biology</li>
        <li><strong>Regulatory maturity</strong> — approval status and stage of regulatory review</li>
      </ul>
      <p>
        The Peptivex Evidence Score is <strong>not</strong> an effectiveness
        score, a recommendation score, or a clinical decision tool. It
        summarizes the quality and maturity of published evidence and is
        intended as a research-orientation aid.
      </p>

      <h2>6. What We Show on Every Research Page</h2>
      <p>
        Every compound, condition, and compound-condition page is built to
        include:
      </p>
      <ul>
        <li>A plain-language research summary framed as &ldquo;what the literature shows&rdquo;</li>
        <li>Indication status</li>
        <li>Evidence level and, where applicable, the Peptivex Evidence Score</li>
        <li>Human-evidence and animal-evidence breakdown</li>
        <li>Key clinical trials with registry identifiers</li>
        <li>A safety and limitations section that surfaces negative, null, and mixed findings</li>
        <li>Citations to primary sources</li>
        <li>Related compounds and conditions</li>
        <li>A &ldquo;last reviewed&rdquo; date</li>
      </ul>

      <h2>7. What We Do Not Publish</h2>
      <p>Peptivex does not publish:</p>
      <ul>
        <li>Dosing, titration, cycling, or stacking instructions</li>
        <li>Reconstitution, injection, route-of-administration, or storage instructions</li>
        <li>Sourcing, supplier, vendor, or purchasing information</li>
        <li>Personalized recommendations of any kind</li>
        <li>Promotional claims, cure language, or treatment guarantees</li>
      </ul>
      <p>
        Any AI features on the Site are constrained to refuse requests in these
        categories.
      </p>

      <h2>8. Editorial Process</h2>
      <p>
        Research summaries are drafted with the assistance of large language
        models and reviewed against the cited primary sources before
        publication. We aim to:
      </p>
      <ul>
        <li>Use conservative framing (&ldquo;research suggests,&rdquo; &ldquo;limited evidence,&rdquo; &ldquo;preclinical only&rdquo;)</li>
        <li>Surface negative, null, and mixed findings where they exist</li>
        <li>Distinguish human evidence from animal and in vitro evidence</li>
        <li>Avoid extrapolating beyond what cited studies support</li>
      </ul>

      <h2>9. Updates and Corrections</h2>
      <p>
        Content is reviewed on a rolling basis. Each page shows a &ldquo;last
        reviewed&rdquo; date. If you identify an error, missing study, or
        misleading framing, please email peptivex@gmail.com with the subject
        line &ldquo;Content Concern.&rdquo;
      </p>

      <h2>10. Conflicts of Interest</h2>
      <p>
        Peptivex does not accept payment, sponsorship, or affiliate revenue
        from peptide vendors, compounding pharmacies, or any seller of
        compounds discussed on the Site. We do not run advertising for such
        products. Coverage decisions and evidence assessments are made
        independently of any commercial relationship.
      </p>

      <h2>11. Limitations of This Methodology</h2>
      <p>
        This methodology has real limits. Evidence levels and scores are
        judgments based on available data; reasonable experts can disagree.
        Coverage of the literature is not exhaustive. Translation between
        published research and individual decision-making is, and always must
        be, the role of a qualified licensed healthcare professional, not a
        research-information platform.
      </p>

      <h2>12. Contact</h2>
      <p>Methodology questions, suggestions, and corrections:</p>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:peptivex@gmail.com">peptivex@gmail.com</a>
      </p>
    </LegalPageLayout>
  );
}