"use client"
import React from 'react'
import Heading from "@/components/section-heading"
import {motion} from "framer-motion"
import { useSectionInView } from '@/lib/hooks'
export default function About() {
  const {ref} = useSectionInView("About")
  return (
    <motion.section
    ref={ref} 
    className='flex flex-col items-center justify-center gap-3 max-w-[45rem] scroll-mt-28'
    initial={{opacity:0, y: 100}}
    animate={{opacity:1, y: 0}}
    transition={{delay:0.175}}
    id="about"
    >
        <Heading>About Me</Heading>
        <p className='mb-3 indent-10 text-center'>   
        My name is Emre Keskin, I am 23 years old, and I live with a passion for learning something new every day. I take great pleasure in applying what I learn to my projects.
         I especially enjoy working on frontend and backend technologies and closely follow
          the trends in this field. In web development, I strive to produce modern and effective solutions
           with a focus on user experience. I develop projects using tools like React, Next.js, and Tailwind CSS,
            and I aim to create mobile-friendly applications.</p>
    </motion.section>
    
  )
}
