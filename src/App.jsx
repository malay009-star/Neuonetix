import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefautLayout from './layout/default_layout'
import Home from './pages/home'
import Errorpage from './pages/errorPage'
import './index.css'
import './assets/css/base/typography.css'
import './assets/css/utilities/helpers.css'
import SoftwareDevelopment from './pages/software_development'
import ApplicationDevelopment from './pages/application_development'
import EnhancingEfficiency from './pages/enhancing_efficiency'
import WebsiteDevelopment from './pages/website_development'
import SoftwareMaintenance from './pages/software_maintenance'
import VirtualReality from './pages/virtual_reality'
import ArtificialIntelligence from './pages/artificial_intelligence'
import OurApplication from './pages/our_application'
import OurCompany from './pages/our_company/our_company'
import OurJourney from './pages/our_company/our_journey'
import FromVison from './pages/our_company/from_vision'
import MissionVision from './pages/our_company/mission_vision'
import MeatOurFounder from './pages/our_company/meat_ourFounder'
import WeStandFor from './pages/our_company/we_standFor'
import FutureAi from './pages/our_company/future_ai'
import OurPromise from './pages/our_company/our_promise'
import Contact from './pages/contact'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <DefautLayout>
            <Home />
          </DefautLayout>
        } />
        <Route path='/home' element={
          <DefautLayout>
            <Home />
          </DefautLayout>
        } />
        <Route path='/software_development' element={
          <DefautLayout>
            <SoftwareDevelopment />
          </DefautLayout>
        } />
        <Route path='/application_development' element={
          <DefautLayout>
            <ApplicationDevelopment />
          </DefautLayout>
        } />
        <Route path='/enhancing_efficiency' element={
          <DefautLayout>
            <EnhancingEfficiency />
          </DefautLayout>
        } />
        <Route path='/website_development' element={
          <DefautLayout>
            <WebsiteDevelopment />
          </DefautLayout>
        } />
        <Route path='/software_maintenance' element={
          <DefautLayout>
            <SoftwareMaintenance />
          </DefautLayout>
        } />
        <Route path='/virtual_reality' element={
          <DefautLayout>
            <VirtualReality />
          </DefautLayout>
        } />
        <Route path='/artificial_intelligence' element={
          <DefautLayout>
            <ArtificialIntelligence />
          </DefautLayout>
        } />
        <Route path='/all_applications' element={
          <DefautLayout>
            <OurApplication />
          </DefautLayout>
        } />
        <Route path='/our_company/' element={<OurCompany />}>
          <Route index element={<OurJourney/>} />
          <Route path='our_journey' element={<OurJourney/>} />
          <Route path='from_vision' element={<FromVison/>} />
          <Route path='mission' element={<MissionVision/>} />
          <Route path='meat_founders' element={<MeatOurFounder/>} />
          <Route path='stand_for' element={<WeStandFor/>} />
          <Route path='shaping_ai' element={<FutureAi/>} />
          <Route path='our_promise' element={<OurPromise/>} />
        </Route>
        <Route path='/contact' element={
          <DefautLayout>
            <Contact />
          </DefautLayout>
        } />
        <Route path='*' element={
          <DefautLayout>
            <Errorpage />
          </DefautLayout>
        }>
        </Route>
      </Routes>
    </BrowserRouter >
  )
}

export default App
