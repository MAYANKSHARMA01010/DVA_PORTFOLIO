import React from "react"
import { Project } from "../data"

interface RepoCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

export default function RepoCard({ project, onClick }: RepoCardProps) {
  const categoryColors: Record<string, { bg: string; text: string }> = {
    "AI/ML":          { bg: "rgba(139,92,246,0.12)", text: "#a78bfa" },
    "AI Systems":     { bg: "rgba(59,130,246,0.12)", text: "#60a5fa" },
    "Data Analytics": { bg: "rgba(16,185,129,0.12)", text: "#34d399" },
  }
  const cat = categoryColors[project.category] || { bg: "rgba(56,139,253,0.1)", text: "#58a6ff" }

  return (
    <div className="repo-card" onClick={() => onClick(project)}>
      <div className="repo-card-image">
        <img src={project.image} alt={project.name} />
        <div className="repo-card-overlay">
          <span className="repo-card-category" style={{ background: cat.bg, color: cat.text }}>
            {project.category}
          </span>
        </div>
      </div>
      <div className="repo-card-content">
        <div className="repo-card-header">
          <svg viewBox="0 0 16 16" width="16" height="16" fill="#8b949e">
            <path d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5zm10.5-1h-8a1 1 0 00-1 1v6.708A2.486 2.486 0 014.5 9h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z" />
          </svg>
          <span className="repo-card-name">{project.name}</span>
          <span className="repo-card-badge">Public</span>
        </div>
        {project.subtitle && (
          <p className="repo-card-subtitle">{project.subtitle}</p>
        )}
        <p className="repo-card-desc">{project.description}</p>
        <div className="repo-card-highlights">
          {project.highlights.map((h) => (
            <span key={h} className="highlight-chip">✦ {h}</span>
          ))}
        </div>
        <div className="repo-card-tags">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="repo-card-tag">{tag}</span>
          ))}
          {project.tags.length > 4 && (
            <span className="repo-card-tag">+{project.tags.length - 4}</span>
          )}
        </div>
      </div>
    </div>
  )
}
