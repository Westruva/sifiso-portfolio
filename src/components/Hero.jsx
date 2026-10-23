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
          I design and deploy resilient, high-speed software built for local infrastructure.
          Offline-first web and mobile architecture, local payment integrations like EcoCash and
          optimized backend routing turn technical friction into simple, production-ready systems
          that keep working when connectivity or network APIs drop.
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
