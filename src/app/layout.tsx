import type { Metadata } from "next";
import "../app/globals.css";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { brandName } from "../components/siteData";

export const metadata: Metadata = {
  title: brandName,
  description:
    "System-oriented experimental projects for observability, orchestration, programmable computation, and simulation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="site-main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
