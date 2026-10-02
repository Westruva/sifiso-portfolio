import SocialIcon from "./SocialIcon";
import { socials } from "../data/content";

function Contact() {
  return (
    <section className="section container" id="contact" aria-labelledby="contact-heading">
      <div className="contact-card" data-reveal>
        <p className="label">04 · Contact</p>
        <h2 id="contact-heading">Let's build something.</h2>
        <p>
          I'm open to junior developer roles, internships and collaborations. Message me on
          LinkedIn or WhatsApp, or browse my code on GitHub.
        </p>
        <ul className="social-links">
          {socials.map((social) => (
            <li key={social.id}>
              <a
                className="social-link"
                data-brand={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <SocialIcon id={social.id} />
                <span>{social.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Contact;
