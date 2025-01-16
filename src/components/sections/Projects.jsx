function Projects() {
  const projects = [
    {
      name: "Verdalix Tech Landing Page",
      tech: ["React", "Javascript", "Node.js"],
      description: "An intelligent coding assistant that helps developers write better code faster. Integrates with popular IDEs and provides real-time suggestions.",
      longDescription: "Built with modern architecture and best practices, this AI-powered code assistant helps developers increase their productivity. Features include real-time code suggestions, bug detection, and automated code reviews.",
      github: "https://github.com/codebygreenlight/verdalixtech",
      preview: "https://your-live-demo-url.com",
      image: "verdalix.png",
      role: "Lead Developer",
      duration: "1 month"
    },
    {
      name: "DevOlawale Portfolio",
      tech: ["React", "Vite", "TailwindCSS"],
      description: "A modern portfolio website with clean design and smooth animations. Features responsive layout and dark mode support.",
      longDescription: "A newspaper-inspired portfolio that showcases developer projects in a unique and engaging way. Built with performance and accessibility in mind, featuring smooth animations and responsive design.",
      github: "https://github.com/codebygreenlight/myportfolio",
      preview: "https://myportfolio-sandy-one.vercel.app/",
      image: "devolawale.png",
      role: "Frontend Developer",
      duration: "2 months"
    },
  ]

  return (
    <div className="works-section">
      <header className="works-header">
        <h2 className="works-title">Featured Works</h2>
        <p className="works-subtitle">A collection of my recent projects</p>
      </header>

      <div className="projects-list">
        {projects.map((project, index) => (
          <article key={index} className="project-article">
            <div className="project-content">
              <div className="project-category">Featured Project</div>
              <h3 className="project-title">{project.name}</h3>
              <p className="project-description">{project.longDescription}</p>
              
              <div className="project-meta">
                <div className="meta-item">
                  <span className="meta-label">Role:</span>
                  <span className="meta-value">{project.role}</span>
                </div>
                <div className="meta-item">
                  <span className="meta-label">Duration:</span>
                  <span className="meta-value">{project.duration}</span>
                </div>
              </div>

              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.preview} target="_blank" rel="noopener" className="preview-link">
                  View Live
                  <i className="fas fa-arrow-right"></i>
                </a>
                <a href={project.github} target="_blank" rel="noopener" className="github-link">
                  <i className="fab fa-github"></i>
                  Source Code
                </a>
              </div>
            </div>

            <div className="project-preview">
              <div className="image-container">
                <img src={project.image} alt={project.name} loading="lazy" />
                <div className="image-overlay">
                  <a href={project.preview} target="_blank" rel="noopener" className="view-project">
                    View Project
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default Projects 