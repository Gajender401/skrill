import Navbar from '@/Components/Navbar'
import React from 'react'
import Hero from './_Component/Hero'
import Second from './_Component/Second'
import Fourth from './_Component/Fourth'
import Fifth from './_Component/Fifth'
import Sixth from './_Component/Sixth'
import Seventh from './_Component/Seventh'
import Footer from '@/Components/Footer'
import Eight from './_Component/Eight'
import Nine from './_Component/Nine'
import Ten from './_Component/Ten'

const page = () => {
  return (
    <div className='bg-orange-100'>
      <Navbar/>
      <Hero/>
      <Nine/>
      <Second/>
      <Eight/>
      <Ten/>
      <Fourth/>
      <Fifth/>
      <Sixth/>
      <Seventh/>
      <Footer/>
    </div>
  )
}

export default page