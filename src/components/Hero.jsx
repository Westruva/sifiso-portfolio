import { profile, recentlyShipped } from "../data/content";

function Hero() {
  return (
    <section className="hero container" id="top">
      <div className="hero-copy">
        <p className="hero-name">
          {profile.fullName}
          <span className="hero-role">
            {profile.role} · Founder of{" "}
            <a href={profile.company.href} target="_blank" rel="noopener noreferrer">
              {profile.company.name}
            </a>
          </span>
        </p>
        <h1>
          Full-stack web applications, <span className="gradient-text">built to last.</span>
        </h1>
        <p className="lede">
          I build with React, Express, PostgreSQL and Prisma. My apps keep decisions on the
          server, use clear data models and have interfaces that stay out of the way.
        </p>
        <div className="cta-row">
          <a className="btn btn-primary" href="#work">
            See my work
          </a>
          <a className="btn btn-ghost" href={profile.company.href} target="_blank" rel="noopener noreferrer">
            {profile.company.name} <span aria-hidden="true">↗</span>
          </a>
          <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <aside className="shipped card" aria-labelledby="shipped-title">
        <p className="label" id="shipped-title">
          Latest projects
        </p>
        <ol className="shipped-list">
          {recentlyShipped.map((item) => (
            <li key={item.text}>
              <span className="shipped-node" aria-hidden="true" />
              <span className="shipped-text">{item.text}</span>
              <time dateTime={item.date}>{item.label}</time>
            </li>
          ))}
        </ol>
      </aside>
    </section>
  );
}

export default Hero;
