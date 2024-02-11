import Image from 'next/image'
import Link from 'next/link'

import './globals.css'
import('tailwindcss').Config

// Components
import Loader from './Loader'
import Navbar from './Navbar'
import Footer from './Footer'
import PortfolioCard from './PortfolioCard'

// image
import main from '../public/assets/img/main.svg'

// Portfolio
import portfolioAes from '../public/assets/img/portfolio-aes.png'
import portfolioProlist from '../public/assets/img/portofolio-prolist2.png'
import portfolioMov from '../public/assets/img/portfolio-mov.png'
import serviceHtml from '../public/assets/img/service-html.png'
import serviceReact from '../public/assets/img/service-react-next.png'
import serviceWordpress from '../public/assets/img/service-wordpress.png'

// Stack icon
import reactjs from '../public/assets/icon/reactjs.svg'
import css from '../public/assets/icon/css.svg'
import html from '../public/assets/icon/html.svg'
import tailwind from '../public/assets/icon/tailwind.svg'
import laravel from '../public/assets/icon/laravel.svg'
import bootstrap from '../public/assets/icon/bootstrap5.svg'

export default function Home() {
  const data = [
    {
      image: portfolioProlist,
      title: 'Prolist - Property Listing Web Application',
      description: 'A property listing web application streamlines the process of finding, renting, or buying properties by connecting potential tenants or buyers with landlords, sellers, or agents. While the core functionality remains the same, its specific features and target audience can vary depending on the type of properties.',
      techstack: [
        {
          tech: 'HTML',
          image: html
        },
        {
          tech: 'CSS',
          image: css
        },
        {
          tech: 'Bootstrap',
          image: bootstrap
        },
        {
          tech: 'Laravel',
          image: laravel
        },
      ],
      link: 'https://property.faturardev.my.id/',
      delay: 1000,
    },
    {
      image: portfolioAes,
      title: 'Aes Shop - Plant Shop Website',
      description: 'Webiste where you can browse and purchase a variety of plants, gardening supplies and tools. It also provide helpful resources, such as plant care guides and information about the different types of plants available.',
      techstack: [
        {
          tech: 'HTML',
          image: html
        },
        {
          tech: 'CSS',
          image: css
        },
        {
          tech: 'Tailwind',
          image: tailwind
        },
        {
          tech: 'React Js',
          image: reactjs
        },
      ],
      link: 'https://aesshop.netlify.app/',
      delay: 1000,
    },
    {
      image: portfolioMov,
      title: 'Mov Movie - Movie Search Website',
      description: 'Website that allows users to search for and find information about movies, such as title, release date, cast, and plot summary. Users can typically search by keywords and browse by genre or year.',
      techstack: [
        {
          tech: 'HTML',
          image: html
        },
        {
          tech: 'CSS',
          image: css
        },
        {
          tech: 'Tailwind',
          image: tailwind
        },
        {
          tech: 'React Js',
          image: reactjs
        },
      ],
      link: 'https://mov-movie.netlify.app/',
      delay: 1200,
    },
  ];

  return (
    <>
      <Loader />
      <Navbar />
      <main className={`overflow-hidden`}>
        {/* Header */}
        <section id="header">
          <div className="container">
            <div className="flex relative">
              <div className='py-24 md:py-32' data-aos="fade-right" data-aos-duration="1600" data-aos-delay="1000">
                <span className='text-primary font-bold text-lg md:text-xl'>Hello Everyone <span className='animate-wave inline-block w-8'>👋</span>, I'm</span>
                <h1 className="text-[48px] leading-tight md:leading-normal font-bold text-main mt-2 md:mt-3">
                  Fatur Ardiansyah Ramadhan
                </h1>
                <h2 className='text-secondary text-xl md:text-2xl mt-3'>Front-End Developer</h2>
                <p className='text-secondary text-lg md:text-xl mt-4 md:max-w-[640px]'>
                  I'm a self-taught developer who loves to learn about coding, design, and exploring new things in depth.
                </p>
                <div className='mt-16'>
                  <Link href={'/contact'} className='btn btn-primary'>Contact</Link>
                </div>
              </div>
              <div className='absolute hidden xl:block -right-28 top-12' data-aos="fade-left" data-aos-duration="1600" data-aos-delay="1000">
                <Image
                  src={main}
                  alt=""
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
          <div className="container flex flex-col mt-36">

            {/* Header */}
            <div className="header" data-aos="fade-up" data-aos-duration="1500" data-aos-offset="100">
              <span className='header-title'>Portfolio</span>
              <h1 className="header-title-main">
                Selected Project
              </h1>
              <p className='header-description'>
                My portfolio showcases the various projects I have worked on, that I create.
              </p>
            </div>

            {/* Items */}
            {data.map(item => (
                <PortfolioCard item={item} />
              )
            )}

            {/* Button */}
            <div className='flex justify-center mt-28' data-aos="fade-up" data-aos-duration="1500" data-aos-offset="100">
              <Link href={'/work'} className='btn btn-primary'>View All Work</Link>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className='bg-primary-light w-full h-full mt-48 py-28'>
          <div className="container">
            {/* Header */}
            <div className="header" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="100">
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
        </section>
        
        {/* Contact */}
        <section id="contact" className='py-64'>
          <div className="container">
            {/* Header */}
            <div className="header">
              <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="100">
                <span className='header-title'>Contact</span>
                <h1 className="header-title-main">
                  Let’s talk about project
                </h1>
                <p className='header-description mt-4'>
                  If you want to collaborate with me or get more information about our service, please contact me.
                </p>
              </div>
              <div className='mt-16 w-full md:w-[360px] flex justify-center md:justify-between flex-wrap'>
                <Link href={'/contact'} className='btn btn-primary mr-2' data-aos="fade-up" data-aos-duration="1000" data-aos-offset="100">Contact Now</Link>
                <button className='btn btn-primary-outline' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200" data-aos-offset="100">Download CV</button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
