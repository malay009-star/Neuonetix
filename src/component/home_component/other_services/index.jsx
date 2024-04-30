import React from 'react'
import { Link } from 'react-router-dom'

const readMoreTabs = [
  {
    label: 'Read more',
    link: '/software_development',
  },
  {
    label: 'Read more',
    link: '/application_development',
  },
  {
    label: 'Read more',
    link: '/website_development',
  },
  {
    label: 'Read more',
    link: '/software_maintenance',
  },
  {
    label: 'Read more',
    link: '/artificial_intelligence',
  },
  {
    label: 'Read more',
    link: '/virtual_reality',
  },
]



function otherServices({ item, readmore }) {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 2xl:gap-x-44 2xl:gap-y-24'>
      {item.map((item, index) => (
        <div key={index} className='bg-[#f5f5f5] p-5 pb-6 card'>
          <div className="flex items-center gap-5">
            <img className='w-14' src={item.img} alt="" />
            <h3 className='sm-title'>{item.imgTitle}</h3>
          </div>
          <div className='mt-10 px-4'>
            <h2 className={`w-3/4 lg:w-[83%] 2xl:w-[90%] md-title ${index <= 2 ? '2xl:h-32' : '2xl:h-32'}`}>{item.title}</h2>
            <p className='pt-5 pb-8 2xl:h-56'>{item.info}</p>
            {readmore && (
              <div className="flex justify-center items-end pt-2">
                <Link to={item.link} className='primary-btn'>{item.label}</Link>
              </div>
            )}
          </div>
        </div>))}
    </div>
  )
}

export default otherServices
