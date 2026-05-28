import { motion } from 'framer-motion'
import { Code2, Brain, Zap } from 'lucide-react'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }


  const interests = [
    { Icon: Brain, title: 'AI & Machine Learning', description: 'Building intelligent systems and predictive models' },
    { Icon: Code2, title: 'Full Stack Development', description: 'Creating scalable web applications end-to-end' },
    { Icon: Zap, title: 'NLP & Automation', description: 'Natural language processing and process automation' },
  ]

  const AnimatedCounter = ({ value, label }: { value: string; label: string }) => {
    return (
      <motion.div
        className="text-center p-6 glass-effect-dark rounded-xl hover:glass-effect transition-smooth"
        whileHover={{ scale: 1.05, y: -10 }}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.div
          className="text-4xl md:text-5xl font-bold gradient-text mb-2"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
        >
          {value}
        </motion.div>
        <p className="text-slate-400 text-sm md:text-base">{label}</p>
      </motion.div>
    )
  }

  return (
    <section className="py-20 px-4 md:px-8 relative">
      <div className="max-w-6xl mx-auto">
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
            About Me
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* About text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.p
              variants={itemVariants}
              className="text-slate-300 text-lg mb-6 leading-relaxed"
            >
              I'm a passionate fresher currently pursuing a Bachelor of Technology in Artificial Intelligence and Machine Learning. 
              Hands-on experience in developing AI-driven projects with strong expertise in Python and Java.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-slate-300 text-lg mb-6 leading-relaxed"
            >
              I specialize in creating intelligent solutions using Deep Learning, GenAI, and RAG architectures. 
              My focus is on writing clean and efficient code, solving problems creatively, and delivering impactful 
              solutions through strong teamwork and technical skills.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-slate-300 text-lg leading-relaxed"
            >
              I'm passionate about exploring advanced ML architectures, transfer learning, and practical applications of AI. 
              I love learning, experimenting, and pushing the boundaries of what's possible with artificial intelligence.
            </motion.p>
          </motion.div>

          {/* Education Card */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="glass-effect-dark p-8 rounded-2xl hover:glass-effect transition-smooth"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-cyan-400">Education</h3>
            
            <div className="space-y-6">
              <motion.div
                className="border-l-4 border-cyan-500 pl-4"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-white">Bachelor of Technology in AI & Machine Learning</h4>
                <p className="text-slate-400">Rajalakshmi Engineering College</p>
                <p className="text-slate-500 text-sm">2022 - 2026 | CGPA: 7.77</p>
              </motion.div>

              <motion.div
                className="border-l-4 border-purple-500 pl-4"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-white">Cloud Computing Certification</h4>
                <p className="text-slate-400">NPTEL</p>
                <p className="text-slate-500 text-sm">2024</p>
              </motion.div>

              <motion.div
                className="border-l-4 border-pink-500 pl-4"
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="text-lg font-semibold text-white">Deep Learning & Neural Networks</h4>
                <p className="text-slate-400">LinkedIn Learning Path</p>
                <p className="text-slate-500 text-sm">2024</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats section commented out */}

        {/* Interests */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {interests.map(({ Icon, title, description }, index) => (
            <motion.div
              key={index}
              className="glass-effect-dark p-6 rounded-xl hover:glass-effect transition-smooth group"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <motion.div
                className="text-4xl mb-4 text-cyan-400 group-hover:text-purple-400 transition-colors"
                whileHover={{ rotate: 20, scale: 1.2 }}
              >
                <Icon size={48} />
              </motion.div>
              <h4 className="text-xl font-semibold mb-3 text-white">{title}</h4>
              <p className="text-slate-400">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
