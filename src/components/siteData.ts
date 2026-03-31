interface ProjectEntry {
  name: string;
  shortName?: string;
  description: string;
}

interface ProjectGroup {
  name: string;
  description: string;
  projects: ProjectEntry[];
}

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/logs", label: "Dev Logs" },
  { href: "/join", label: "Join" },
];

export const brandName = "Silvortex";

export const principles = [
  "Observable systems",
  "Controllable execution",
  "Programmable infrastructure",
];

export const logEntries = [
  {
    title: "Independent system experiments",
    summary:
      "Projects are built under different constraints and timelines, with no forced unification layer at this stage.",
  },
  {
    title: "Behavior before presentation",
    summary:
      "The emphasis is on correctness, observability, and controllable behavior rather than product packaging.",
  },
  {
    title: "Early implementations are welcome",
    summary:
      "Some systems are already functional prototypes while others are still taking shape as early-stage implementations.",
  },
];

export const collaborationTracks = [
  "Network systems and observability",
  "Distributed orchestration and control planes",
  "Languages, runtimes, and programmable computation",
];

export const projectGroups: ProjectGroup[] = [
  {
    name: "Observability & Network Systems",
    description:
      "Tooling and execution layers for inspecting, modeling, orchestrating, and simulating system behavior in networked environments.",
    projects: [
      {
        name: "cyanrex-lab",
        shortName: "cy",
        description:
          "Browser-based eBPF experimentation platform with isolation and observability.",
      },
      {
        name: "gewyvern",
        shortName: "ge",
        description:
          "DSL-driven eBPF engine for protocol-agnostic network flow modeling, designed for dynamic analysis and debugging.",
      },
      {
        name: "leserpent",
        shortName: "le",
        description:
          "Orchestration layer for managing distributed gewyvern agents and coordinating execution workflows.",
      },
      {
        name: "etragon",
        shortName: "et",
        description:
          "ML-driven network flow simulation and mock generation system for controlled experimentation.",
      },
    ],
  },
  {
    name: "Compute & Language Systems",
    description:
      "Language and runtime work aimed at programmable computation across heterogeneous execution environments.",
    projects: [
      {
        name: "nuislang",
        description:
          "AOT-first system language for unified heterogeneous computation via YIR.",
      },
      {
        name: "yalivia",
        description:
          "Lightweight JIT runtime for executing and optimizing YIR with adaptive behavior.",
      },
      {
        name: "vulpoya",
        description:
          "Static analyzer and verifier for the nuis/YIR ecosystem, focused on correctness and constraints.",
      },
    ],
  },
  {
    name: "Simulation Systems",
    description:
      "Experimental simulation infrastructure for large-scale, programmable computational workloads.",
    projects: [
      {
        name: "kyuubiki",
        description:
          "Distributed FEM computation platform with a web-based interface and orchestration layer.",
      },
    ],
  },
];
