import { motion } from 'framer-motion'
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react'
import { Link as ScrollLink } from 'react-scroll'

export default function Footer() {
  const currentYear = new Date().getFullYear()

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

  const footerLinks = [
    { label: 'Home', to: 'hero' },
    { label: 'About', to: 'about' },
    { label: 'Projects', to: 'projects' },
    { label: 'Contact', to: 'contact' },
  ]

  const socialLinks = [
    { icon: Github, url: 'https://github.com/hegavasanthan44', label: 'GitHub' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/hega-vasanthan-s-08a21931b/', label: 'LinkedIn' },
    //{ icon: Twitter, url: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, url: 'mailto:hega@example.com', label: 'Email' },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-slate-800">
      {/* Background gradient */}
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-t from-slate-950 to-transparent opacity-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.5 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <motion.h3
              className="text-2xl font-bold gradient-text mb-4"
              whileHover={{ scale: 1.05 }}
            >
              HV
            </motion.h3>
            <p className="text-slate-400 text-sm">
              AI & Machine Learning Engineer. Building intelligent solutions for real-world problems.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <motion.li key={link.label}>
                  <ScrollLink
                    to={link.to}
                    smooth={true}
                    duration={500}
                  >
                    <motion.span
                      className="text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer text-sm"
                      whileHover={{ x: 5 }}
                    >
                      {link.label}
                    </motion.span>
                  </ScrollLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                { label: 'Web Development', icon: '🌐' },
                { label: 'ML Solutions', icon: '🤖' },
                { label: 'Consulting', icon: '💼' },
                { label: 'Automation', icon: '⚙️' },
              ].map((service) => (
                <motion.li
                  key={service.label}
                  className="text-slate-400 hover:text-cyan-400 transition-colors cursor-pointer text-sm flex items-center gap-2"
                  whileHover={{ x: 5 }}
                >
                  <span>{service.icon}</span>
                  {service.label}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-2">
              <motion.li
                className="text-slate-400 text-sm"
                whileHover={{ x: 5 }}
              >
                <span className="text-cyan-400">📧</span> hegavasanth@gmail.com
              </motion.li>
              <motion.li
                className="text-slate-400 text-sm"
                whileHover={{ x: 5 }}
              >
                <span className="text-cyan-400">📱</span> +91 9962864731
              </motion.li>
              <motion.li
                className="text-slate-400 text-sm"
                whileHover={{ x: 5 }}
              >
                <span className="text-cyan-400">📍</span> Chennai, India
              </motion.li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mb-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        />

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
        >
          {/* Copyright */}
          <motion.p
            className="text-slate-400 text-sm"
            variants={itemVariants}
          >
            © {currentYear} Hega Vasanth. All rights reserved.
            <span className="text-cyan-400 mx-2">•</span>
            Built with <span className="text-red-500">❤️</span> using React & Tailwind CSS
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex gap-4"
            variants={containerVariants}
          >
            {socialLinks.map(({ icon: Icon, url, label }, index) => (
              <motion.a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                title={label}
                className="w-10 h-10 rounded-full glass-effect-dark flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:glow-effect transition-smooth"
                variants={itemVariants}
                whileHover={{ scale: 1.15, y: -5 }}
                whileTap={{ scale: 0.95 }}
                transition={{ delay: index * 0.05 }}
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </motion.div>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full glass-effect-dark flex items-center justify-center text-cyan-400 hover:text-white hover:glow-effect transition-smooth"
            whileHover={{ scale: 1.15, y: -5 }}
            whileTap={{ scale: 0.95 }}
            variants={itemVariants}
            title="Back to top"
          >
            <ArrowUp size={18} />
          </motion.button>
        </motion.div>
      </div>

      {/* Floating particles in footer */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400/20 rounded-full"
          animate={{
            y: [0, -20, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            bottom: '10%',
          }}
        />
      ))}
    </footer>
  )
}
