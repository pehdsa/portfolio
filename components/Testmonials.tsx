import React from 'react';
import { testimonials, companies } from '@/data';

import { InfiniteMovingCards } from './ui/InfiniteMovingCard';

const Testmonials = () => {
    return (
        <section id="testimonials" className="py-20">
            <h2 className="heading">
                Kind words from
                <span className="text-purple"> satisfied clients</span>
            </h2>

            <div className='mt-8 md:mt-14'>
                
                <div>
                    <InfiniteMovingCards 
                        items={ testimonials } 
                        direction="right"
                        speed="slow"
                    />
                </div>
                

                <div className="mt-8 md:mt-14 flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
                    {companies.map((company) => (                        
                        <div key={company.id} className="flex md:max-w-60 max-w-32 gap-2">
                            <img
                                src={company.img}
                                alt={company.name}
                                className="md:w-10 w-5"
                            />
                            <img
                                src={company.nameImg}
                                alt={company.name}
                                width={company.id === 4 || company.id === 5 ? 100 : 150}
                                className="md:w-24 w-20"
                            />
                        </div>                        
                    ))}
                </div>

            </div>

        </section>
    )
}

export default Testmonials