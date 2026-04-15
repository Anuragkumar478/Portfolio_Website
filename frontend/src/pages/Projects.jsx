import React, { useState } from 'react';
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi';
import { motion } from 'framer-motion';
import roadeimage from '../image/roadeimage.png';
// import socialWeb from '../image/socialWeb.png';
import dashboard from '../image/dashboard.png';

const Projects = () => {

  const [activeFilter, setActiveFilter] = useState('All');

  // ✅ Static Data (Edit this only)
  const projects = [
    {
      _id: 1,
      title: "Smart Road Issue Reporting System",
      description: "A web application for citizens to report road issues with geotagged photos and real-time updates.",
      category: "MERN Stack",
      imageUrl: roadeimage,
      skills: [" Node.js", "Express.js", "MongoDB", "React", "  Tailwind CSS"],
      githubUrl: "https://github.com/Anuragkumar478/Crowd_Source_civic_issue",
      liveUrl: "https://crowd-source-civic-i-git-baed32-anurag-kumars-projects-4fdb0a50.vercel.app/",
      featured: true
    },
    {
      _id: 2,
      title: "Social Media Web App",
      description: "A full-stack social media application where users can register, login, create posts, like, and comment. Built with secure authentication and dynamic UI updates.",
      category: "Full Stack",
      imageUrl: " ",
      skills: ["React", "Node.js", "Express.js", "MongoDB", "Bootstrap"],
      githubUrl: "https://github.com/Anuragkumar478/SocialApp",
      liveUrl: "https://social-app-gamma-seven.vercel.app/",
      featured: false
    },
    {
      _id: 3,
      title: "Automated Attendance Monitoring System",
      description: "A full-stack application for monitoring attendance with automated reporting and analytics.",
      category: "Full Stack",
      imageUrl: dashboard,
      skills: ["React", "Node.js", "Express.js", "MongoDB", "Bootstrap"],
      githubUrl: "https://github.com/Anuragkumar478/Attendence",
      liveUrl: "https://automatted-attendance-frontend.onrender.com/",
      featured: false
    }
  
  ];

  // Categories
  const categories = ['All', ...new Set(projects.map(p => p.category))];

  const filteredProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter(p => p.category === activeFilter);

  return (
    <section className='relative bg-gradient-to-br from-black via-slate-900 to-black text-white px-5 py-16 min-h-screen overflow-hidden'>

      {/* Header */}
      <div className="text-center mb-12">
        <h2 className='text-4xl font-bold mb-4'>
          My Projects
        </h2>
        <p className="text-gray-400">
          Showcase of my frontend work
        </p>
      </div>

      {/* Filter */}
      <div className="flex justify-center gap-3 mb-8 flex-wrap">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveFilter(category)}
            className={`px-4 py-2 rounded-full bg-cyan-900 ${
              activeFilter === category
                ? 'bg-blue-600'
                : 'bg-gray-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {filteredProjects.map((project, index) => (
          <motion.div
            key={project._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-neutral-900 backdrop-blur-md rounded-xl overflow-hidden hover:shadow-blue-500/20 shadow-lg"
          >

            {/* Image */}
            <div className="h-48 overflow-hidden">
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Content */}
            <div className="p-5">
              <h3 className="text-xl font-bold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-3">
                {project.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.skills.map((skill, i) => (
                  <span key={i} className="text-xs bg-red-900 shadow:bg-red-900 px-2 py-1 rounded">
                    {skill}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank">
                    <FiGithub />
                  </a>
                )}
                {project.liveUrl && (
                  <a href={project.liveUrl} target="_blank">
                    
                    <FiExternalLink />
                  </a>
                
                )}
              </div>
            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Projects;
