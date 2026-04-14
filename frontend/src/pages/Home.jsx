import React from 'react';
import Anurag from '../image/Anurag.png';

const Home = () => {
  return (
    <div className='relative min-h-screen bg-gradient-to-br from-black via-slate-900 to-black text-white flex flex-col md:flex-row items-center justify-center px-6 py-10 md:space-x-16 overflow-hidden'>
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-900 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-900 rounded-full filter blur-3xl"></div>
      </div>

      {/* Text Section */}
      <div className='text-center md:text-left max-w-lg z-10'>
        <h2 className='text-2xl mb-2 text-gray-400'>Hi, I'm</h2>
        <h1 className='text-5xl md:text-6xl font-bold mb-4'>
          <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-yellow-300'>Anurag Kumar</span>
        </h1>
        <div className="relative inline-block mb-6">
          <p className="text-xl md:text-2xl font-medium relative z-10">
            I build <span className='text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-pink-500'>digital experiences</span>
          </p>
          <div className="absolute bottom-0 left-0 w-full h-2 bg-blue-500/30 rounded-full animate-underline"></div>
        </div>
        
        <p className='text-gray-300 mb-8 leading-relaxed'>
          MERN Stack Developer specializing in modern web applications with focus on performance, accessibility, and responsive design.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <a href="/about">
            <button className='px-6 py-3 bg-gradient-to-r from-gray-600 to-cyan-700 hover:from-cyan-500 hover:to-gray-600 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/30'>
              Explore My Work
            </button>
          </a>
          <a href="#contact">
            <button className='px-6 py-3 border-2  bg-gradient-to-r  from-neutral-600 to-red-300 border-cyan-500 text-cyan-300 hover:bg-cyan-900/30 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-cyan-500/20'>
              Contact Me
            </button>
          </a>
        </div>

       <div className='flex gap-6 justify-center md:justify-start items-center'>
  {[
    {
      name: 'github',
      link: 'https://github.com/Anuragkumar478',
      icon: <i className="fab fa-github"></i>,
      color: 'text-gray-300 hover:text-white'
    },
    {
      name: 'linkedin',
      link: 'https://www.linkedin.com/in/anurag-kumar-89a720280',
      icon: <i className="fab fa-linkedin"></i>,
      color: 'text-blue-400 hover:text-blue-300 bg-gray-800/50 rounded-full p-1 hover:scale-110 transition-transform'
    },
    {
      name: 'leetcode',
      link: 'https://leetcode.com/u/232333/',
      icon: (
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
          alt="LeetCode"
          className="w-6 h-6 object-contain"
        />
      ),
      color: 'hover:scale-110'
    },
    {
      name: 'twitter',
      link: '#',
      icon: <i className="fab fa-twitter"></i>,
      color: 'text-sky-400 hover:text-sky-300'
    }
  ].map((social, index) => (
    <a
      key={index}
      href={social.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-2xl transition-all duration-300 transform hover:scale-110 ${social.color}`}
    >
      {social.icon}
    </a>
  ))}
</div>
      </div>

      {/* Image Section with 3D effect */}
      <div className='relative mt-10 md:mt-0 z-10 group'>
        {/* Glow effect */}
        <div className="absolute -inset-2 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full opacity-70 blur-xl group-hover:opacity-90 transition-opacity duration-500"></div>
        
        {/* Image container with gradient border */}
        <div className="relative p-1 rounded-full bg-gradient-to-br from-orange-300 via-pink-500 to-blue-500">
          <div className="p-1 rounded-full bg-gray-900">
            <img 
              src={Anurag} 
              alt="Anurag Kumar" 
              className='w-60 h-60 md:w-72 md:h-72 rounded-full object-cover border-4 border-gray-800 shadow-2xl transition-transform duration-500 group-hover:scale-105' 
            />
          </div>
        </div>
        
        {/* Floating dots */}
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-orange-400 rounded-full animate-pulse"></div>
        <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-400 rounded-full animate-pulse animation-delay-1000"></div>
        
        {/* Tech badge */}
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800/80 backdrop-blur-sm px-4 py-1 rounded-full border border-gray-700 shadow-lg">
          
        </div>
      </div>

      {/* Add to your global CSS */}
      <style jsx>{`
        @keyframes underline {
          0% { width: 0; }
          100% { width: 100%; }
        }
        .animate-underline {
          animation: underline 1.5s ease-in-out forwards;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-pulse {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </div>
  );
};

export default Home;