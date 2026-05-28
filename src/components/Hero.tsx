import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Github, Linkedin, Mail } from 'lucide-react'
import { Link as ScrollLink } from 'react-scroll'

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('')
  const fullText = 'AI & ML Engineer  Deep Learning Enthusiast'
  const typewriterRef = useRef(0)

  useEffect(() => {
    const typewriterInterval = setInterval(() => {
      if (typewriterRef.current < fullText.length) {
        setDisplayedText(fullText.slice(0, typewriterRef.current + 1))
        typewriterRef.current++
      }
    }, 50)

    return () => clearInterval(typewriterInterval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20 px-4">
      {/* Floating particles */}
        {/* Removed floating particles for a cleaner layout */}
        {/* <motion.div>... (removed code) */} 

      <motion.div
          className="max-w-4xl w-full z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main heading */}
        <motion.div variants={itemVariants} className="text-center mb-8">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="gradient-text">Hegavasanthan S</span>
          </motion.h1>
        </motion.div>

        {/* Typewriter subtitle */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-6"
        >
          <h2 className="text-2xl md:text-4xl text-cyan-400 font-semibold min-h-16">
            {displayedText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="ml-2"
            >
              |
            </motion.span>
          </h2>
        </motion.div>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-center text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          Passionate fresher pursuing B.Tech in <span className="text-cyan-400">Artificial Intelligence & Machine Learning</span>. 
          Experienced in developing <span className="text-purple-400">AI-driven projects</span>, <span className="text-pink-400">Deep Learning</span>, 
          and writing clean, efficient code. Focused on solving complex problems creatively.
        </motion.p>

        {/* Profile Image Placeholder */}
          {/* Removed avatar — focus on name, title, and CTAs */}

        {/* Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row justify-center gap-4 mb-12 flex-wrap"
        >
          <ScrollLink to="projects" smooth={true} duration={500}>
            <motion.button
              className="button-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.button>
          </ScrollLink>

          <motion.button
            className="button-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const cacheBusted = `resume.pdf?v=${Date.now()}`
              const href = new URL(cacheBusted, document.baseURI).href
              const link = document.createElement('a')
              link.href = href
              link.download = 'Hegavasanthan_S_Resume.pdf'
              link.style.display = 'none'
              document.body.appendChild(link)
              link.click()
              document.body.removeChild(link)
            }}
          >
            <Download size={20} className="inline mr-2" />
            Download Resume
          </motion.button>

          <ScrollLink to="contact" smooth={true} duration={500}>
            <motion.button
              className="button-tertiary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
          </ScrollLink>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center gap-6"
        >
          {[
            { Icon: Github, label: 'GitHub', href: 'https://github.com/hegavasanthan44' },
            { Icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/hega-vasanthan-s-08a21931b/' },
            { Icon: Mail, label: 'Email', href: 'mailto:hegavasanth@gmail.com' },
          ].map(({ Icon, label, href }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full glass-effect-dark flex items-center justify-center text-cyan-400 hover:text-cyan-300 hover:glow-effect transition-smooth"
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              title={label}
            >
              <Icon size={24} />
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Removed scroll indicator and label for a cleaner hero section */}
    </section>
  )
}
