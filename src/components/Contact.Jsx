import React from 'react'
import Section from './common/Section'
import contact from '../assets/mobile.png'
import { FaLinkedin } from "react-icons/fa";
const Contact = () => {

  const SOCIAL = [
    {
      id: 1,
      link: "https://linkedin.com",
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
    <Section 
      title='Contact 📞' 
      subtitle='These are ways you can get in touch with me. Hope to hear back!'
      >

      <div className='flex flex-col items-center justify-center gap-8 text-center'>
        <div>
          <img src={contact} alt="contact info" className='w-32 h-32' />
          </div>
          <div>
            <p className='max-w-xs md:max-w-lg font-extralight'>
              I am open to talk regarding full-time opportunities. Feel free to contact me using your preferred way.
            </p>
          </div>
          <div className='flex w-full items-center justify-evenly text-3xl'>
            {SOCIAL.map(({id, link, icon}) => (
              <a href={link} target='_blank' rel='noopener noreferrer' className='duration-200 ease-in-out hover:text-rose-600'>{icon}</a>
            ))}
          </div>


          {/* bottom form */}
          <div className='p-8 text-left w-full'>
            <form action="" method='POST'>
              <div className='w-full'>
                <div className='flex flex-col'>
                    <label className='capitalize text-sm py-2 font-extralight'>
                      name
                    </label>
                    <input 
                    type="text" 
                    name='name' 
                    className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white'
                    />
                </div>
                <div className='flex flex-col my-2'>
                    <label className='capitalize text-sm py-2 font-extralight'>
                      phone
                    </label>
                    <input 
                    type="text" 
                    name='phone' 
                    className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white'
                    />
                </div>
                <div className='flex flex-col my-2'>
                    <label className='capitalize text-sm py-2 font-extralight'>
                      email
                    </label>
                    <input 
                    type="text" 
                    name='email' 
                    className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white'
                    />
                </div>
                <div className='flex flex-col'>
                    <label className='capitalize text-sm py-2 font-extralight'>
                      message
                    </label>
                    <textarea name="message" rows="10" className='border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white resize-none'></textarea>
                </div>
              </div>
            </form>
          </div>
      </div>
    </Section>
  );
};

export default Contact