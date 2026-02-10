import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <img 
                    src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=800&auto=format&fit=crop" 
                    alt="Working on code" 
                    className="rounded-2xl shadow-2xl border border-slate-700"
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">About <span className="text-cyan-400">Me</span></h2>
                <div className="w-20 h-1 bg-cyan-500 rounded-full mb-8"></div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                    Hello! I'm Aryan Chouhan, a passionate React Developer based in San Francisco. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
I graduated from SRM Institute of Science and Technology with a Bachelor’s degree in Computer Science and also completed my Master’s degree from the same university. I have 2 years of professional experience in the web development industry, with a strong foundation in JavaScript, React.js, and modern CSS frameworks. I focus on building responsive, user-friendly, and scalable web applications.                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="bg-slate-800 p-4 rounded-lg border-l-4 border-cyan-500">
                        <h4 className="font-bold text-white text-xl">2+</h4>
                        <p className="text-gray-400 text-sm">Years Experience</p>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-lg border-l-4 border-cyan-500">
                        <h4 className="font-bold text-white text-xl">10+</h4>
                        <p className="text-gray-400 text-sm">Projects Completed</p>
                    </div>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
