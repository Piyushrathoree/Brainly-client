import React from 'react';
import { motion } from 'framer-motion';
import { IconBrain, IconFileText, IconVideo, IconBrandTwitter, IconLink, IconSearch } from '@tabler/icons-react';

import { useNavigate } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen bg-black/94 text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 to-black/94" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/5 via-transparent to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-purple-500/10 rounded-2xl">
              <IconBrain className="w-12 h-12" />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Your Second
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
              {" "}
              Brain
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Store, organize, and access your knowledge from anywhere. Save
            documents, videos, tweets, and more in one place.
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg transition-all duration-300 transform hover:scale-105" onClick={()=>{
              navigate("/signup")
            }}>
              Start Building Your Knowledge Base
            </button>
            <button className="px-8 py-3 border border-gray-700 rounded-lg hover:bg-black/50 transition-all duration-300 transform hover:scale-105">
              See How It Works
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-4"
            >
              Your Digital Knowledge Hub
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-300"
            >
              Everything you need to build your second brain
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-black/50 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-purple-500/10 rounded-lg flex items-center justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types Section */}
      <section className="py-20 bg-black/94">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl font-bold mb-4"
            >
              Store Everything You Need
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-300"
            >
              Save and organize any type of content
            </motion.p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {contentTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="p-4 bg-black/50 backdrop-blur-sm rounded-lg border border-gray-800 hover:border-purple-500/50 transition-all duration-300 text-center group"
              >
                <div className="w-12 h-12 mx-auto mb-3 text-purple-500 group-hover:scale-110 transition-transform duration-300">
                  {type.icon}
                </div>
                <p className="text-gray-200">{type.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
            <div className="relative">
              <h2 className="text-3xl font-bold mb-4">
                Start Building Your Second Brain Today
              </h2>
              <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
                Join thousands of knowledge workers who are already using
                Brainly to organize their digital life.
              </p>
              <button className="px-8 py-3 bg-white text-purple-600 rounded-lg hover:bg-purple-50 transition-all duration-200 transform hover:scale-105" onClick={()=>{
                navigate("/signup")
              }}>
                Get Started for Free
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      
        <footer className="bg-black/95 border-t border-gray-800">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <IconBrain className="w-6 h-6 text-purple-500" />
                <span className="text-lg font-semibold">Brainly</span>
              </div>
              <div className="flex space-x-6">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Privacy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
            <div className="mt-6 text-center text-gray-400 text-sm">
              <p>
                &copy; {new Date().getFullYear()} Brainly. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      
    </div>
  );
};

const features = [
  {
    icon: <IconFileText className="w-6 h-6 text-purple-400" />,
    title: "Save Anything",
    description: "Store documents, links, videos, and more in one organized place."
  },
  {
    icon: <IconBrain className="w-6 h-6 text-purple-400" />,
    title: "Smart Organization",
    description: "Automatically categorize and tag your content for easy retrieval."
  },
  {
    icon: <IconSearch className="w-6 h-6 text-purple-400" />,
    title: "Quick Search",
    description: "Find anything instantly with our powerful search capabilities."
  }
];

const contentTypes = [
  {
    name: "Documents",
    icon: <IconFileText className="w-8 h-8" />
  },
  {
    name: "Videos",
    icon: <IconVideo className="w-8 h-8" />
  },
  {
    name: "Tweets",
    icon: <IconBrandTwitter className="w-8 h-8" />
  },
  {
    name: "Links",
    icon: <IconLink className="w-8 h-8" />
  }
];

export default LandingPage;
