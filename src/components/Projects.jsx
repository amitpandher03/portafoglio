import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi'

const Projects = () => {
  const [filter, setFilter] = useState('all')
  
  const projects = [
    {
      title: "Pokemon React SPA",
      description: "A comprehensive Pokemon database built with React, featuring detailed information about Pokemon, their abilities, and stats.",
      image: "/pokemon-project.jpg",
      technologies: ["React", "PokeAPI", "Tailwind CSS"],
      github: "https://github.com/amitpandher03/pokemon-in-react",
      live: "https://pokemondox.netlify.app/",
      category: "frontend"
    },
    {
      title: "Presto.it",
      description: "An e-commerce platform built with Laravel, featuring user authentication, product management, and secure payment integration.",
      image: "/presto-project.jpg",
      technologies: ["Laravel", "MySQL", "Bootstrap"],
      github: "https://github.com/amitpandher03/presto.it",
      category: "fullstack"
    },
    // Add more projects
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <div className="min-h-screen py-20 px-4 bg-gradient-to-b from-base-100 to-base-200">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="section-heading">Featured Projects</h2>
          <div className="flex justify-center gap-4 mb-12">
            {['all', 'frontend', 'fullstack'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-full font-mono text-sm transition-all
                  ${filter === category 
                    ? 'bg-accent text-base-100 shadow-lg shadow-accent/20' 
                    : 'bg-base-200 hover:bg-base-300'}`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <figure className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-base-300/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-circle btn-sm bg-base-100/50 hover:bg-base-100"
                      >
                        <FiGithub className="w-4 h-4" />
                      </a>
                      {project.live && (
                        <a
                          href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                          className="btn btn-circle btn-sm bg-base-100/50 hover:bg-base-100"
                        >
                          <FiExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </figure>
                  <div className="card-body">
                    <div className="flex items-center gap-2 mb-2">
                      <FiFolder className="text-accent" />
                      <h3 className="card-title font-mono">{project.title}</h3>
                    </div>
                    <p className="text-base-content/70 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="text-xs font-mono px-2 py-1 rounded-full bg-base-300/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Projects