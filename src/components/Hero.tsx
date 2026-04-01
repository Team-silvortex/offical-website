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
        <div className="hero-status-strip" aria-label="System focus">
          <div className="status-chip">
            <span className="status-dot" />
            Network observability
          </div>
          <div className="status-chip">
            <span className="status-dot" />
            Orchestration layers
          </div>
          <div className="status-chip">
            <span className="status-dot" />
            Simulation systems
          </div>
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
          <div className="hero-panel-grid" />
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
            <div className="hero-panel-readout">
              <span>MODE: EXPERIMENTAL</span>
              <span>STATE: ACTIVE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
