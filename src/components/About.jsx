import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiCode, FiDatabase, FiLayout, FiServer } from 'react-icons/fi'

const About = () => {
  const [activeTab, setActiveTab] = useState('skills')

  const tabs = {
    skills: {
      icon: <FiCode />,
      content: [
        { name: 'Frontend', items: ['React', 'JavaScript', 'Gsap', 'HTML/CSS'] },
        { name: 'Backend', items: ['PHP', 'Laravel', 'Node.js'] },
        { name: 'Database', items: ['MySQL'] },
        { name: 'Tools', items: ['Git', 'Docker', 'VS Code', 'Figma'] },
      ]
    },
    experience: {
      icon: <FiServer />,
      content: [
        {
          title: 'Full Stack Developer trainee',
          company: 'Aulab',
          period: '2024',
          description: 'Working on various web applications using modern technologies.'
        },
      ]
    }
  }

  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-b from-base-100 to-base-200">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading">About Me</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-lg text-base-content/70 leading-relaxed">
              I'm a passionate Full Stack Developer with a love for creating 
              beautiful, functional, and user-friendly websites and applications.
            </p>
            <motion.a
              href="/public/resume.pdf"
              className="btn btn-primary mt-6"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative aspect-square rounded-lg overflow-hidden">
              <img
                src="public/profile.jpg"
                alt="Profile"
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <div className="tabs tabs-boxed justify-center">
              {Object.keys(tabs).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`tab tab-lg gap-2 ${activeTab === tab ? 'tab-active' : ''}`}
                >
                  {tabs[tab].icon}
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mt-6"
            >
              {activeTab === 'skills' ? (
                <div className="grid grid-cols-2 gap-6">
                  {tabs.skills.content.map((category, index) => (
                    <div key={index} className="card bg-base-200 shadow-xl">
                      <div className="card-body">
                        <h3 className="card-title text-accent">{category.name}</h3>
                        <ul className="space-y-2">
                          {category.items.map((item, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <span className="text-accent">▹</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-6">
                  {tabs.experience.content.map((exp, index) => (
                    <div key={index} className="card bg-base-200 shadow-xl">
                      <div className="card-body">
                        <h3 className="card-title text-accent">{exp.title}</h3>
                        <p className="font-mono text-sm">{exp.company}</p>
                        <p className="text-sm text-base-content/70">{exp.period}</p>
                        <p className="mt-2">{exp.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About