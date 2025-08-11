import React from "react";

const AboutMe = () => {
  return (
    <section className="max-w-4xl mx-auto my-16 px-4">
      <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-gray-100">
        About Me
      </h2>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
        Hello! I’m{" "}
        <span className="font-semibold text-cyan-600 dark:text-cyan-400">
         Zingrin Loncheu
        </span>
        , a dedicated and creative web developer based in Chittagong, Bangladesh.
        My passion lies in transforming ideas into interactive, visually
        appealing, and fully responsive web experiences. I work primarily with{" "}
        <span className="font-medium">React, Tailwind CSS, and modern JavaScript</span>,
        blending clean code with thoughtful design to deliver impactful results.
      </p>
      <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
        Beyond coding, I’m an explorer at heart — I enjoy cooking new recipes,
        capturing moments through photography, diving into inspiring books, and
        discovering new places. I believe in lifelong learning, and I’m always
        seeking opportunities to improve my skills and contribute to meaningful
        projects.
      </p>
      <p className="mt-4 text-gray-600 dark:text-gray-300 leading-relaxed">
        Let’s connect and create something extraordinary together!
      </p>
    </section>
  );
};

export default AboutMe;
