function Projects() {
  const projects = [
    {
      name: "Verdalix Tech Landing Page",
      tech: ["React", "Javascript", "Node.js"],
      description: "A tech company landing page with a clean design and smooth animations. Features responsive layout.",
      longDescription: "Built with modern architecture and best practices, this tech company landing page is designed to showcase the company's services and products in a professional and engaging way. Features include a clean design, smooth animations, and responsive layout.",
      github: "https://github.com/codebygreenlight/verdalixtech",
      preview: "https://your-live-demo-url.com",
      image: "verdalix.png",
      role: "Lead Developer",
      duration: "1 month"
    },
    {
      name: "DevOlawale Portfolio",
      tech: ["React", "Vite", "TailwindCSS"],
      description: "A modern portfolio website with clean design and smooth animations. Features responsive layout.",
      longDescription: "A newspaper-inspired portfolio that showcases developer projects in a unique and engaging way. Built with performance and accessibility in mind, featuring smooth animations and responsive design.",
      github: "https://github.com/codebygreenlight/myportfolio",
      preview: "https://myportfolio-sandy-one.vercel.app/",
      image: "devolawale.png",
      role: "Frontend Developer",
      duration: "3 weeks"
    },
    {
      name: "Gadgets Store",
      tech: ["React", "Vite", "TailwindCSS"],
      description: "A Gadgets Store website with a clean design and smooth animations. Features responsive layout and payment gateway.",
      longDescription: "A phone store website built with React, TailwindCSS, and Vite. It features detailed product pages, a shopping cart, and a secure payment gateway. The site is designed to be responsive and user-friendly, with a focus on providing a seamless shopping experience.",
      github: "https://github.com/codebygreenlight/greenlightgadgets",
      preview: "https://greenlightgadgets.vercel.app/",
      image: "greengadgets.png",
      role: "Frontend Developer",
      duration: "1 month"
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