import { SectionHead } from '../SectionHead';
import './Skills.css';

interface SkillGroup {
  title: string;
  subtitle: string;
  skills: { name: string; level: string }[];
}

const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    subtitle: 'Core expertise',
    skills: [
      { name: 'React / Next.js', level: 'Expert' },
      { name: 'TypeScript', level: 'Expert' },
      { name: 'CSS / Tailwind', level: 'Expert' },
      { name: 'Design Systems', level: 'Advanced' },
      { name: 'Testing (Vitest, Playwright)', level: 'Advanced' },
      { name: 'Animation (Framer Motion)', level: 'Proficient' },
    ],
  },
  {
    title: 'Backend & Data',
    subtitle: 'Supporting skills',
    skills: [
      { name: 'Node.js', level: 'Advanced' },
      { name: 'PostgreSQL', level: 'Proficient' },
      { name: 'Prisma / Drizzle', level: 'Advanced' },
      { name: 'REST / GraphQL / tRPC', level: 'Advanced' },
      { name: 'Redis', level: 'Familiar' },
      { name: 'Python', level: 'Familiar' },
    ],
  },
  {
    title: 'Tools & DevOps',
    subtitle: 'Workflow & infra',
    skills: [
      { name: 'Git / GitHub', level: 'Expert' },
      { name: 'Vercel / Netlify', level: 'Advanced' },
      { name: 'Docker', level: 'Proficient' },
      { name: 'CI/CD (GitHub Actions)', level: 'Advanced' },
      { name: 'Figma', level: 'Proficient' },
      { name: 'AWS (S3, Lambda)', level: 'Familiar' },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading">
      <div className="container">
        <SectionHead
          eyebrow="Skills"
          title={<>What's in <em>the toolbox</em></>}
          titleId="skills-heading"
        />

        <div className="skills-grid">
          {skillGroups.map(group => (
            <div key={group.title} className="skill-group">
              <h3>{group.title}</h3>
              <span className="eyebrow">{group.subtitle}</span>
              <ul className="skill-list">
                {group.skills.map(skill => (
                  <li key={skill.name}>
                    {skill.name}
                    <span className="skill-level">{skill.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
