import React, { useState, useEffect, useRef } from "react";
import {
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <SiHtml5 size={30} color="#E34F26" /> },
  { name: "CSS", icon: <SiCss3 size={30} color="#1572B6" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={30} color="#06B6D4" /> },
  { name: "JavaScript", icon: <SiJavascript size={30} color="#F7DF1E" /> },
  { name: "Node.js", icon: <SiNodedotjs size={30} color="#339933" /> },
  { name: "MongoDB", icon: <SiMongodb size={30} color="#47A248" /> },
  { name: "Express", icon: <SiExpress size={30} color="#000000" /> },
];

const speed = 1;

const SingleSkillsSlider = ({ direction, isPaused }) => {
  const containerRef = useRef(null);
  const [scrollPos, setScrollPos] = useState(0);

  const duplicatedSkills = [...skills, ...skills];

  useEffect(() => {
    if (isPaused) return;

    const container = containerRef.current;
    if (!container) return;

    let animationFrameId;

    const animate = () => {
      if (direction === "left") {
        if (scrollPos >= container.scrollWidth / 2) {
          setScrollPos(0);
          container.scrollLeft = 0;
        } else {
          container.scrollLeft = scrollPos + speed;
          setScrollPos(scrollPos + speed);
        }
      } else {
        if (scrollPos <= 0) {
          setScrollPos(container.scrollWidth / 2);
          container.scrollLeft = container.scrollWidth / 2;
        } else {
          container.scrollLeft = scrollPos - speed;
          setScrollPos(scrollPos - speed);
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, scrollPos, direction]);

  return (
    <div
      ref={containerRef}
      className="overflow-x-auto whitespace-nowrap cursor-pointer select-none bg-gray-100 dark:bg-gray-900 rounded-lg mb-6 no-scrollbar"
      style={{ scrollBehavior: "auto" }}
      aria-label="Skills scrolling slider"
    >
      {duplicatedSkills.map((skill, index) => (
        <div
          key={index}
          className="inline-block bg-white dark:bg-gray-800 text-cyan-400 font-semibold rounded-xl px-6 py-4 mx-3 text-center shadow-[0_4px_10px_rgba(6,182,212,0.6)] transition-transform duration-300 hover:scale-110"
          style={{ width: "130px" }}
          role="listitem"
          tabIndex={0}
          aria-label={skill.name}
        >
          <div className="mb-2 flex justify-center">{skill.icon}</div>
          <div>{skill.name}</div>
        </div>
      ))}
    </div>
  );
};

const SkillsSlider = () => {
  const [isPausedTop, setIsPausedTop] = useState(false);
  const [isPausedBottom, setIsPausedBottom] = useState(false);

  return (
    <section aria-label="Skills slider section">
      <div
        onMouseEnter={() => setIsPausedTop(true)}
        onMouseLeave={() => setIsPausedTop(false)}
      >
        <SingleSkillsSlider direction="left" isPaused={isPausedTop} />
      </div>

      <div
        onMouseEnter={() => setIsPausedBottom(true)}
        onMouseLeave={() => setIsPausedBottom(false)}
      >
        <SingleSkillsSlider direction="right" isPaused={isPausedBottom} />
      </div>
    </section>
  );
};

export default SkillsSlider;
