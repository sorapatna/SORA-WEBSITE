import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative w-screen h-screen flex flex-col gap-20 py-5 md:gap-28 lg:py-10 lg:flex-row mb-2 ">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/EVENT.webp"
          alt="yoga"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Left Content */}
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 ml-5">
        {/* Add your text/content here */}
      </div>

      {/* Right Content */}
      <div className="relative z-20 flex flex-1 items-start mb-60">
        <div className="flex w-[320px] flex-col gap-4 rounded-3xl bg-yellow-400 px-4 py-4">
          <div className="flex flex-col">
            <div className="flex justify-between">
              <p className="regular-16 text-black">Our Call Sign & Grid-Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-black">VU2BHC</p>
            <p className="bold-20 text-black">NL25no</p>
          </div>

          <div className="flex flex-col">
            <p className="regular-16 block text-black">Whats App/Call</p>
            <p className="bold-20 text-black">+91-8578003221</p>
            <p className="regular-16 block text-black">E-mail:</p>
            <p className="bold-16 text-black">sorapatna@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;




