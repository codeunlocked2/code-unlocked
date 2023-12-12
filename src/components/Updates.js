import React, { useRef } from 'react'
import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import update1 from '../../public/images/articles/update-2.png'
import project4 from "../../public/images/projects/project4.png"


const FeaturedUpdates = ({img, title, date, summary, link}) => {
    return(
        <li 
        
        className=' w-full flex flex-col mx-auto p-1 gap-6 bg-light dark:bg-dark  border border-solid border-dark dark:border-light rounded-2xl hover:shadow-[5px_5px_0px_0px] dark:hover:shadow-[5px_5px_0px_0px_#fff] transition-all'>
            <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg' >
                <Image src={img} alt={title} className='w-full h-auto border border-dark/50 rounded-2xl scale-95 hover:scale-100 transition duration-500 cursor-pointer'
                priority 
                sizes='(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw, 50vw
                '
                />
            </Link>

            <div className='p-4'>

                <span className='text-dark/50 dark:text-light/50 text-xl font-bold '>{date}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2 transition-all'>
                    <h2 className='my-2 w-full text-left dark:text-light text-3xl font-bold lg:text-2xl sm:text-xl line-clamp-1'> {title} </h2>
                </Link>
                <p className='font-medium dark:text-light/70 line-clamp-2'>{summary}</p>
            </div>
        </li>
    )
}


const Updates = () => {
  return (
    <>
        <main className='w-full m-auto flex flex-col items-center justify-center overflow-hidden'>
            <Layout className='pt-16 lg:pt-0 sm:pt-0 '>

            <h1 className='text-8xl font-bold text-dark/10 dark:text-light/20 rounded-2xl pb-20 sm:pb-10 xl:text-5xl lg:text-6xl md:text-5xl sm:text-4xl'> Updates </h1>

            <ul className=' w-[100%] mx-auto grid grid-cols-2 gap-16 md:grid-cols-1 md:gap-y-16'>
                    <FeaturedUpdates 
                        title="Next JS Image transition Effect
                        "
                        summary="This is a cool Image Transition Effect when mouse on the image, The image size changed. See more.."
                        link="/"
                        date="12/3/2001"
                        img={project4}
                    />

                    <FeaturedUpdates 
                        title="Smooth Scrolling"
                        summary="
                        Smoothing the scroll pulls users into the flow of the experience that feels so substantial that they forget they’re navigating a web page.
                        "
                        link="https://ashiqbro.vercel.app/"
                        date="29/09/2023"
                        img={update1}
                    />
                </ul>

                <div className='mt-16 font-semibold flex gap-1 text-xl dark:text-light hover:ml-1 underline transition-all xs:text-sm xs:mt-8'>
                  <Link href="/updates">See all updates</Link> 
                </div>
                
            </Layout>
        </main>
    </>
  )
}

export default Updates

