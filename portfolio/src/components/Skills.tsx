import { motion } from 'framer-motion'

const skillsData = [
  { name: 'Python', category: 'Languages' },
  { name: 'Java', category: 'Languages' },

  //{ name: 'Deep Learning', category: 'AI/ML' },
  { name: 'Machine Learning', category: 'AI/ML' },
  { name: 'TensorFlow', category: 'AI/ML' },
 /// { name: 'CNN & Attention Models', category: 'AI/ML' },
  { name: 'GenAI & RAG', category: 'AI/ML' },

  ///{ name: 'ChromaDB', category: 'Tools' },
  { name: 'Data Analysis', category: 'Tools' },
  ///{ name: 'Git & GitHub', category: 'Tools' },
]

const categories = ['Languages', 'AI/ML', 'Tools']

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  const SkillCard = ({ skill }: { skill: typeof skillsData[0] }) => (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5, scale: 1.02 }}
      className="glass-effect-dark p-6 rounded-xl hover:glass-effect transition-smooth"
    >
      <h4 className="text-lg font-semibold text-white mb-4">
        {skill.name}
      </h4>

      <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300">
        {skill.category}
      </span>
    </motion.div>
  )

  return (
    <section className="py-20 px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">Technical Skills</h2>

          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto mt-3"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <div
              key={category}
              className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 text-cyan-300 text-sm"
            >
              {category}
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillsData.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </motion.div>

      </div>
    </section>
  )
}