"use client"

import React, { Component } from "react";
import { StarIcon } from '@heroicons/react/24/solid';
import Slider from "react-slick";

// CAROUSEL DATA

interface DataType {
    profession: string;
    comment: string;
    name: string;
}

const postData: DataType[] = [
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
]

// CAROUSEL SETTINGS


export default class MultipleItems extends Component {

    render() {
        const settings = {
            dots: false,
            dotsClass: "slick-dots",
            infinite: true,
            slidesToShow: 3,
            // centerMode: true,
            slidesToScroll: 1,
            arrows: false,
            autoplay: true,
            speed: 500,
            autoplaySpeed: 5000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };

        return (
            <div className="bg-amber-300 pt-40 pb-10 sm:pb-32 lg:py-32 " id="testimonial">
                <div className='mx-auto max-w-7xl sm:py-4 lg:px-8'>
                <h2 className="1h-82 text-6xl text-black md:text-55xl text-center md:text-start font-semibold"> What People<br />Says?</h2>
                    <Slider {...settings}>
                        {postData.map((items, i) => (
                            <div key={i}>
                                <div className={`bg-white m-4 p-5 my-40 overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-110 hover:shadow-2xl  relative ${i % 2 ? 'middleDiv' : 'testimonial-shadow '}`}>
                                    <h3 className='text-base text-justify font-normal text-black my-4'>{items.comment}</h3>
                                    <hr style={{ color: "#D7D5D5" }} />
                                    <div className="flex justify-between">
                                        <div>
                                            <h4 className='text-lg font-medium text-shadow-slate-400 pt-4 pb-2'>{items.name}</h4>
                                            <h4 className='text-sm font-normal text-black pb-2'>{items.profession}</h4>
                                        </div>
                                        <div className="flex">
                                            <StarIcon width={20} className="text-orange-300" />
                                            <StarIcon width={20} className="text-orange-300" />
                                            <StarIcon width={20} className="text-orange-300" />
                                            <StarIcon width={20} className="text-orange-300" />
                                            <StarIcon width={20} className="text-amber-500" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>

        );
    }
}
