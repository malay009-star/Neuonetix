import React from 'react'
import { websiteHeroData, websiteGridCards, websiteTimelineData, websiteRightCards, websiteAccordianData } from '../../component/websiteDev_component/websiteDev_objects'
import Herosec from '../../component/appDev_component/herosec_ourServices'
import Timeline from '../../component/softwaredev_component/timeline'
import AppDevCards from '../../component/appDev_component/grid_Cards'
import Accordian from '../../component/softwaredev_component/accordian'



function websiteDevelopment() {
  return (
    <div>
      {/* hero sec */}
      <div>
        <Herosec item={websiteHeroData} />
      </div>


      {/* Shaping Your Digital Destiny */}
      <div className="wrapper container">
        <div className="lg:w-[82%] mx-auto">
          <h3 className='title text-center'>Shaping Your Digital Destiny</h3>
          <p className='text-center md-info mt-8'>In the realm of digital innovation, your website is more than just a digital footprint; it’s a powerful tool for business growth. At Neuronetix, we create the most unique web applications that are as unique as your business. Merging cutting-edge technology with creative design, our team crafts web solutions that not only look exceptional but also perform flawlessly. Whether you’re looking to enhance user experience, streamline operations, or boost your online presence, we’re here to transform your vision into a dynamic, functional, and engaging web application. Join us in redefining the digital landscape and take the first step towards a future where your business thrives online. </p>
        </div>
      </div>



      {/*  Neuronetix Grid Cards */}
      <div className="overlay pb-48">
        <div className="container">
          <div className="w-full md:w-3/4 lg:w-[64%]">
            <h3 className='title'>A Comprehensive Guide to Optimization and User Experience</h3>
          </div>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-16 mt-20'>
            {websiteGridCards.map((item, index) => (
              <div key={index} className='bg-[#f5f5f5] px-8 pt-10 pb-16'>
                <h5 className='sm-title'>{item.smtitle}</h5>
                <div className="md:px-3">
                  <h2 className='md-title lg:w-[68%] pt-16'>{item.title}</h2>
                  <p className='pt-12'>{item.info}</p>
                </div>
              </div>))}
          </div>
        </div>
      </div>


      {/* timeline */}
      <div className="container pt-4">
        <h3 className='title text-center'>Our approach involves</h3>
        <div>
          <Timeline item={websiteTimelineData} />
        </div>
      </div>


      {/* United Creativity */}
      <div className="container wrapper">
        <div className="flex justify-between items-center flex-wrap md:flex-nowrap gap-6">
          <div className='md:w-[30%]'>
            <h2 className='title'>United Creativity</h2>
            <p className='md-info pt-7'>Embracing the Collaborative <br /> Design Process in Web Development</p>
          </div>
          <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:w-[70%] mt-8 lg:mt-0'>
            <div className='ps-4 sm:ps-0 border-l-2 sm:border-l-0 sm:pr-10 sm:border-r-2 border-[#334d69] flex items-center'>
              <p className='text-[13px]'>The collaborative design process is a dynamic approach in webdevelopment where multiple stakeholders, including designers, developers, and clients, work together to create a website</p>
            </div>
            <div className='ps-4 sm:ps-0 border-l-2 sm:border-l-0 sm:pr-10 sm:border-r-2 border-[#334d69] flex items-center'>
              <p className='text-[13px]'> This method emphasizes open communication, shared decision-making, and ongoing feedback to ensure the final product aligns with the user’s needs and objectives.</p>
            </div>
            <div className='ps-4 sm:ps-0 border-l-2 sm:border-l-0 border-[#334d69] flex items-center'>
              <p className='text-[13px]'>By involving diverse perspectives and expertise, the collaborative process fosters innovation and efficiency, leading to a more effective and user-centered web design.</p>
            </div>
          </div>
        </div>
      </div>


      {/* grid cards */}
      <div className='container flex items-center justify-between flex-wrap lg:flex-nowrap gap-8'>
        <div className='w-full lg:w-[37%]'>
          <div className='sm:w-[73%]'>
            <h2 className='title'>Explore Our Extended Range of Web Services</h2>
          </div>
        </div>
        <div className='w-full lg:w-[57%] mt-8 lg:mt-0'>
          <AppDevCards item={websiteRightCards} />
        </div>
      </div>


      {/* accordian */}
      <div className="container wrapper">
        <div className="">
          <h3 className='title text-center'>Frequently Asked Questions</h3>
          <div>
            <Accordian items={websiteAccordianData} />
          </div>
        </div>
      </div>



    </div>
  )
}

export default websiteDevelopment
