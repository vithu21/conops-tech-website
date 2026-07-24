import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,.3),_transparent_55%)]" />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,.25),transparent_45%)]" />
      <Header />
      <main className="relative">{children}</main>
      {showFooter ? <Footer /> : null}
    </div>
  );
}
