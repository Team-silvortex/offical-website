"use client";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/Logo.png";

export const Navbar = () => (
  <nav className="flex justify-between items-center px-8 py-4 bg-black/60 backdrop-blur sticky top-0 z-50">
    <div className="flex items-center space-x-3">
      <Image src={Logo} alt="Nuis Logo" width={40} height={40} />
      <h1 className="text-lg font-bold text-white">Team Silvortox</h1>
    </div>
    <div className="space-x-6">
      <Link href="/">Home</Link>
      <Link href="/AboutUs">About</Link>
      <Link href="/Products">Projects</Link>
      <Link href="/DevLogs">Dev Logs</Link>
      <Link href="/Employ">Join Us</Link>
    </div>
  </nav>
);