import SectionHeading from "./SectionHeading";
import { about } from "../data/content";

function About() {
  return (
    <section className="section container" id="about" aria-labelledby="about-heading">
      <SectionHeading id="about-heading" number="03" title="About" />
      <div className="about" data-reveal>
        {about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  );
}

export default About;
