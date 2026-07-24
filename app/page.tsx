import HomePage from "@/components/HomePage";
import { buildPageMetadata } from "@/lib/seo";
import { siteDescription, siteTitle } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: siteTitle,
  description: siteDescription,
  path: "/",
});

export default function Page() {
  return <HomePage />;
}
