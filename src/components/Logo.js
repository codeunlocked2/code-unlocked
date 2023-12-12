import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
// import Logo from ""

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2 text-3xl font-bold dark:text-light'>
      <Link href='/'> 
        {/* <Image src={Logo} /> */}
        Secret
       </Link>
    </div>
  )
}

export default Logo
