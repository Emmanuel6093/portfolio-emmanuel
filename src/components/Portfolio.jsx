import React from 'react'
import Section from './common/Section'

import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Portfolio = () => {

    const projects = [ 
        {
            id: 1, 
            // image: , 
            title: 'Best App', 
            github: 'https://github.com',
            demo: "https://google.com"
        },
    ];

  return (
    <Section 
        title='Portfolio 🗒️' 
        subtitle='These are all the projects that I have worked on.'
        >
    </Section>
  )
};

export default Portfolio