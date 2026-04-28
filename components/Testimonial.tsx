"use client";

import React, { useState, useEffect } from "react";
import { StarIcon } from '@heroicons/react/24/solid';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Testimonial Data
const postData = [
 {
        name: "MURARI SINHA",
        profession: 'B.S.E.B.',
        comment: 'For me, HAM radio isn’t just about technology—it’s about humanity. It’s about the thrill of making that first contact, the pride of building something with your own hands, and the warmth of knowing you’re part of a global network of people who care. S.O.R.A. has been my doorway to adventure, learning, and lifelong friendships, and I’m grateful every day to be part of it.',
    },
    {
        name: "MAYANK",
        profession: 'N.M.C.H.',
        comment: 'Some of my most cherished memories are sitting late at night, tuning into voices from halfway across the world, and realizing that a simple signal could bridge cultures and continents. S.O.R.A. has given me mentors who patiently guided me, friends who cheer me on, and opportunities to serve my community during emergencies when communication really matters.',
    },
    {
        name: "KUNJ BIHARI",
        profession: 'COREOGRAPHER',
        comment: 'When I first picked up a radio, I never imagined it would change my life the way it has. Through the Amateur Radio Society, I’ve discovered not just a fascinating hobby, but a family of people who share the same curiosity and passion for connecting across the airwaves.',
    },
    {
        name: "JAIPAL ARYA",
        profession: 'SOCIAL SERVICE',
        comment: 'Joining the S.O.R.A. has been one of the most rewarding experiences of my life. What started as a curiosity about radios quickly grew into a passion for communication, technology, and community service. The society not only nurtured my technical skills—teaching me everything from antenna building to emergency communication protocols but also gave me a sense of belonging among like‑minded enthusiasts.',
    },
    {
        name: "Dr. Rupinder Singh",
        profession: 'Doctor',
        comment: 'S.O.R.A’s mentorship, workshops, and camaraderie have been invaluable. Through HAM radio, I’ve connected with people across continents, participated in disaster relief efforts, and discovered the joy of lifelong learning.  It’s more than just a hobby. It’s a gateway to global friendships, technical innovation, and public service. I’m proud to be part of a community that proves the power of radio waves can unite people, foster resilience, and inspire curiosity in every generation.',
    },
];

const Testimonials: React.FC = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setSlidesToShow(width >= 1200 ? 3 : width >= 800 ? 2 : 1);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: false, infinite: true, slidesToShow, slidesToScroll: 1,
    arrows: false, autoplay: true, speed: 500, cssEase: "linear",
  };

  return (
    <div className="bg-linear-to-r from-green-400 via-blue-500 to-purple-600 pt-20 pb-10 sm:py-32" id="testimonial">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <h2 className="text-4xl md:text-6xl text-black text-center md:text-start font-semibold mb-10">
          What Others Say <br className="hidden md:block" /> About Us?
        </h2>
        <Slider {...settings} key={slidesToShow}>
          {postData.map((item, i) => (
            <div key={i} className="p-2">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:scale-105 transition-transform min-h-[300px] flex flex-col justify-between">
                <p className="text-base text-justify text-black mb-4 italic">"{item.comment}"</p>
                <div>
                  <hr className="mb-4" />
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-lg font-bold text-slate-800">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.profession}</p>
                    </div>
                    <div className="flex text-amber-500">
                      {[...Array(5)].map((_, j) => <StarIcon key={j} className="w-4 h-4" />)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
