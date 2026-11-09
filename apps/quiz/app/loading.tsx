import LoaderSiren from "./LoaderSiren";
import { SirenLoader } from "./brand";

// Shown by Next.js while a page is loading.
export default function Loading() {
  return (
    <div className="page-loading">
      <SirenLoader label="Loading" />
      <LoaderSiren />
    </div>
  );
}
