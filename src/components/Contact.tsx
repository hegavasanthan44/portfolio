import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle')

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

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault()

    setIsSubmitting(true)
    setSubmitStatus('idle')

    setTimeout(() => {
      if (
        formData.name.trim() !== '' &&
        formData.email.trim() !== '' &&
        formData.message.trim() !== ''
      ) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
      setIsSubmitting(false)
    }, 2000)
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-6"
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
                  href="mailto:hegavasanthan@gmail.com"
                  className="text-slate-400 hover:text-cyan-400 transition-smooth"
                >
                  hegavasanthan@gmail.com
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
                <p className="text-slate-400">+91 9940169839</p>
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

          {/* Contact Form */}
          <motion.form
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <motion.div variants={itemVariants}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="form-input"
                required
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className="form-input"
                required
              />
            </motion.div>
            <motion.div variants={itemVariants}>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                className="form-textarea"
                rows={5}
                required
              ></textarea>
            </motion.div>
            <motion.div variants={itemVariants} className="text-center">
              <button
                type="submit"
                className="btn-primary w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span className="ml-2">Sending...</span>
                  </div>
                ) : (
                  'Send Message'
                )}
              </button>
            </motion.div>
            {submitStatus !== 'idle' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 text-center p-3 rounded-lg ${
                  submitStatus === 'success'
                    ? 'bg-green-500/20 text-green-400'
                    : 'bg-red-500/20 text-red-400'
                }`}
              >
                {submitStatus === 'success'
                  ? 'Message sent successfully!'
                  : 'Please fill all fields.'}
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}