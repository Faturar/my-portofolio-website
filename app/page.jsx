import { Mulish } from '@next/font/google'
import Image from 'next/image'
import Link from 'next/link'

import './globals.css'
import('tailwindcss').Config

// image
import main from '../public/assets/img/main.svg'
import portfolioAes from '../public/assets/img/portfolio-aes.png'
import serviceHtml from '../public/assets/img/service-html.png'
import serviceReact from '../public/assets/img/service-react-next.png'
import serviceWordpress from '../public/assets/img/service-wordpress.png'
import Loader from './Loader'
import Navbar from './Navbar'
import Footer from './Footer'

const mulish = Mulish({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Loader />
      <Navbar />
      <main className={`${mulish.className} overflow-hidden`}>
        {/* Header */}
        <section id="header">
          <div className="container">
            <div className="flex relative -z-10">
              <div className='py-24 md:py-32' data-aos="fade-right" data-aos-duration="1600" data-aos-delay="1000">
                <span className='text-primary font-bold text-lg md:text-xl'>Hello Everyone <span className='animate-wave inline-block w-8'>👋</span>, I'm</span>
                <h1 className="text-[48px] leading-tight md:leading-normal font-bold text-main mt-2 md:mt-3">
                  Fatur Ardiansyah Ramadhan
                </h1>
                <h2 className='text-secondary text-xl md:text-2xl mt-3'>Web Developer</h2>
                <p className='text-secondary text-lg md:text-xl mt-4 md:max-w-[640px]'>
                  I'm a self-taught developer who loves to learn about coding, design, and exploring new things in depth.
                </p>
                <button className='btn btn-primary mt-16 border-box'>
                  Contact
                </button>
              </div>
              <div className='absolute hidden xl:block -right-28 top-12' data-aos="fade-left" data-aos-duration="1600" data-aos-delay="1000">
                <Image
                  src={main}
                  alt="Logo"
                  width={800}
                />
              </div>
            </div>
            <div className="p-0 animate-bounce" data-aos="fade-up" data-aos-duration="1600" data-aos-delay="1100" data-aos-offset="-200">
              <i className='bx bx-down-arrow-alt py-2 px-3 text-lg border border-secondary rounded-full'></i>
            </div> 
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio">
          <div className="container flex flex-col mt-28">

            {/* Header */}
            <div className="flex flex-col items-center header text-center" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="100">
              <span className='text-primary font-bold text-lg'>Portfolio</span>
              <h1 className="text-[40px] leading-tight md:leading-normal font-bold text-main">
                Selected Project
              </h1>
              <p className='text-secondary text-lg text-center md:max-w-[520px]'>
                My portfolio showcases the various projects I have worked on, that I create.
              </p>
            </div>

            {/* Items */}
            <div className="flex items-center mt-24">
              <div className="flex-1" data-aos="fade-right" data-aos-duration="1500">
                <Image
                  src={portfolioAes}
                  alt="Logo"
                  height={400}
                />
              </div>

              <div className="flex-1 pl-20" data-aos="fade-left" data-aos-duration="1500" data-aos-offset="300">
                <h4 className='text-3xl font-bold text-main'>PT. Serunting Sakti Jaya website</h4>
                <p className='mt-3 text-secondary text-lg'>Website for managing stock of goods and transactions made by stores.</p>
                <div className='mt-3 text-secondary'>
                  <span>Tech Stack:</span>
                  <div className='flex items-center flex-wrap gap-x-4 mt-4'>
                    <div className='flex'>
                      <Image
                        src={main}
                        alt="Logo"
                        height={24}
                      />
                      <span>Wordpress</span>
                    </div>
                    <div className='flex'>
                      <Image
                        src={main}
                        alt="Logo"
                        height={24}
                      />
                      <span>Codeignither 4</span>
                    </div>
                    <div className='flex'>
                      <Image
                        src={main}
                        alt="Logo"
                        height={24}
                      />
                      <span>Codeignither 4</span>
                    </div>
                    <div className='flex'>
                      <Image
                        src={main}
                        alt="Logo"
                        height={24}
                      />
                      <span>Codeignither 4</span>
                    </div>
                    <div className='flex'>
                      <Image
                        src={main}
                        alt="Logo"
                        height={24}
                      />
                      <span>Codeignither 4</span>
                    </div>
                  </div>
                </div>
                <div className='mt-12'>
                  <Link href="#" className='text-primary'>
                    <span className='align-middle text-lg font-semibold'>View Demo</span>
                    <i className='bx bx-right-arrow-alt text-xl ml-1 align-middle'></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex items-center mt-16">
              <div className="flex-1" data-aos="fade-right" data-aos-duration="1500">
                <Image
                  src={main}
                  alt="Logo"
                  height={400}
                />
              </div>

              <div className="flex-1 pl-20" data-aos="fade-left" data-aos-duration="1500" data-aos-offset="300">
                <h4 className='text-3xl font-bold text-main'>PT. Serunting Sakti Jaya website</h4>
                <p className='mt-3 text-secondary text-lg'>Website for managing stock of goods and transactions made by stores.</p>
                <div className='mt-3 text-secondary'>
                  <span>Tech Stack:</span>
                  <div className='flex items-center flex-wrap gap-x-4 mt-4'>
                    <div className='flex'>
                      <Image
                        src={main}
                        alt="Logo"
                        height={24}
                      />
                      <span>Wordpress</span>
                    </div>
                    <div className='flex'>
                      <Image
                        src={main}
                        alt="Logo"
                        height={24}
                      />
                      <span>Codeignither 4</span>
                    </div>
                    <div className='flex'>
                      <Image
                        src={main}
                        alt="Logo"
                        height={24}
                      />
                      <span>Codeignither 4</span>
                    </div>
                    <div className='flex'>
                      <Image
                        src={main}
                        alt="Logo"
                        height={24}
                      />
                      <span>Codeignither 4</span>
                    </div>
                    <div className='flex'>
                      <Image
                        src={main}
                        alt="Logo"
                        height={24}
                      />
                      <span>Codeignither 4</span>
                    </div>
                  </div>
                </div>
                <div className='mt-12'>
                  <Link href="#" className='text-primary'>
                    <span className='align-middle text-lg font-semibold'>View Demo</span>
                    <i className='bx bx-right-arrow-alt text-xl ml-1 align-middle'></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Button */}
            <div className='flex justify-center mt-28' data-aos="fade-up" data-aos-duration="1500" data-aos-offset="200">
              <button className='btn btn-primary'>View All Work</button>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className='bg-primary-light w-full h-full mt-48 py-28'>
          <div className="container">
            {/* Header */}
            <div className="flex flex-col items-center header text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="100">
              <span className='text-primary font-bold text-lg'>Services</span>
              <h1 className="text-[40px] leading-tight md:leading-normal font-bold text-main">
                Help convert your design
              </h1>
              <p className='text-secondary text-lg text-center md:max-w-[520px]'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Animi, dolor. Aliquam possimus inventore quod sint?
              </p>
            </div>

            <div className="flex mt-16 text-white">
              <div className="flex-1 bg-primary p-8 mr-3 rounded" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="100">
                <Image
                  src={serviceHtml}
                  alt="Logo"
                  height={400}
                />

                <div className='mt-8 text-center'>
                  <h4 className='text-2xl font-bold'>Design to HTML</h4>
                  <p className='mt-2'>I will convert your design into a responsive, accessible and animated html template.</p>
                </div>
              </div>
              <div className="flex-1 bg-primary p-8 mx-3 rounded" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="100" data-aos-offset="200">
                <Image
                  src={serviceReact}
                  alt="Logo"
                  height={400}
                />

                <div className='mt-8 text-center'>
                  <h4 className='text-2xl font-bold'>Design to React JS / Next JS</h4>
                  <p className='mt-2'>I will convert your design into a responsive, accessible and animated html template.</p>
                </div>
              </div>
              <div className="flex-1 bg-primary p-8 ml-3 rounded" data-aos="fade-up" data-aos-duration="1500" data-aos-delay="200" data-aos-offset="300">
                <Image
                  src={serviceWordpress}
                  alt="Logo"
                  height={400}
                />

                <div className='mt-8 text-center'>
                  <h4 className='text-2xl font-bold'>Design to Wordpress</h4>
                  <p className='mt-2'>I will convert your design into a responsive, accessible and animated html template.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact */}
        <section id="contact" className='py-64'>
          {/* Header */}
          <div className="flex flex-col items-center header text-center">
            <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="100">
              <span className='text-primary font-bold text-lg'>Contact</span>
              <h1 className="text-[40px] leading-tight md:leading-normal font-bold text-main">
                Let’s talk about project
              </h1>
              <p className='text-secondary text-lg text-center md:max-w-[520px] mt-4'>
                Website for managing stock of goods and transactions made by stores.
              </p>
            </div>
            <div className='mt-16'>
              <button className='btn btn-primary mr-6' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="100">Contact Now</button>
              <button className='btn btn-primary-outline' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" data-aos-offset="100">Download CV</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
