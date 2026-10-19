# 🚀 Show and Tell Feature Roadmap

This document outlines the planned **"Show and Tell"** interactive enhancements for Luis Alvarez's portfolio. These features will elevate project modals from static descriptions into live, interactive demonstration laboratories.

---

## 1. Live Embedded Sandboxes
Instead of static images or placeholders, project modals will feature embedded, live-executable sandboxes:

- **`buildingBlocks` (Interactive CSS Keyframe Sandbox)**:
  - Embed an interactive canvas/iframe where visitors can toggle CSS animation parameters (gravity, bounce, duration, rotation speed) in real time.
- **`Pokédex` (API Search Playground)**:
  - Interactive mini-search bar embedded inside the modal allowing visitors to look up Pokémon stats, types, and sprites directly.
- **`PrintHub` (Interactive 3D Model Viewer)**:
  - Integrate `@google/model-viewer` or `@react-three/fiber` to display 3D STL/GLTF files (e.g. the planetary gearbox and compliant gripper) allowing visitors to rotate, zoom, and inspect mechanical tolerances in 3D.

---

## 2. Systems Architecture Visualizers
For complex full-stack and machine learning systems, include dynamic visual architecture flowcharts:

- **Autonomous AI Agent & RAG Workbench**:
  ```
  [User Prompt]
        │
        ▼
  [FastAPI Gateway]
        │
        ▼
  [LangChain ReAct Planner] ──(Queries)──► [Vector DB (Embeddings)]
        │
        ├──(Executes Tool via MCP)──► [Python Sandbox / Web API]
        │
        ▼
  [Synthesized Response with Citations]
  ```
- **Next.js Distributed E-Commerce**:
  - Show edge-rendering flow (Next.js App Router -> Server Components -> PostgreSQL -> Stripe Webhook pipeline).

---

## 3. Quantifiable Engineering Metrics & Hurdle Highlights
For each project modal, highlight three structured technical pillars:

1. **The Core Problem**: The real-world bottleneck or motivation behind the project.
2. **The Hardest Hurdle**: The key technical difficulty encountered (e.g., race conditions, memory leaks, mechanical backlash in 3D printed gears).
3. **Quantifiable Result**: Concrete metrics (e.g., *P99 latency < 65ms*, *0.12mm print tolerance*, *100% test coverage*).

---

## 4. Implementation Checklist
- [ ] Add sandbox embed toggle to modal dialog component.
- [ ] Set up `@google/model-viewer` for 3D printing GLTF files.
- [ ] Render responsive SVG / Mermaid architecture diagrams for AI Agent and E-Commerce projects.
- [ ] Add structured "Problem / Hurdle / Result" data fields in `Project` interface.
