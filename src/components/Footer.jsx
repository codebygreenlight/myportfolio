function Footer() {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/codebygreenlight',
      icon: 'fab fa-github'
    },
    {
      name: 'X (Twitter)',
      url: 'https://x.com/devolawale',
      icon: 'fab fa-twitter'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/olawale.dev/',
      icon: 'fab fa-instagram'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/olawaleadebesin/',
      icon: 'fab fa-linkedin'
    }
  ]

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-top">
          <div className="footer-brand">
            <h3 className="footer-title">The Developer Times</h3>
            <p className="footer-tagline">Building the future, one line at a time</p>
          </div>
          <div className="social-links">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={link.name}
              >
                <i className={link.icon}></i>
              </a>
            ))}
          </div>
        </div>
        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} dev.olawale. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 