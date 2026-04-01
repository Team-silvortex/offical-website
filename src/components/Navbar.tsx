"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Logo from "../../public/images/Logo.png";
import { brandName, navLinks } from "./siteData";

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="site-nav">
      <Link href="/" className="brand-mark" aria-label={`${brandName} home`}>
        <Image src={Logo} alt={`${brandName} logo`} width={44} height={44} />
        <div>
          <p className="brand-name">{brandName}</p>
          <p className="brand-tag">System-oriented experimental projects</p>
        </div>
      </Link>

      <div className="nav-links">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={pathname === link.href ? "nav-link-active" : "nav-link"}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
