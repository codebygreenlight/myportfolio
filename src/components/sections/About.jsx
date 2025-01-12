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
            Hey there! 👋 I'm Olawale, a passionate frontend developer who's on an exciting 
            journey of turning caffeine into code and bugs into features (well, most of the time).
          </p>

          <p className="article-paragraph">
            Currently navigating the vast ocean of web development, armed with React and a 
            determination to learn something new every day. You could say I'm like a sponge, 
            but instead of water, I'm absorbing JavaScript and occasionally wondering why my 
            console.log() is my best friend.
          </p>

          <p className="article-paragraph">
            As an entry-level developer, I'm that curious kid in the candy store of coding – 
            everything looks exciting, and I want to try it all! From battling with CSS 
            (sometimes it wins, but I'm getting better) to diving into AI integration, 
            I'm building my path one commit at a time. Sure, Stack Overflow might be my 
            most visited website, but hey, that's how we all learn, right?
          </p>

          <blockquote className="article-quote" cite="https://dev.olawale.com/about">
            "They say Rome wasn't built in a day, and neither is a bug-free code. 
            But I'm here for the journey, learning and growing with every line of code!"
          </blockquote>

          <p className="article-paragraph">
            When I'm not googling error messages or celebrating the small victories 
            (like when my code works on the first try – rare but magical moments), 
            you'll find me exploring new technologies, contributing to open-source 
            projects, or explaining coding concepts to my rubber duck debugger. 
            Because sometimes the best way to learn is to teach, even if your student 
            is made of rubber!
          </p>
        </div>

        <div className="article-image">
          <img 
            src={profileImage} 
            alt="Olawale - Frontend Developer passionate about coding and learning new technologies" 
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
            Me, turning coffee into code, one bug at a time
          </p>
        </div>
      </div>
    </article>
  )
}

export default About 