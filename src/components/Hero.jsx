import React from 'react'
import {FaLinkedin, FaArrowDown} from 'react-icons/fa'
import avatar from '../assets/avatar.png';

const Hero = () => {

    const SOCIAL = [
        {
            id: 1, 
            link: 'https://linkedin.com', 
            icon: <FaLinkedin />, 
        },
        // {
        //     id: 1, 
        //     link: 'https://linkedin.com', 
        //     icon: <FaLinkedin />, 
        // },
        // {
        //     id: 1, 
        //     link: 'https://linkedin.com', 
        //     icon: <FaLinkedin />, 
        // },
    ];

  return (

    // introduction
    <section className='min-h-screen flex flex-col justify-start items-center p-5 text-center'>
        <h2 className='text-5xl text-rose-600 font-bold uppercase '>Emmanuel Lorenzo</h2>
        <h3 className='py-3 text-2xl'>Software Engineer</h3>
        <p className='max-w-xl font-light text-gray-500'>
           Hello <span className='animate-pulse text-4xl'>👋</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia recusandae suscipit unde totam ducimus possimus tenetur alias? Omnis exercitationem nemo eius asperiores quidem excepturi soluta voluptatem totam libero, laboriosam reprehenderit.
        </p>

        {/* social icons */}
        <div className='flex justify-evenly py-8 lg:py-16 text-3xl w-full md:w-1/3'>
            {SOCIAL.map(({id, link, icon}) => (
                <a href={link} key={id}
                target='_blank'
                rel='noopener noreferrer'
                className='cursor-pointer duration-300 hover:text-rose-600'
                >
                {icon}</a>
            ))}

            {/* avatar & resume */}
            <div>
                <img src={avatar} alt="avatar of Emmanuel" className='w-60 h-60 md:w-72 md:h-72 object-cover object-top bg-gradient-to-b from-red-600 rounded-xl pt-5'/>
                <a href=""></a>
            </div>

            {/* arrow down animation */}

        </div>
    </section>
  )
}

export default Hero