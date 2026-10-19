import { didactGothic, eduVicWaNtBeginner } from "./utils/fonts";

export default function About() {
  return (
    <div className={`w-full max-w-4xl p-6 ${didactGothic}`}>
      <h2 className={`${eduVicWaNtBeginner} font-bold text-3xl sm:text-4xl text-slate-100 mb-4`}>
        About Me
      </h2>
      <p className="text-slate-200 text-lg leading-relaxed mb-6">
        I am a results-oriented Software Engineer with 5+ years of experience engineering and maintaining scalable full-stack web applications, distributed systems, and real-time data pipelines. Proven ability to condense and visualize complex datasets, design automated CI/CD pipelines, and collaborate effectively with cross-functional engineering teams to drive business value.
      </p>
      <p className="text-slate-300 text-base leading-relaxed mb-6">
        Currently leveling up in Machine Learning System Design and Scalable Architectures at Interview Kickstart—focusing on Agentic AI frameworks, Large Language Model orchestration, Retrieval-Augmented Generation (RAG), and the Model Context Protocol (MCP).
      </p>

      {/* Core Competencies */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
        <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4 shadow-sm">
          <h4 className="text-blue-300 font-semibold text-xs uppercase tracking-wider mb-1.5">
            Full-Stack & Systems
          </h4>
          <p className="text-slate-300 text-sm">
            TypeScript, Next.js, React, Node.js, Python, PostgreSQL, REST & WebSockets
          </p>
        </div>
        <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4 shadow-sm">
          <h4 className="text-purple-300 font-semibold text-xs uppercase tracking-wider mb-1.5">
            AI & Machine Learning
          </h4>
          <p className="text-slate-300 text-sm">
            LLMs, Autonomous Agents, RAG, ReAct Framework, Vector DBs, MCP Tools
          </p>
        </div>
        <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4 shadow-sm">
          <h4 className="text-cyan-300 font-semibold text-xs uppercase tracking-wider mb-1.5">
            DevOps & Infrastructure
          </h4>
          <p className="text-slate-300 text-sm">
            Ansible Automation Platform, Docker, Linux, CI/CD Pipelines, Git
          </p>
        </div>
        <div className="bg-slate-800/60 border border-slate-700/60 rounded-xl p-4 shadow-sm">
          <h4 className="text-amber-300 font-semibold text-xs uppercase tracking-wider mb-1.5">
            Creative & Hardware
          </h4>
          <p className="text-slate-300 text-sm">
            Fusion 360 CAD, Additive Manufacturing (3D Printing), Audio Engineering
          </p>
        </div>
      </div>
    </div>
  );
}