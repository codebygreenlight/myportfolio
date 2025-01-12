import { useState } from 'react'

function Sidebar({ activeSection, setActiveSection }) {
  const navItems = [
    { id: 'home', icon: '🏠', label: 'Home' },
    { id: 'about', icon: '👤', label: 'About' },
    { id: 'projects', icon: '💻', label: 'Projects' },
    { id: 'contact', icon: '📫', label: 'Contact' }
  ]

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="profile-pic">OA</div>
        <h3 className="dev-name">dev.olawale</h3>
      </div>
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => setActiveSection(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="sidebar-footer">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://twitter.com/yourusername" target="_blank" rel="noopener">
          <i className="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  )
}

export default Sidebar 