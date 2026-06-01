import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faFileLines } from '@fortawesome/free-regular-svg-icons';
import { SectionHead } from '../SectionHead';
import './About.css';

const socialLinks = [
  { href: 'https://github.com/danreyes', icon: faGithub, label: 'GitHub' },
  { href: 'https://linkedin.com/in/danreyes', icon: faLinkedinIn, label: 'LinkedIn' },
  { href: 'https://read.cv/danreyes', icon: faFileLines, label: 'read.cv' },
  { href: 'mailto:hello@danreyes.dev', icon: faEnvelope, label: 'Email' },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading">
      <div className="container">
        <SectionHead
          eyebrow="About"
          title={<>A quick <em>introduction</em></>}
          titleId="about-heading"
        />

        <div className="about-grid">
          <div className="headshot-placeholder">
            <span>headshot.jpg<br />4:5 portrait</span>
          </div>

          <div className="about-content">
            <p className="lead">
              Hey, I'm Daniel. I build websites and apps that people actually enjoy using.
            </p>

            <p>
              By day, I'm a senior frontend engineer on a design systems team at a fintech
              company here in Charlotte. I spend my time crafting reusable components,
              obsessing over accessibility, and trying to make interfaces feel just right.
            </p>

            <p>
              When I'm not at work, you'll find me tinkering on side projects, contributing
              to open source, or exploring whatever new web platform feature just landed.
              I genuinely love this stuff — building for the web still feels like magic to me.
            </p>

            <div className="social-links">
              {socialLinks.map(link => (
                <a
                  key={link.label}
                  href={link.href}
                  className="social-pill"
                  aria-label={`${link.label} profile`}
                >
                  <FontAwesomeIcon icon={link.icon} aria-hidden="true" />
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
