import React, { useRef } from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import Link from 'next/link'
import Image from 'next/image'
import update1 from '../../public/images/articles/update-2.png'
import project4 from "../../public/images/projects/project4.png"
import { motion, useMotionValue } from 'framer-motion'

const FremerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {

    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    function handleMouse(event) {
        imgRef.current.style.dispaly = "inline-block";
        x.set(event.pageX);
        y.set(-10);
    }

    function handleMouseLeave(event) {
        imgRef.current.style.dispaly = "none";
        x.set(0);
        y.set(0);
    }


    return (
        <Link href={link} target='_blank'

            onMouseMove={handleMouse}
            onMouseLeave={handleMouseLeave}

            className='hover:underline underline-offset-2 transition-all'>
            <h2 className=' w-full text-left text-xl dark:text-light font-bold md:text-lg'> {title} </h2>

            <FremerImage
                style={{ x: x, y: y }}

                ref={imgRef} src={img} alt={title} className='z-10 w-96 h-auto hidden absolute rounded-lg' />
        </Link>
    )
}



const FeaturedUpdates = ({ img, title, date, summary, link }) => {
    return (
        <motion.li
            initial={{ y: 200 }}
            whileInView={{ y: 0, transition: { duration: 0.7, ease: "easeIn" } }}
            viewport={{ once: true }}

            className='flex items-center justify-center h-auto w-full mx-auto p-1 gap-6 bg-light dark:bg-dark  border border-solid border-dark dark:border-light rounded-md hover:shadow-[5px_5px_0px_0px] dark:hover:shadow-[5px_5px_0px_0px_#fff] transition-all'>
            <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg' >
                <Image src={img} alt={title} className='w-full h-auto border border-dark/50 rounded-md scale-95 hover:scale-100 transition duration-500 cursor-pointer'
                    priority
                    sizes='(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw, 50vw
                '
                />
            </Link>

            <div className='p-4'>

                <span className='text-dark/50 dark:text-light/50 text-xl font-bold t'>{date}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2 transition-all'>
                    <h1 className='my-2 w-full text-left dark:text-light text-xl font-bold lg:text-2xl sm:text-xl line-clamp-1'> {title} </h1>
                </Link>
                <p className='font-medium text-xs dark:text-light/70 line-clamp-1'>{summary}</p>
            </div>
        </motion.li>
    )
}

const PreviousUpdates = ({ img, title, date, link }) => {
    return (
        <motion.li
            initial={{ y: 200 }}
            whileInView={{ y: 0, transition: { duration: 0.7, ease: "easeIn" } }}
            viewport={{ once: true }}
            className='relative flex items-center justify-between w-full p-4 py-6 first:mt-0 border border-solid border-dark dark:border-light/50 rounded-md hover:shadow-[5px_5px_0px_0px] dark:hover:shadow-[5px_5px_0px_0px_#fff] transition-all md:flex-col md:items-start md:py-3'>

            <MovingImg title={title} img={img} link={link} />
            <span className='text-dark/80 font-semibold dark:text-light/80 pt-2 xs:text-base'>{date}</span>
        </motion.li>
    )
}



const updates = () => {
    return (
        <>
            <Head>
                <title>AshiQur Rahman | Updates </title>
                <meta name="description" content="Available Services: Web Design, Web Development, Website Error Fix, Website Redesign, Website SEO, SEO,    Youtube Channel SEO, Youtube Video SEO" />
            </Head>
            <main className='w-full m-auto flex flex-col items-center justify-center overflow-hidden '>
                <Layout className='pt-40 sm:pt-36'>
                    <AnimatedText text="Leatest Updates" className='!text-7xl text-left mb-16 xl:!text-5xl lg:!text-6xl md:!text-5xl sm:!text-3xl' />

                    <AnimatedText text="Aug, 2023" className='!text-6xl text-dark/10 dark:text-light/20 text-left mb-16 xl:!text-5xl lg:!text-6xl md:!text-5xl sm:!text-3xl' />

                    <ul className='grid grid-cols-2 w-[100%] gap-16 md:grid-cols-1 md:gap-y-8'>
                        <FeaturedUpdates
                            title="Next JS Image transition Effect
                        "
                            summary="This is a cool Image Transition Effect when mouse on the image, The image size changed. See more.."
                            link="/"
                            date="12/3/2001"
                            img={project4}
                        />

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

                        <FeaturedUpdates
                            title="Next JS Image transition Effect
                        "
                            summary="This is a cool Image Transition Effect when mouse on the image, The image size changed. See more.."
                            link="/"
                            date="12/3/2001"
                            img={project4}
                        />


                        <FeaturedUpdates
                            title="Next JS Image transition Effect
                        "
                            summary="This is a cool Image Transition Effect when mouse on the image, The image size changed. See more.."
                            link="/"
                            date="12/3/2001"
                            img={project4}
                        />
                    </ul>

                    <AnimatedText text="Previous Post" className='!text-6xl text-dark/10 dark:text-light/20 text-left mt-32 mb-12 xl:!text-5xl lg:!text-6xl md:!text-5xl sm:!text-3xl' />

                    <ul className='grid grid-cols-1 w-[80%] xl:w-full mx-auto relative gap-8'>
                        <PreviousUpdates
                            title="Next.js was first released as an open-source project..."
                            link="/"
                            date="1 month ago"
                            img={update1}
                        />

                        <PreviousUpdates
                            title="The start of the web and web design.."
                            date="2 month ago"
                            link="/"
                            img={update1}
                        />

                        <PreviousUpdates
                            title="Web page assets, resources and network information.."
                            date="12, july 2023"
                            link="/"
                            img={update1}
                        />

                        <PreviousUpdates
                            title="JavaScript debugging.."
                            date="12, july 2023"
                            link="/"
                            img={update1}
                        />

                        <PreviousUpdates
                            title="Pagination Component In Reactjs From Scratch"
                            date="12, july 2023"
                            link="/"
                            img={update1}
                        />

                        <PreviousUpdates
                            title="Pagination Component In Reactjs From Scratch"
                            date="12, july 2023"
                            link="/"
                            img={update1}
                        />

                        <PreviousUpdates
                            title="Pagination Component In Reactjs From Scratch"
                            date="12, july 2023"
                            link="/"
                            img={update1}
                        />

                        <PreviousUpdates
                            title="Pagination Component In Reactjs From Scratch"
                            date="12, july 2023"
                            link="/"
                            img={update1}
                        />
                    </ul>


                </Layout>
            </main>
        </>
    )
}

export default updates


