import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import './Header.css';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#work', label: 'Work' },
  { href: '#skills', label: 'Skills' },
  { href: '#services', label: 'Services' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  return (
    <header className="header" role="banner">
      <div className="container header-inner">
        <a href="#" className="wordmark">Daniel Reyes</a>

        <nav className="nav" role="navigation" aria-label="Main navigation">
          {navLinks.map(link => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>

        <div className="header-actions">
          <a href="mailto:hello@danreyes.dev" className="email-pill">
            <FontAwesomeIcon icon={faEnvelope} aria-hidden="true" />
            <span>hello@danreyes.dev</span>
          </a>
        </div>
      </div>
    </header>
  );
}
