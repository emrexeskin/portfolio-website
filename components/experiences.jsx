"use client"
import React from 'react'
import SectionHeading from './section-heading'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '@/lib/data'
import { useSectionInView } from '@/lib/hooks'
function Experiences() {
  const {ref} = useSectionInView("Experiences",0.5)
  return (
    <section
    id='experiences'
    ref={ref} 
    className='scroll-mt-28 mb-28'
    >
      <SectionHeading>Experience</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
            <VerticalTimelineElement
                  visible={true} 
                  key={index}
                  contentStyle={{
                  background: "#f3f4f6",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                }}
                contentArrowStyle={{
                  borderRight: "0.4rem solid #9ca3af"
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                color:"black",
                background:"white",
                fontSize: "1.5rem",
                }}
                
              
            >
              <h3 className="font-semibold capitalize text-black">{item.title}</h3>
              <p className="font-normal !mt-0 text-black">{item.location}</p>
              <p className="!mt-1 !font-normal text-black">
                {item.description}
              </p>
            </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </section>
  )
}

export default Experiences