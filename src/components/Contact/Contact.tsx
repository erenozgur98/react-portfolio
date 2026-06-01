import { useState, FormEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { SectionHead } from '../SectionHead';
import './Contact.css';

const contactLinks = [
  {
    href: 'mailto:hello@danreyes.dev',
    icon: faEnvelope,
    label: 'hello@danreyes.dev',
  },
  {
    href: 'https://github.com/danreyes',
    icon: faGithub,
    label: 'github.com/danreyes',
  },
  {
    href: 'https://linkedin.com/in/danreyes',
    icon: faLinkedinIn,
    label: 'linkedin.com/in/danreyes',
  },
];

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [showStatus, setShowStatus] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) return;
    if (!formData.email.trim() || !isValidEmail(formData.email)) return;
    if (!formData.message.trim()) return;

    // Show success status
    setShowStatus(true);

    // Clear form
    setFormData({ name: '', email: '', message: '' });

    // Hide status after 4 seconds
    setTimeout(() => {
      setShowStatus(false);
    }, 4000);
  };

  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <SectionHead
          eyebrow="Contact"
          title={<>Say hi, or just <em>keep in touch</em></>}
          titleId="contact-heading"
        />

        <div className="contact-grid">
          <div className="contact-intro">
            <p>
              I'm always happy to chat about projects, ideas, or just frontend stuff in
              general. Drop me a line through the form, or reach out directly on any of
              these platforms.
            </p>

            <div className="contact-links">
              {contactLinks.map(link => (
                <a key={link.href} href={link.href} className="contact-link">
                  <span className="contact-icon">
                    <FontAwesomeIcon icon={link.icon} aria-hidden="true" />
                  </span>
                  <span className="contact-link-text">{link.label}</span>
                  <span className="contact-arrow">→</span>
                </a>
              ))}
            </div>
          </div>

          <div className="contact-form-card">
            <form id="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your name"
                  required
                  value={formData.name}
                  onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  required
                  value={formData.email}
                  onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="What's on your mind?"
                  required
                  value={formData.message}
                  onChange={e => setFormData(prev => ({ ...prev, message: e.target.value }))}
                />
              </div>

              <button type="submit" className="submit-btn">
                Send message
              </button>
              <div
                className={`form-status ${showStatus ? 'visible' : ''}`}
                role="status"
                aria-live="polite"
              >
                ✓ Sent — talk soon.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
