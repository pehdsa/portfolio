import React from 'react';
import { FaLocationArrow } from 'react-icons/fa6';
import { socialMedia } from '@/data';
import MagicButton from './ui/MagicButton';

import { Button } from './ui/MovingBorders';

const Footer = () => {
    return (
        <footer className="w-full pt-10 md:pt-20 pb-10 overflow-hidden relative" id="contact">
            
            <div className="w-full absolute left-0 bottom-0 min-h-96 scale-110">
                <img
                    src="/footer-grid.svg"
                    alt="grid"
                    className="w-full h-full opacity-50 "
                />
            </div>

            <div className="flex flex-col items-center pb-10">
                <h2 className="heading lg:max-w-[45vw]">
                    Ready to take <span className="text-purple">your</span> digital
                    presence to the next level?
                </h2>
                <p className="text-white-200 md:mt-10 my-5 text-center">
                    Reach out to me today and let's discuss how I can help you
                    achieve your goals.
                </p>
                <a href="mailto:pehdsa@gmail.com">
                    <MagicButton icon={<FaLocationArrow />} position="right">
                        Let's get in touch
                    </MagicButton>
                </a>
            </div>

            <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
                <p className="md:text-base text-sm md:font-normal font-light mb-5 md:mb-0">
                    Copyright © 2024 Adrian Hajdin
                </p>

                <div className="flex items-center md:gap-3 gap-6">
                {socialMedia.map((info) => (
                    <Button
                        key={info.id}
                        borderRadius="1rem"
                        className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-sm border border-black-300"
                    >
                        <img src={info.img} alt="icons" width={20} height={20} />
                    </Button>
                ))}
            </div>
        </div>

        </footer>
    )
}

export default Footer