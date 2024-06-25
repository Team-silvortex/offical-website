"use client";
//import styles from './Logo.module.css';
import Image from "next/image";

export default function Logo() {
  return (
    <div>
      <Image src="/images/Logo.png" alt="Logo" width={200} height={100} />
    </div>
  );
}
