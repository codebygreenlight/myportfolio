import profileImage from '/images/pass.png'

function About() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric'
  })

  return (
    <article className="about-section">
      <header className="article-header">
        <h2 className="article-title">The Developer Behind The Code</h2>
        <div className="article-meta">
          <span className="article-date">{currentDate}</span>
          <span className="article-author">By Olawale</span>
        </div>
      </header>

      <div className="article-content">
        <div className="article-text">
          <p className="lead-paragraph">
            Ẹ nlẹ o! 👋 I'm Olawale, your friendly neighborhood developer from the 
            giant of Africa! Currently turning my love for jollof rice and coding 
            into amazing web experiences.
          </p>

          <p className="article-paragraph">
            As a Nigerian developer, I bring that unique "never say die" spirit to 
            every project. From debugging code with the persistence of a Lagos 
            traffic survivor to crafting user interfaces smoother than agege bread, 
            I'm all about that tech life! My journey in tech has been as exciting 
            as a Nigerian wedding - full of learning, growth, and plenty of "aha!" 
            moments.
          </p>

          <p className="article-paragraph">
            Just like how we Nigerians always find a way (you know what I mean 😉), 
            I'm navigating through the tech space with determination and creativity. 
            Whether it's React components or API integrations, I approach each challenge 
            with that Nigerian resourcefulness we're famous for. And yes, Stack Overflow 
            is my second home, right after my VS Code workspace!
          </p>

          <blockquote className="article-quote" cite="https://dev.olawale.com/about">
            "In Nigeria, we say 'No gree for anybody!' That's exactly how I approach 
            coding - no bug too difficult, no feature impossible. We move! 🚀"
          </blockquote>

          <p className="article-paragraph">
            When I'm not cooking up clean code (or actual jollof), you'll find me 
            contributing to the tech community, sharing knowledge with fellow developers, 
            or explaining to my mom that no, I can't fix her phone's WhatsApp just 
            because I'm a developer! 😄 I'm passionate about using technology to solve 
            real African problems and showing the world that Nigerian developers are 
            world-class.
          </p>
        </div>

        <div className="article-image">
          <img 
            src={profileImage} 
            alt="Olawale - Nigerian Frontend Developer passionate about coding and building solutions" 
            className="grayscale-image"
            loading="lazy"
            width="500"
            height="700"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/images/fallback-profile.png';
            }}
          />
          <p className="image-caption">
            Debugging with the energy of someone who just had their morning pap! 💪🏾
          </p>
        </div>
      </div>
    </article>
  )
}

export default About 