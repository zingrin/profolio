import React from "react";
import {
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 text-center py-6 px-4">
      <div className="flex justify-center space-x-6 mb-4 text-2xl">
        {[
          {
            icon: <FaWhatsapp />,
            link: "https://wa.me/yourwhatsapplink",
            label: "WhatsApp",
          },
          {
            icon: <FaLinkedin />,
            link: "https://linkedin.com/in/yourlinkedin",
            label: "LinkedIn",
          },
          
          {
            icon: <FaGithub />,
            link: "https://github.com/yourgithub",
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

      <p className="text-sm">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-cyan-400 font-semibold">loncheuDev</span>. All
        rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
