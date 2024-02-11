import React from 'react'
import Image from 'next/image'

import Loader from '../Loader'
import Navbar from '../Navbar'
import Footer from '../Footer'

import serviceHtml from '../../public/assets/img/service-html.png'
import serviceReact from '../../public/assets/img/service-react-next.png'
import serviceWordpress from '../../public/assets/img/service-wordpress.png'

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

          <div className="flex flex-col md:flex-row mt-16 text-white">
              <div className="flex-1 bg-primary p-8 md:mr-3 mb-4 md:mb-0 rounded" data-aos="fade-up" data-aos-duration="1500">
                <Image
                  src={serviceHtml}
                  alt=""
                  height={400}
                />

                <div className='mt-8 text-center'>
                  <h4 className='text-xl md:text-2xl font-bold'>Design to HTML</h4>
                  <p className='mt-2'>I will convert your design into a responsive, accessible and animated html template.</p>
                </div>
              </div>
              <div className="flex-1 bg-primary p-8 md:mx-3 mb-4 md:mb-0 rounded" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100" data-aos-offset="100">
                <Image
                  src={serviceReact}
                  alt=""
                  height={400}
                />

                <div className='mt-8 text-center'>
                  <h4 className='text-xl md:text-2xl font-bold'>Design to React JS / Next JS</h4>
                  <p className='mt-2'>I will convert your design into a responsive, accessible and animated html template.</p>
                </div>
              </div>
              <div className="flex-1 bg-primary p-8 md:ml-3 rounded" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200" data-aos-offset="200">
                <Image
                  src={serviceWordpress}
                  alt=""
                  height={400}
                />

                <div className='mt-8 text-center'>
                  <h4 className='text-xl md:text-2xl font-bold'>Design to Wordpress</h4>
                  <p className='mt-2'>I will convert your design into a responsive, accessible and animated html template.</p>
                </div>
              </div>
            </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default work