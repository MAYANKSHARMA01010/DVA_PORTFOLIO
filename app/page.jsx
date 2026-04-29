"use client";

import { useState } from "react";
import Sidebar from "../src/components/Sidebar";
import RepoList from "../src/components/RepoList";
import Modal from "../src/components/Modal";
import ContributionGraph from "../src/components/ContributionGraph";
import projects from "../src/data";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-left">
          <button className="header-hamburger" aria-label="Menu">
            <svg viewBox="0 0 16 16" width="16" height="16" fill="#f0f6fc">
              <path d="M1 2.75A.75.75 0 0 1 1.75 2h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 2.75Zm0 5A.75.75 0 0 1 1.75 7h12.5a.75.75 0 0 1 0 1.5H1.75A.75.75 0 0 1 1 7.75ZM1.75 12h12.5a.75.75 0 0 1 0 1.5H1.75a.75.75 0 0 1 0-1.5Z" />
            </svg>
          </button>
          <svg className="header-logo" height="32" viewBox="0 0 16 16" width="32" fill="#f0f6fc">
            <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
          </svg>
          <span className="header-breadcrumb">
            <span className="header-username">MAYANKSHARMA01010</span>
            <span className="header-separator">/</span>
            <span className="header-repo">portfolio</span>
          </span>
        </div>
        <nav className="header-nav">
          <a href="https://github.com/MAYANKSHARMA01010" target="_blank" rel="noreferrer" className="header-nav-link">GitHub</a>
          <a href="https://linkedin.com/in/mayanksharma3369" target="_blank" rel="noreferrer" className="header-nav-link">LinkedIn</a>
          <a href="https://mayank-sharma-personal-portfolio.vercel.app" target="_blank" rel="noreferrer" className="header-nav-link header-nav-cta">Portfolio ↗</a>
        </nav>
      </header>

      <div className="experience-banner">
        <div className="experience-banner-inner">
          <div className="exp-item">
            <span className="exp-icon">💼</span>
            <div>
              <p className="exp-role">Software Developer Intern</p>
              <p className="exp-company">Plugseal Innovation Services Pvt Ltd · Apr–Jul 2025</p>
            </div>
          </div>
          <div className="exp-divider" />
          <div className="exp-item">
            <span className="exp-icon">🎓</span>
            <div>
              <p className="exp-role">B.Tech in Artificial Intelligence</p>
              <p className="exp-company">Newton School of Technology, Rishihood University · 2024–2028</p>
            </div>
          </div>
          <div className="exp-divider" />
          <div className="exp-item">
            <span className="exp-icon">🏅</span>
            <div>
              <p className="exp-role">LFX Mentee — Magma Core</p>
              <p className="exp-company">GSoC · GSSoC · ESoC · NSoC · Hacktoberfest</p>
            </div>
          </div>
        </div>
      </div>

      <div className="app-layout">
        <Sidebar />
        <main className="app-main">
          <RepoList
            projects={projects}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
            onCardClick={setSelectedProject}
          />
          <ContributionGraph />
        </main>
      </div>

      <Modal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
