"use client"
import React from 'react'
import { useSectionInView } from '@/lib/hooks'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'
import {motion} from 'framer-motion'
function Contact() {
    const {ref} = useSectionInView("Contact")
  return (
    
    <motion.section
    ref={ref}
    id='contact'
    className='flex flex-col justify-center items-center scroll-mt-28 mb-20 w-[min(100%,38rem)]'
    initial={{
        opacity:0,
    }}
    transition={{
        duration:1,
    }}
    whileInView={{
        opacity:1,
    }}
    viewport={{
        once:true,
    }}
    >
            <SectionHeading>Contact Me</SectionHeading>
            <p className='text-gray-200'>Please contact me directly at <a className='underline' href='mailto:emrexeskin@gmail.com'>emrexeskin@gmail.com</a> or through this form</p>
            <form action="" className='flex flex-col items-center justify-center gap-4 w-full mt-10'>
                <input required maxLength={320} type="email" placeholder='Email' className='w-full h-14 rounded-lg border-black/[0.1] focus:border-black/[0.3] text-gray-800 indent-4' />
                <textarea required maxLength={320} placeholder="Your message"name="" id="" cols="30" rows="10" className='w-full rounded-lg border-black/[0.1] py-5 indent-4 text-gray-800'></textarea>
                <button type='submit' className='bg-white py-3 px-5 text-black flex gap-2 rounded-full self-start group items-center justify-center hover:scale-110 active:scale-105'>Submit <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 '/></button>
            </form>
    </motion.section>
  )
}

export default Contact