import clsx from 'clsx';
import { ReactNode } from 'react';

interface Props {
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
  noContainer?: boolean;
}

function SectionWrapper({
  title,
  description,
  children,
  className,
  noContainer,
}: Props) {
  return (
    <section className={className || ''}>
      <div
        className={clsx('mx-auto py-24', {
          container: !noContainer,
        })}
      >
        <div className="text-center">
          <h2 className="font-bold text-5xl">{title}</h2>
          <p className="opacity-50 py-6">{description}</p>
        </div>
        {children}
      </div>
    </section>
  );
}

export default SectionWrapper;
