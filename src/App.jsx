import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Toolbox from "./components/Toolbox";
import About from "./components/About";
import Contact from "./components/Contact";
import SocialIcon from "./components/SocialIcon";
import { useTheme } from "./hooks/useTheme";
import { useReveal } from "./hooks/useReveal";
import { profile, socials } from "./data/content";

function App() {
  const theme = useTheme();
  useReveal();

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <div className="backdrop" aria-hidden="true" />
      <Header theme={theme} />
      <main id="main">
        <Hero />
        <Projects />
        <Toolbox />
        <About />
        <Contact />
      </main>
      <footer className="site-footer container">
        <p>
          © {new Date().getFullYear()} {profile.fullName}
        </p>
        <ul className="footer-socials">
          {socials.map((social) => (
            <li key={social.id}>
              <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                <SocialIcon id={social.id} />
              </a>
            </li>
          ))}
        </ul>
        <p>Built with React + Vite</p>
      </footer>
    </>
  );
}

export default App;
