import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
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

  return (
    <section id="contact" className="py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
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
            Contact Me
          </motion.h2>
          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-6 max-w-xl mx-auto"
        >
          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-4"
          >
            <div className="glass-effect p-3 rounded-full">
              <Mail className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Email</h3>
              <a
                href="mailto:hegavasanth@gmail.com"
                className="text-slate-400 hover:text-cyan-400 transition-smooth"
              >
                hegavasanth@gmail.com
              </a>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-4"
          >
            <div className="glass-effect p-3 rounded-full">
              <Phone className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Phone</h3>
              <p className="text-slate-400">+91 9962864731</p>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-4"
          >
            <div className="glass-effect p-3 rounded-full">
              <MapPin className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">Location</h3>
              <p className="text-slate-400">Chennai, India</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}