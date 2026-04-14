import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiStar, FiCode, FiCpu, FiDatabase, FiLayers } from 'react-icons/fi';
import react_Icon from  '../icon/react.png';
import js from '../icon/js.png';
import node from '../icon/node.png';
import mongodb from '../icon/mongoDb.png';
import docker from '../icon/docker.png';
import tailwind from '../icon/tailwind.png';
import java from '../icon/java.png';

const Skills = () => {

  const [activeCategory, setActiveCategory] = useState('All');

  // ✅ Static Skills Data (EDIT THIS ONLY)
  const skills = [
    {
      _id: 1,
      name: "React",
      category: "Frontend",
      icon: react_Icon,
      proficiency: "90",
      years: 2,
      featured: true
    },
    {
      _id: 2,
      name: "JavaScript",
      category: "Frontend",
      icon: js,
      proficiency: "85",
      years: 2,
      featured: true
    },
    {
      _id: 3,
      name: "Node.js",
      category: "Backend",
      icon: node,
      proficiency: "75",
      years: 1,
      featured: false
    },
    {
      _id: 4,
      name: "MongoDB",
      category: "Backend",
      icon: mongodb,
      proficiency: "70",
      years: 1,
      featured: false
    },
    {
      _id: 5,
      name: "Docker",
      category: "DevOps",
      icon: docker,
      proficiency: "65",
      years: 1,
      featured: false
    },
    {
      _id: 6,
      name: "Tailwind CSS",
      category: "Frontend",
      icon: tailwind,
      proficiency: "90",
      years: 2,
      featured: true
    }, {
      _id: 7,
      name:"Java",
      category: "Data Structures and Algorithms",
      icon: java,
      proficiency: "90",
      years: 2,
      featured: true
    }
  ];

  // Categories
  const categories = ['All', ...new Set(skills.map(skill => skill.category))];

  const filteredSkills =
    activeCategory === 'All'
      ? skills
      : skills.filter(skill => skill.category === activeCategory);

  // Icons
  const categoryIcons = {
    'Frontend': <FiCode className="text-blue-400" />,
    'Backend': <FiDatabase className="text-purple-400" />,
    'DevOps': <FiCpu className="text-green-400" />,
    'Other': <FiLayers className="text-yellow-400" />
  };

  return (
    <section className="bg-gradient-to-br from-black via-slate-900 to-black text-white py-16 px-5 min-h-screen">

      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">
          My Technical Skills
        </h2>
        <p className="text-gray-400">
          Technologies I work with
        </p>
      </div>

      {/* Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full bg-neutral-900 flex items-center gap-2 ${
              activeCategory === category
                ? 'bg-blue-600'
                : 'bg-gray-700'
            }`}
          >
            {categoryIcons[category] || categoryIcons['Other']}
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

        {filteredSkills.map((skill, index) => (
          <motion.div
            key={skill._id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-neutral-900 rounded-xl p-6 border border-gray-700 hover:border-blue-500"
          >

            {/* Top */}
            <div className="flex justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gray-700 rounded">
                  {skill.icon ? (
                    <img src={skill.icon} alt="" className="w-6 h-6" />
                  ) : (
                    <FiCode />
                  )}
                </div>
                <h3 className="font-semibold">{skill.name}</h3>
              </div>

              {skill.featured && (
                <FiStar className="text-yellow-400" />
              )}
            </div>

            {/* Category */}
            <span className="text-xs text-cyan-100">
              {skill.category}
            </span>

            {/* Progress */}
            <div className="mt-3">
              <div className="flex justify-between text-xs text-gray-400">
                <span>Proficiency</span>
                <span>{skill.proficiency}%</span>
              </div>

              <div className="w-full bg-gray-700 h-2 rounded mt-1">
                <div
                  className="bg-cyan-500 h-2 rounded"
                  style={{ width: `${skill.proficiency}%` }}
                />
              </div>
            </div>

            {/* Experience */}
            {skill.years && (
              <p className="text-sm text-gray-400 mt-2">
                {skill.years} years experience
              </p>
            )}

          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default Skills;