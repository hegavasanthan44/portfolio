import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin} from 'lucide-react'

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
        formData.name &&
        formData.email &&
        formData.message
      ) {
        setSubmitStatus('success')

        setFormData({
          name: '',
          email: '',
          message: '',
        })

        setTimeout(() => {
          setSubmitStatus('idle')
        }, 3000)
      } else {
        setSubmitStatus('error')

        setTimeout(() => {
          setSubmitStatus('idle')
        }, 3000)
      }

      setIsSubmitting(false)
    }, 1500)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hegavasanth@gmail.com',
      link: 'mailto:hegavasanth@gmail.com',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+91 9962864731',
      link: 'tel:+919962864731',
    },
    {
      icon: MapPin,
      title: 'Location',
      value: 'Chennai, India',
      link: '#',
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
            Get In Touch
          </motion.h2>

          <motion.div
            className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          />

          <motion.p
            className="text-slate-400 mt-4 text-lg"
            variants={itemVariants}
          >
            Feel free to reach out for collaborations or just a friendly hello
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            <motion.h3
              className="text-2xl font-bold mb-8 text-cyan-400"
              variants={itemVariants}
            >
              Contact Information
            </motion.h3>

            <div className="space-y-6">
              {contactInfo.map(
                ({ icon: Icon, title, value, link }, index) => (
                  <motion.a
                    key={index}
                    href={link}
                    className="glass-effect-dark p-6 rounded-xl hover:glass-effect transition-smooth flex items-start gap-4 group cursor-pointer"
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.05,
                      x: 10,
                    }}
                    target={
                      title !== 'Location'
                        ? '_blank'
                        : '_self'
                    }
                    rel={
                      title !== 'Location'
                        ? 'noopener noreferrer'
                        : ''
                    }
                  >
                    <motion.div
                      className="text-3xl text-cyan-400 group-hover:text-purple-400 transition-colors flex-shrink-0 mt-1"
                      whileHover={{
                        scale: 1.2,
                        rotate: 20,
                      }}
                    >
                      <Icon size={32} />
                    </motion.div>

                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1">
                        {title}
                      </h4>

                      <p className="text-slate-400 group-hover:text-slate-300 transition-colors">
                        {value}
                      </p>
                    </div>
                  </motion.a>
                )
              )}
            </div>

            {/* Services */}
           
          </motion.div>


        </div>
      </div>
    </section>
  )
}
