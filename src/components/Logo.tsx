"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Logo.module.css";

export function Logo() {
  return (
    <Link href="/" className={`${styles.logo} flex items-center space-x-3`}>
      <Image
        src="/images/Logo.png"
        alt="Team Silvortox Logo"
        width={48}
        height={48}
        priority
        className="rounded-lg shadow-md hover:shadow-violet-500/30 transition-shadow duration-300"
      />
      <div className="flex flex-col leading-tight">
        <span className="text-lg font-semibold text-white tracking-wide">
          Team Silvortox
        </span>
        <span className="text-sm text-violet-400">
          Semantics is the new syntax
        </span>
      </div>
    </Link>
  );
}