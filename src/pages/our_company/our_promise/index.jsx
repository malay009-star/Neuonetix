import React from 'react'
import { OurPromise } from '../../../component/our_component/our_objects'


function futureWithAi() {
  return (
    <div className='border-b pb-20 border-[#182c47]'>
      <h1 className='title'>Our Promise for Tomorrow</h1>
      <div className='pt-14'>
        <h3 className="md-title">Commitment to a Better Future</h3>
        <p className='text-[14.3] pt-6 pb-2'>Neuronetix, our commitment extends beyond business success; it reaches into the heart of societal advancement and environmental stewardship. We believe that our AI solutions are not just tools for innovation but also instruments for positive change, contributing to a better, more sustainable future</p>
      </div>
      <div>
        {OurPromise.map((item) => (
          <div>
           {item.title && (<h3 className='md-title pt-14'>{item.title}</h3>)}
            <div>
              <h5 className='sm-title text-[17.3px] pt-6'>{item.smtitle}</h5>
              <p>{item.info}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default futureWithAi
