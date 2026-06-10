import LegalPageLayout from "../components/LegalPageLayout";

export const metadata = {
  title: "Safety | Peptivex",
  description:
    "Peptivex's posture on safety, the limits of what we publish, and how to report a content concern.",
};

export default function SafetyPage() {
  return (
    <LegalPageLayout title="Safety" lastUpdated="June 9, 2026">
      <p>
        This page explains Peptivex&rsquo;s posture on safety, the limits of
        what we publish, and what to do if you have a concern about something
        on the Site.
      </p>

      <h2>1. Peptivex Is Not a Safety Authority</h2>
      <p>
        Peptivex summarizes the published research literature. It is not, and
        does not represent itself as, a safety monitoring body, an adverse-event
        reporting system, or a substitute for the regulatory agencies and
        licensed clinicians who actually evaluate safety for individual
        patients.
      </p>
      <p>
        If you are deciding whether a compound is safe for you, the only
        appropriate path is a conversation with a qualified, licensed
        healthcare professional who knows your full medical history.
      </p>

      <h2>2. Regulatory Status Matters</h2>
      <p>
        Many compounds discussed on Peptivex are investigational, off-label
        relative to their approved use, or not approved by the U.S. Food and
        Drug Administration or any comparable authority for any human
        indication. The Site labels indication status on every compound and
        compound-condition page so readers can see this context at a glance.
      </p>
      <p>
        Compounds that are not approved have, by definition, not completed the
        regulatory safety review required for marketing as a drug for human
        use. The absence of approval is itself a safety signal worth taking
        seriously.
      </p>

      <h2>3. What We Surface in Safety Sections</h2>
      <p>For every compound covered, we attempt to surface:</p>
      <ul>
        <li>Adverse events reported in clinical trials and case reports</li>
        <li>Known contraindications and cautions discussed in the literature</li>
        <li>Drug-drug, drug-condition, and population-specific considerations</li>
        <li>Pharmacovigilance signals from regulatory sources where available</li>
        <li>Negative, null, and mixed findings that complicate the safety picture</li>
        <li>Important gaps where safety data are absent or limited</li>
      </ul>
      <p>
        We try to present this neutrally rather than reassuringly. A short
        adverse-event list is often a sign of limited study, not of safety.
      </p>

      <h2>4. What We Do Not Provide</h2>
      <p>Peptivex does not provide:</p>
      <ul>
        <li>Personalized risk assessments</li>
        <li>Guidance on whether a specific compound is safe for a specific person</li>
        <li>Dose-by-dose safety thresholds</li>
        <li>Reconstitution, sterility, or injection technique instructions</li>
        <li>Sourcing or product-quality assessments</li>
        <li>Reassurance about products from any vendor or pharmacy</li>
      </ul>
      <p>Any AI features on the Site refuse requests in these categories.</p>

      <h2>5. Quality and Contamination Concerns</h2>
      <p>
        Compounds sold as &ldquo;research chemicals&rdquo; or sourced outside
        the licensed pharmaceutical supply chain can vary substantially in
        identity, purity, potency, and contamination profile. Peptivex does not
        evaluate, certify, or comment on the quality of any specific
        seller&rsquo;s product. The absence of comment in either direction is
        not an endorsement.
      </p>

      <h2>6. Reporting an Adverse Event</h2>
      <p>
        Peptivex does not collect or process adverse-event reports. If you or
        someone you know has experienced an adverse event related to a
        medication or compound:
      </p>
      <ul>
        <li>
          <strong>United States:</strong> Report to the FDA MedWatch program at{" "}
          <a href="https://www.fda.gov/safety/medwatch-fda-safety-information-and-adverse-event-reporting-program" target="_blank" rel="noopener noreferrer">fda.gov/medwatch</a>
        </li>
        <li><strong>Other countries:</strong> Report to your national pharmacovigilance authority</li>
        <li><strong>Medical emergency:</strong> Call 911 (U.S.) or your local emergency number immediately</li>
      </ul>

      <h2>7. Reporting a Content Concern</h2>
      <p>
        If you believe content on Peptivex is unsafe, misleading, materially
        incomplete, or otherwise raises a safety concern, please email
        peptivex@gmail.com with the subject line <strong>&ldquo;Content
        Concern.&rdquo;</strong>
      </p>
      <p>Useful information to include:</p>
      <ul>
        <li>The URL of the page in question</li>
        <li>The specific claim or framing you are concerned about</li>
        <li>Any citations or evidence supporting your concern</li>
        <li>Whether you would like a response</li>
      </ul>
      <p>
        We review good-faith content concerns and update content when
        warranted. We are not able to respond to every message, but we take
        safety-related concerns seriously.
      </p>

      <h2>8. Vulnerable Populations</h2>
      <p>
        The Site does not direct content to, and is not intended for use by:
      </p>
      <ul>
        <li>Anyone under 18 years of age</li>
        <li>Pregnant or breastfeeding individuals</li>
        <li>Individuals using the Site as a substitute for active clinical care</li>
      </ul>
      <p>
        Compounds discussed in adult research contexts may pose distinct risks
        to children, pregnancy, lactation, and other vulnerable populations
        that are not always quantified in the published literature.
      </p>

      <h2>9. AI Output and Safety</h2>
      <p>Any AI features on Peptivex are constrained to:</p>
      <ul>
        <li>Summarize published research only</li>
        <li>Refuse dosing, sourcing, protocol, stack, injection, and personal-recommendation requests</li>
        <li>Include indication status and safety context in responses where relevant</li>
        <li>Disclose when evidence is limited, mixed, or absent</li>
      </ul>
      <p>
        AI output can still be incomplete or wrong. AI output is not medical
        advice, is not a substitute for professional care, and should be
        cross-checked against cited sources before being relied on for any
        purpose.
      </p>

      <h2>10. Crisis Resources</h2>
      <p>
        Peptivex is a research-information site and is not equipped to respond
        to mental-health crises. If you are in crisis:
      </p>
      <ul>
        <li><strong>United States:</strong> Call or text <strong>988</strong> (Suicide and Crisis Lifeline)</li>
        <li><strong>International:</strong> Contact your local emergency services or a crisis line in your country</li>
      </ul>

      <h2>11. Contact</h2>
      <p>Safety concerns, content concerns, and questions:</p>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:peptivex@gmail.com">peptivex@gmail.com</a>
        <br />
        <strong>Subject line for safety/content concerns:</strong> &ldquo;Content
        Concern&rdquo;
      </p>
    </LegalPageLayout>
  );
}