'use client'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, MessageCircle, ArrowRight } from 'lucide-react'
import { FaLocationArrow } from 'react-icons/fa'

export default function CTA() {
  const ref = useRef(null)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 0.8', '0.6 1'],
  })

  const rawY = useTransform(scrollYProgress, [0, 1], [40, 0])

  const y = useSpring(rawY, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  })

  const contactOptions = [
    {
      id: 1,
      icon: Mail,
      title: 'Email',
      action: 'hello@animator.com',
    },
    {
      id: 2,
      icon: MessageCircle,
      title: 'Message',
      action: '@animator_pro',
    },
  ]

  return (
    <motion.section
      ref={ref}
      style={{ y }}
      className="py-10 md:py-28 -mt-15 md:-mt-15 bg-white dark:bg-gray-900 dark:border-t-2 dark:border-white rounded-t-4xl relative z-30 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Ready to Create
            <span className="bg-gradient-to-r from-[#2e0057] via-pink-500 to-[#2e0057] bg-clip-text text-transparent">
              {' '}
              Something Amazing?
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-500 max-w-2xl mx-auto">
            Let{"'"}s bring your vision to life with stunning animations that captivate and engage
            your audience.
          </p>
        </motion.div>

        {/* Contact Options */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {contactOptions.map((option) => (
            <motion.div
              key={option.id}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredCard(option.id)}
              onMouseLeave={() => setHoveredCard(null)}
              whileHover={{ y: -4 }}
            >
              <div className="bg-white dark:bg-gray-50/80 rounded-xl p-6 border border-gray-200/50 dark:border-gray-300/30 hover:shadow-lg transition-all duration-300">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#2e0057] flex items-center justify-center">
                    <option.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-800">
                    {option.title}
                  </h3>
                </div>
                <div className="flex items-center justify-center gap-2 text-[#2e0057] font-medium">
                  {option.action}
                  <motion.div
                    animate={{ x: hoveredCard === option.id ? 3 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-14"
        >
          <div className="bg-gradient-to-br from-[#2e0057] to-[#000000] rounded-2xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Start Your Animation Project</h3>
            <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
              From concept to completion, let{"'"}s collaborate to create animations that leave a
              lasting impression.
            </p>

            <motion.button
              className="bg-white text-purple-600 font-semibold py-3 px-8 rounded-lg inline-flex items-center gap-3 hover:bg-gray-50 hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail className="w-5 h-5" />
              Get Started
              <FaLocationArrow className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  )
}
