import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative w-screen min-h-screen flex flex-col gap-10 py-5 md:gap-20 lg:py-10 lg:flex-row mb-2">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/SORA.png"
          alt="yoga"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Left Content */}
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 px-5 md:px-10">
        {/* Add your text/content here */}
        
      </div>

      {/* Right Content */}
      <div className="relative z-20 flex flex-1 items-start mt-10 md:mt-0 mb-10 md:mb-20 px-5 md:px-0">
        <div className="flex w-full max-w-[320px] flex-col gap-4 rounded-3xl bg-yellow-400 px-4 py-4 shadow-lg">
          <div className="flex flex-col">
            <div className="flex justify-between items-center">
              <p className="regular-16 text-black">Our Call Sign & Grid-Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-black">VU2BHC</p>
            <p className="bold-20 text-black">NL25no</p>
          </div>

          <div className="flex flex-col">
            <p className="regular-16 text-black">WhatsApp/Call</p>
            <p className="bold-20 text-black">+91-8578003221</p>
            <p className="regular-16 text-black">E-mail:</p>
            <p className="bold-16 text-black break-words">sorapatna@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

















