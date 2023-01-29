import Link from 'next/link'

function Footer() {
  return (
    <footer className='bg-primary text-white text-center px-12'>
        <div className='flex justify-center items-center py-8 space-x-4'>
            <div className='border py-[7px] px-[10px] rounded-lg'>
                <Link href={'#'} className='text-xl'>
                    <i className='bx bxl-instagram'></i>
                </Link>
            </div>
            <div className='border py-[7px] px-[10px] rounded-lg'>
                <Link href={'#'} className='text-xl'>
                    <i className='bx bxl-facebook'></i>
                </Link>
            </div>
            <div className='border py-[7px] px-[10px] rounded-lg'>
                <Link href={'#'} className='text-xl'>
                    <i className='bx bxl-linkedin'></i>
                </Link>
            </div>
            <div className='border py-[7px] px-[10px] rounded-lg'>
                <Link href={'#'} className='text-xl'>
                    <i className='bx bx-envelope' ></i>
                </Link>
            </div>
        </div>
        <hr />
        <p className='py-6'>Copyright 2023 &copy; Faturar Dev</p>
    </footer>
  )
}

export default Footer