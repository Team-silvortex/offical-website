import Link from "next/link";
import { brandName, navLinks } from "./siteData";

export function Footer() {
  return (
    <footer className="site-footer">
      <div>
        <p className="footer-title">{brandName}</p>
        <p className="footer-copy">
          A collection of system-oriented experimental projects focused on
          observability, orchestration, programmable computation, and simulation.
        </p>
      </div>

      <div className="footer-links">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
