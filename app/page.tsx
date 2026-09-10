import Features from "@/components/Features";
import CalendarComponent from "@/components/CalendarComponent";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Faq from "@/components/Faq";
import Mentor from "@/components/Team";
import Testimonial from "@/components/Testimonial"
import Newsletter from "@/components/Subscribe";
import Latest from "@/components/LatestPost";
import dynamic from "next/dynamic";
import { Metadata } from 'next';
import Alert-2 from "@/components/Alert-2";


const YouTubeFrame = dynamic(() => import("@/components/Video"));

 
export const metadata: Metadata = {
  title: 'SOCIETY OF RADIO AMATEURS',
}

export default function Home() {
  return (
    <>
     <Alert-2 />
      <Hero />
      <Guide />
      <Features />
     <CalendarComponent />
      <YouTubeFrame />
      <Mentor />
      <Latest />
      <Faq />
      <Testimonial />     
      <Newsletter />
    </>
  )
}
