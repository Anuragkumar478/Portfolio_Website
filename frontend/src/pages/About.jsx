import React from 'react';
import Anurag from "../image/Anurag.png";
import { FaCode, FaServer, FaPalette, FaBrain } from 'react-icons/fa';

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen bg-gradient-to-br from-black via-slate-900 to-black text-white flex flex-col justify-center items-center px-6 py-16 overflow-hidden"
    >

      {/* 🔥 Background Glow */}
      <div className="absolute top-20 left-10 w-60 h-60 bg-blue-800 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-800 rounded-full blur-3xl opacity-20"></div>

      {/* 👤 Profile */}
      <div className="relative mb-10 group">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-40 group-hover:opacity-70"></div>
        <img
          src={Anurag}
          alt="Anurag Kumar"
          className="relative w-36 h-36 rounded-full object-cover border-2 border-gray-800"
        />
      </div>

      {/* 🧑‍💻 Title */}
      <div className="text-center mb-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-3">
          About Me
        </h2>
        <p className="text-yellow-400 font-medium">
          MERN Stack
        </p>
      </div>

      {/* 📝 Content */}
      <div className="max-w-4xl text-center bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 shadow-lg">

        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          Hi, I'm <span className="text-pink-400 font-semibold">Anurag Kumar</span>, 
          a passionate <span className="text-purple-300 font-semibold"> MERN Stack Developer</span>.  
          I build fast, responsive, and modern web applications with a strong focus on UI/UX and performance.
        </p>

        <p className="text-gray-400 mb-6">
          I have solved <span className="text-red-400 font-medium">500+ DSA problems</span> and 
          love turning complex problems into simple, elegant solutions.
        </p>

        {/* 💡 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">

          <div className="bg-gray-900/60 p-5 rounded-lg border border-gray-700">
            <h3 className="text-cyan-400 font-semibold flex items-center mb-2">
              <FaCode className="mr-2" /> Tech Stack
            </h3>
            <p className="text-gray-400 text-sm">
              React, Tailwind CSS, Node.js, Express, MongoDB, Docker
            </p>
          </div>

          <div className="bg-gray-900/60 p-5 rounded-lg border border-gray-700">
            <h3 className="text-purple-400 font-semibold flex items-center mb-2">
              <FaPalette className="mr-2" /> What I Focus On
            </h3>
            <p className="text-gray-400 text-sm">
              Clean UI, performance optimization, responsive design, and smooth user experience
            </p>
          </div>

        </div>

        {/* 🚀 Closing Line */}
        <p className="text-gray-400 mt-6">
          I’m always open to opportunities where I can learn, grow, and build impactful products.
        </p>

      </div>

      {/* 🎯 Floating Icons */}
      <FaCode className="absolute bottom-10 left-10 text-blue-500 opacity-20 text-4xl animate-bounce" />
      <FaServer className="absolute top-1/4 right-10 text-purple-500 opacity-20 text-5xl animate-bounce" />
      <FaBrain className="absolute bottom-1/3 right-1/4 text-indigo-500 opacity-20 text-3xl animate-bounce" />

    </section>
  );
};

export default About;