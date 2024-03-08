"use client"
import React from 'react'
import Heading from "@/components/section-heading"
import { projectsData } from '@/lib/data'
import Project from "@/components/project"

import { useSectionInView } from '@/lib/hooks'
export default function Projects() {
  const {ref} = useSectionInView("Projects",0.5);
  return (
    <section
    ref={ref}
    className='scroll-mt-28'
    id="projects"
    >
        <Heading>Projects</Heading>
        <div>
            {
                projectsData.map((project, index) => (

                    <React.Fragment key={index}>
                    <Project {...project} />
                    </React.Fragment>
                )

                )
            }
            
        </div>
    </section>
  )
}
