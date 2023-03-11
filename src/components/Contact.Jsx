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
          <div className=''>
            <form action=""></form>
          </div>
      </div>
    </Section>
  );
};

export default Contact