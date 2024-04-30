import React from 'react'
import Herosec from '../../component/appDev_component/herosec_ourServices'
import { aiHeroSec, aiGridCards, aiLeftDetails, aiTriangleCards, aiTimelineData, aiAccordianData, threeTriangleData } from '../../component/ai_component/ai_objects'
import ThreeTriangleCards from '../../component/ai_component/three_triangle'
import SimpleGridCards from '../../component/virtual_reality/simple_GridCards'
import LeftDetails from '../../component/home_component/left_details'
import MainteTriangleCards from '../../component/softMainte_component/maintenance_triangleCards'
import Timeline from '../../component/softwaredev_component/timeline'
import Accordian from '../../component/softwaredev_component/accordian'



function artificialIntelligence() {
  return (
    <div>
      <div>
        <Herosec item={aiHeroSec} />
      </div>


      {/* Your Vision with AI */}
      <div className="container wrapper">
        <h3 className='title'>Your Vision with AI</h3>
        <p className='md-info lg:w-[70%] mt-7 tracking-wide'>At Neuronetix, we envision a world where AI empowers businesses to achieve their full potential. Our commitment is to deliver AI-driven solutions that are not just innovative but also ethical and sustainable, ensuring your business thrives in the modern digital landscape.</p>
      </div>

      {/* Your Vision with AI */}
      <div className="overlay">
        <div className="container">
          <div className="flex lg:items-end lg:justify-end">
            <div className='lg:w-[65%]'>
              <h3 className='title'>Transformative Solutions</h3>
              <p className='md-info mt-7 tracking-wide'>Discover the transformative power of Artificial Intelligence in elevating business operations. Our suite of AI services is designed to enhance customerexperiences, optimize processes, and deliver powerful insights. Step into the future with solutions that drive efficiency and impact.</p>
            </div>
          </div>
          <div className='mt-20 lg:mt-[-140px]'>
            <ThreeTriangleCards item={threeTriangleData} />
          </div>
        </div>
      </div>


      {/* Other AI services */}
      <div className="container wrapper">
        <h3 className='title'>Other AI services</h3>
        <p className='md-info mt-7 tracking-wide'>While the AI services listed above represent some of our key offerings, we understand that every business has unique needs and challenges. If you’re looking for AI solutions that are not specifically mentioned here, we are more than happy to explore and develop customized AI strategies tailored to your specific requirements. <br /><br /> We pride ourselves on our ability to innovate and adapt. Whether it’s a niche application or a novel use of AI technology, our team is eager to collaborate with you to bring your vision to life. Don’t hesitate to reach out to us with your ideas or needs in the realm of AI. Together, we can unlock new potentials and drive your business forward with tailored AI solutions.</p>
      </div>


      {/* Commitment to Ethical AI */}
      <div className="container">
        <div>
          <h3 className='title text-center'>Commitment to Ethical AI Practices at Neuronetix</h3>
          <p className='lg:w-3/4 mx-auto text-center md-info mt-8'>Our commitment extends beyond merely harnessing the power of AI. We recognize theprofound impact AI has on society, and thus, we prioritize the ethical use of this transformative technology. Our approach is guided by a strong ethical framework that upholds data privacy, ensures security, and embeds ethical considerations in every aspect of our AI solutions.</p>
        </div>
        <div>
          <div>
            <SimpleGridCards item={aiGridCards} />
          </div>
        </div>
      </div>


      {/* left details and cards */}
      <div className="wrapper">
        <div className='container flex items-center justify-between flex-wrap lg:flex-nowrap gap-8 pt-10'>
          <div className='w-full lg:w-[35%]'>
            <LeftDetails item={aiLeftDetails} />
          </div>
          <div className='w-full lg:w-[56%] mt-8 lg:mt-0'>
            <MainteTriangleCards item={aiTriangleCards} />
          </div>
        </div>
      </div>


      {/* timeline */}
      <div className="container">
        <h3 className='title text-center'>Our approach involves</h3>
        <div>
          <Timeline item={aiTimelineData} />
        </div>
      </div>


      {/* Your Vision with AI */}
      <div className="container wrapper">
        <h3 className='title'>Why AI is the future</h3>
        <p className='md-info lg:w-[80%] mt-7 tracking-wide'>In a world where change is the only constant, Artificial Intelligence (AI) emerges as the defining force of our era. It represents more than just a leap in technology; it marks a profound shift in how we approach problems, make decisions, and envision our future. AI has seamlessly woven itself into the fabric of our daily lives, redefining possibilities and pushing the boundaries of what we once thought impossible.<br /><br /> At the heart of AI’s transformative power is its unparalleled ability to learn from and adapt to an ever-growing expanse of data. This capability has unlocked new horizons across diverse fields. From the way businesses optimize operations and engage with customers, to groundbreaking advancements in healthcare and sustainable practices, AI is at the forefront, leading the charge towards a smarter, more efficient world. <br /><br /> Beyond its practical applications, AI challenges us to rethink our relationship with technology. It encourages a synergy where human creativity and machine intelligence complement each other, leading to enhanced capabilities and innovative solutions. As we stand at the cusp of this AI-driven era, it’s clear that the future we once imagined is unfolding before us, driven by the relentless, transformative power of Artificial Intelligence.</p>
      </div>


      {/* accordian */}
      <div className="container pb-52">
        <h3 className='title text-center'>Frequently Asked Questions</h3>
        <div>
          <Accordian items={aiAccordianData} />
        </div>
      </div>




    </div>
  )
}

export default artificialIntelligence
