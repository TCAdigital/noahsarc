import Link from "next/link";
import type { ReactNode } from "react";

/**
 * CTA targets come from the CMS, so they can be an internal route, an anchor,
 * or an external URL. External links open in a new tab; everything else goes
 * through the client-side router.
 */
export default function SmartLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  const isExternal = /^(https?:)?\/\//.test(href) || href.startsWith("mailto:");

  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}
