import React from 'react';

export default function Sidebar() {
  const skills = [
    "Python","JavaScript","TypeScript","Golang",
    "LangGraph","RAG","FAISS","LLaMA 3.1","Groq",
    "Scikit-learn","Random Forest","SMOTE",
    "Pandas","NumPy","Matplotlib","Seaborn",
    "Tableau","Power BI","SQL",
    "FastAPI","Docker","Kubernetes","Terraform","CI/CD",
    "Hugging Face Spaces",
  ]

  return (
    <aside className="sidebar">
      <img
        src="/Git_Profile.png"
        alt="Mayank Sharma"
        className="sidebar-avatar"
      />
      <h1 className="sidebar-name">Mayank Sharma</h1>
      <p className="sidebar-username">MAYANKSHARMA01010</p>
      <p className="sidebar-bio">
        B.Tech AI student building intelligent systems — agentic AI pipelines,
        churn prediction models, time-series benchmarks, and data-driven
        dashboards. LFX Mentee (Magma Core). 400+ DSA problems solved.
      </p>

      <div className="sidebar-badges">
        <span className="badge badge-intern">🏢 SWE Intern @ Plugseal</span>
        <span className="badge badge-lfx">🎓 LFX Mentee · Magma Core</span>
      </div>

      <div className="sidebar-info">
        <div className="sidebar-info-item">
          <svg viewBox="0 0 16 16" width="16" height="16" fill="#8b949e">
            <path d="M11.536 3.464a5 5 0 010 7.072L8 14.07l-3.536-3.535a5 5 0 117.072-7.072v.001zm1.06 8.132a6.5 6.5 0 10-9.192 0l3.535 3.536a1.5 1.5 0 002.122 0l3.535-3.536zM8 9a2 2 0 100-4 2 2 0 000 4z" />
          </svg>
          <span>India</span>
        </div>

        <div className="sidebar-info-item">
          <svg viewBox="0 0 16 16" width="16" height="16" fill="#8b949e">
            <path d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0114.25 14H1.75A1.75 1.75 0 010 12.25v-8.5C0 2.784.784 2 1.75 2zM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V5.809L8.38 9.397a.75.75 0 01-.76 0L1.5 5.809v6.442zm13-8.181v-.32a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25v.32L8 7.88z" />
          </svg>
          <a href="mailto:mayank.sharma2024@nst.rishihood.edu.in">Gmail</a>
        </div>

        <div className="sidebar-info-item">
          <svg viewBox="0 0 16 16" width="16" height="16" fill="#8b949e">
            <path d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z" />
          </svg>
          <a href="https://mayank-sharma-personal-portfolio.vercel.app" target="_blank" rel="noreferrer">Portfolio</a>
        </div>

        <div className="sidebar-info-item">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="#8b949e">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          <a href="https://linkedin.com/in/mayanksharma3369" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>

        <div className="sidebar-info-item">
          <svg viewBox="0 0 16 16" width="16" height="16" fill="#8b949e">
            <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
          </svg>
          <a href="https://github.com/MAYANKSHARMA01010" target="_blank" rel="noreferrer">MAYANKSHARMA01010</a>
        </div>

        <div className="sidebar-info-item">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="#8b949e">
            <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-.354 4.5c.192 0 .382.012.568.035l-1.177 2.04a5.51 5.51 0 00-.568-.035c-.192 0-.382.012-.568.035L8.724 4.535A7.5 7.5 0 0111.646 4.5zm-3.75 1.161l1.177 2.04A5.496 5.496 0 007.5 11.646c0 3.038 2.462 5.5 5.5 5.5s5.5-2.462 5.5-5.5a5.496 5.496 0 00-1.573-3.944l1.177-2.04A7.5 7.5 0 0119.5 11.646c0 4.142-3.358 7.5-7.5 7.5s-7.5-3.358-7.5-7.5a7.5 7.5 0 011.396-4.485z"/>
          </svg>
          <a href="https://www.kaggle.com/mankudada1023" target="_blank" rel="noreferrer">Kaggle</a>
        </div>

        <div className="sidebar-info-item">
          <svg viewBox="0 0 24 24" width="16" height="16" fill="#8b949e">
            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0z"/>
          </svg>
          <a href="https://leetcode.com/u/2Qd84hR3lZ" target="_blank" rel="noreferrer">LeetCode · 400+ solved</a>
        </div>
      </div>

      <div className="sidebar-orgs">
        <h3 className="sidebar-orgs-title">Technical Skills</h3>
        <div className="sidebar-orgs-list">
          {skills.map((s) => (
            <span key={s} className="org-pill">{s}</span>
          ))}
        </div>
      </div>

      <div className="sidebar-education">
        <h3 className="sidebar-orgs-title" style={{marginTop:"16px"}}>Education</h3>
        <ul className="achievement-list">
          <li>🎓 <strong>B.Tech in AI</strong><br/>Newton School of Tech (2024–28)</li>
          <li>🏫 <strong>Class XII (CBSE)</strong><br/>BLM Academy (2022–23)</li>
          <li>🏫 <strong>Class X (CBSE)</strong><br/>BLM Academy (2020–21)</li>
        </ul>
      </div>

      <div className="sidebar-achievements">
        <h3 className="sidebar-orgs-title" style={{marginTop:"16px"}}>Achievements</h3>
        <ul className="achievement-list">
          <li>🏅 LFX Mentee — Magma Core</li>
          <li>🌐 GSoC · GSSoC · ESoC contributor</li>
          <li>🎃 Hacktoberfest multiple editions</li>
          <li>💡 400+ DSA problems solved</li>
        </ul>
      </div>
    </aside>
  )
}
