import type { SiteContent } from "@/lib/data";

/**
 * Only the networks Noah's Arc actively uses. X/Twitter was removed at the
 * organization's request.
 */
const ICONS = {
  facebook: (
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  ),
  instagram: (
    <>
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </>
  ),
} as const;

const LABELS = {
  facebook: "Facebook",
  instagram: "Instagram",
} as const;

type SocialLinksProps = {
  socials: SiteContent["topBar"]["socials"];
  size?: number;
  className?: string;
  linkClassName?: string;
};

/**
 * Renders only the networks that actually have a profile URL, so an unset
 * account never turns into a link that goes nowhere.
 */
export default function SocialLinks({
  socials,
  size = 14,
  className,
  linkClassName,
}: SocialLinksProps) {
  const entries = (Object.keys(ICONS) as (keyof typeof ICONS)[])
    .map((network) => [network, socials[network]?.trim()] as const)
    .filter(([, url]) => Boolean(url) && url !== "#");

  if (entries.length === 0) return null;

  return (
    <div className={className}>
      {entries.map(([network, url]) => (
        <a
          key={network}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={LABELS[network]}
          className={linkClassName}
        >
          <svg
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {ICONS[network]}
          </svg>
        </a>
      ))}
    </div>
  );
}
