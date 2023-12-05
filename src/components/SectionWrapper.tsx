import { ReactNode } from 'react';
import Wrapper from './Wrapper';

interface Props {
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
  noContainer?: boolean;
  container2xl?: boolean;
}

function SectionWrapper({
  title,
  description,
  children,
  className,
  noContainer,
  container2xl,
}: Props) {
  return (
    <section className={className || ''}>
      <Wrapper noContainer={noContainer} container2xl={container2xl}>
        <div className="text-center">
          <h2 className="font-bold text-5xl">{title}</h2>
          <p className="opacity-50 py-6">{description}</p>
        </div>

        {children}
      </Wrapper>
    </section>
  );
}

export default SectionWrapper;
