import clsx from 'clsx';
import { ReactNode } from 'react';

interface Props {
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
}

function SectionWrapper({ title, description, children, className }: Props) {
  return (
    <section className={clsx('container mx-auto py-24', className)}>
      <div className="text-center">
        <h2 className="font-bold text-5xl">{title}</h2>
        <p className="opacity-50 py-6">{description}</p>
      </div>
      {children}
    </section>
  );
}

export default SectionWrapper;
