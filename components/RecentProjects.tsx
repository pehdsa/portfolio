import React from 'react';
import { projects } from '@/data';
import { FaLocationArrow } from 'react-icons/fa6';
import Image from 'next/image';

import { PinContainer, PinPerspective } from '@/components/ui/3dPin';


const RecentProjects = () => {
    return (
        <section className='py-20' id='projects'>
            <h2 className='heading pb-20'>
                A small selection of {" "}
                <span className='text-purple'>recent projects</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {/* { projects.map(item => (
                    <div key={item.id} className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-[500px] w-[80vw]">
                        <PinContainer title={ item.title } href={ item.link }>
                            <div className="relative flex items-center justify-center sm:w-[500px] w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                                    <img src="./bg.png" alt="bg-img" />
                                </div>
                                <img src={ item.img } alt={ item.title } className='z-10 absolute bottom-0' />
                            </div>
                            <h3 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                                { item.title }
                            </h3>
                            <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-[#BEC1DD] my-[1vh]'>
                                { item.des }
                            </p>

                            <div className="flex items-center justify-between mt-7 mb-3">
                                <div className="flex items-center">
                                    { item.iconLists.map((icon, ind) => (
                                        <div 
                                            key={ind} 
                                            className="flex items-center justify-center border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8"
                                            style={{
                                                transform: `translateX(-${ 5 * ind * 2 }px)`
                                            }}
                                        >
                                            <img src={ icon } alt={ icon } className="p-2" />
                                        </div>
                                    )) }
                                </div>
                                <div className="flex items-center justify-center">
                                    <p className="text-purple lg:text-base md:text-xs text-sm">Check Live Site</p>
                                    <FaLocationArrow className="ml-3" color="#CBACF9" />
                                </div> 
                            </div>

                        </PinContainer>
                    </div>
                )) } */}
                { projects.map(item => (
                    <div className='w-full h-full mx-auto'>
                        <a 
                            href='' 
                            className='p-4 block relative rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.1] hover:scale-105 hover:border-purple transition duration-700 overflow-hidden'
                        >
                            
                            <div className='relative aspect-video lg:rounded-3xl bg-[#13162d] overflow-hidden'>
                                <img src="./bg.png" alt="bg-img" className='absolute top-0 left-0 w-full h-full' />
                                <Image src={ item.img } alt={ item.title } width={ 464 } height={ 300 } className='relative z-10 object-fill' />
                            </div>

                            <div className='pt-10'>
                                <h3 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                                    { item.title }
                                </h3>
                                <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-[#BEC1DD] my-[1vh]'>
                                    { item.des }
                                </p>
                            </div>

                            <div className="flex items-center justify-between mt-7 mb-3">
                                <div className="flex items-center">
                                    { item.iconLists.map((icon, ind) => (
                                        <div 
                                            key={ind} 
                                            className="flex items-center justify-center border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8"
                                            style={{
                                                transform: `translateX(-${ 5 * ind * 2 }px)`
                                            }}
                                        >
                                            <img src={ icon } alt={ icon } className="p-2" />
                                        </div>
                                    )) }
                                </div>
                                <div className="flex items-center justify-center">
                                    <p className="text-purple lg:text-base md:text-xs text-sm">Check Live Site</p>
                                    <FaLocationArrow className="ml-3" color="#CBACF9" />
                                </div> 
                            </div>

                        </a>
                    </div>
                )) }
            </div>
        </section>
    )
}

export default RecentProjects