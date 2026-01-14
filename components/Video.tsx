'use client'
import Image from 'next/image';
import {useRef} from 'react';
import SectionTitle from './SectionTitle';


export default function YouTubeFrame() {
    const divRef = useRef<HTMLDivElement|null>(null);

    const onClick = () => {
        const iframe = document.createElement( "iframe" );
        iframe.setAttribute( "frameborder", "0" );
        iframe.setAttribute( "allowfullscreen", "1");
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
        iframe.style.width = "640";
        iframe.style.height = "390";
        iframe.setAttribute( "src", `https://www.youtube.com/embed/${"JMvLMwMb5TM"}?rel=0&showinfo=1&autoplay=1` );
        if (divRef.current) {
            divRef.current.innerHTML = "";
            divRef.current.appendChild(iframe);
        }
    }

	const onClick1 = () => {
        const iframe = document.createElement( "iframe" );
        iframe.setAttribute( "frameborder", "0" );
        iframe.setAttribute( "allowfullscreen", "1");
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
        iframe.style.width = "640";
        iframe.style.height = "390";
        iframe.setAttribute( "src", `https://www.youtube.com/embed/${"kEXEz53Cktc"}?rel=0&showinfo=1&autoplay=1` );
        if (divRef.current) {
            divRef.current.innerHTML = "";
            divRef.current.appendChild(iframe);
        }
    }
	const onClick2 = () => {
        const iframe = document.createElement( "iframe" );
        iframe.setAttribute( "frameborder", "0" );
        iframe.setAttribute( "allowfullscreen", "1");
        iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
        iframe.style.width = "640";
        iframe.style.height = "390";
        iframe.setAttribute( "src", `https://www.youtube.com/embed/${"WxjHJRQ-y7k"}?rel=0&showinfo=1&autoplay=1` );
        if (divRef.current) {
            divRef.current.innerHTML = "";
            divRef.current.appendChild(iframe);
        }
    }

	return ( 
    	<section className="relative bg-yellow-300 z-10 py-16 md:py-20 lg:py-28">
			<div className="item-center">
				<SectionTitle
          			title="GALLERY"
          			paragraph=""
          			center
          			mb="30px"
        		/>

				<div className='flex flex-col lg:flex-row w-auto h-auto gap-10 mx-10 justify-center'>
					<div ref={divRef} className="flex items-center justify-center">
						<button
                    		aria-label="video play button"
                    		onClick={onClick} 
                    		className="absolute flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100"
                  		>
                    		<svg
                      			width="16"
                      			height="18"
                      			viewBox="0 0 16 18"
                      			className="fill-current"
                    		>
                      		<path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                    		</svg>
                  		</button>
            			<span onClick={onClick} className="ti-control-play position-absolute display-1 text-white" />
            			<Image onClick={onClick} loading="lazy" src="/images/1.jpeg" alt="video image Thumbnail" width={500} height={390} className="shadow" />
        			</div>
					<div ref={divRef} className="flex items-center justify-center">
						<button
                    		aria-label="video play button"
                    		onClick={onClick1} 
                    		className="absolute flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100"
                  		>
                    		<svg
                      			width="16"
                      			height="18"
                      			viewBox="0 0 16 18"
                      			className="fill-current"
                    		>
                      			<path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                    		</svg>
                  		</button>
            			<span onClick={onClick1} className="ti-control-play position-absolute display-1 text-white" />
            			<Image onClick={onClick1} loading="lazy" src="/images/3.jpeg" alt="video image Thumbnail" width={500} height={390} className="shadow" />
        			</div>
					<div ref={divRef} className="flex items-center justify-center">
						<button
                    		aria-label="video play button"
                    		onClick={onClick2} 
                    		className="absolute flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white bg-opacity-75 text-primary transition hover:bg-opacity-100"
                  		>
                    		<svg
                      			width="16"
                      			height="18"
                      			viewBox="0 0 16 18"
                      			className="fill-current"
                    		>
                      			<path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                    		</svg>
                  		</button>
            			<span onClick={onClick2} className="ti-control-play position-absolute display-1 text-white" />
            			<Image onClick={onClick2} loading="lazy" src="/images/2.jpeg" alt="video image Thumbnail" width={500} height={390} className="shadow" />
        			</div>
				</div>
				<div className='flex lg:flex-row flex-col items-center justify-center mx-5 gap-5 mt-5 overflow-hidden rounded-lg shadow-lg '>
					<Image
						priority={false}
						width={400}
						height={400}
						aria-label={"image of KAULBHASKAR"}
						alt={"KAULBHASKAR"}
						src={"/SORA1.jpeg"}
						className='transition-transform duration-300 hover:scale-110 hover:shadow-2xl'
					/>
					<Image
						priority={false}
						width={400}
						height={400}
						aria-label={"image of KAULBHASKAR"}
						alt={"KAULBHASKAR"}
						src={"/SORA2.jpeg"}
						className='transition-transform duration-300 hover:scale-110 hover:shadow-2xl'
					/>
					<Image
						priority={false}
						width={400}
						height={400}
						aria-label={"image of KAULBHASKAR"}
						alt={"KAULBHASKAR"}
						src={"/SORA3.jpeg"}
						className='transition-transform duration-300 hover:scale-110 hover:shadow-2xl'
					/>
				</div>
				<div className='flex lg:flex-row flex-col items-center justify-center mx-5 gap-5 mt-5 overflow-hidden rounded-lg shadow-lg'>
					<Image
						priority={false}
						width={400}
						height={400}
						aria-label={"image of KAULBHASKAR"}
						alt={"KAULBHASKAR"}
						src={"/SORA7.jpeg"}
						className='transition-transform duration-300 hover:scale-110 hover:shadow-2xl'
					/>
					<Image
						priority={false}
						width={400}
						height={400}
						aria-label={"image of KAULBHASKAR"}
						alt={"KAULBHASKAR"}
						src={"/SORA8.jpeg"}
						className='transition-transform duration-300 hover:scale-110 hover:shadow-2xl'
					/>
					<Image
						priority={false}
						width={400}
						height={400}
						aria-label={"image of KAULBHASKAR"}
						alt={"KAULBHASKAR"}
						src={"/SORA9.jpeg"}
						className='transition-transform duration-300 hover:scale-110 hover:shadow-2xl'
					/>
				</div>
	
			</div>
		</section>
	); 
} 



