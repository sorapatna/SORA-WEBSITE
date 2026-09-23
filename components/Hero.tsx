import Image from 'next/image';

const Hero = () => {
  return (
    // FIX 1: Re-established 'min-h-[600px] md:min-h-screen' so the section never collapses on small viewports
    <section className="relative w-full overflow-hidden min-h-[650px] md:min-h-screen flex flex-col justify-between gap-10 py-10 md:gap-20 lg:py-10 lg:flex-row mb-2">
      
      {/* FIX 2: Added z-0 and ensured absolute wrapper has structural width/height values */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/HERO-BG.webp"
          alt="yoga background"
          fill
          priority
          sizes="100vw"
          // FIX 3: Changed object-center to object-[25%_center] (or object-left) 
          // This forces the main subject of your image to stay visible when the screen narrows down.
          className="object-cover object-[25%_center]" 
        />
        {/* OPTIONAL: Adds a subtle dark tint overlay so text remains readable if background is bright */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Left Content */}
      {/* FIX 4: Ensured z-10 sit firmly above the z-0 background layer */}
      <div className="relative z-10 flex flex-1 flex-col xl:w-1/2 px-5 md:px-10">
        {/* Placeholder title so the left side actually takes up visual space on mobile */}
        <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-md">
          Yoga & Wellness
        </h1>
        <p className="text-white/90 mt-2">
          Discover inner peace and strength.
        </p>
      </div>

      {/* Right Content */}
      <div className="relative z-10 flex flex-1 items-start mt-5 md:mt-0 mb-5 md:mb-20 px-5 md:px-0 justify-center lg:justify-start">
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
