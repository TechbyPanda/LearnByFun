import Link from "next/link";
import type { CSSProperties } from "react";

/** Site name in one place: change it here and it updates everywhere. */
export const SITE_NAME = "Siren Prep";
export const SITE_TAGLINE = "UPSC Prelims practice";

export function Brand({ label = `${SITE_NAME} home` }: { label?: string }) {
  return (
    <Link href="/" className="brand" aria-label={label}>
      <span className="brand-mark" aria-hidden="true">
        <i className="brand-light red" />
        <i className="brand-light blue" />
      </span>
      <span className="brand-copy">
        {SITE_NAME}
        <span>{SITE_TAGLINE}</span>
      </span>
    </Link>
  );
}

const LENSES = [0, 1, 2, 3];

/**
 * A police light bar: red lenses left, blue right, double-strobing in turn and
 * lighting up the area around them. Used by the intro and by loading.tsx.
 */
export function SirenLoader({ label = "Loading" }: { label?: string }) {
  return (
    <div className="siren-loader" role="status" aria-label={label}>
      <div className="lightbar" aria-hidden="true">
        <span className="lightbar-wash red" />
        <span className="lightbar-wash blue" />
        <div className="lightbar-body">
          {LENSES.map((i) => (
            <i key={`r${i}`} className="lens red" style={{ "--i": i } as CSSProperties} />
          ))}
          <i className="lightbar-center" />
          {LENSES.map((i) => (
            <i key={`b${i}`} className="lens blue" style={{ "--i": 3 - i } as CSSProperties} />
          ))}
        </div>
      </div>
      <p className="siren-text">{label}…</p>
    </div>
  );
}
