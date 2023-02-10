import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

function WorkItem({image, title, description, techstack, link, delay}) {
  return (
    <>
        <div className="lg:hidden flex flex-col justify-start items-start mt-12 lg:mt-8" data-aos="fade-right" data-aos-duration="1500">
            <div className="mx-3">
                <Image
                    src={image}
                    alt=""
                    height={400}
                />
            </div>

            <div className="flex-1 mt-8 mx-3">
                <h4 className='text-2xl text-start font-bold text-main'>{title}</h4>
                <p className='mt-4 text-start text-secondary text-md md:text-lg'>{description}</p>
                <div className='mt-3 text-start text-secondary text-md md:text-lg'>
                    <span>Tech Stack:</span>

                    {/* Tech stack */}
                    <div className='flex items-center flex-wrap gap-x-4 mt-4'>
                    {techstack.map(item => (
                        <div className='flex mb-2'>
                            <Image
                                src={item.image}
                                alt=""
                                height={'20'}
                            />
                            <span className='ml-2 text-md'>{item.tech}</span>
                        </div>
                    ))}
                    </div>
                </div>
                <div className='mt-6 text-end'>
                    <Link href={link} target="_blank" className='text-primary hover:text-primary-active transition-all duration-300'>
                        <span className='align-middle text-md md:text-lg font-medium'>View Demo</span>
                        <i className='bx bx-right-arrow-alt text-xl ml-1 align-middle'></i>
                    </Link>
                </div>
            </div>
        </div>

        <div className="hidden lg:flex w-1/3 flex-col justify-start items-start mt-12 lg:mt-8" data-aos="fade-right" data-aos-duration="1500" data-aos-delay={delay}>
            <div className="mx-3">
                <Image
                    src={image}
                    alt=""
                    height={400}
                />
            </div>

            <div className="flex-1 mt-8 mx-3">
                <h4 className='text-2xl text-start font-bold text-main'>{title}</h4>
                <p className='mt-4 text-start text-secondary text-md md:text-lg'>{description}</p>
                <div className='mt-3 text-start text-secondary text-md md:text-lg'>
                    <span>Tech Stack:</span>

                    {/* Tech stack */}
                    <div className='flex items-center flex-wrap gap-x-4 mt-4'>
                    {techstack.map(item => (
                        <div className='flex mb-2'>
                            <Image
                                src={item.image}
                                alt=""
                                height={'20'}
                            />
                            <span className='ml-2 text-md'>{item.tech}</span>
                        </div>
                    ))}
                    </div>
                </div>
                <div className='mt-6 text-end'>
                    <Link href={link} target="_blank" className='text-primary hover:text-primary-active transition-all duration-300'>
                        <span className='align-middle text-md md:text-lg font-medium'>View Demo</span>
                        <i className='bx bx-right-arrow-alt text-xl ml-1 align-middle'></i>
                    </Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default WorkItem