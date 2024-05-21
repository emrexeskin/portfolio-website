"use client"
import Image from 'next/image'
import React from 'react'
import {motion} from "framer-motion"
import { BsArrowRight, BsGithub, BsLinkedin} from "react-icons/bs"
import { HiDownload} from "react-icons/hi"
import Link from 'next/link'
import { useSectionInView } from '@/lib/hooks'
export default function Intro() {
    const {ref} = useSectionInView("Home");
  return (
    <seciton 
    ref={ref}
    className="mb-28 text-center sm:mb-0 scroll-mt-[100rem]" 
    id="home">
        <div className='flex items-center justify-center'>
            <div className='relative'>
                <motion.div
                initial={{ scale:0 , opacity: 0}}
                animate={{ scale:1 , opacity:1 }}
                transition={{
                    type: "tween",
                    duration:0.2,
                }}
                >
                <Image 
                src="/images/portre.jpg"
                alt='Emre portrait'
                height="192"
                width="192"
                quality="95"
                priority="true"
                className='w-24 h-24 rounded-full object-cover border-[0.25rem] border-white shadow-xl'
                ></Image>
                </motion.div>
                <motion.span 
                className='absolute text-4xl bottom-0 right-0 z-2 opacity-100'
                initial={{opacity:0 , scale:0}}
                animate={{opacity:1 , scale:1}}
                transition={{
                     type:"spring",
                     stiffness:125,
                     delay:0.1,
                     duration:0.5,
                }}
                >👋</motion.span>
            </div>
        </div>
        <motion.p className='mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl max-w-[50rem]'
        initial={{opacity:0, y: 100}}
        animate={{opacity:1, y: 0}}
        >
        <span className="font-bold">Hello, I&apos;m Emre.</span> I&apos;m a{" "}
        <span className="font-bold">web developer</span> with{" "}
        <span className="font-bold">0 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
        </motion.p>
        <motion.div 
        className='flex items-center justify-center gap-4'
        initial={{opacity:0, y: 100}}
        animate={{opacity:1, y: 0}}
        transition={{delay:0.1,}}
        >
            <Link href='mailto:emrexeskin@gmail.com'
            className='flex items-center justify-center gap-2
             bg-gray-900 text-white  px-7 py-3 rounded-full hover:scale-110 transition hover:bg-gray-950 active:scale-105'>Contact me here <BsArrowRight/>
             </Link>
            
             <a className='flex items-center justify-center gap-2
             bg-white text-black px-7 py-3 border border-black/10 rounded-full hover:scale-110 transition active:scale-105 '
             href="/CV.pdf" download={true}
             >Download CV <HiDownload/></a>
            
             <a className='flex items-center justify-center gap-2
             bg-white text-black px-4 py-4 border border-black/10 rounded-full hover:scale-110 transition active:scale-105'
             href='https://www.linkedin.com/in/emrexeskin/'
             target='_blank'
             ><BsLinkedin/></a>
             
             <a className='flex items-center justify-center gap-2
             bg-white text-black px-4 py-4 border border-black/10 rounded-full hover:scale-110 transition active:scale-105'
             href='https://github.com/emrexeskin'
             target='_blank'
             ><BsGithub/></a>
        </motion.div>
    </seciton>
  )
}
