import React from "react";
import {  FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-[#0f172a] text-white py-16 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
        <div>
          <h2 className="text-4xl font-bold mb-4">
            Contact <span className="text-cyan-300">Me</span>
          </h2>
          <p className="text-gray-300 mb-6">
            I’m always open to new ideas and collaborations. Whether you want to
            work together on a project or just say hello, feel free to reach
            out. Let’s create something amazing!
          </p>
          <div className="mb-4 text-gray-300">
            <p className="mb-2 flex items-center gap-2 hover:text-cyan-400 transition-colors duration-200 cursor-pointer">
              <span>📧</span> jerinloncheu@gmail.com
            </p>
            <p className="flex items-center gap-2 hover:text-cyan-400 transition-colors duration-200 cursor-pointer">
              <span>📞</span> 01755171954
            </p>
          </div>

          <div className="flex space-x-4 text-xl mt-4">
            <a href="#" className="hover:text-cyan-400">
              <FaWhatsapp />
            </a>
           
            <a href="#" className="hover:text-cyan-400">
              <FaGithub />
            </a>
            <a href="#" className="hover:text-cyan-400">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Right Side: Form */}
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="w-full px-4 py-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            className="w-full px-4 py-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <input
            type="text"
            placeholder="Enter Your Subject"
            className="w-full px-4 py-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <textarea
            placeholder="Enter Your Message"
            rows="5"
            className="w-full px-4 py-3 rounded-md bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-cyan-400 text-gray-900 font-semibold py-3 rounded-md hover:bg-cyan-200 transition duration-300"
          >
            submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
