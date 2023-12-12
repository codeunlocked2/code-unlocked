import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

// import Logo from ""

const Logo = () => {
  return (
    <div className='relative flex items-center justify-center mt-2 text-3xl font-bold dark:text-light'>
      <Link href='/'> 
        {/* <Image src={Logo} /> */}
        <span className='text-3xl'>Code</span> <span className='absolute top-4  left-10 text-[8px] opacity-90'>unlocked</span>
       </Link>
    </div>
  )
}

export default Logo
