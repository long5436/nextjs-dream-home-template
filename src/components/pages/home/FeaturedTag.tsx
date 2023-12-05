import clsx from 'clsx';

interface Props {
  sale?: boolean;
}

function FeaturedTag({ sale }: Props) {
  return (
    <div
      className={clsx(
        'font-bold text-white block text-[.8rem] relative before:absolute before:-bottom-[5px] before:left-0 before:w-0 before:h-0 before:border-t-[6px] before:border-l-[6px] before:border-l-transparent after:absolute after:top-2/4 after:-right-[10px] after:-translate-y-2/4 after:h-full after:w-2/4 -z-[1] text-center pl-2 pr-1 clip-path-featured-tag mb-1 w-fit',
        {
          'bg-primary before:border-t-primary after:bg-primary': !sale,
          'bg-newPurple before:border-t-newPurple after:bg-newPurple': sale,
        }
      )}
    >
      <span>{sale ? 'For Sale' : 'Featured'}</span>
    </div>
  );
}

export default FeaturedTag;
