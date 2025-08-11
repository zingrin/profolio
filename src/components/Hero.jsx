import React from "react";
import profileImg from "../assets/profile.jpg";
import { Typewriter } from "react-simple-typewriter";
       import { motion } from "framer-motion";
import {  FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between px-6 py-12 bg-black text-white">
      {/* Left Content */}
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-xl text-gray-400">Hello, It's Me</h2>
        <h1 className="text-xl md:text-5xl font-bold text-cyan-400">
         Zingrin Loncheu
        </h1>
        <h3 className="text-2xl text-cyan-300">
          And I'm a{" "}
          <span className="text-cyan-400">
            <Typewriter
              words={["MERN Stack Developer", "React Developer", "UI Designer"]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </span>
        </h3>
        <p className="text-gray-300">
          I'm a passionate web designer and  React developer with 7+ months
          of hands-on experience. I craft modern, responsive websites and
          intuitive frontend interfaces, combining creativity with cutting-edge
          technology to deliver seamless digital experiences.
        </p>


{/* Social Icons + Button with animation */}
<motion.div
  initial={{ opacity: 0, x: -50 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1, delay: 0.3 }}
  className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-4 md:space-y-0 mt-6"
>
  {/* Social Icons */}
  
 <div className="flex justify-center space-x-6 mb-4 text-2xl">
        {[
          {
            icon: <FaWhatsapp />,
            link: "https://web.whatsapp.com/",
            label: "WhatsApp",
          },
          {
            icon: <FaLinkedin />,
            link: "https://www.linkedin.com/in/zingrin-loncheu-902503379/",
            label: "LinkedIn",
          },
         
          {
            icon: <FaGithub />,
            link: "https://github.com/zingrin",
            label: "GitHub",
          },
        ].map((item, idx) => (
          <a
            key={idx}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transform hover:-translate-y-1 transition-all duration-300"
            aria-label={item.label}
          >
            {item.icon}
          </a>
        ))}
      </div>
  
</motion.div>

      </div>

      {/* Right Content: Animated Glowing Image */}
      <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
        <div className="relative w-64 h-64 rounded-full bg-black p-1 animate-glow-ring">
          <img
            src={profileImg}
            alt="Profile"
            className="w-full h-full rounded-full object-cover border-[6px] border-transparent"
          />
        </div>
      </div>
    </div>

  );
};

export default Hero;
