import Faq from '@/components/Faq'
import Footer from '@/components/Footer'
import HelpSection from '@/components/HelpSection'
import HeroSection from '@/components/HeroSection'
import Navbar from '@/components/Navbar'
import Pricing from '@/components/Pricing'
import SuscribeSection from '@/components/SuscribeSection'
import ThirdSection from '@/components/ThirdSection'

import React from 'react'



export default function page() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
     <div className='px-4'>
     <div className=' bg-[#F5F7FF] p-4 rounded-2xl'>
     <video src="https://framerusercontent.com/assets/tYa2OLCojK0ocbl96Mtx0YTg2k.mp4" autoPlay muted loop controls></video>
     </div>
     </div>
     <ThirdSection/>
     <Faq/>
     <Pricing/>
     <HelpSection/>
     <SuscribeSection/>
     <Footer/>
     
    </div>
  )
}
