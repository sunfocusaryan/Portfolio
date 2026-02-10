import React from 'react';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 py-10 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="flex space-x-6 mb-6">
            <a href="https://github.com/Aryan-chauhan-24" className="text-gray-400 hover:text-white transition-colors"><Github size={24} /></a>
            <a href="https://www.linkedin.com/in/aryan-chouhan-a1347b241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={24} /></a>
            {/* <a href="https://twitter.com" className="text-gray-400 hover:text-white transition-colors"><Twitter size={24} /></a> */}
        </div>
        <p className="text-gray-500 text-sm flex items-center">
            © {new Date().getFullYear()} Aryan Chouhan. Made with <Heart size={16} className="mx-1 text-red-500" fill="currentColor" /> using React & Tailwind.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
