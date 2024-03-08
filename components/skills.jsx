"use client"
import React from 'react'
import SectionHeading from './section-heading'
import { skillsData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks';
import {animate, motion} from "framer-motion"

const fadeInAnimateVariants = {
  initial: {
    opacity:0,
    y:100,
  },
  animate: (index) => ({
    opacity:1,
    y:0,
    transition:{
      delay:0.05 * index,
    },
  })
}
function Skills() {
  const {ref} = useSectionInView("Skills");
  return (
    <section id="skills" ref={ref} className='mb-28 max-w-[53rem] scroll-mt-28 text-center'>
        <SectionHeading>My Skills</SectionHeading>
        <ul className='flex flex-wrap justify-center gap-2 text-lg text-gray-300'>
          {
            skillsData.map((skill,index) => (
                <motion.li 
                className='bg-slate-800 border border-white/[0.1] px-5 py-3 rounded-lg'
                key={index}
                variants={fadeInAnimateVariants}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once:true,
                }}
                custom={index}>{skill}</motion.li >
            ))
          }
        </ul>
    </section>
  )
}

export default Skills