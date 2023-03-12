import React from "react";
import { FaLinkedin, FaArrowDown } from "react-icons/fa";
import avatar from "../assets/avatar.png";

const Hero = () => {
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


  window.addEventListener('scroll', function () {
    const downArrow = document.querySelector('.down-arrow')

    if (this.scrollY >= 90) downArrow.classList.add('hide-down-arrow');
    else downArrow.classList.remove('hide-down-arrow');
  });

  return (
    // introduction
    <section className="min-h-screen flex flex-col justify-start items-center p-5 text-center">
      <h2 className="text-5xl text-rose-600 font-bold uppercase ">
        Emmanuel Lorenzo
      </h2>
      <h3 className="py-3 text-2xl">Frontend Developer</h3>
      <p className="max-w-xl font-light text-gray-500">
        Hello <span className="animate-pulse text-4xl">👋</span>I have 1.5 year of experience of building and designing web applications. Currently, I love to work on web applications using technologies like React, TailwindCSS, NextJs, etc.
      </p>

      {/* social icons */}
      <div className="flex justify-evenly py-8 lg:py-16 text-3xl w-full md:w-1/3">
        {SOCIAL.map(({ id, link, icon }) => (
          <a
            href={link}
            key={id}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer duration-300 hover:text-rose-600"
          >
            {icon}
          </a>
        ))}
      </div>

      {/* avatar & resume */}
      <div>
        <img
          src={avatar}
          alt="avatar of Emmanuel"
          className="w-60 h-60 md:w-72 md:h-72 object-cover object-top bg-gradient-to-b from-red-600 rounded-xl pt-7"
        />
        <a
          href="ADD RESUME HERE"
          download={true}
          className="flex items-center justify-center mt-10 bg-gradient-to-r from-rose-600 to-teal-500 text-white py-2 rounded-lg"
        >
          Resume
        </a>
      </div>

      {/* arrow down animation */}
      <div className="mt-10 down-arrow">
        <FaArrowDown className="text-gray-400 text-2xl animate-bounce"/>
      </div>
    </section>
  );
};

export default Hero;
