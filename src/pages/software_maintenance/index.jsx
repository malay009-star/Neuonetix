import React from 'react'
import Herosec from '../../component/appDev_component/herosec_ourServices'
import { softMainteHero, maintenanceLeftDetails, mainteTriangleCards, horizontalCardsLeft, horizontalCardsDetails, mainteUpdatesCards, borderCards,mainteAccordianData } from '../../component/softMainte_component/softMainte_objects'
import LeftDetails from '../../component/home_component/left_details'
import MainteTriangleCards from '../../component/softMainte_component/maintenance_triangleCards'
import AppDevCards from '../../component/appDev_component/grid_Cards'
import BorderCards from '../../component/softMainte_component/borderCards'
import Accordian from '../../component/softwaredev_component/accordian'



function softwareMaintenance() {
  return (
    <div>
      <div>
        <Herosec item={softMainteHero} />
      </div>


      {/* Digital Efficiency */}
      <div className="container pt-32 lg:pb-8">
        <h3 className='title'>Expert Guidance in Software Maintenance and Digital Efficiency</h3>
        <p className='md-info lg:w-[70%] mt-7 tracking-wide'>At Neuronetix, we believe in harnessing the power of technology to create a more connected and secure digital world. Our mission is to provide innovative solutions that empower businesses and individuals in their digital endeavors. With a unique blend of expertise, passion, and dedication, we stand out as your ideal partner in navigating the ever-evolving digital landscape.</p>
      </div>


      {/* left details and cards */}
      <div className="overlay wrapper">
        <div className='container flex items-center justify-between flex-wrap lg:flex-nowrap gap-8 pt-10'>
          <div className='w-full lg:w-[36%]'>
            <LeftDetails item={maintenanceLeftDetails} />
          </div>
          <div className='w-full lg:w-[56%] mt-8 lg:mt-0'>
            <MainteTriangleCards item={mainteTriangleCards} />
          </div>
        </div>
      </div>


      {/* Digital Guardianship, Your Assets, */}
      <div className="container pt-16">
        <h3 className='title'>Digital Guardianship, Your Assets, Our Responsibility</h3>
        <p className='md-info lg:w-[70%] mt-7 tracking-wide'>In today's digital age, the significance of maintaining and safeguarding your digital assets cannot be overstated. As technologies evolve and cyber threats become more sophisticated, it's vital to have a robust strategy in place for the care of your digital presence. Our Digital Guardianship program is designed to offer comprehensive protection and maintenance for your digital assets, ensuring they remain secure, efficient, and aligned with your objectives.</p>
      </div>


      {/* left details */}
      <div className='container wrapper'>
        <div className="flex items-center justify-between flex-wrap lg:flex-nowrap gap-8">
          <div className='w-full lg:w-[37%]'>
            <LeftDetails item={horizontalCardsLeft} />
          </div>
          <div className='w-full lg:w-[60%] mt-8 lg:mt-0'>
            <div className='flex flex-col gap-12'>
              {horizontalCardsDetails.map((item) => (
                <div className='bg-[#f5f5f5] flex justify-between items-center flex-wrap md:flex-nowrap px-6 py-6 md:h-32 gap-6'>
                  <h2 className="font-black md-color md:w-1/4">{item.title}</h2>
                  <p className='md:w-3/4'>{item.info}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


      {/* left cards / Regular updates */}
      <div className='container flex items-center justify-between flex-wrap lg:flex-nowrap gap-8'>
        <div className='w-full lg:w-[57%] mt-8 lg:mt-0'>
          <AppDevCards item={mainteUpdatesCards} />
        </div>
        <div className='w-full lg:w-[37%] flex lg:justify-end'>
          <div className='md:w-[85%]'>
            <h1 className="title title-color font-bold">Regular Updates</h1>
            <p className='md-info mt-6'>Staying abreast of the latest trends and technologies is crucial in the digital landscape. Our Regular Updates service ensures your digital platforms are not just current, but also leverage cutting-edge innovations for optimal performance.</p>
          </div>
        </div>
      </div>


      {/* Expert Support */}
      <div className="container wrapper">
        <div>
          <h3 className='title'>Expert Support</h3>
          <p className='md-info lg:w-[70%] mt-7 tracking-wide'>Our team of experts is the backbone of our Digital Guardianship program. With a wealth of experience and expertise, we are equipped to handle any challenge your digital assets may face</p>
        </div>
        <div className="pt-8 sm:pt-20">
          <BorderCards item={borderCards} />
        </div>
      </div>


      {/* accordian */}
      <div className="container">
        <div className="mb-52">
          <h3 className='title text-center'>Frequently Asked Questions</h3>
          <div>
            <Accordian items={mainteAccordianData} />
          </div>
        </div>
      </div>



    </div>
  )
}

export default softwareMaintenance
