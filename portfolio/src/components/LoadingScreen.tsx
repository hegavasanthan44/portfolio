import { motion } from 'framer-motion'

export default function LoadingScreen() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  const text = "HEGAVASANTHAN'S PORTFOLIO".split('')

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-primary to-slate-900 flex items-center justify-center z-50">
      {/* Animated blobs in background */}
      <motion.div
        className="absolute inset-0 overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: 'reverse',
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: 'reverse',
            delay: 1,
          }}
        />
      </motion.div>

      {/* Loading content */}
      <motion.div
        className="relative z-10 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Animated letters */}
        <div className="flex justify-center mb-8 gap-2">
          {text.map((letter, index) => (
            <motion.div
              key={index}
              variants={letterVariants}
              className="text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent"
            >
              {letter}
            </motion.div>
          ))}
        </div>

        {/* Subtitle */}
        <motion.p
          className="text-xl text-slate-300 font-light mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Loading Portfolio...
        </motion.p>

        {/* Loading bar */}
        <div className="w-64 h-1 bg-slate-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-500 to-purple-600"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>

        {/* Animated dots */}
        <div className="flex justify-center gap-2 mt-8">
          {[0, 1, 2].map((dot) => (
            <motion.div
              key={dot}
              className="w-2 h-2 rounded-full bg-cyan-500"
              animate={{
                y: [0, -8, 0],
              }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                delay: dot * 0.2,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
}
