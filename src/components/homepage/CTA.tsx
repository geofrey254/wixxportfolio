'use client'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Phone, MessageCircle, ArrowRight, Sparkles, Calendar } from 'lucide-react'
import { FaLocationArrow } from 'react-icons/fa'

export default function CTA() {
  const ref = useRef(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 0.8', '0.6 1'],
  })

  // Parallax base transforms
  const rawY = useTransform(scrollYProgress, [0, 1], [40, 0])
  const rawOpacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  // Smooth them out with spring physics
  const y = useSpring(rawY, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  })

  const opacity = useSpring(rawOpacity, {
    stiffness: 100,
    damping: 25,
    mass: 0.5,
  })

  const contactOptions = [
    {
      id: 1,
      icon: Mail,
      title: 'Email Me',
      description: 'Drop me a line about your project',
      action: 'hello@animator.com',
      color: 'from-purple-500 to-pink-500',
      hoverColor: 'shadow-purple-500/30',
    },
    {
      id: 2,
      icon: Phone,
      title: 'Schedule Call',
      description: "Let's discuss your vision over a call",
      action: 'Book a 30min chat',
      color: 'from-blue-500 to-cyan-500',
      hoverColor: 'shadow-blue-500/30',
    },
    {
      id: 3,
      icon: MessageCircle,
      title: 'Quick Chat',
      description: 'Send me a message on social media',
      action: '@animator_pro',
      color: 'from-green-500 to-emerald-500',
      hoverColor: 'shadow-green-500/30',
    },
  ]

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '25+', label: 'Happy Clients' },
    { number: '3+', label: 'Years Experience' },
    { number: '24h', label: 'Response Time' },
  ]

  return (
    <motion.section
      ref={ref}
      style={{ y, opacity }}
      className="py-16 md:py-28 -mt-6 md:-mt-16 bg-white dark:bg-gray-50 rounded-t-4xl relative z-30 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-100/50 to-pink-100/50 dark:from-purple-500/10 dark:to-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-gradient-to-br from-blue-100/50 to-cyan-100/50 dark:from-blue-500/10 dark:to-cyan-500/10 rounded-full blur-3xl"></div>

        {/* Floating animation elements */}
        <motion.div
          className="absolute top-20 left-1/4 w-4 h-4 bg-purple-400/30 rounded-full"
          animate={{
            y: [-10, 10, -10],
            x: [-5, 5, -5],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
        <motion.div
          className="absolute bottom-40 right-1/3 w-6 h-6 bg-blue-400/30 rounded-full"
          animate={{
            y: [10, -10, 10],
            x: [5, -5, 5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-200/30 rounded-full px-4 py-2 mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-purple-500" />
            <span className="text-sm font-medium text-purple-700 dark:text-purple-600">
              Let{"'"}s Create Together
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-gray-800">
            Ready to Bring Your
            <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-blue-600 bg-clip-text text-transparent">
              {' '}
              Vision to Life?
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-500 leading-relaxed max-w-3xl mx-auto">
            Whether you need captivating animations, engaging motion graphics, or complete visual
            storytelling, I{"'"}m here to transform your ideas into stunning animated experiences.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-100/20 dark:to-pink-100/20 rounded-2xl p-6 border border-purple-100/50 dark:border-purple-200/20 group-hover:shadow-lg group-hover:shadow-purple-500/10 transition-all duration-300">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-500 font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactOptions.map((option, index) => (
            <motion.div
              key={option.id}
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredCard(option.id)}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{ y: -8 }}
            >
              <div
                className={`relative bg-white dark:bg-gray-50/80 rounded-2xl p-8 border border-gray-200/50 dark:border-gray-300/30 shadow-lg group-hover:shadow-xl transition-all duration-300 ${
                  hoveredCard === option.id ? `shadow-2xl ${option.hoverColor}` : ''
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${option.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <option.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-800 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-600 group-hover:to-pink-600 group-hover:bg-clip-text transition-all duration-300">
                  {option.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-500 mb-4 leading-relaxed">
                  {option.description}
                </p>
                <div
                  className={`inline-flex items-center gap-2 font-medium bg-gradient-to-r ${option.color} bg-clip-text text-transparent`}
                >
                  {option.action}
                  <motion.div
                    animate={{ x: hoveredCard === option.id ? 5 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="w-4 h-4 text-purple-500" />
                  </motion.div>
                </div>

                {/* Hover effect background */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${option.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Main CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-blue-600 rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background pattern */}

            <div className="relative z-10 max-w-4xl mx-auto">
              <motion.h3
                className="text-3xl md:text-4xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Got an Animation Project in Mind?
              </motion.h3>
              <motion.p
                className="text-lg md:text-xl mb-8 text-purple-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                From concept to completion, let{"'"}s collaborate to create animations that
                captivate, engage, and leave a lasting impression on your audience.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.button
                  className="bg-white text-purple-600 font-bold py-4 px-8 rounded-xl flex items-center gap-3 hover:bg-gray-50 hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="w-5 h-5" />
                  Start a Project
                  <FaLocationArrow className="w-4 h-4" />
                </motion.button>

                <motion.button
                  className="border-2 border-white/30 backdrop-blur-sm text-white font-medium py-4 px-8 rounded-xl flex items-center gap-3 hover:bg-white/10 hover:border-white/50 transition-all duration-300"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Calendar className="w-5 h-5" />
                  Schedule Consultation
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
