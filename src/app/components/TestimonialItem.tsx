'use client';

import Image from 'next/image';
interface Props {
  data: {};
}

function TestimonialItem({ data }: Props) {
  return (
    <div className="px-3 py-4 group">
      <div className="text-center p-[30px] card-shadow">
        <Image
          src="/images/testimonials.svg"
          alt=""
          height="30"
          width="30"
          className="mx-auto mb-5"
        />
        <p className="italic leading-6">
          &ldquo;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Integer vel tortor justo. Vestibulum vitae vulputate lacus. Aliquam
          sollicitudin mauris odio. Fusce egestas consectetur semper
          vulputate&ldquo;
        </p>
      </div>
      <div className="text-center relative">
        <Image
          src="/images/author-testimonial.jpg"
          alt=""
          height="65"
          width="65"
          className="mx-auto mb-4 mt-7"
        />
        <h4 className="font-semibold text-base">Esther Howard</h4>
        <p className="opacity-60">Internet Security Assistant</p>
      </div>
    </div>
  );
}

export default TestimonialItem;
