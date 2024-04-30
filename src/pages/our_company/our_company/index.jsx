import React from 'react'
import {Outlet, Link, NavLink } from 'react-router-dom';
import { ourComponyItem } from '../../../component/our_component/our_objects'
import DefaltLauout from '../../../layout/default_layout';
import '../../our_company/our.css'



function ourCompany() {

  return (
    <div>
      <DefaltLauout>

        {/* hero sec */}
        <div className='heroSec_services bg-[#182c47] w-full h-[100vh] flex items-center'>
          <div className='container'>
            <div className='lg:w-[60%]'>
              <h2 className='title'>Discover <br /> our Company</h2>
              <p className='text-[16.5px] sm:text-lg mt-6 font-medium text-[#aabfc1]'>Neuronetix specializes in custom software development, crafting tailored solutions that enhance efficiency and unlock your business’s full potential. Our team is dedicated to transforming your unique vision into high-performance software, ensuring success and growth in your digital journey.</p>
            </div>
          </div>
        </div>

        <div className="ps-8 pe-16 wrapper flex flex-wrap md:flex-nowrap gap-6">
          <div className='w-full md:w-1/4 flex flex-wrap gap-x-10 gap-y-6 md:gap-0 md:flex-col lg:h-[520px]'>
            {ourComponyItem.map((item) => ( 
           <NavLink className={({isActive}) => isActive ? 'sm-title md:py-6 md:ps-7 md:border-l-2 border-[#182c47] border-b pb-1 md:border-b-0' : 'sm-title md:py-6 md:ps-7 md:border-l-2'} key={item.link} to={item.link}>{item.label}</NavLink>
            ))}
          </div>
          <div className='md:w-3/4 pt-8 md:pt-0'>
            <Outlet />
          </div>
        </div>
      </DefaltLauout>




    </div>
  )
}

export default ourCompany
