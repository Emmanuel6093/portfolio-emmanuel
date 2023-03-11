import React from "react";
import Section from "./common/Section";

import budget2 from "../assets/budget2.png";
import searchbooks from "../assets/searchbooks.png";
import techblog from '../assets/tech-blog.png';
import weatherdashboard from '../assets/weatherdashboard.png';
import workday from '../assets/workday.png'
import taskmaster from '../assets/taskmaster.png'

import { FaGithub, FaExternalLinkSquareAlt } from "react-icons/fa";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image: budget2,
      title: "Budget Tracker",
      github: "https://github.com/Emmanuel6093/budget-tracker",
      demo: "https://google.com",
    },
    {
      id: 2,
      image: searchbooks,
      title: "Book Search Engine",
      github: "https://github.com/Emmanuel6093/book-search-engine",
      demo: "https://google.com",
    },
    {
      id: 3,
      image: techblog,
      title: "Tech Blog",
      github: "https://github.com/Emmanuel6093/tech-blog",
      demo: "https://google.com",
    },
    {
      id: 4,
      image: weatherdashboard,
      title: "Weather Dashboard",
      github: "https://github.com/Emmanuel6093/weather-dashboard",
      demo: "https://google.com",
    },
    {
      id: 5,
      image: workday,
      title: "Work Day Scheduler",
      github: "https://github.com/Emmanuel6093/workday-sche",
      demo: "https://google.com",
    },
    {
      id: 6,
      image: taskmaster,
      title: "TaskMaster Pro",
      github: "https://github.com/Emmanuel6093/taskmaster-pro",
      demo: "https://google.com",
    },
  ];

  return (
    <Section
      title="Portfolio 🗒️"
      subtitle="These are some of the projects that I have worked on."
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
                className="text-lg md:text-xl lg:text-2xl cursor-pointer duration-150 hover:scale-110"
                href={github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>

              <a
                className="text-lg md:text-xl lg:text-2xl cursor-pointer duration-150 hover:scale-110"
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
