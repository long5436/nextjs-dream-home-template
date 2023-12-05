import clsx from 'clsx';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  noContainer?: boolean;
  container2xl?: boolean;
  noPaddingY?: boolean;
  noPaddingX?: boolean;
}

function Wrapper({
  children,
  noContainer,
  container2xl,
  noPaddingY,
  noPaddingX,
}: Props) {
  return (
    <div
      className={clsx('mx-auto', {
        'py-24': !noPaddingY,
        'px-0': noPaddingX,
        container: !noContainer,
        'xl:max-w-[1140px]': !container2xl && !noContainer,
        'mx-0': container2xl,
      })}
    >
      {children}
    </div>
  );
}

export default Wrapper;
