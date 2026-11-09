import { SirenLoader } from "./brand";

// Shown by Next.js only while a page is actually loading; disappears as soon as it's ready.
export default function Loading() {
  return (
    <div className="page-loading">
      <SirenLoader label="Loading" />
    </div>
  );
}
