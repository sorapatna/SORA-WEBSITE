import Image from "next/image";

import Mailer from "@/components/mailer";
import { contactMeText } from "@/constants";
import { Metadata } from "next";
import Newsletter from "@/components/Newsletter";

export const metadata:Metadata = {
  title: "Contact Us",
  description: `Here are our contact-details.`,
};

export default function Contact() {
  return (
    <>
    <div className="flex flex-col w-11/12 content-center m-auto mt-10">
      <div className="flexCenter max-container relative w-full" >
      <Image
          src='/phone-image.jpeg'
          alt='telephone'  
          width={1440}
          height={580}
          className="w-screen h-screen object-cover object-center 2xl:rounded-s-xl"
        />
        <h1 className="absolute text-4xl text-center text-black justify-center font-bold mb-80 pageHeader">Contact Us</h1>
        <div className=" absolute flex-row lg:flex mx-10 mt-80 gap-24" >

          <div className="mt-5 md:mt-0 text-center" >
            <h2 className="text-xl font-bold text-black">Open Hours</h2>
            <p className="text-md md:text-lg font-semibold text-red">Mon-Sat: 10.00 AM - 08.00 PM</p>
            <p className="text-md md:text-lg font-semibold text-red">Sun: 10.00 AM - 04.00 PM</p>
          </div>
          <div className="mt-5 md:mt-0 text-center" >
            <h2 className="text-xl font-bold text-black">LOCATION</h2>
            <p className="text-md md:text-lg font-bold text-red-400">NL25no</p>
            <p className="text-md md:text-lg font-semibold text-black">Patna, Bihar(IN)</p>
          </div>
          <div className="mb-5 mt-5 md:mt-0 text-center" >
            <h2 className="text-xl font-bold text-black">Contact</h2>
            <p className="text-md md:text-lg font-semibold text-red">Email: sorapatna@gmail.com</p>
            <p className="text-md md:text-lg font-semibold text-red">Tel: +91-8578003221</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center mt-5">
        <p className="flex text-xl md:text-2xl lg:text-4xl text-black font-bold ">Our Location on Map</p>
      </div>
      <div className="flex mt-5">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3597.478908723331!2d85.14915687456576!3d25.62222631435593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed59cb88e11ab7%3A0x5a6e9d21a4107bbc!2sGanga%20Palace%2C%20Grands%20Pallavi%20Campus!5e0!3m2!1sen!2sin!4v1769514921853!5m2!1sen!2sin" width="100%" height="500" loading="lazy"></iframe>
      </div>
      <div className=" flex-row md:flex w-full content-center m-auto bg-grey-light p-10 gap-10">
        <div className="flex flex-col sm:w-1/2 w-full">
          <h2 className="text-2xl font-semibold mb-10">{contactMeText.title}</h2>
          <p className="text-xl font-normal mb-2" >{contactMeText.body}</p>
          <Image
          	src='/contact-form-image.webp'
          	alt='contact-image'  
          	width={500}
          	height={500}
          	className="w-auto h-auto object-cover object-center 2xl:rounded-s-xl"
        	/>
        </div>
        <div className="flex flex-col sm:w-1/2 w-full" >
          <Mailer />
        </div>
      </div>
    </div>
      <Newsletter />
    </>
  );
}







