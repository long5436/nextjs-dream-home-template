import clsx from 'clsx';
import Link from 'next/link';
import { IconType } from 'react-icons';
import css from '~/app/styles/primaryButton.module.scss';

interface Props {
  text: string;
  href?: string;
  icon?: IconType;
  className?: string;
  [other: string]: unknown;
}

function PrimaryButton({ text, href, icon, className, ...other }: Props) {
  const Icon: any = icon;
  const classWrapper = clsx(
    'bg-primary text-white font-bold py-4 px-5 rounded-xl flex items-center hover:bg-primaryHover transition-all duration-300 btn-card-footer',
    className,
    css.btn
  );

  const classText = clsx('w-max relative', {
    'after:absolute after:w-[1px] after:h-full after:bg-white/30 after:-left-3 after:bottom-0 ml-5':
      icon,
  });

  return (
    <Link href={href || '#'} className={classWrapper} {...other}>
      {/* <HiOutlinePhone size="24" className="icon" /> */}
      {icon ? <Icon size="24" className={css.icon} /> : <></>}
      <span className={classText}>{text}</span>
    </Link>
  );
}

export default PrimaryButton;
