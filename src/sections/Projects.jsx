import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Folder } from 'lucide-react';

const projects = [
  {
    title: 'E-Commerce Dashboard',
    description: 'A comprehensive dashboard for managing products, orders, and varied analytics using React and Chart.js.',
    tech: ['React', 'Tailwind', 'Chart.js'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'Task Management App',
    description: 'A collaborative task manager with real-time updates, drag-and-drop functionality, and team workspaces.',
    tech: ['React', 'Firebase', 'Framer Motion'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?q=80&w=600&auto=format&fit=crop'
  },
  {
    title: 'AI Image Generator',
    description: 'An application that uses OpenAI API to generate images based on text prompts with a modern UI.',
    tech: ['React', 'Node.js', 'OpenAI API'],
    github: 'https://github.com',
    demo: 'https://demo.com',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600&auto=format&fit=crop'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured <span className="text-cyan-400">Projects</span></h2>
            <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-slate-900 rounded-xl overflow-hidden shadow-xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden h-48">
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-full text-white hover:bg-cyan-500 transition-colors">
                        <Github size={20} />
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-800 rounded-full text-white hover:bg-cyan-500 transition-colors">
                        <ExternalLink size={20} />
                    </a>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    <Folder className="text-cyan-400" size={20}/> {project.title}
                </h3>
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-xs font-medium text-cyan-300 bg-cyan-900/30 px-2 py-1 rounded-md border border-cyan-800">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
