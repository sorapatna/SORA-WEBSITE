import Features from "@/components/Features";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import Faq from "@/components/Faq";
import Mentor from "@/components/Team";
import Testimonial from "@/components/Testimonial"
import Newsletter from "@/components/Subscribe";
import Latest from "@/components/LatestPost";
import dynamic from "next/dynamic";
import { Metadata } from 'next';


const YouTubeFrame = dynamic(() => import("@/components/Video"));

 
export const metadata: Metadata = {
  title: 'SOCIETY OF RADIO AMATEURS',
}

export default function Home() {
  return (
    <>
      <Hero />
      <Guide />
      <Features />
      <YouTubeFrame />
      <Mentor />
      <Latest />
      <Faq />
      <Testimonial />     
      <Newsletter />
    </>
  )
}
