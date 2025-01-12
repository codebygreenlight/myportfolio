function Hero() {
  return (
    <div className="hero-section">
      <div className="headline-block">
        <h1 className="headline">
          Crafting Digital Experiences
          <span className="headline-accent">One Line of Code at a Time</span>
        </h1>
        <p className="subheadline">
          Frontend Developer & AI Enthusiast
        </p>
        <div className="byline">
          By Olawale | Frontend Developer
        </div>
      </div>

      <div className="hero-columns">
        <div className="column">
          <h2 className="column-title">Latest Works</h2>
          <div className="column-content">
            <p className="lead-text">
              Specialized in creating modern web applications with React and 
              integrating AI capabilities to enhance user experiences.
            </p>
            <a href="#projects" className="read-more">Read More →</a>
          </div>
        </div>

        <div className="column featured">
          <div className="code-snippet">
            <pre>
              <code>
                {`const developer = {
  name: 'Olawale',
  expertise: [
    'React',
    'AI Integration',
    'Modern UX'
  ],
  passion: 'Building 
   the future of web'
}`}
              </code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero 