import { motion } from 'framer-motion'

/*const skillsData = [
  { name: 'Python', level: 95, category: 'Languages' },
  { name: 'Java', level: 80, category: 'Languages' },
  { name: 'Deep Learning', level: 88, category: 'AI/ML' },
  { name: 'Machine Learning', level: 85, category: 'AI/ML' },
  { name: 'TensorFlow', level: 82, category: 'AI/ML' },
  { name: 'CNN & Attention Models', level: 85, category: 'AI/ML' },
  { name: 'GenAI & RAG', level: 84, category: 'AI/ML' },
  { name: 'Transfer Learning', level: 80, category: 'AI/ML' },
  { name: 'Streamlit', level: 82, category: 'Tools' },
  { name: 'ChromaDB', level: 78, category: 'Tools' },
  { name: 'Data Analysis', level: 80, category: 'Tools' },
  { name: 'Git & GitHub', level: 85, category: 'Tools' },
]*/

const categories = ['Languages', 'AI/ML', 'Tools']

export default function Skills() {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  }

  const SkillCard = ({ skill, delay }: { skill: typeof skillsData[0]; delay: number }) => (
    <motion.div
      className="group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      viewport={{ once: true, margin: '-50px' }}
      whileHover={{ y: -5 }}
    >
      <div className="glass-effect-dark p-6 rounded-xl hover:glass-effect transition-smooth">
        <div className="flex justify-between items-center mb-3">
          <h4 className="text-lg font-semibold text-white">{skill.name}</h4>
          <span className="text-cyan-400 text-sm font-bold">{skill.level}%</span>
        </div>

        {/* Progress bar */}
        <div className="relative h-2 bg-slate-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.level}%` }}
            transition={{ delay: delay + 0.2, duration: 1.2, ease: 'easeOut' }}
            viewport={{ once: true, margin: '-50px' }}
          />
        </div>

        {/* Category badge */}
        <div className="mt-3">
          <span className="text-xs px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-300">
            {skill.category}
          </span>
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
            Technical Skills
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Category Filter Info */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {categories.map((category, index) => (
            <motion.div
              key={category}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-300 text-sm"
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)' }}
              transition={{ delay: index * 0.05 }}
            >
              {category}
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {skillsData.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} delay={index * 0.05} />
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {[
            { title: 'Programming Languages', count: '2+', description: 'Python, Java, and more' },
            { title: 'AI/ML Expertise', count: '7+', description: 'Deep Learning, CNN, GenAI, RAG, Transfer Learning' },
          ].map((summary, index) => (
            <motion.div
              key={summary.title}
              className="glass-effect-dark p-6 rounded-xl hover:glass-effect transition-smooth text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                className="text-5xl font-bold gradient-text mb-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.1 + 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                {summary.count}
              </motion.div>
              <h4 className="text-xl font-semibold mb-2 text-white">{summary.title}</h4>
              <p className="text-slate-400 text-sm">{summary.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
