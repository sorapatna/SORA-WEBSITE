import Image from 'next/image';


const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-5 md:gap-28 lg:py-10 lg:flex-row mb-40">
      <div className="flexCenter max-container absolute object-cover" >
        <Image
          src='/images/SORA.webp'
          alt='yoga'  
          width={1440}
          height={580}
          priority
          className="w-screen h-screen object-cover object-center 2xl:rounded-s-xl"
        />
      </div>
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2 ml-5 "> 
      
      </div>

      <div className="relative  flex flex-1 items-start mb-60">
        <div className="relative z-20 flex w-[320px] flex-col gap-4 rounded-3xl bg-yellow-400 px-4 py-4">
          <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-black">Our Call Sign & Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-black">VU2BHC :  Patna, Bihar (IN)</p>
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
  )
}

export default Hero



