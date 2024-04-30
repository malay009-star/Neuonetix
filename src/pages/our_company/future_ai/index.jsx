import React from 'react'
import { futureAi } from '../../../component/our_component/our_objects'


function futureWithAi() {
  return (
    <div className='border-b pb-20 border-[#182c47]'>
      <h1 className='title'>Shaping the Future with AI</h1>
      <div className='pt-14'>
        <h3 className="md-title">Impact of AI on Business and Society</h3>
        <p className='text-[14.3] pt-6 pb-2'>At Neuronex, we are at the forefront of a remarkable journey, leveraging Arficial Intelligence to usher in transformave changes in both business and society. Our AI-driven soluons are not just about technological advancement; they are catalysts for broader posive impacts</p>
      </div>
      <div>
        {futureAi.map((item) => (
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
