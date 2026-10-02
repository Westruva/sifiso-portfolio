import { profile, recentlyShipped } from "../data/content";

function Hero() {
  return (
    <section className="hero container" id="top">
      <div className="hero-copy">
        <p className="status-pill">
          <span className="pulse" aria-hidden="true" />
          {profile.status}
        </p>
        <p className="hero-name">
          {profile.fullName}
          <span className="hero-role">{profile.role}</span>
        </p>
        <h1>
          I build web apps from the database up, <span className="gradient-text">brick by brick.</span>
        </h1>
        <p className="lede">
          I work in React, Express, PostgreSQL and Prisma. I like apps where the server makes the
          decisions, the data is easy to reason about, and the interface stays out of the way.
        </p>
        <div className="cta-row">
          <a className="btn btn-primary" href="#work">
            See my work
          </a>
          <a className="btn btn-ghost" href={profile.github} target="_blank" rel="noopener noreferrer">
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>

      <aside className="shipped card" aria-labelledby="shipped-title">
        <p className="label" id="shipped-title">
          Recently shipped
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
