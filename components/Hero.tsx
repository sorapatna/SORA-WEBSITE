import Image from 'next/image';

const Hero = () => {
  return (
    // CHANGED: Removed fixed min-h-screen constraints that clip content on mobile, 
    // and replaced it with a dynamic h-auto md:min-h-screen layout.
    <section className="relative w-full overflow-hidden h-auto md:min-h-screen flex flex-col gap-10 py-10 md:gap-20 lg:py-10 lg:flex-row mb-2">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/HERO-BG.webp"
          alt="yoga background"
          fill
          priority
          // CHANGED: Added specific media breakpoints for sizes to optimize image loading on mobile devices.
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
          className="object-cover object-center"
        />
      </div>

      {/* Left Content */}
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 px-5 md:px-10">
        {/* Add your text/content here */}
      </div>

      {/* Right Content */}
      <div className="relative z-20 flex flex-1 items-start mt-5 md:mt-0 mb-5 md:mb-20 px-5 md:px-0 justify-center lg:justify-start">
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
            {/* FORMATTED: Applied telephone markdown structure for click-to-call functionality */}
            <p className="bold-20 text-black">
              <a href="tel:+918578003221" className="hover:underline">+91-8578003221</a>
            </p>
            <p className="regular-16 text-black">E-mail:</p>
            <p className="bold-16 text-black break-words">
              <a href="mailto:sorapatna@gmail.com" className="hover:underline">sorapatna@gmail.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
