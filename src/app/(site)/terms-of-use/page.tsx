import type { Metadata } from "next";

import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Use | Noah’s Arc Organization",
  description:
    "The terms that apply to your use of the Noah’s Arc Organization website.",
};

export default function TermsOfUse() {
  return (
    <LegalPage
      title="Terms of Use"
      lastUpdated="September 2026"
      intro="These Terms of Use apply to your use of the Noah’s Arc Organization website. By using this website, you agree to use it lawfully and respectfully."
    >
      <h2>Website Information</h2>
      <p>
        We work to keep information on this website accurate and current, but
        programs, project costs, student numbers, visit details, sponsorship
        needs, and other information may change. Noah’s Arc may update website
        content at any time.
      </p>

      <h2>Donations and Sponsorship</h2>
      <p>
        Donations and sponsorship support the work of Noah’s Arc Organization.
        U.S. donors may choose to give through ThinSpace Africa. Direct donation
        options may also be available through Noah’s Arc. Tax treatment depends
        on the organization receiving the donation and the donor’s individual
        circumstances. Donors should retain receipts and consult their own tax
        adviser when needed.
      </p>

      <h2>External Links and Services</h2>
      <p>
        This website may link to third-party websites or services, including
        payment processors, social media platforms, maps, or partner
        organizations. Noah’s Arc is not responsible for the content, privacy
        practices, security, or availability of external websites and services.
      </p>

      <h2>Photos, Stories and Content</h2>
      <p>
        Unless otherwise stated, website text, photographs, graphics, and other
        materials are provided for information about Noah’s Arc and its work.
        They may not be copied, republished, or used for commercial purposes
        without permission, except where permitted by law.
      </p>

      <h2>Respectful Use</h2>
      <p>
        Visitors may not use the website to submit unlawful, abusive,
        threatening, fraudulent, or harmful content, interfere with the
        operation or security of the site, or misuse contact forms or other
        website functions.
      </p>

      <h2>No Guarantee of Availability</h2>
      <p>
        We aim to keep the website available and functioning, but we cannot
        guarantee uninterrupted access or that every feature will always be
        available.
      </p>

      <h2>Changes to These Terms</h2>
      <p>
        We may update these Terms of Use as the website or our operations
        change. The latest version will be posted on the website.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about these Terms may be sent to{" "}
        <a href="mailto:kenapuuli@gmail.com">kenapuuli@gmail.com</a>.
      </p>
    </LegalPage>
  );
}
