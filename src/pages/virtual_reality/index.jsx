import React from 'react'
import Herosec from '../../component/appDev_component/herosec_ourServices'
import { virtualHeroData, virtualGridCards, virtualPossibilitiesCards, virtualAccordianData, virtualDevTimeline } from '../../component/virtual_reality/virtual_objects'
import SimpleGridCards from '../../component/virtual_reality/simple_GridCards'
import Timeline from '../../component/softwaredev_component/timeline'
import Accordian from '../../component/softwaredev_component/accordian'



function virtualReality() {
  return (
    <div>
      {/* hero sec */}
      <div>
        <Herosec item={virtualHeroData} />
      </div>


      {/* Innovative Software for Virtual Reality */}
      <div className="container pt-32 lg:pb-12">
        <h3 className='title'>Innovative Software for Virtual Reality</h3>
        <p className='md-info lg:w-[70%] mt-7 tracking-wide'>Virtual reality (VR) software has evolved significantly, offering immersive experiences across various domains, from entertainment and gaming to education, healthcare, and beyond. Innovative VR software leverages advanced technologies to create lifelike simulations, interactive environments, and transformative experiences.</p>
      </div>


      {/*  VR Software Grid Cards */}
      <div className="overlay wrapper">
        <div className="container">
          <div className="">
            <h3 className='title text-center'>Tools Used in Creating VR Software</h3>
          </div>
          <div>
            <SimpleGridCards item={virtualGridCards} />
          </div>
        </div>
      </div>


      {/* Possibilities Enabled by VR Software */}
      <div className="container sm:pt-16">
        <h3 className='title text-center'>Possibilities Enabled by VR Software</h3>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-16 mt-20 lg:mt-24'>
          {virtualPossibilitiesCards.map((item, index) => (
            <div key={index} className=''>
              <h2 className='md-title lg:w-[68%]'>{item.title}</h2>
              <p className='pt-10'>{item.info}</p>
            </div>))}
        </div>
      </div>


      {/* timeline */}
      <div className="container wrapper">
        <h3 className='title text-center'>Our approach involves</h3>
        <div>
          <Timeline item={virtualDevTimeline} />
        </div>
      </div>


      {/* accordian */}
      <div className="container pb-52">
        <h3 className='title text-center'>Frequently Asked Questions</h3>
        <div>
          <Accordian items={virtualAccordianData} />
        </div>
      </div>



    </div>
  )
}

export default virtualReality
