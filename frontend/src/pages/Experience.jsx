import React from "react";
import { motion } from "framer-motion";
import { FaGraduationCap, FaCode, FaTrophy } from "react-icons/fa";

const timelineData = [
  {
    icon: <FaGraduationCap />,
    title: "10th Standard",
    place: "Gahmar Inter College, Gahmar",
    year: "Completed",
  },
  {
    icon: <FaGraduationCap />,
    title: "12th Standard",
    place: "Gahmar Inter College, Gahmar",
    year: "Completed",
  },
  {
    icon: <FaGraduationCap />,
    title: "B.Tech(2023-27)",
    place: "Currently Pursuing CGPA: 7.5+",
    year: "Present",
  },
  {
    icon: <FaTrophy />,
    title: "Hackathon 1",
    place: "NGO Platform Development",
    year: "2024",
  },
  {
    icon: <FaTrophy />,
    title: "Hackathon 2",
    place: "Smart Road Issue Reporter",
    year: "2025",
  },
];

const hackathonProjects = [
  {
    title: "Smart Road Issue Reporter",
    desc: "A web app for citizens to report road issues with geotagged photos and real-time updates.",
  },
  {
    title: "NGO Platform",
    desc: "Web platform connecting NGOs with donors and volunteers.",
  },
];

const Experience = () => {
  return (
    <div className="bg-gradient-to-br from-black via-slate-900 to-black text-white min-h-screen p-6">

      {/* Heading */}
      <h1 className="text-4xl font-bold text-center mb-16">
        My Journey 🚀
      </h1>

      {/* Timeline */}
      <div className="relative border-l-2 border-gray-700 max-w-3xl mx-auto">

        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="mb-10 ml-6"
          >
            {/* Icon */}
            <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full text-white">
              {item.icon}
            </span>

            {/* Content */}
            <div className="bg-white/5 p-5 rounded-xl shadow-lg hover:scale-105 transition">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-400">{item.place}</p>
              <span className="text-sm text-gray-500">{item.year}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Hackathon Projects */}
      <div className="max-w-4xl mx-auto mt-20">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          🏆 Hackathon Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {hackathonProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/5 p-6 rounded-xl shadow-lg hover:scale-105 transition"
            >
              <div className="flex items-center gap-3 mb-3">
                <FaCode className="text-blue-400" />
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
              <p className="text-gray-400">{project.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Experience;