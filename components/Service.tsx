import { aboutMeData } from "@/constants"; 
const Services = () => {
        return (
            <div id="courses">
			    <div className=" relative flex  flexCenter w-full mt-10" >
      			    <video loop muted autoPlay playsInline className='relative flex h-screen w-screen object-cover'>
      			        <source src="/service3.mp4"  />
      			    </video>
                    <h1 className="absolute text-4xl text-center text-red-400 justify-center font-bold mb-80 pageHeader">Services</h1>     		
                    <h2 className="absolute text-2xl text-center text-indigo-500 justify-center font-semibold mb-40 pageHeader">An accessible platform for individuals to learn about Amateur Radio.</h2>
				    <p className="absolute text-xl text-center text-purple-500 justify-center font-semibold mt-80 p-20 pageHeader"> Through writings/workshops/seminars and other activities, We spread the awareness about Amateur Radio amongst the people.</p>
			    </div>
                <div className=' w-full bg-linear-to-r from-pink-500 via-purple-500 to-indigo-500 text-black font-semibold text-xl p-10 h-full mt-10 mb-10'>
                    <h3 className="absolute text-3xl text-black font-semibold">Our Services</h3>
                    <p className="p-20"> {aboutMeData.highlightedBody}</p>
                </div>
            </div>

        );
}
export default Services;






