import Link from 'next/link';
import { IoBedOutline } from 'react-icons/io5';
import { LiaMapSolid } from 'react-icons/lia';
import { PiBathtub } from 'react-icons/pi';
import 'swiper/css';
import CardFeaturedImage from './CardFeaturedImage';
import { Card } from './FeaturedProperties';
import FeaturedTag from './FeaturedTag';

interface Props {
  data: Card;
}

function CardFeatured({ data }: Props) {
  return (
    <div className="border rounded-2xl p-4 text-left group relative">
      <CardFeaturedImage data={data.images} />

      <div className="absolute left-[10px] top-8 z-10">
        {data.featured ? <FeaturedTag /> : <></>}
        {data.sale ? <FeaturedTag sale /> : <></>}
      </div>

      <Link
        href="#"
        className="text-lg font-semibold block pb-1 hover:text-primary transition-colors duration-300"
      >
        <h3>{data.name}</h3>
      </Link>

      <div className="pb-4">
        <LiaMapSolid className="text-black/50 inline" size="17" />
        <span className="text-sm pl-1">{data.address}</span>
      </div>

      <Link href="#" className="text-primary font-semibold text-lg">
        ${data.price}
      </Link>
      <div className="flex items-center gap-4 border-b border-black/5 py-4">
        <div className="flex items-center gap-1">
          <IoBedOutline size="17" />
          <span>Beds:</span>
          <span className="font-semibold">{data.beds}</span>
        </div>
        <div className="flex items-center gap-1">
          <PiBathtub size="17" />
          <span>Baths:</span>
          <span className="font-semibold">{data.baths}</span>
        </div>
        <div className="flex items-center gap-1">
          <PiBathtub size="17" />
          <span>Sqft:</span>
          <span className="font-semibold">{data.sqft}</span>
        </div>
      </div>
    </div>
  );
}

export default CardFeatured;
