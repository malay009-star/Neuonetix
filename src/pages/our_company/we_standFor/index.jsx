import React from 'react'
import { standForData } from '../../../component/our_component/our_objects'

function weStandFor() {
  return (
    <div className='border-b pb-20 border-[#182c47]'>
      <h1 className='our-heading'>The Essence of What We Stand For</h1>
      <div className='pt-12'>
        <div>
          <h3 className='md-title'>Shaping a Connected Future with A</h3>
          <p className='text-[14.3px] pt-4'>At Neuronetix, our guiding principle is the belief that the future is collaborative, and AI is the key to unlocking this potential. We stand for a world where AI bridges the gap between possibility and reality, fostering connections that lead to groundbreaking innovations.</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-y-12 gap-x-20 mt-8">
          {standForData.map((item) => (
            <div>
              <h3 className='sm-title text-[17px]'>{item.title}</h3>
              <p>{item.info}</p>
            </div>
          ))}
        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default weStandFor
