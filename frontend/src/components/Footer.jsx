import { FaInstagram, FaLinkedin, FaGithub, FaTwitter  } from 'react-icons/fa';
import { SiLeetcode } from "react-icons/si";
import { HiMail, HiPhone, HiLocationMarker } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Footer = () => {
  const socialLinks = [
    { icon: <SiLeetcode />, url: "https://leetcode.com/u/232333/" },
    { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/anurag-kumar-89a720280" },
    { icon: <FaGithub />, url: "https://github.com/Anuragkumar478" },
    { icon: <FaTwitter />, url: "https://x.com/K51093235Anurag" },
  ];

  const quickLinks = [
    { name: "Home", url: "#home" },
    { name: "About", url: "#about" },
    { name: "Skills", url: "#skills" },
    { name: "Projects", url: "#projects" },
    { name: "Experience", url: "#experience" },
    { name: "Contact", url: "#contact" },
  ];

  return (
    <footer className="bg-gradient-to-br from-black via-slate-900 to-black text-white pt-16 pb-8 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">

          {/* 🔥 Personal Branding */}
          <div className="space-y-5">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-2xl font-bold"
            >
              Anurag Kumar
            </motion.h2>

            <p className="text-gray-300 font-medium">
              Backend Developer | MERN Stack 
            </p>

            <p className="text-gray-400 leading-relaxed">
              I build fast, modern and scalable web applications using React, Tailwind and Node.js. 
              Passionate about solving real-world problems and crafting clean UI experiences.
            </p>

            {/* CTA */}
            <a
              href="#contact"
              className="inline-block mt-2 bg-gradient-to-r from-black-600 to-gray-600 px-5 py-2 rounded-lg text-sm hover:opacity-90 transition"
            >
              Let's Work Together 🚀
            </a>
          </div>

          {/* 🔗 Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li 
                  key={index}
                  whileHover={{ x: 5 }}
                >
                  <a href={link.url} className="text-gray-400 hover:text-white transition">
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* 📞 Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <HiMail className="text-pink-400 mt-1" />
                <span className="text-gray-400">kumaranurag9795@gmail.com</span>
              </li>
              <li className="flex gap-3">
                <HiPhone className="text-pink-400 mt-1" />
                <span className="text-gray-400">+91 7307182320</span>
              </li>
              <li className="flex gap-3">
                <HiLocationMarker className="text-pink-400 mt-1" />
                <span className="text-gray-400">Sonbhadra, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">

          {/* Social */}
          <div className="flex gap-5 text-xl">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400"
                whileHover={{ y: -4 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Anurag Kumar • Built with React & Tailwind
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;