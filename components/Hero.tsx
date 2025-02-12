"use client";

import React from 'react';
import { handleTo } from '@/utils';
// import { Spotlight } from './ui/Spotlight';
// import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { FlipWords } from './ui/FlipWords';
import MagicButton from './ui/MagicButton';
import TagLine from './ui/Tagline';
import { FaLocationArrow } from 'react-icons/fa6';

const Hero = () => {
    return (
        <section className='pb-0 md:pb-20 mt-20 md:pt-36'>
            {/* <div className='hidden md:block'>
                <Spotlight
                    className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
                    fill="white"
                />
                <Spotlight
                    className="h-[80vh] w-[50vw] top-10 left-100"
                    fill="purple"
                />
                <Spotlight 
                    className="left-80 top-28 h-[80vh] w-[50vw]" 
                    fill="blue" 
                />
            </div> */}
            <div className="absolute top-0 left-0 h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />                
            </div>

            <div className='flex justify-center relative my-10 md:my-20 z-10'>
                <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
                    <TagLine>Dynamic Web Magic with Next.js</TagLine>
                    {/* <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>Dynamic Web Magic with Next.js</h2> */}
                    {/* <TextGenerateEffect 
                        className='text-center text-[40px] md:text-5xl lg:text-6xl'
                        words='Transforming Concepts into Seamless User Experiences'
                    /> */}
                    <h1 className='text-center text-[40px] md:text-5xl lg:text-7xl py-3 font-semibold'>
                        Build<FlipWords duration={600} className='!text-purple' words={[ 'better', 'modern', 'beautiful' ]} /><br />
                        websites with me.
                    </h1>
                    <p className='text-[#BEC1DD] text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-xl'>Hi, I'm Pedro, a Next.js Developer based in Brazil</p>

                    <MagicButton 
                        className='w-[250px] md:w-60 md:mt-10'
                        icon={ <FaLocationArrow /> }
                        position='right'
                        onClick={() => handleTo('#projects')}
                    >
                        Show my work
                    </MagicButton>

                </div>
            </div>

        </section>
    )
}

export default Hero