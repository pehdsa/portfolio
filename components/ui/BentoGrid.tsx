"use client";

import { useState, useEffect } from "react";
import { cn } from "@/utils/cn";
import Lottie from 'react-lottie';
import { IoCopyOutline } from 'react-icons/io5';

import animationData from "@/data/confetti.json";
import { BackgroundGradientAnimation } from './BackgroundGradientAnimation';
import GridGlobe from './GridGlobe';
import MagicButton from './MagicButton';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {

  const leftLists = ["ReactJS", "Express", "Typescript"];
  const rightLists = ["VueJS", "NuxtJS", "GraphQL"];

  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 5000)
    }
  },[copied])

  const handleCopy = () => {
    const text = "pehdsa@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >

      <div className={` ${ id === 6 && 'flex justify-center'} h-full`}>
        <div className="w-full h-full absolute">
          { img && <img src={ img } alt={ img } className={cn(imgClassName, 'object-cover object-center')} /> }
        </div>
        <div className={`absolute right-0 -bottom-5 ${ id === 5 && 'w-full opacity-80' }`}>
          { spareImg && <img src={ spareImg } alt={ spareImg } className="object-cover object-center w-full h-full" /> }
        </div>

        { id === 6 && ( 
          <div className="absolute w-full h-full">
            <BackgroundGradientAnimation />
          </div>
        ) }

        <div className={cn(titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 max-w-full')}>
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-20">
            {description}
          </div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-20">
            {title}
          </div>
        

          { id === 2 && <GridGlobe /> }

          { id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute top-0 -right-3 lg:-right-2">
              {/* tech stack lists */}
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                {leftLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                {rightLists.map((item, i) => (
                  <span
                    key={i}
                    className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          { id === 6 && (
            <div className="relative mt-5">
              { copied && (
                <div className="absolute -bottom-5 right-0">
                  <Lottie options={{
                    loop: copied,
                    autoplay: copied,
                    animationData: animationData,
                    rendererSettings: {
                      preserveAspectRatio: 'xMidYMid slice'
                    }
                  }} />
                </div>
              ) }
              <MagicButton className="md:max-w-60" otherclasses="!bg-[#161A31]" onClick={ handleCopy } icon={ <IoCopyOutline /> } position="left">{ copied ? 'Email copied' : 'Copy my email' }</MagicButton>
            </div>
          )}

          
        </div>
      </div>
    </div>
  );
};
