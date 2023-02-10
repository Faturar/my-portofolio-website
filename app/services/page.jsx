import React from 'react'
import Loader from '../Loader'
import Navbar from '../Navbar'
import Footer from '../Footer'

function work() {
  return (
    <>
      <Loader />
      <Navbar />
      <main className='h-screen w-full text-center overflow-hidden'>
        <div className="container flex flex-col mt-36">
          {/* Header */}
          <div className="header" data-aos="fade" data-aos-duration="1000" data-aos-offset="100" data-aos-delay="1000">
            <span className='header-title'>Services</span>
            <h1 className="header-title-main">
              Help convert your design
            </h1>
            <p className='header-description'>
              Service that takes a design and converts it into functioning code for a website or application.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default work