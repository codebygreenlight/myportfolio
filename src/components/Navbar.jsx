function Navbar({ activeSection, setActiveSection }) {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Works' }
  ]

  return (
    <header className="header">
      <div className="header-content">
        <div className="masthead">
          <div className="date">Est. 2024</div>
          <h1 className="site-title">The Developer Times</h1>
          <div className="edition">Digital Edition</div>
        </div>
        
        <nav className="main-nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => setActiveSection(item.id)}
            >
              {item.label}
            </button>
          ))}
          <a 
            href="mailto:your.email@example.com" 
            className="hire-me-btn"
          >
            Hire Me
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar 