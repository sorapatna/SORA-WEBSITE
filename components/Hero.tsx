import Image from 'next/image';

const Hero = () => {
  return (
    // FIX 1: Enforced min-h-[100svh] (Dynamic Small Viewport Height) so the layout never collapses on mobile safari/chrome
    <section className="relative w-full overflow-hidden min-h-[100svh] md:min-h-screen flex flex-col justify-between pt-12 pb-6 md:py-10 gap-10 lg:flex-row mb-2">
      {/* Background Image */}
      {/* FIX 2: Switched from -z-10 to z-0. Negative z-indexes often fail to render behind layout containers on mobile devices */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/images/HERO-BG.webp"
          alt="yoga background"
          fill
          priority
          sizes="100vw"
          // FIX 3: Changed object-center to object-[30%_center] or object-left 
          // Wide background subjects (like a yoga pose) get cropped off on mobile unless you anchor the focus to the side.
          className="object-cover object-[30%_center]"
        />
        {/* OPTIONAL OVERLAY: Ensures the yellow card and future text remain readable if the background has stark lighting */}
        <div className="absolute inset-0 bg-black/10 z-0" />
      </div>

      {/* Left Content */}
      {/* FIX 4: Changed z-20 to z-10 to sit cleanly above z-0 background. Added a min-h placeholder class so it reserves layout space */}
      <div className="relative z-10 flex flex-1 flex-col justify-center xl:w-1/2 px-5 md:px-10 min-h-[150px] md:min-h-0">
        {/* Pro Tip: Even a hidden or placeholder header keeps your responsive layout from breaking */}
        <h1 className="text-3xl md:text-5xl font-bold text-white drop-shadow-md hidden">
          Yoga & Radio Station
        </h1>
      </div>

      {/* Right Content */}
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
