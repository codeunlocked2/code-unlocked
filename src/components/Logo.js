import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
// import Logo from ""

const Logo = () => {
  return (
    <div className='relative flex items-center justify-center mt-2 text-3xl font-bold dark:text-light'>
      <Link href='/'> 
        {/* <Image src={Logo} /> */}
        <span className='text-3xl'>Code</span> <span className='absolute top-7 left-12 text-sm'>Unlocked</span>
       </Link>
    </div>
  )
}

export default Logo
