import React from 'react'
import one from '../../../assets/images/1.jpg'
import two from '../../../assets/images/2.jpg'
import three from '../../../assets/images/3.jpg'


function meadtOurFounder() {
  return (
    <div className='border-b pb-20 border-[#182c47]'>
      <h2 className='title'>Meet our Founders</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
        <div>
          <img className='w-full h-72' src={one} alt="" />
          <h5 className='sm-title pt-4'>Colin Meckmann</h5>
          <p>Co-Founder / Chief Business Officer</p>
        </div>
        <div>
          <img className='w-full h-72' src={two} alt="" />
          <h5 className='sm-title pt-4'>Livia Schröder</h5>
          <p>Co-Founder / Chief Sales Officer</p>
        </div>
        <div>
          <img className='w-full h-72' src={three} alt="" />
          <h5 className='sm-title pt-4'>Meric Ates</h5>
          <p>Co-Founder / Chief Technology Officer</p>
        </div>
      </div>
    </div>
  )
}

export default meadtOurFounder
