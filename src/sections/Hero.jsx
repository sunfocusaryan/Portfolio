import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import heroImage from "../assets/heroImage.webp";

const Hero = () => {
    const EMAIL_ADDRESS = "aryanchouhan90127@gmail.com"
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 pt-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={heroImage}
            alt="Profile"
            className="w-56 h-56 md:w-64 md:h-64 rounded-full border-4 border-cyan-500 shadow-lg mb-8 object-cover mx-auto"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold text-white mb-4"
        >
          Hi, I'm <span className="text-cyan-400">Aryan Chouhan</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl"
        >
          A passionate <span className="text-cyan-400">React JS Developer</span>{" "}
          crafting modern, robust, and user-centric web applications.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex space-x-6 mb-12"
        >
          <SocialLink href="https://github.com/Aryan-chauhan-24" icon={<Github />} />
          <SocialLink href="https://www.linkedin.com/in/aryan-chouhan-a1347b241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" icon={<Linkedin />} />
          <SocialLink href="https://twitter.com" icon={<Twitter />} />
          <SocialLink href={`mailto:${EMAIL_ADDRESS}`} icon={<Mail />} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
        >
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition-colors shadow-lg shadow-cyan-500/30"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-cyan-500 text-cyan-400 font-semibold hover:bg-cyan-500/10 transition-colors"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const SocialLink = ({ href, icon }) => {
  const isMail = href.startsWith('mailto:');
  return (
    <a
      href={href}
      target={isMail ? undefined : "_blank"}
      rel={isMail ? undefined : "noopener noreferrer"}
      className="text-gray-400 hover:text-cyan-400 transform hover:scale-110 transition-all duration-300"
    >
      {React.cloneElement(icon, { size: 28 })}
    </a>
  );
};

export default Hero;
