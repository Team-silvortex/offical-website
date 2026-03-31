"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/Logo.png";
import { brandName, navLinks } from "./siteData";

export function Navbar() {
  return (
    <nav className="site-nav">
      <Link href="/" className="brand-mark" aria-label="Team Silvortox home">
        <Image src={Logo} alt={`${brandName} logo`} width={44} height={44} />
        <div>
          <p className="brand-name">{brandName}</p>
          <p className="brand-tag">System-oriented experimental projects</p>
        </div>
      </Link>

      <div className="nav-links">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
