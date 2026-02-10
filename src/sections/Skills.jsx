import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaSortAmountUpAlt } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiFirebase, SiFramer, SiSupabase } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact />, color: '#61DAFB' },
  { name: 'Next.js', icon: <FaSortAmountUpAlt />, color: '#61DAFB' },
  { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
  { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#38B2AC' },
  { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
  { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
  { name: 'Supabase', icon: <SiSupabase />, color: '#339933' },
//   { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
  { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' },
  { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
  { name: 'Framer Motion', icon: <SiFramer />, color: '#0055FF' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center mb-16"
            >
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My <span className="text-cyan-400">Skills</span></h2>
                <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full"></div>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                {skills.map((skill, index) => (
                    <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        whileHover={{ scale: 1.05 }}
                        className="bg-slate-800 p-6 rounded-xl flex flex-col items-center justify-center border border-slate-700 hover:border-cyan-500/50 transition-colors shadow-lg hover:shadow-cyan-500/20"
                    >
                        <div className="text-5xl mb-4" style={{ color: skill.color }}>
                            {skill.icon}
                        </div>
                        <h3 className="text-gray-300 font-medium">{skill.name}</h3>
                    </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Skills;
