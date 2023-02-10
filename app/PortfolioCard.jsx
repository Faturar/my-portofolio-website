import Image from 'next/image'
import Link from 'next/link'

export default function PortfolioCard({item}) {
    return (
        <div className="flex flex-col md:flex-row items-center mt-20">
            <div className="flex-1" data-aos="fade-right" data-aos-duration="1500">
            <Image
                src={item.image}
                alt=""
                height={400}
            />
            </div>

            <div className="flex-1 mt-8 md:mt-0 md:pl-20" data-aos="fade-left" data-aos-duration="1500" data-aos-offset="100">
                <h4 className='text-2xl md:text-3xl font-bold text-main'>{item.title}</h4>
                <p className='mt-4 text-secondary text-md md:text-lg'>{item.description}</p>
                <div className='mt-3 text-secondary text-md md:text-lg'>
                    <span>Tech Stack:</span>

                    {/* Tech stack */}
                    <div className='flex items-center flex-wrap gap-x-4 mt-4'>
                    {item.techstack.map(itema => (
                        <div className='flex'>
                            <Image
                                src={itema.image}
                                alt=""
                                height={'20'}
                            />
                            <span className='ml-2'>{itema.tech}</span>
                        </div>
                    ))}
                    </div>
                </div>
                <div className='mt-12'>
                    <Link href={item.link} target="_blank" className='text-primary hover:text-primary-active transition-all duration-300'>
                        <span className='align-middle text-md md:text-lg font-medium'>View Demo</span>
                        <i className='bx bx-right-arrow-alt text-xl ml-1 align-middle'></i>
                    </Link>
                </div>
            </div>
        </div>
    )
}