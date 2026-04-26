"use client";
import React from 'react';
import { motion } from 'framer-motion';

// Component for individual project cards
const ProjectCard = ({ title, description, techStack, colSpan }) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`relative p-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md overflow-hidden group ${colSpan}`}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-cyan-500/0 group-hover:from-cyan-500/10 group-hover:to-transparent transition-all duration-500 rounded-2xl" />
      
      <div className="relative z-10">
        <h3 className="text-xl font-semibold text-gray-100 tracking-wide mb-2 uppercase font-mono">
          {title}
        </h3>
        <p className="text-sm text-gray-400 mb-6 leading-relaxed">
          {description}
        </p>
        
        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span 
              key={index} 
              className="text-[10px] px-2 py-1 rounded border border-white/10 bg-white/5 text-cyan-400/80 tracking-widest font-mono uppercase"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Main Page Component
export default function Databank() {
  const projects = [
    {
      title: "UniGram",
      description: "A centralized campus marketplace for East West University students to securely trade textbooks and academic resources.",
      techStack: ["React", "Firebase", "Supabase"],
      colSpan: "md:col-span-2 md:row-span-2"
    },
    {
      title: "eFootball Trade Zone",
      description: "Complete digital branding and social strategy for a gaming account exchange platform.",
      techStack: ["Branding", "Design", "Marketing"],
      colSpan: "md:col-span-1"
    },
    {
      title: "Weather-Responsive Power",
      description: "System analysis for microgrid support to stabilize power during heavy rainfall in Bangladesh.",
      techStack: ["Systems", "Research", "Tech Writing"],
      colSpan: "md:col-span-1"
    }
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white p-8 md:p-24 selection:bg-cyan-500/30">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Header Section */}
        <div className="mb-16">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xs font-mono text-cyan-500 uppercase tracking-[0.4em] mb-4"
          >
            // System_Access: Mojaddid_Shashwoto
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-light tracking-tighter"
          >
            Digital <span className="text-gray-500 italic">Databank.</span>
          </motion.h1>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px]">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* Footer Detail */}
        <div className="mt-12 pt-8 border-t border-white/5 text-[10px] font-mono text-gray-600 tracking-widest uppercase">
          Status: Online // Location: Dhaka_Node_01
        </div>
      </div>
    </main>
  );
}
