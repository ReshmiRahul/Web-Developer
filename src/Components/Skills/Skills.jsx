import React from 'react';
import { FaHtml5, FaCss3, FaReact, FaJs, FaCode, FaGitAlt, FaDocker } from 'react-icons/fa';
import { DiBootstrap } from 'react-icons/di';
import { FaWordpress, FaVuejs } from 'react-icons/fa';
import { FaAws } from 'react-icons/fa'; 
import { FaMicrosoft } from 'react-icons/fa';
import { SiAngular, SiPython, SiNodedotjs, SiFlutter, SiDart, SiPhp, SiGooglecloud, SiKubernetes } from 'react-icons/si';

const Skills = () => {
  return (
    <div id="Skills" className="p-10 md:mt-28 bg-gradient-to-b from-gray-900 via-gray-800 to-black">
      <h1 className="text-2xl md:text-4xl text-white font-bold text-center">Skills</h1>
      <div className="flex flex-wrap items-center justify-center md:w-5/5 mt-10 md:mt-24 gap-10">
      {/* HTML Skill */}
      <div className="flex flex-col items-center gap-3 hover:scale-110 duration-300">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaHtml5 color="#E34F26" size={50} />
          </span>
          <h1 className="text-white font-bold">HTML</h1>
        </div>

        {/* CSS Skill */}
        <div className="flex flex-col items-center gap-3 hover:scale-110 duration-300">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCss3 color="#1572b6" size={50} />
          </span>
          <h1 className="text-white font-bold">CSS</h1>
        </div>
        {/* Vue.js Skill */}
        <div className="flex flex-col items-center gap-3 hover:scale-110 duration-300">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaVuejs color="#4FC08D" size={50} />
          </span>
          <h1 className="text-white font-bold">Vue.js</h1>
        </div>

        {/* WordPress Skill */}
        <div className="flex flex-col items-center gap-3 hover:scale-110 duration-300">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaWordpress color="#21759B" size={50} />
          </span>
          <h1 className="text-white font-bold">WordPress</h1>
        </div>

        {/* Bootstrap Skill */}
        <div className="flex flex-col items-center gap-3 hover:scale-110 duration-300">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <DiBootstrap color="#7952B3" size={50} />
          </span>
          <h1 className="text-white font-bold">Bootstrap</h1>
        </div>

        {/* JavaScript Skill */}
        <div className="flex flex-col items-center gap-3 hover:scale-110 duration-300">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaJs color="#F7DF1E" size={50} />
          </span>
          <h1 className="text-white font-bold">JavaScript</h1>
        </div>
        {/* React Skill */}
        <div className="flex flex-col items-center gap-3 hover:scale-110 duration-300">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaReact color="#61DAFB" size={50} />
          </span>
          <h1 className="text-white font-bold">React</h1>
        </div>

        {/* Node.js Skill */}
        <div className="flex flex-col items-center gap-3 hover:scale-110 duration-300">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiNodedotjs color="#43853D" size={50} />
          </span>
          <h1 className="text-white font-bold">Node.js</h1>
        </div>    
                {/* Git Skill */}
                <div className="flex flex-col items-center gap-3 hover:scale-110 duration-300">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaGitAlt color="#F05032" size={50} />
          </span>
          <h1 className="text-white font-bold">Git</h1>
        </div>

        {/* PHP Skill */}
        <div className="flex flex-col items-center gap-3 hover:scale-110 duration-300">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiPhp color="#8993BE" size={50} />
          </span>
          <h1 className="text-white font-bold">PHP</h1>
        </div>

        {/* Python Skill */}
        <div className="flex flex-col items-center gap-3 hover:scale-110 duration-300">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiPython color="#3776AB" size={50} />
          </span>
          <h1 className="text-white font-bold">Python</h1>
        </div>

        {/* Django Skill (using SiPython icon as placeholder) */}
        <div className="flex flex-col items-center gap-3 hover:scale-110 duration-300">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiPython color="#092E20" size={50} />
          </span>
          <h1 className="text-white font-bold">Django</h1>
        </div>

        {/* C# Skill (Fallback icon used) */}
        <div className="flex flex-col items-center gap-3 hover:scale-110 duration-300">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaCode color="#239120" size={50} />
          </span>
          <h1 className="text-white font-bold">C#</h1>
        </div>

        {/* Angular Skill */}
        <div className="flex flex-col items-center gap-3 hover:scale-110 duration-300">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiAngular color="#DD0031" size={50} />
          </span>
          <h1 className="text-white font-bold">Angular</h1>
        </div>
        {/* Flutter Skill */}
        <div className="flex flex-col items-center gap-3 hover:scale-110 duration-300">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiFlutter color="#02569B" size={50} />
          </span>
          <h1 className="text-white font-bold">Flutter</h1>
        </div>

        {/* Dart Skill */}
        <div className="flex flex-col items-center gap-3 hover:scale-110 duration-300">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiDart color="#0175C2" size={50} />
          </span>
          <h1 className="text-white font-bold">Dart</h1>
        </div>

        {/* AWS Skill */}
        <div className="flex flex-col items-center gap-3 hover:scale-110 duration-300">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaAws color="#FF9900" size={50} />
          </span>
          <h1 className="text-white font-bold">AWS</h1>
        </div>

        {/* Azure Skill */}
        <div className="flex flex-col items-center gap-3 hover:scale-110 duration-300">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaMicrosoft color="#0078D4" size={50} />
          </span>
          <h1 className="text-white font-bold">Azure</h1>
        </div>

        {/* GCP Skill */}
        <div className="flex flex-col items-center gap-3 hover:scale-110 duration-300">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <SiGooglecloud color="#4285F4" size={50} />
          </span>
          <h1 className="text-white font-bold">GCP</h1>
        </div>


        {/* Docker Skill */}
        <div className="flex flex-col items-center gap-3 hover:scale-110 duration-300">
          <span className="p-3 bg-zinc-950 flex items-center rounded-2xl">
            <FaDocker color="#2496ED" size={50} />
          </span>
          <h1 className="text-white font-bold">Docker</h1>
        </div>
      </div>
    </div>
  );
};

export default Skills;
