import LegalPageLayout from "../components/LegalPageLayout";

export const metadata = {
  title: "Medical & Research Disclaimer | Peptivex",
  description:
    "Peptivex is a research-information platform. This disclaimer explains what that means and what it does not.",
};

export default function DisclaimerPage() {
  return (
    <LegalPageLayout
      title="Medical & Research Disclaimer"
      lastUpdated="June 9, 2026"
    >
      <p>
        This Medical &amp; Research Disclaimer applies to all content on
        peptivex.com (the &ldquo;Site&rdquo;), including all current and future
        research summaries, compound pages, condition pages, comparisons,
        evidence scores, methodology notes, and any AI-generated output.
      </p>

      <p>
        Read this carefully. Your use of the Site is subject to this Disclaimer,
        our Terms of Service, and our Privacy Policy.
      </p>

      <h2>1. The Site Is a Research-Information Platform</h2>
      <p>
        Peptivex organizes and summarizes publicly available scientific
        literature. The Site exists to help users understand what published
        research describes about specific compounds, conditions, mechanisms,
        trials, and safety considerations.
      </p>
      <p>The Site does not:</p>
      <ul>
        <li>Sell, dispense, supply, or refer users to sellers of any peptide or compound</li>
        <li>Prescribe, recommend, or arrange prescriptions for any compound</li>
        <li>Provide telehealth, consultations, or any other healthcare service</li>
        <li>Recommend that any person obtain, possess, administer, or use any compound</li>
      </ul>

      <h2>2. Not Medical Advice</h2>
      <p>
        Content on the Site is for general informational and research purposes
        only. It is <strong>not</strong> medical advice and is <strong>not</strong>{" "}
        intended to be a substitute for professional medical advice, diagnosis,
        or treatment.
      </p>
      <p>
        Always seek the advice of a qualified, licensed healthcare provider
        regarding any medical condition, medication, or health decision. Never
        disregard professional medical advice or delay seeking it because of
        something you read on the Site.
      </p>
      <p>
        If you think you may have a medical emergency, call your doctor or 911
        (or your local emergency number) immediately.
      </p>

      <h2>3. Regulatory Status of Compounds Discussed</h2>
      <p>Many compounds discussed on the Site are:</p>
      <ul>
        <li>Investigational and have not been approved by the U.S. Food and Drug Administration (FDA) or any comparable regulatory authority for any human indication</li>
        <li>Approved by the FDA only for specific indications and discussed elsewhere in the literature in off-label contexts</li>
        <li>Subject to active enforcement actions, import alerts, scheduling decisions, or other regulatory activity that may change at any time</li>
      </ul>
      <p>
        The presence of a compound on the Site is not, and should not be
        interpreted as, an endorsement of its safety, efficacy, legality, or
        appropriateness for any use.
      </p>
      <p>
        Some compounds discussed on the Site may be controlled substances or
        subject to other restrictions in your jurisdiction. You are responsible
        for understanding and complying with all laws applicable to you.
      </p>

      <h2>4. Evidence Scores Are Not Recommendations</h2>
      <p>
        The Site may display an evidence score, evidence level, or similar
        indicator for a compound or compound-condition pairing. These indicators
        describe the <strong>strength and maturity of published scientific
        evidence</strong> as of the date shown. They are <strong>not</strong>{" "}
        recommendations to use, purchase, or administer any compound. A high
        evidence score does not mean a compound is safe, effective, legal, or
        appropriate for you or anyone else.
      </p>

      <h2>5. No Dosing, Sourcing, or Administration Guidance</h2>
      <p>The Site does not provide and is not intended to provide:</p>
      <ul>
        <li>Dosing, dose calculation, titration, or cycling instructions</li>
        <li>Reconstitution, injection, route-of-administration, or storage instructions</li>
        <li>Stack or protocol design</li>
        <li>Sourcing, supplier, vendor, or purchasing information</li>
        <li>Personalized recommendations of any kind</li>
      </ul>
      <p>
        Any AI features on the Site are constrained to refuse requests in these
        categories.
      </p>

      <h2>6. Individual Variability</h2>
      <p>
        Responses to any compound vary widely between individuals based on
        genetics, comorbidities, concurrent medications, age, sex, and many
        other factors. Evidence drawn from groups in clinical trials does not
        predict outcomes for any specific individual.
      </p>

      <h2>7. Accuracy and Updates</h2>
      <p>
        We strive to summarize the literature accurately and to update content
        as new evidence becomes available. However:
      </p>
      <ul>
        <li>Scientific evidence evolves; content may become outdated</li>
        <li>Summaries necessarily simplify complex underlying studies</li>
        <li>Errors, omissions, and ambiguities may exist</li>
        <li>We make no warranty regarding the accuracy, completeness, or timeliness of any content</li>
      </ul>
      <p>
        If you believe any content is inaccurate, outdated, or misleading,
        please email peptivex@gmail.com with the subject line &ldquo;Content
        Concern.&rdquo;
      </p>

      <h2>8. No Doctor-Patient Relationship</h2>
      <p>
        Use of the Site, including any interaction with AI features, does not
        create a doctor-patient, pharmacist-patient, advisor-client, or any
        other professional relationship between you and Peptivex or any
        contributor to the Site.
      </p>

      <h2>9. Off-Label and Investigational Content</h2>
      <p>
        When the Site discusses uses of FDA-approved drugs outside their
        approved labeling, or discusses compounds that have not been approved
        for any indication, those discussions are descriptions of what published
        research reports. They are not endorsements, recommendations, or
        invitations to use any such compound or use.
      </p>

      <h2>10. International Users</h2>
      <p>
        The Site is operated from the United States. Drug-approval status,
        scheduling, and legality vary by country. Content on the Site may
        describe compounds that are legal, restricted, controlled, or illegal
        in your jurisdiction. You are solely responsible for compliance with
        local law.
      </p>

      <h2>11. Reporting Concerns</h2>
      <p>
        If you believe content on the Site is unsafe, misleading, or otherwise
        raises a concern, please email peptivex@gmail.com with the subject line
        &ldquo;Content Concern.&rdquo; We review and respond to legitimate
        concerns in good faith.
      </p>

      <h2>12. Acknowledgment</h2>
      <p>
        By using the Site, you acknowledge that you have read, understood, and
        agreed to this Disclaimer.
      </p>

      <h2>13. Contact</h2>
      <p>
        <strong>Email:</strong>{" "}
        <a href="mailto:peptivex@gmail.com">peptivex@gmail.com</a>
      </p>
    </LegalPageLayout>
  );
}