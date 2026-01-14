import { guideMeText } from '@/constants'
import Image from 'next/image'

const Guide = () => {
  return (
    <section className=" flexCenter flex-col pt-20 bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500  relative mt-20">
      <div className="padding-container max-container w-full pb-24 ">
         <Image src="/sora-logo.png" alt="camp" width={100} height={100} />
        <p className="uppercase mt-5 mb-4 text-red bold-16">
          We are here for you
        </p>
        <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
          <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">Guide You to Become a HAM</h2>
          <p className="regular-20 text-justify mr-5 text-black xl:max-w-[520px]">{guideMeText.body}</p>
        </div>
      </div>

      <div className="flexCenter max-container relative">
        <Image 
          src="/SORA-GUIDE.jpeg"
          alt="boat"
          width={500}
          height={500}
          className="w-screen h-screen object-cover object-center 2xl:rounded-5xl"
        />


      </div>
    </section>
  )
}

export default Guide
