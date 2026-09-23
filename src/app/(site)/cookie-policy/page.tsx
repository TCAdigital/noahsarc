import type { Metadata } from "next";

import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Policy | Noah’s Arc Organization",
  description:
    "How Noah’s Arc Organization uses cookies and similar technologies on this website.",
};

export default function CookiePolicy() {
  return (
    <LegalPage
      title="Cookie Policy"
      lastUpdated="September 2026"
      intro="This Cookie Policy explains how Noah’s Arc Organization may use cookies and similar technologies on our website."
    >
      <h2>What Are Cookies?</h2>
      <p>
        Cookies are small files that may be stored on your device when you visit
        a website. They can help a website function properly, remember
        preferences, understand how visitors use the site, and improve the
        visitor experience.
      </p>

      <h2>How We May Use Cookies</h2>
      <p>Our website may use:</p>
      <ul>
        <li>
          Essential cookies — needed for the website to function properly and
          securely.
        </li>
        <li>Preference cookies — used to remember choices or settings.</li>
        <li>
          Analytics cookies — used to understand how visitors use the website
          and which pages are most useful.
        </li>
        <li>
          Third-party cookies — which may be used by services embedded in or
          linked from the website, such as videos, forms, newsletter tools,
          maps, or other external services.
        </li>
      </ul>

      <h2>Cookies Currently in Use</h2>
      <p>
        This website does not use analytics, advertising, or other non-essential
        tracking technologies. No cookie banner is required while that remains
        the case. If Noah’s Arc later adds analytics, embedded video, marketing
        tools, or similar services, this policy will be updated and a cookie
        consent mechanism will be added.
      </p>

      <h2>Your Choices</h2>
      <p>
        Essential cookies may be used automatically because they are necessary
        for the website to work. Where required, non-essential cookies such as
        analytics or marketing cookies should not be activated until you have
        been given a choice. Visitors should be able to accept or reject
        non-essential cookies and change their preferences later.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        Some website functions may rely on third-party services. Those providers
        may use their own cookies or similar technologies. Their use of
        information is governed by their own privacy and cookie policies.
      </p>

      <h2>Changes to This Cookie Policy</h2>
      <p>
        We may update this Cookie Policy when the website or the services used
        on it change. The latest version will be posted on the website.
      </p>

      <h2>Questions</h2>
      <p>
        Questions about cookies or privacy may be sent to{" "}
        <a href="mailto:kenapuuli@gmail.com">kenapuuli@gmail.com</a>. See also
        our <a href="/privacy-policy">Privacy Policy</a>.
      </p>
    </LegalPage>
  );
}
