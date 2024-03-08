import Intro from '@/components/intro'
import Divider from '@/components/section-divider'
import About from '@/components/about'
import Projects from '@/components/projects'
import React from 'react'
import Skills from '@/components/skills'
import Experiences from '@/components/experiences'

function Home() {
  return (
    <main className='flex flex-col items-center justify-center px-4'>
      <Intro/>
      <Divider/>
      <About/>
      <Divider/>
      <Projects/>
      <Divider/>
      <Skills/>
      <Divider/>
      <Experiences/>  
    </main>
  )
}

export default Home
