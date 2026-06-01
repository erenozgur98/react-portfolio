import { ReactNode } from 'react';
import './SectionHead.css';

interface SectionHeadProps {
  eyebrow: string;
  title: ReactNode;
  titleId: string;
}

export function SectionHead({ eyebrow, title, titleId }: SectionHeadProps) {
  return (
    <div className="section-head">
      <span className="eyebrow">{eyebrow}</span>
      <h2 id={titleId}>{title}</h2>
    </div>
  );
}
