'use client';
import Image from 'next/image';
import Link from 'next/link';
import { IoBedOutline } from 'react-icons/io5';
import { LiaMapSolid } from 'react-icons/lia';
import { PiBathtub } from 'react-icons/pi';
import { TiPlus } from 'react-icons/ti';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import 'swiper/css';
import CardFeaturedImage from './CardFeaturedImage';
import { Card } from './FeaturedProperties';
import FeaturedTag from './FeaturedTag';

interface Props {
  data: Card;
}

function CardFeatured({ data }: Props) {
  return (
    <div className="rounded-2xl p-4 text-left group relative group card-shadow card-featured bg-white">
      <div className="relative overflow-hidden rounded-xl">
        <CardFeaturedImage data={data} />
      </div>

      <div className="absolute left-[10px] top-8 z-10">
        {data.featured ? <FeaturedTag /> : <></>}
        {data.sale ? <FeaturedTag sale /> : <></>}
      </div>

      {/*  */}
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
      <div className="flex justify-between items-center pt-4">
        <Link href={''} className="flex items-center">
          <TiPlus className="text-primary" />
          <span className="font-semibold">Compare</span>
        </Link>

        <div>
          <Image
            src={data.authorImage}
            alt=""
            height={40}
            width={40}
            quality={100}
            data-tooltip-id="my-tooltip-1"
          />

          <ReactTooltip
            id="my-tooltip-1"
            place="top"
            content="Kathryn Murphy"
            style={{
              backgroundColor: '#fff',
              color: 'rgb(var(--color-text-primary))',
              fontWeight: '600',
              boxShadow: '0px 4px 26px 0px rgba(66, 71, 76, 0.0784313725)',
              borderRadius: '10px',
            }}
          />
        </div>

        <div>3 years ago</div>
      </div>
    </div>
  );
}

export default CardFeatured;
