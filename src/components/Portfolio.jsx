import React from 'react'
import Section from './common/Section'

import { FaGithub, FaExternalLinkSquareAlt } from 'react-icons/fa'

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

        <div className='grid gap-8 lg:gap-14 lg:grid-cols-2'>

            {projects.map(({id, image, title, github, demo}) => (

                <div>
                    <img src={image} alt="" />
                    <div>
                        <h2>{title}</h2>
                        <a href=""><FaGithub /></a>
                        <a href=""><FaExternalLinkSquareAlt/></a>
                    </div>
                </div>

            ))}

        </div>

    </Section>


  );
};

export default Portfolio