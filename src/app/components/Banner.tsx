import Image from 'next/image';

function Banner() {
  return (
    <section>
      <div className="relative">
        <Image
          src="/images/bg-slider-1.png"
          alt=""
          width={100}
          height={100}
          className="w-full h-auto"
        />
        <div className="absolute top-0 left-0 right-0">
          <div className="container mx-auto ">
            <div className="grid grid-cols-2">
              <div>
                <h1 className="font-bold text-6xl">
                  We will find a perfect home for you
                </h1>
                <p>
                  Find a variety of properties that suit you very easily, forget
                  all difficulties in finding a residence for you
                </p>
              </div>
              <div>
                <Image
                  src="/images/slider-1.png"
                  alt=""
                  width={100}
                  height={100}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
