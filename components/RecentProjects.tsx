import React from 'react';
import { projects } from '@/data';
import { FaLocationArrow } from 'react-icons/fa6'

import { PinContainer, PinPerspective } from '@/components/ui/3dPin';


const RecentProjects = () => {
    return (
        <section className='py-20' id='projects'>
            <h2 className='heading'>
                A small selection of {" "}
                <span className='text-purple'>recent projects</span>
            </h2>
            <div className="flex flex-wrap items-center justify-center p-4 gap-x-16 gap-y-8 mt-10">
                { projects.map(item => (
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
                )) }
            </div>
        </section>
    )
}

export default RecentProjects