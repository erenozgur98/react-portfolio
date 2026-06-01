import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faNpm } from '@fortawesome/free-brands-svg-icons';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faFileLines } from '@fortawesome/free-regular-svg-icons';
import { SectionHead } from '../SectionHead';
import { featuredProject, projects, testimonials } from '../../data/projects';
import type { Project, Testimonial } from '../../data/projects';
import './Work.css';

function getLinkIcon(type: string) {
  switch (type) {
    case 'github':
      return faGithub;
    case 'npm':
      return faNpm;
    case 'casestudy':
      return faFileLines;
    default:
      return faArrowUpRightFromSquare;
  }
}

function getLinkLabel(type: string) {
  switch (type) {
    case 'github':
      return 'GitHub';
    case 'npm':
      return 'npm';
    case 'casestudy':
      return 'Case study';
    default:
      return 'Live';
  }
}

export function Work() {
  // Interleave projects and testimonials
  const gridItems: Array<{ type: 'project' | 'testimonial'; data: Project | Testimonial }> = [];
  const maxLen = Math.max(projects.length, testimonials.length);

  for (let i = 0; i < maxLen; i++) {
    if (projects[i]) {
      gridItems.push({ type: 'project', data: projects[i] });
    }
    if (testimonials[i]) {
      gridItems.push({ type: 'testimonial', data: testimonials[i] });
    }
  }

  return (
    <section id="work" aria-labelledby="work-heading">
      <div className="container">
        <SectionHead
          eyebrow="Work"
          title={<>A few things <em>I've built</em></>}
          titleId="work-heading"
        />

        {/* Featured Case Study */}
        <article className="featured-card">
          <div className="featured-top">
            <div className="featured-copy">
              <div>
                <h3>{featuredProject.title}</h3>
                <p className="featured-subtitle">{featuredProject.subtitle}</p>
              </div>

              <div className="case-row">
                <span className="eyebrow">Problem</span>
                <p dangerouslySetInnerHTML={{ __html: featuredProject.problem }} />
              </div>

              <div className="case-row">
                <span className="eyebrow">Solution</span>
                <p dangerouslySetInnerHTML={{ __html: featuredProject.solution }} />
              </div>

              <div className="case-row">
                <span className="eyebrow">Result</span>
                <p dangerouslySetInnerHTML={{ __html: featuredProject.result }} />
              </div>
            </div>

            <div className="featured-mockup">
              <img
                src={featuredProject.image}
                alt={`${featuredProject.title} screenshot`}
                className="featured-image"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.style.display = 'none';
                  const fallback = target.nextElementSibling as HTMLElement;
                  if (fallback) fallback.style.display = 'block';
                }}
              />
              <div className="browser-window" style={{ display: 'none' }}>
                <div className="browser-bar">
                  <div className="browser-dot" />
                  <div className="browser-dot" />
                  <div className="browser-dot" />
                </div>
                <div className="browser-content">
                  <div className="browser-line" />
                  <div className="browser-line" />
                  <div className="browser-line" />
                  <div className="browser-line" />
                </div>
              </div>
            </div>
          </div>

          <div className="stats-strip">
            {featuredProject.stats.map(stat => (
              <div key={stat.label} className="stat">
                <div className="stat-number">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="featured-footer">
            <div className="featured-links">
              {featuredProject.links.map(link => (
                <a key={link.type} href={link.url} className="featured-link">
                  <FontAwesomeIcon icon={getLinkIcon(link.type)} aria-hidden="true" />
                  {getLinkLabel(link.type)}
                </a>
              ))}
            </div>
            <span className="featured-stack">{featuredProject.stack.join(' · ')}</span>
          </div>
        </article>

        {/* Project & Testimonial Grid */}
        <div className="work-grid">
          {gridItems.map((item) => {
            if (item.type === 'project') {
              const project = item.data as Project;
              return (
                <article key={project.id} className="project-card">
                  <div className="project-art">
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="project-image"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'block';
                      }}
                    />
                    <span className="project-art-fallback" style={{ display: 'none' }}>
                      {project.image.split('/').pop()}
                    </span>
                  </div>
                  <div className="project-body">
                    <h4>{project.title}</h4>
                    <p>{project.description}</p>
                    <div className="project-stack">
                      {project.stack.map(tech => (
                        <span key={tech} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      {project.links.map(link => (
                        <a key={link.type} href={link.url} className="project-link">
                          <FontAwesomeIcon icon={getLinkIcon(link.type)} aria-hidden="true" />
                          {getLinkLabel(link.type)}
                        </a>
                      ))}
                    </div>
                  </div>
                </article>
              );
            } else {
              const testimonial = item.data as Testimonial;
              return (
                <article key={testimonial.id} className="testimonial-card">
                  <span className="quote-mark" aria-hidden="true">"</span>
                  <blockquote>{testimonial.quote}</blockquote>
                  <footer className="testimonial-footer">
                    <div className="testimonial-avatar">
                      {testimonial.avatar ? (
                        <img src={testimonial.avatar} alt={testimonial.name} />
                      ) : (
                        testimonial.initials
                      )}
                    </div>
                    <div className="testimonial-meta">
                      <strong>{testimonial.name}</strong>
                      <span>{testimonial.role}</span>
                    </div>
                  </footer>
                </article>
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}
