import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa6';
import { PiFolderOpenThin } from 'react-icons/pi';
import { CardBlog } from '~/types';

interface Props {
  data: CardBlog;
}

function FormOurBlogItem({ data }: Props) {
  return (
    <div className="text-center group">
      <Link href={'#'} className="block overflow-hidden rounded-xl relative">
        <Image
          src={data.image}
          alt=""
          height={100}
          width={100}
          quality={100}
          className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
        />

        <div className="font-semibold text-[0.85rem] flex gap-4 items-center absolute left-1/4 bottom-2 bg-white py-1 px-3 rounded-md">
          <div>April</div>
          <div className="flex gap-1 items-center">
            <PiFolderOpenThin
              size="18"
              className="text-black/70 -translate-y-[2px]"
            />
            <span className="text-primary">Housing</span>
          </div>
        </div>
      </Link>
      <Link
        href={'#'}
        className="text-lg font-semibold hover:text-primary transition-colors duration-300 block pt-5 pb-4"
      >
        <h3>{data.name}</h3>
      </Link>

      <Link
        href={'#'}
        className="font-semibold text-primary flex group/item w-full"
      >
        <div className="flex flex-1 justify-center items-center">
          Read more
          <FaArrowRight className="ml-3 group-hover/item:animate-icon-move" />
        </div>
      </Link>
    </div>
  );
}

export default FormOurBlogItem;
