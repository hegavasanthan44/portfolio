import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Github, Linkedin, Mail } from 'lucide-react'
import { Link as ScrollLink } from 'react-scroll'

export default function Hero() {
  const [displayedText, setDisplayedText] = useState('')
  const fullText = 'Artificial Intelligence And Machine Learning Graduate '
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
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 200 - 100, 0],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}

      <motion.div
        className="max-w-5xl w-full z-10"
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
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-12"
        >
          <motion.div
            className="relative w-48 h-48 md:w-56 md:h-56"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {/* Glowing border */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 p-1"
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              <div className="absolute inset-1 rounded-full bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center text-6xl">
                👨‍💻
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

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
              const link = document.createElement('a')
              link.href = '/Hegavasanthan S resume..pdf'
              link.download = 'Hega_Vasanth_Resume.pdf'
              link.click()
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

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ScrollLink to="about" smooth={true} duration={500}>
          <motion.div
            className="w-8 h-12 border-2 border-cyan-400 rounded-full flex justify-center cursor-pointer"
            whileHover={{ scale: 1.1 }}
          >
            <motion.div
              className="w-1 h-2 bg-cyan-400 rounded-full mt-2"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </ScrollLink>
      </motion.div>

      {/* Scroll indicator text */}
      <motion.p
        className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-cyan-400 text-sm"
        animate={{ opacity: [1, 0.5, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Scroll to explore
      </motion.p>
    </section>
  )
}

