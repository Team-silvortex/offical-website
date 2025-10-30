import { Hero } from "../components/Hero";
import { Section } from "../components/Section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Section
        title="🪶 Our Vision"
        content={`Team Silvortox is an independent research collective 
dedicated to building the Semantic Era of programming.`}
      />
      <Section
        title="🧩 Nuis Ecosystem"
        content={`NuisLang — The semantics-centric programming language that unifies computation beyond hardware.
Vulpoya — Smart Language Server.
Yalivia — Semantic Runtime and System Library.`}
      />
      <Section
        title="🧠 Philosophy"
        content={`Semantics > Syntax.
Compiler as Agent.
AI as Co-author.`}
      />
    </>
  );
}