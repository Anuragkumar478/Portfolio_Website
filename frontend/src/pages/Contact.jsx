import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiSend, FiUser, FiMail, FiMessageSquare } from 'react-icons/fi';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // email validation
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        console.log("Invalid email format");
      } else {
        console.log("Valid email");
      }
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setSubmitStatus({
        success: false,
        message: "All fields are required"
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        "service_4p78j0k",   // 🔴 replace
        "template_le3zjxe",  // 🔴 replace
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "HvN7qi6haYYWWxgH1"    // 🔴 replace
      );

      setSubmitStatus({
        success: true,
        message: "Message sent successfully 🚀"
      });

      setFormData({
        name: '',
        email: '',
        message: ''
      });

    } catch (error) {
      console.error(error);
      setSubmitStatus({
        success: false,
        message: "Failed to send message ❌"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-black via-slate-900 to-black text-white min-h-screen flex items-center justify-center p-6 overflow-hidden">

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative w-full max-w-2xl"
      >
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 shadow-2xl">

          {/* Header */}
          <div className="bg-gradient-to-r from-cyan-900 to-black-600 p-6 text-center">
            <h1 className="text-3xl font-bold">Get In Touch</h1>
            <p className="text-blue-100 mt-2">
              Have a project in mind? Send me a message!
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8">

            {/* Name */}
            <div className="mb-6">
              <label className="block text-gray-300 mb-2 flex items-center">
                <FiUser className="mr-2" /> Your Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 pl-10 text-white"
                />
                <FiUser className="absolute left-3 top-3.5 text-gray-400" />
              </div>
            </div>

            {/* Email */}
            <div className="mb-6">
              <label className="block text-gray-300 mb-2 flex items-center">
                <FiMail className="mr-2" /> Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 pl-10 text-white"
                />
                <FiMail className="absolute left-3 top-3.5 text-gray-400" />
              </div>
            </div>

            {/* Message */}
            <div className="mb-8">
              <label className="block text-gray-300 mb-2 flex items-center">
                <FiMessageSquare className="mr-2" /> Your Message
              </label>
              <div className="relative">
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 pl-10 text-white resize-none"
                />
                <FiMessageSquare className="absolute left-3 top-3.5 text-gray-400" />
              </div>
            </div>

            {/* Button */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-cyan-900 to-black-600 text-white py-3 rounded-lg flex items-center justify-center gap-2"
            >
              {isSubmitting ? "Sending..." : (<><FiSend /> Send Message</>)}
            </motion.button>

            {/* Status */}
            {submitStatus && (
              <div className={`mt-4 p-3 text-center rounded-lg ${
                submitStatus.success ? 'bg-green-900/50 text-green-300' : 'bg-red-900/50 text-red-300'
              }`}>
                {submitStatus.message}
              </div>
            )}

          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactForm;