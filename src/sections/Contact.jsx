import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { toast } from 'react-toastify';

const Contact = () => {
    
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // alert("Message sent! (Simulation)");
     toast.success("Message sent! (Simulation)");
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
        >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In <span className="text-cyan-400">Touch</span></h2>
            <div className="w-20 h-1 bg-cyan-500 mx-auto rounded-full mb-4"></div>
            <p className="text-gray-400 max-w-2xl mx-auto">
                Have a project in mind or just want to say hi? Feel free to reach out!
            </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
            >
                <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                
                <div className="flex items-start space-x-4">
                    <div className="bg-slate-800 p-3 rounded-lg text-cyan-400">
                        <Mail size={24} />
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-white">Email</h4>
                        <p className="text-gray-400">aryanchouhan90127@gmail.com</p>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                    <div className="bg-slate-800 p-3 rounded-lg text-cyan-400">
                        <Phone size={24} />
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-white">Phone</h4>
                        <p className="text-gray-400">+91 9997099750</p>
                    </div>
                </div>

                <div className="flex items-start space-x-4">
                    <div className="bg-slate-800 p-3 rounded-lg text-cyan-400">
                        <MapPin size={24} />
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold text-white">Location</h4>
                        <p className="text-gray-400">Mohali, Punjab, India</p>
                    </div>
                </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <form onSubmit={handleSubmit} className="space-y-6 bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-xl">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                        <input 
                            type="text" 
                            id="name"
                            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                            placeholder="Your Name"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                            placeholder="your@email.com"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                        <textarea 
                            id="message" 
                            rows="4"
                            className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                            placeholder="Your message..."
                            required
                        ></textarea>
                    </div>
                    <button 
                    onSubmit={handleSubmit}
                        type="submit"
                        className="cursor-pointer w-full bg-cyan-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-cyan-600 transition-colors flex items-center justify-center space-x-2"
                    >
                        <span>Send Message</span>
                        <Send size={18} />
                    </button>
                </form>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
