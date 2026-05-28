import { motion } from 'framer-motion'
import { Download, FileText } from 'lucide-react'

export default function Resume() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  const resumeHighlights = [
    {
      title: 'Technical Skills',
      items: [
        'Python',
        'Java',
        'Deep Learning',
        'TensorFlow',
        'GenAI & RAG',
      ],
    },
    {
      title: 'Key Projects',
      items: [
        'Drug RAG Chatbot',
        'Face Recognition System',
        'Smart Rent Analyzer',
      ],
    },
    {
      title: 'Achievements',
      items: [
        'Attention Mechanisms',
        'Transfer Learning',
        'EfficientNetB3 Model',
      ],
    },
  ]

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
            Resume
          </motion.h2>

          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Resume Section */}
        <div className="max-w-2xl mx-auto mb-12">

          <motion.div
            className=""
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >

            {/* Download Button */}
            <motion.button
              className="w-full button-primary mb-6 flex items-center justify-center gap-2 py-4"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow: '0 0 30px rgba(6, 182, 212, 0.4)',
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const link = document.createElement('a')
                link.href = 'resume.pdf'
                link.download = 'Hegavasanthan_S_Resume.pdf'
                link.style.display = 'none'
                document.body.appendChild(link)
                link.click()
                document.body.removeChild(link)
              }}
            >
              <Download size={20} />
              <span>Download Resume</span>
            </motion.button>

            {/* Resume Highlights */}
            <div className="space-y-4">
              {resumeHighlights.map((section, index) => (
                <motion.div
                  key={index}
                  className="glass-effect-dark p-4 rounded-xl hover:glass-effect transition-smooth"
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, y: -5 }}
                >
                  <h4 className="text-sm font-bold text-cyan-400 mb-3 flex items-center gap-2">
                    <FileText size={16} />
                    {section.title}
                  </h4>

                  <ul className="space-y-2">
                    {section.items.map((item, idx) => (
                      <motion.li
                        key={idx}
                        className="text-xs text-slate-400 flex items-center gap-2"
                        initial={{ x: -10, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <span className="w-1 h-1 bg-purple-500 rounded-full" />
                        {item}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {[
            {
              icon: '📍',
              title: 'Location',
              description: 'Chennai, India',
            },
            {
              icon: '📧',
              title: 'Email',
              description: 'hegavasanth@gmail.com',
            },
            {
              icon: '📱',
              title: 'Phone',
              description: '+91 9962864731',
            },
          ].map((info, index) => (
            <motion.div
              key={index}
              className="glass-effect-dark p-6 rounded-xl hover:glass-effect transition-smooth text-center"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <motion.div
                className="text-4xl mb-3"
                whileHover={{ scale: 1.3 }}
              >
                {info.icon}
              </motion.div>

              <h4 className="text-lg font-semibold text-white mb-2">
                {info.title}
              </h4>

              <p className="text-slate-400">
                {info.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}