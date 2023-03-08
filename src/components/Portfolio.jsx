import React from "react";
import Section from "./common/Section";

import p3 from "../assets/p3.jpg";
import p5 from "../assets/p5.jpg";

import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image: p3,
      title: "Best App",
      github: "https://github.com",
      demo: "https://google.com",
    },
    {
      id: 2,
      image: p5,
      title: "Best App",
      github: "https://github.com",
      demo: "https://google.com",
    },
  ];

  return (
    <Section
      title="Portfolio 🗒️"
      subtitle="These are all the projects that I have worked on."
    >
      <div className="grid gap-8 lg:gap-14 lg:grid-cols-2">
        {projects.map(({ id, image, title, github, demo }) => (
          <div
            key={id}
            className="max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl overflow-clip"
          >
            <img src={image} alt={title} className="w-2/3" />
            <div className="w-1/3 flex flex-col items-center justify-evenly p-1">
              <h2>{title}</h2>
              <a
                className="text-2xl cursor-pointer duration-150 hover:scale-110"
                href={github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>

              <a
                className="text-2xl cursor-pointer duration-150 hover:scale-110"
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkSquareAlt />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Portfolio;
