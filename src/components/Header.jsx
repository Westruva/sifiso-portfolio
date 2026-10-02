import ThemeSwitcher from "./ThemeSwitcher";
import { profile } from "../data/content";

const NAV_LINKS = [
  { href: "#work", label: "Work" },
  { href: "#toolbox", label: "Toolbox" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

function Header({ theme }) {
  return (
    <header className="site-header">
      <div className="header-bar">
        <a className="wordmark" href="#top">
          {profile.name}
          <span className="accent-dot">.</span>
        </a>
        <nav aria-label="Primary">
          <ul className="nav-list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeSwitcher {...theme} />
      </div>
    </header>
  );
}

export default Header;
