import React from 'react'
import { appDevData, appDevCards, appdevLeftInfo, appTimelineData, appHorizontalData, youStrategicData, appAccordianData } from '../../component/appDev_component/appDev_objects'
import AppDevCards from '../../component/appDev_component/grid_Cards'
import Herosec from '../../component/appDev_component/herosec_ourServices'
import LeftDetails from '../../component/home_component/left_details'
import Timeline from '../../component/softwaredev_component/timeline'
import HorizontalCards from '../../component/appDev_component/horizontal_cards'
import Accordian from '../../component/softwaredev_component/accordian'


function applicationDevelopment() {
  return (
    <div>
      {/* hero sec */}
      <div>
        <Herosec item={appDevData} />
      </div>


      {/* Code Meets Creativity */}
      <div className="wrapper container">
        <div className="lg:w-[82%] mx-auto">
          <div className='w-[74%] mx-auto'>
            <h3 className='title text-center'>Where Code Meets Creativity to Redefine Digital Experiences</h3>
          </div>
          <p className='text-center md-info mt-8'>In the dynamic world of Neuronetix, we blend the precision of coding with limitless creativity, crafting digital experiences that elevate beyond the ordinary. We’re not just making applications, we are creators of immersive digital narratives, pioneering new frontiers in digital engagement. Our approach transforms innovation into an art form, inviting you to join us in this journey of technological artistry. <br /><br /> At Neuronetix, we don’t just see digital as a tool, but as a canvas for the extraordinary. Our team of skilled developers, designers, and visionaries are dedicated to redefining user engagement with each project. We create not just functional solutions, but experiences that are engaging, visually stunning, and uniquely tailored to set new standards in digital storytelling. Join us in reshaping the future of digital interaction, where every project is a step towards something transformative. </p>
        </div>
      </div>


      {/* Crafting Brilliance Cards */}
      <div className='container flex items-center justify-between flex-wrap lg:flex-nowrap gap-8'>
        <div className='w-full lg:w-[37%]'>
          <LeftDetails item={appdevLeftInfo} />
        </div>
        <div className='w-full lg:w-[57%] mt-8 lg:mt-0'>
          <AppDevCards item={appDevCards} />
        </div>
      </div>


      {/* timeline */}
      <div className="container wrapper">
        <h3 className='title text-center'>Our approach involves</h3>
        <div>
          <Timeline item={appTimelineData} />
        </div>
      </div>


      {/* Adaptability Meets Innovation */}
      <div className="container md:grid grid-cols-2">
        <div className='flex items-center
         title text-center lg:w-[65%]'>
          <h2>Adaptability Meets Innovation</h2>
        </div>
        <div>
          <p className='md-info'>In the dynamic realm of application development, agility is more than a methodology—it’s the lifeblood of successful app creation. Agile Application Development is a flexible, iterative approach that adapts to changing requirements and ensures the continuous delivery of high quality applications <br /><br /><br /> At Neuronetix, we specialize in Agile Application Development. Our teams are adept at translating complex challenges into user-friendly solutions that are not only functional but also delightful to use. Whether you’re looking to build from the ground up or improve an existing application, we apply the Agile methodology to ensure your project’s success from start to finish. </p>
        </div>
      </div>


      {/*horzontal cards*/}
      <div className="pt-40">
        <div className="overlay pb-52">
          <div className="container">
            <h3 className='title text-center pt-16'>Benefits of having a agile development</h3>
            <div className='lg:w-3/4 lg:mx-auto pt-20'>
              <HorizontalCards item={appHorizontalData} />
            </div>
          </div>
        </div>
      </div>


      {/*agile Strategic Advantage*/}
      <div className="bg-[#fffefe]">
        <div className="container flex items-center justify-between flex-wrap">
          <div className='w-full md:w-2/4 lg:w-[40%]'>
            <h2 className='title'>Why Agile Application Development is Your Strategic Advantage</h2>
            <p className='md-info lg:w-[90%] mt-8'>Agile Application Development isn’t just about producing applications quickly, it’s about ensuring that those applications make a significant impact in the market and offer real value to the end-user</p>
          </div>
          <div className='w-full md:w-[40%] lg:w-[30%] mt-8 md:mt-0'>
            {youStrategicData.map((item, index) => (
              <div className={` ${index <= 1 ? 'border-b border-[#3e4f66] mb-8' : ''}`}>
                <h2 className='md-title'>{item.title}</h2>
                <p className='py-6'>{item.info}</p>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* accordian */}
      <div className="container pt-44">
        <div className="mb-52">
          <h3 className='title text-center'>Frequently Asked Questions</h3>
          <div>
            <Accordian items={appAccordianData} />
          </div>
        </div>
      </div>



    </div>
  )
}

export default applicationDevelopment
