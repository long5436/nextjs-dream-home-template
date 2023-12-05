import clsx from 'clsx';
import Link from 'next/link';
import { IconType } from 'react-icons';

interface Props {
  text: string;
  href?: string;
  icon?: IconType;
  className?: string;
  type?: 'basic';
  sizeIcon?: number;
  [other: string]: unknown;
}

function PrimaryButton({
  text,
  href,
  icon,
  className,
  type,
  sizeIcon,
  ...other
}: Props) {
  const Icon: any = icon;

  return (
    <Link
      href={href || '#'}
      className={clsx(
        'bg-primary text-white font-bold py-4 px-5 rounded-xl flex items-center hover:bg-primaryHover transition-all duration-300 btn-card-footer',
        'primary-button',
        className
      )}
      {...other}
    >
      {icon && type !== 'basic' ? (
        <Icon size={sizeIcon || 24} className="icon" />
      ) : (
        <></>
      )}
      <span
        className={clsx('w-max relative', {
          'after:absolute after:w-[1px] after:h-full after:bg-white/30 after:-left-3 after:bottom-0 ml-5':
            icon && type !== 'basic',
          'flex gap-2 items-center': icon && type === 'basic',
        })}
      >
        {text}

        {icon && type === 'basic' ? (
          <Icon size={sizeIcon || 24} className="icon" />
        ) : (
          <></>
        )}
      </span>
    </Link>
  );
}

export default PrimaryButton;
