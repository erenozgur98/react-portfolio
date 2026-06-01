import { SectionHead } from '../SectionHead';
import './Services.css';

interface Service {
  index: string;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    index: 'S/01',
    title: 'Marketing & brand sites',
    description: 'Fast, beautiful websites that tell your story and actually show up in search results.',
  },
  {
    index: 'S/02',
    title: 'Custom web applications',
    description: 'Interactive tools and dashboards built to solve real problems for your team or customers.',
  },
  {
    index: 'S/03',
    title: 'Design systems',
    description: 'Component libraries that scale with your product and keep your UI consistent across teams.',
  },
  {
    index: 'S/04',
    title: 'Performance & accessibility',
    description: 'Audits and fixes that make your site faster for everyone and usable by everyone.',
  },
  {
    index: 'S/05',
    title: 'Open source',
    description: 'I love contributing to tools that help other developers build better things.',
  },
  {
    index: 'S/06',
    title: 'Writing & talks',
    description: 'Sharing what I\'ve learned through blog posts, documentation, and occasional conference talks.',
  },
];

export function Services() {
  return (
    <section id="services" aria-labelledby="services-heading">
      <div className="container">
        <SectionHead
          eyebrow="Services"
          title={<>Stuff I love <em>working on</em></>}
          titleId="services-heading"
        />

        <div className="services-grid">
          {services.map(service => (
            <article key={service.index} className="service-card">
              <span className="service-index">{service.index}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
