import React from 'react'
import Herosec from '../../component/appDev_component/herosec_ourServices'
import { EnhancingHeroData, EnhancingLeftDetails, EnhanceHorizontalData, enhanceingTimelineData, enhancingGridCards, enhanceLeftInfo, BusinessTechnologiesData, EnhanceAccordianData } from '../../component/enhancing_component/enhancing_objects'
import LeftDetails from '../../component/home_component/left_details'
import Timeline from '../../component/softwaredev_component/timeline'
import Accordian from '../../component/softwaredev_component/accordian'


function enhancingEfficiency() {
  return (
    <div>
      {/* hero sec */}
      <div>
        <Herosec item={EnhancingHeroData} />
      </div>


      {/* left details */}
      <div className='container wrapper'>
        <div className="flex items-center justify-between flex-wrap lg:flex-nowrap gap-8">
          <div className='w-full lg:w-[37%]'>
            <LeftDetails item={EnhancingLeftDetails} />
          </div>
          <div className='w-full lg:w-[60%] mt-8 lg:mt-0'>
            <div className='flex flex-col gap-10'>
              {EnhanceHorizontalData.map((item) => (
                <div className='bg-[#f5f5f5] flex justify-between items-center flex-wrap md:flex-nowrap px-6 md:px-8 py-6 md:h-28 gap-4 md:gap-10'>
                  <h2 className="font-black md-color md:w-1/4">{item.title}</h2>
                  <p className='md:w-3/4'>{item.info}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


      {/* timeline */}
      <div className="container">
        <h3 className='title text-center'>Our approach involves</h3>
        <div>
          <Timeline item={enhanceingTimelineData} />
        </div>
      </div>


      {/*  Neuronetix Grid Cards */}
      <div className="mt-48">
        <div className="overlay pb-16 lg:pb-32">
          <div className="container">
            <div className="w-full md:w-3/4 lg:w-[46%]">
              <h3 className='title'>How Neuronetix can improve your Business processes</h3>
              <p className='md-info mt-7'>AI can significantly enhance various aspects of business processes, offering benefits like increased efficiency, cost reduction, and informed decision-making.</p>
            </div>
            <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-10 gap-y-16 mt-20'>
              {enhancingGridCards.map((item, index) => (
                <div key={index} className='bg-[#f5f5f5] px-8 md:px-6 pt-10 pb-16'>
                  <h2 className='md-title lg:w-[82%]'>{item.title}</h2>
                  <p className='pt-8'>{item.info}</p>
                </div>))}
            </div>
          </div>
        </div>
      </div>


      {/* Harnessing the Power of Advanced Technologies */}
      <div className='wrapper bg-[#fcfcfc] container flex items-center justify-between flex-wrap lg:flex-nowrap gap-8'>
        <div className='w-full lg:w-[37%]'>
          <LeftDetails item={enhanceLeftInfo} />
        </div>
        <div className='w-full lg:w-[58%]'>
          <div className="grid md:grid-cols-2 gap-x-24 gap-y-20">
            {BusinessTechnologiesData.map((item, index) => (
              <div className=''>
                <h2 className='md-title'>{item.title}</h2>
                <p className='pt-6'>{item.info}</p>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* accordian */}
      <div className="container">
        <div className="mb-52">
          <h3 className='title text-center'>Frequently Asked Questions</h3>
          <div>
            <Accordian items={EnhanceAccordianData} />
          </div>
        </div>
      </div>




    </div>
  )
}

export default enhancingEfficiency
