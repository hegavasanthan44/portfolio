import { motion } from 'framer-motion'
import { Calendar, Award } from 'lucide-react'

const experienceData = [
  {
    title: 'Tomato Leaf Disease Classification Intern',
    company: 'Mizoram University',
    period: 'Recent Internship',
    description: 'Developed a deep learning model using EfficientNetB3 with multi-head attention mechanism for accurate classification of tomato leaf diseases.',
    achievements: ['Implemented transfer learning', 'Image preprocessing', 'Model optimization'],
    type: 'internship',
  },
]

const certificationsData = [
  {
    title: 'Cloud Computing',
    issuer: 'NPTEL',
    date: '2024',
    badge: '☁️',
  },
  {
    title: 'Deep Learning & Neural Networks',
    issuer: 'LinkedIn Learning',
    date: '2024',
    badge: '🚀',
  },
]

const ExperienceCard = ({
  experience,
  index,
}: {
  experience: typeof experienceData[0]
  index: number
}) => {
  const isLast = index === experienceData.length - 1

  return (
    <motion.div
      className="flex gap-6"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      viewport={{ once: true, margin: '-50px' }}
    >
      {/* Timeline */}
      <div className="flex flex-col items-center">
        <motion.div
          className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white font-bold flex-shrink-0"
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          {index + 1}
        </motion.div>
        {!isLast && (
          <div className="w-1 h-24 bg-gradient-to-b from-cyan-500 to-purple-600 mt-4" />
        )}
      </div>

      {/* Content */}
      <motion.div
        className="glass-effect-dark p-6 rounded-xl hover:glass-effect transition-smooth flex-grow mb-8"
        whileHover={{ scale: 1.02, y: -5 }}
      >
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-xl font-bold text-white mb-1">{experience.title}</h3>
            <p className="text-cyan-400 font-semibold">{experience.company}</p>
          </div>
          <Calendar size={20} className="text-slate-400" />
        </div>

        <div className="flex items-center gap-2 mb-4 text-slate-400 text-sm">
          <span>{experience.period}</span>
        </div>

        <p className="text-slate-300 mb-4">{experience.description}</p>

        <div className="flex flex-wrap gap-2">
          {experience.achievements.map((achievement, idx) => (
            <motion.span
              key={idx}
              className="text-xs px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300"
              whileHover={{ scale: 1.1 }}
            >
              {achievement}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

const CertificationCard = ({
  certification,
  index,
}: {
  certification: typeof certificationsData[0]
  index: number
}) => (
  <motion.div
    className="glass-effect-dark p-6 rounded-xl hover:glass-effect transition-smooth text-center"
    initial={{ opacity: 0, scale: 0.8 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay: index * 0.05, duration: 0.5 }}
    viewport={{ once: true, margin: '-50px' }}
    whileHover={{ scale: 1.05, y: -10 }}
  >
    <motion.div
      className="text-5xl mb-3"
      whileHover={{ rotate: 20, scale: 1.2 }}
    >
      {certification.badge}
    </motion.div>
    <h4 className="text-lg font-semibold text-white mb-1">
      {certification.title}
    </h4>
    <p className="text-slate-400 text-sm mb-2">{certification.issuer}</p>
    <p className="text-cyan-400 text-xs font-medium">{certification.date}</p>
  </motion.div>
)

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

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
            Experience & Certifications
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Experience Timeline */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.h3
              className="text-2xl font-bold mb-8 text-cyan-400 flex items-center gap-2"
              variants={itemVariants}
            >
              <Calendar size={28} />
              Professional Experience
            </motion.h3>

            <div className="relative">
              {experienceData.map((experience, index) => (
                <ExperienceCard
                  key={index}
                  experience={experience}
                  index={index}
                />
              ))}
            </div>
          </motion.div>

          {/* Certifications Showcase */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.h3
              className="text-2xl font-bold mb-8 text-purple-400 flex items-center gap-2"
              variants={itemVariants}
            >
              <Award size={28} />
              Certifications
            </motion.h3>

            <div className="grid grid-cols-2 gap-4">
              {certificationsData.map((cert, index) => (
                <CertificationCard
                  key={index}
                  certification={cert}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        
          
        
      </div>
    </section>
  )
}
