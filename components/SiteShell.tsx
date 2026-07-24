import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageAtmosphere from "@/components/PageAtmosphere";

type SiteShellProps = {
  children: React.ReactNode;
  showFooter?: boolean;
};

export default function SiteShell({
  children,
  showFooter = true,
}: SiteShellProps) {
  return (
    <div className="relative isolate min-h-screen overflow-hidden">
      <PageAtmosphere intensity="quiet" />
      <Header />
      <main className="relative z-10 pt-16">{children}</main>
      {showFooter ? <Footer /> : null}
    </div>
  );
}
