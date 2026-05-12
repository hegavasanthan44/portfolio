import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Github } from 'lucide-react'

const projectsData = [
  {
    id: 1,
    title: 'Drug RAG Chatbot',
    description:
      'GenAI powered RAG chatbot for extracting and answering queries from drug related PDF documents using vector embeddings and semantic search with Gemini API.',
    tags: ['GenAI', 'RAG', 'ChromaDB', 'Gemini API'],
    category: 'AI/ML',
    github: 'https://github.com',
    image: '💊',
  },
  {
    id: 2,
    title: 'Face Recognition Attendance System',
    description:
      'Contactless attendance system using Deep Learning with FaceNet model for face detection and identification with automatic data logging.',
    tags: ['Deep Learning', 'FaceNet', 'OpenCV', 'Python'],
    category: 'Computer Vision',
    github: 'https://github.com',
    image: '👤',
  },
  {
    id: 3,
    title: 'Smart Rent Analyzer',
    description:
      'Streamlit based ML application for housing decisions in Chennai using Multiple Linear Regression and financial analysis.',
    tags: ['Streamlit', 'Machine Learning', 'Regression'],
    category: 'AI/ML',
    github: 'https://github.com',
    image: '🏠',
  },
]

const categories = [
  'All',
  ...Array.from(new Set(projectsData.map((p) => p.category))),
]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] =
    useState('All')

  const filteredProjects =
    selectedCategory === 'All'
      ? projectsData
      : projectsData.filter(
          (p) => p.category === selectedCategory
        )

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const ProjectCard = ({
    project,
    delay,
  }: {
    project: typeof projectsData[0]
    delay: number
  }) => (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -10 }}
    >
      <div className="glass-effect-dark rounded-xl overflow-hidden h-full flex flex-col hover:glass-effect transition-smooth">

        {/* Image */}
        <motion.div
          className="w-full h-48 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 flex items-center justify-center text-6xl relative overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          {project.image}

          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-50" />
        </motion.div>

        {/* Content */}
        <div className="p-6 flex-grow flex flex-col">

          {/* Category */}
          <motion.span
            className="inline-block w-fit text-xs px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 mb-3"
            whileHover={{ scale: 1.1 }}
          >
            {project.category}
          </motion.span>

          {/* Title */}
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-slate-400 text-sm mb-4 flex-grow">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded bg-slate-700/50 text-slate-300"
              >
                {tag}
              </span>
            ))}
          </div>

          
        </div>
      </div>
    </motion.div>
  )

  return (
    <section className="py-20 px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.h2
            className="section-title"
            variants={itemVariants}
          >
            Featured Projects
          </motion.h2>

          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Category Filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() =>
                setSelectedCategory(category)
              }
              className={`px-4 py-2 rounded-full transition-smooth ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg shadow-cyan-500/50'
                  : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
              transition={{ delay: index * 0.05 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              delay={index * 0.1}
            />
          ))}
        </motion.div>

      </div>
    </section>
  )
}
