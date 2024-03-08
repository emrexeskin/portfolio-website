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
        <p className='mb-3 indent-10 text-center'>    Adım Emre Keskin 23 yaşındayım. Bilgisayar mühendisiyim ve tutkum web geliştirme alanında. Teknolojiye olan ilgim küçük yaşlardan beri başladı ve bu ilgiyi bilgisayar 
        mühendisi olmak için bir adım daha ileri taşımaya karar verdim.</p>
    <p className='mb-3 indent-10 text-center' >     Web geliştirme, benim için sadece bir iş değil, aynı zamanda bir sanat şekli. Her gün yeni bir şeyler öğreniyor ve bu öğrendiklerimi projelerimde uygulamaya çalışıyorum. Özellikle frontend ve backend teknolojileri üzerinde çalışmayı seviyorum ve bu alandaki trendleri yakından takip ediyorum.</p>
    </motion.section>
    
  )
}
