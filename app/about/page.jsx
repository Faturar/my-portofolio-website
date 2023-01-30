import React from 'react'

import Loader from '../Loader'
import Navbar from '../Navbar'
import Footer from '../Footer'
import Item from './SkillItem'

// Image
import html from '../../public/assets/icon/html.svg'
import css from '../../public/assets/icon/css.svg'
import javascript from '../../public/assets/icon/javascript.svg'
import bootstrap5 from '../../public/assets/icon/bootstrap5.svg'
import tailwind from '../../public/assets/icon/tailwind.svg'
import reactjs from '../../public/assets/icon/reactjs.svg'
import nextjs from '../../public/assets/icon/next.svg'
import vuejs from '../../public/assets/icon/vuejs.svg'
import nodejs from '../../public/assets/icon/nodejs.svg'
import php from '../../public/assets/icon/php.svg'
import laravel from '../../public/assets/icon/laravel.svg'
import codeignither from '../../public/assets/icon/codeignither.svg'
import mysql from '../../public/assets/icon/mysql.svg'
import mongodb from '../../public/assets/icon/mongodb.svg'
import wordpress from '../../public/assets/icon/wordpress.svg'
import figma from '../../public/assets/icon/figma.svg'
import xd from '../../public/assets/icon/xd.svg'
import photoshop from '../../public/assets/icon/photoshop.svg'
import illustration from '../../public/assets/icon/illustrator.svg'
import invision from '../../public/assets/icon/invision.svg'

function about() {
  return (
    <>
      <Loader />
      <Navbar />
      <main className='min-h-screen w-full text-center overflow-hidden'>
        <div className="container mt-28">
          {/* Header */}
          <div className="header" data-aos="fade" data-aos-duration="1000" data-aos-offset="100" data-aos-delay="1000">
            <span className='header-title'>About</span>
            <h1 className="header-title-main">
              About Me
            </h1>
            <p className='header-description'>
            Let’s get to know each other
            </p>
          </div>

          {/* About */}
          <div className='mt-16 md:mt-28'>
            <p className='text-xl md:text-[36px] md:leading-10 text-secondary font-medium' data-aos="fade" data-aos-duration="1000" data-aos-offset="100" data-aos-delay="1000">I am a freelance web developer and a college student based in Bogor, Indonesia. I have a strong interest in web development and have been working on projects since the age of sixteen. I am passionate about technology, and I am always looking for ways to improve my development skills. I am always open to learning new things and expanding my knowledge. When freetime I like to listening to  a podcast or music and playing game.</p>
          </div>

          <div className='mt-24 md:mt-48 mb-24 md:mb-48'>
            <h2 className='text-left text-3xl md:text-4xl text-medium text-main' data-aos="fade-right" data-aos-duration="1000" data-aos-offset="100">Tools & Skill</h2>

            <div className='flex flex-wrap mt-16 md:mt-20'>
              <Item image={html} title="HTML" category="Markup Language" level={5} addonClass="-ml-4" />

              <Item image={css} title="CSS" category="Stylesheet" level={5} delay="200" />

              <Item image={javascript} title="Javascript" category="Programming" level={4} delay="300"  />

              <Item image={bootstrap5} title="Bootstrap" category="CSS Framework" level={4} delay="400" />

              <Item image={tailwind} title="Tailwind CSS" category="CSS Framework" level={4} />

              <Item image={reactjs} title="React Js" category="Javascript Framework" level={4} delay="200" />
              
              <Item image={nextjs} title="Next Js" category="React Js Framework" level={4} delay="300" />

              <Item image={vuejs} title="Vue Js" category="Javascript Framework" level={2} delay="400" />

              <Item image={nodejs} title="Node Js" category="Javascript Framework" level={3} />

              <Item image={php} title="PHP" category="Programming" level={4} delay="200" />

              <Item image={laravel} title="Laravel" category="PHP Framework" level={4} delay="300" />

              <Item image={codeignither} title="Codeignither 4" category="PHP Framework" level={4} delay="400" />

              <Item image={mysql} title="My SQL" category="Database" level={4} />

              <Item image={mongodb} title="Mongo DB" category="Database" level={2} addonClass="py-2.5" delay="200" />

              <Item image={wordpress} title="Wordpress" category="CMS" level={4} delay="300" />

              <Item image={figma} title="Figma" category="Design" level={4} delay="400" />

              <Item image={xd} title="Adobe XD" category="Design" level={2} />

              <Item image={photoshop} title="Adobe Photoshop" category="Design" level={4} delay="200" />

              <Item image={illustration} title="Adobe Illustration" category="Design" level={2} delay="200" />

              <Item image={invision} title="Invision" category="Design" level={1} delay="400" />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default about