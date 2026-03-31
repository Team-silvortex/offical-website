import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/hero_nuis.png";
import { brandName, principles } from "./siteData";

export function Hero() {
  return (
    <section className="hero-shell">
      <div className="hero-copy">
        <p className="hero-kicker">System-Oriented Experimental Projects</p>
        <h1 className="hero-title">
          Building observable, controllable, and programmable systems.
        </h1>
        <p className="hero-description">
          {brandName} is a collection of independent projects exploring network
          observability, distributed orchestration, programmable computation, and
          simulation systems.
        </p>
        <div className="hero-actions">
          <Link href="/projects" className="button button-primary">
            Explore projects
          </Link>
          <Link href="/about" className="button button-secondary">
            Read the notes
          </Link>
        </div>
        <ul className="hero-principles">
          {principles.map((principle) => (
            <li key={principle}>{principle}</li>
          ))}
        </ul>
      </div>

      <div className="hero-visual">
        <div className="hero-orbit" />
        <div className="hero-panel">
          <Image
            src={Logo}
            alt={`${brandName} symbol`}
            width={160}
            height={160}
            priority
          />
          <div className="hero-panel-copy">
            <p className="hero-panel-label">Current direction</p>
            <p className="hero-panel-value">Behavior. Control. Systems.</p>
            <p className="hero-panel-caption">
              These projects evolve independently, with different maturity levels
              and without an enforced unification layer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
