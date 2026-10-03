import SectionHeading from "./SectionHeading";
import { about, profile } from "../data/content";

function About() {
  return (
    <section className="section container" id="about" aria-labelledby="about-heading">
      <SectionHeading id="about-heading" number="03" title="About" />
      <div className="about-layout" data-reveal>
        <figure className="portrait">
          <img
            src={profile.portrait.src}
            alt={profile.portrait.alt}
            width="800"
            height="1000"
            loading="lazy"
            decoding="async"
          />
        </figure>
        <div className="about">
          {about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
