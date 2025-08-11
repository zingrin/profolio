import React from 'react';
import SkillsSlider from "../pages/SkillsSlder";


const Skills = () => {
  return (
    <section className="max-w-4xl mx-auto p-6 bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <h2 className="text-3xl font-extrabold text-cyan-400 mb-6 text-center">
        My Technical Skills
      </h2>
      <SkillsSlider />
    </section>
  );
};

export default Skills;
