import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './timeline.css'


function timeline({ item }) {
  return (
    <div className='lg:w-3/4 mx-auto mt-24'>
      <VerticalTimeline className='w-1/4'>
        {item.map((item, index) => (
          <VerticalTimelineElement
            layout={String}
            key={index}
            className='vertical-timeline-element--work'
            icon={(index + 1).toString()}
            // contentStyle={}
            // contentArrowStyle={}
            // iconStyle={}
          >
            <h3 className='md-title'>{item.title}</h3>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  )
}

export default timeline
