import React from 'react'
import { Link } from 'react-router-dom'
import './herosec.css'



function herosec({ item }) {
  return (
    <div className='heroSec_services bg-[#182c47] w-full h-[100vh] flex items-center'>
      <div className='container'>
        {item.map((item) => (
          <div className='lg:w-[53%]'>
            <h2 className='title w-3/4 sm:w-2/4'>{item.title}</h2>
            <p className='text-[16.5px] sm:text-lg mt-6 font-medium text-[#aabfc1] '>{item.info}</p>
            {item.link && (
              <Link to='/contact-us' className='secondary-btn mt-6 inline-block'>{item.link}</Link>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default herosec
