import Image from 'next/image';

const Hero = () => {
  return (
    // Enforced min-h-[100svh] so the section matches the exact mobile viewport height without clipping
    <section className="relative w-full overflow-hidden min-h-[100svh] md:min-h-screen flex flex-col justify-between pt-12 pb-8 md:py-10 gap-10 lg:flex-row mb-2">
      
      {/* Background Image Container */}
      {/* FIX 1: Set z-0 instead of a negative index to prevent mobile Safari/Chrome from hiding the image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/HERO-BG.webp"
          alt="yoga background"
          fill
          priority
          sizes="100vw"
          // FIX 2: Changed object-center to object-left. 
          // This ensures the left side of your image (where your subject is) stays perfectly visible on mobile.
          className="object-cover object-left"
        />
        {/* Subtle dark tint overlay to make sure text and the yellow box stand out clearly */}
        <div className="absolute inset-0 bg-black/10 z-0" />
      </div>

      {/* Left Content */}
      {/* FIX 3: Set z-10 to stay safely on top of the image container */}
      <div className="relative z-10 flex flex-1 flex-col justify-center xl:w-1/2 px-5 md:px-10 min-h-[120px] md:min-h-0">
        {/* Even if empty, this space is now safely positioned over the left-aligned image subject */}
      </div>

      {/* Right Content */}
      {/* FIX 4: Aligned the yellow box to the bottom on mobile to keep the left/top image subject clean and visible */}
      <div className="relative z-10 flex flex-1 items-end md:items-start mt-auto md:mt-0 px-5 md:px-0 justify-center lg:justify-start">
        <div className="flex w-full max-w-[320px] flex-col gap-4 rounded-3xl bg-yellow-400 px-4 py-4 shadow-lg mb-4 md:mb-0">
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
