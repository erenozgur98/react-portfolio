import './Footer.css';

const footerLinks = [
  { href: 'mailto:hello@danreyes.dev', label: 'Email' },
  { href: 'https://github.com/danreyes', label: 'GitHub' },
  { href: 'https://linkedin.com/in/danreyes', label: 'LinkedIn' },
  { href: '#', label: '↑ Top' },
];

export function Footer() {
  const handleTopClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (e.currentTarget.getAttribute('href') === '#') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer-inner">
        <span className="footer-copy">
          © 2026 Daniel Reyes · Made with care in Charlotte, NC
        </span>

        <nav className="footer-links" aria-label="Footer navigation">
          {footerLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              onClick={link.href === '#' ? handleTopClick : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
}
