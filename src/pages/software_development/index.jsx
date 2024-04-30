import React from 'react'
import { Link } from 'react-router-dom'
import Triangle_Cards from '../../component/home_component/triangle_cards'
import { SoftwareStandardsCards } from '../../component/home_component/triangle_data'
import { SoftwareStandardsData } from '../../component/home_component/solution_object'
import LeftDetails from '../../component/home_component/left_details'
import OtherServicesDetails from '../../component/home_component/other_services'
import { customSoftwareCard, softDevTimeline, accordianData, softwareDevHero } from '../../component/softwaredev_component/softwareDev_objects'
import Timeline from '../../component/softwaredev_component/timeline'
import Accordian from '../../component/softwaredev_component/accordian'
import './softDev.css'


function softwareDevelopment() {
  return (
    <div>
      {/* hero section */}
      <div className='w-full softDev_sec bg-img h-[100vh] flex items-center'>
        <div className='container'>
          {softwareDevHero.map((item) => (
            <div className='lg:w-[59%]'>
              <h1 className='title w-2/4'>{item.title}</h1>
              <p className='text-[16.5px] sm:text-lg mt-6 font-medium text-[#aabfc1] '>{item.info}</p>
              {item.link && (
                <Link to='/contact' className='secondary-btn mt-6 inline-block'>{item.link}</Link>
              )}
            </div>
          ))}
        </div>
      </div>


      {/* future of software innovation */}
      <div className="wrapper">
        <div className="container">
          <h3 className='title'>Pioneering the Future of Software Innovation.</h3>
          <p className='md-info lg:w-[70%] mt-7'>At Neuronetix, we don’t just follow industry trends, we set them. Pioneering the future of software
            innovation is not just a tagline, it’s our commitment. In a world where technology evolves at lightning
            speed, we embrace the challenge of staying ahead. Our team of visionaries and tech enthusiasts thrives
            on pushing boundaries, crafting solutions that redefine what’s possible. Experience the frontier of
            innovation with us, where your ideas transform into the digital realities of tomorrow.</p>
        </div>
      </div>


      {/* left details and cards */}
      <div className='container flex items-center justify-between flex-wrap lg:flex-nowrap gap-8'>
        <div className='w-full lg:w-[40%]'>
          <LeftDetails item={SoftwareStandardsData} />
        </div>
        <div className='w-full lg:w-[56%] mt-8 lg:mt-0'>
          <Triangle_Cards item={SoftwareStandardsCards} />
        </div>
      </div>


      {/* timeline */}
      <div className="container wrapper">
        <h3 className='title text-center'>Our approach involves</h3>
        <div>
          <Timeline item={softDevTimeline} />
        </div>
      </div>


      {/* Navigating the Future */}
      <div className="container flex justify-center">
        <div className="flex flex-col items-center lg:w-[68%]">
          <h3 className='title text-center lg:w-3/4'>Navigating the Future of Software with Flexibility and Efficiency</h3>
          <p className='md-info text-center mt-6 sm:mt-8'>In the ever-evolving landscape of software development, staying ahead means being adaptable. That’s where Agile Development comes into play—a dynamic approach to software creation that values human communication and feedback, flexibility, and the delivery of functional software in short, workable increments.</p>
        </div>
      </div>


      {/* Benefits of having a custom software */}
      <div className="wrapper">
        <div className="container">
          <h3 className='title text-center'>Benefits of having a custom software</h3>
        </div>
        <div className="overlay pt-20">
          <div className='container'>
            <OtherServicesDetails item={customSoftwareCard} />
          </div>
        </div>
      </div>


      {/* accordian */}
      <div className="container">
        <div className="mb-52">
          <h3 className='title text-center'>Benefits of having a custom software</h3>
          <div>
            <Accordian items={accordianData} />
          </div>
        </div>
      </div>






    </div>
  )
}

export default softwareDevelopment
