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

      <div>
        <div><img src={contact} alt="" /></div>
          <div>
            <p>
              I am open to talk regarding full-time opportunities. Feel free to contact me using your preferred way.
            </p>
          </div>
          <div>
            {SOCIAL.map(({id, link, icon}) => (
              <a href="">{icon}</a>
            ))}
          </div>
      </div>
    </Section>
  );
};

export default Contact