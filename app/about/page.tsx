import Image from "next/image";
import { Metadata } from "next";
import { aboutMeData } from "@/constants";
import Latest from "@/components/LatestPost";
import Newsletter from "@/components/Newsletter";
export const metadata:Metadata = {
	title: "About Us",
	description: `Here are our details.`,
};

const About = () => {
	return (
     <>
		<div className="flex flex-col w-11/12 content-center m-auto mt-10">
			<div className="flexCenter max-container relative w-full" >
        		<Image
          			src='/SORA4.jpeg'
          			alt='yoga'  
          			width={1440}
          			height={580}
          			className="w-screen h-screen object-cover object-center 2xl:rounded-s-xl"
        		/>
        		<h1 className="absolute text-4xl text-center text-white justify-center font-bold mb-60 pageHeader">About</h1>
				<h2 className="absolute text-xl text-center text-white justify-center font-bold mt-80 p-20 pageHeader">We are group of HAMs from all over India as well as from abroad. We, through writings/workshops/seminars and other activities, spread the awareness about Amateur Radio amongst the people.</h2>
			</div>
			<section className='flex-row md:flex mx-auto items-center w-full bg-linear-to-r from-green-400 via-indigo-500 to-yellow-400'>
				<div className='sm:w-1/2 sm:ml-10 sm:mr-10 w-full flex justify-center mt-12 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 hover:shadow-2xl '>
					<Image
						priority={false}
						width={940}
						height={960}
						aria-label={"image of Kaulbhaskar"}
						alt={"guru ji image"}
						src={"/KAULBHASKAR.jpg"}
						className='profileImage'
					/>
				</div>
				<div className=' sm:mt-0  sm:w-2/3 w-full mt-6 ml-0 p-10'>
					<h2 className='pb-20 text-2xl md:text-4xl text-bold text-center justify-center'> {aboutMeData.title}</h2>
					<p className='text-lg text-simple text-justify '><strong>Society Of Radio Amateurs “in short SORA", having CALL SIGN VU2BHC and Grid-Location NL25no, is an Amateur Radio Society in Patna (Bihar, India) who has consistently demonstrated its commitment to advancing technical knowledge, fostering international goodwill, and supporting public service communication from very beginning. Beyond the technical aspects, the society plays a vital role in community resilience. Its members are often the first to provide reliable communication during emergencies, ensuring that critical information reaches those who need it most. The organization’s emphasis on innovation, education, and service reflects the highest standards of professionalism. A lot of persons have benefited from structured training programs, expert mentorship, and access to a vibrant network of radio operators, who share a dedication to excellence, from our Society.</strong></p>
				</div>
			</section>

			<section className='w-full text-black text-4xl text-bold text-center justify-center p-10 h-full mt-5'>
				<p> {aboutMeData.body}</p>
			</section>
			<section className='flex flex-col mx-auto w-auto h-auto px-4 lg:px-8'>
				<div className='flex lg:flex-row flex-col w-auto h-auto gap-5 mx-auto justify-center'>
					<Image
						priority={false}
						width={250}
						height={350}
						aria-label={"image of RAJNI MOHAN"}
						alt={"RAJNI MOHAN"}
						src={"/images/RAJNI MOHAN.webp"}
						className="w-auto h-auto transition-transform duration-300 hover:scale-120"/>
					<Image
						priority={false}
						width={250}
						height={350}
						aria-label={"image of SANJAY GAUTAM"}
						alt={"SANJAY GAUTAM"}
						src={"/images/SANJAY GAUTAM.webp"}
						className="w-auto h-auto transition-transform duration-300 hover:scale-120"/>
					<Image
						priority={false}
						width={250}
						height={350}
						aria-label={"image of KAULBHASKAR"}
						alt={"MITHILESH"}
						src={"/images/BHI.webp"}
					className="w-auto h-auto transition-transform duration-300 hover:scale-120"/>
					<Image
						priority={false}
						width={250}
						height={350}
						aria-label={"image of KPH"}
						alt={"KPH"}
						src={"/images/KPH.jpeg"}
					className="w-auto h-auto transition-transform duration-300 hover:scale-120"/>
				</div>
			</section>
	    </div>
		 <Latest />
		 <Newsletter />
	  </>	
    );
};

export default About;













