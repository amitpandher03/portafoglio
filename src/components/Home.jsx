import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { RiArrowRightUpLine } from 'react-icons/ri';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-base-100 via-base-200 to-base-300 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl animate-pulse delay-700" />
      <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping" />
      <div className="absolute bottom-1/3 right-1/4 w-2 h-2 bg-secondary rounded-full animate-ping delay-300" />

      <div className="min-h-screen flex items-center justify-center px-6 relative">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-20"
          >
            {/* Enhanced Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-10"
            >
              <motion.div 
                className="inline-block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full backdrop-blur-sm border border-primary/10 text-primary">
                  <span className="mr-2">✨</span>
                  Welcome to my portfolio
                </div>
              </motion.div>

              <motion.h1 
                className="text-7xl md:text-8xl font-bold tracking-tight leading-none"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent inline-block hover:scale-105 transition-transform cursor-default">
                  Amit Pandher
                </span>
              </motion.h1>

              <div className="relative h-12">
                <TypeAnimation
                  sequence={[
                    "Full Stack Developer",
                    1500,
                    "Problem Solver",
                    1500,
                  ]}
                  wrapper="p"
                  speed={40}
                  repeat={Infinity}
                  className="text-3xl font-light absolute"
                />
              </div>

              <motion.div 
                className="flex flex-wrap gap-5"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <Link 
                  to="/contact" 
                  className="group relative px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-content rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get In Touch
                    <RiArrowRightUpLine className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </Link>
                <Link 
                  to="/projects" 
                  className="group px-8 py-4 border-2 border-base-content/20 hover:border-primary/50 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm"
                >
                  <span className="flex items-center gap-2">
                    View Work
                    <RiArrowRightUpLine className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>

              {/* Enhanced Social Links */}
              <motion.div 
                className="flex gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {[
                  { icon: FaGithub, link: "https://github.com/amitpandher03" },
                  { icon: FaLinkedin, link: "https://www.linkedin.com/in/amit-pandher-junior-dev/" }
                ].map((social, index) => (
                  <a 
                    key={index}
                    href={social.link}
                    className="group relative w-14 h-14 flex items-center justify-center rounded-xl bg-base-200/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                  >
                    <social.icon 
                      size={26} 
                      className="text-base-content/60 group-hover:text-primary transition-colors" 
                    />
                    <div className="absolute inset-0 bg-primary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity blur" />
                  </a>
                ))}
              </motion.div>
            </motion.div>

            {/* Enhanced Tech Stack */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="backdrop-blur-xl bg-gradient-to-br from-base-100/30 to-base-200/30 rounded-3xl p-10 border border-base-content/5 shadow-xl hover:shadow-2xl transition-shadow duration-500"
            >
              <h3 className="text-3xl font-bold mb-10 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent inline-block">
                Tech Stack
              </h3>
              <motion.div className="grid grid-cols-2 gap-8">
                {[
                  { title: 'Frontend', value: 'React', icon: '⚛️' },
                  { title: 'Backend', value: 'Laravel', desc: 'Livewire, MySQL', icon: '🚀' },
                  { title: 'Languages', value: 'JavaScript', desc: ' Java', icon: '💻' },
                  { title: 'UI/UX', value: 'Tailwind', desc: 'DaisyUI', icon: '🎨' },
                  { title: 'Tools', value: 'Git', desc: 'Docker, AWS', icon: '🛠️' },
                  { title: 'Security', value: 'SSL', desc: 'TLS', icon: '🔒' },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="group p-4 rounded-xl hover:bg-base-200/50 transition-all duration-300 cursor-default"
                    whileHover={{ y: -4, scale: 1.02 }}
                  >
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <div className="text-sm font-medium text-primary/80 mb-2">{item.title}</div>
                    <div className="text-xl font-semibold mb-1 group-hover:text-primary transition-colors">
                      {item.value}
                    </div>
                    <div className="text-sm text-base-content/60">{item.desc}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Home; 