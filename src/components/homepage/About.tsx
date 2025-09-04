'use client'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'
import { Users, Target, PlayCircle, Sparkles } from 'lucide-react'

export default function About() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 0.8', '0.6 1'],
  })

  // Parallax base transforms
  const rawY = useTransform(scrollYProgress, [0, 1], [40, 0])

  // Smooth them out with spring physics
  const y = useSpring(rawY, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  })

  const cardVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  // Stats data
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: PlayCircle },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '5+', label: 'Years Experience', icon: Target },
    { number: '24/7', label: 'Creative Process', icon: Sparkles },
  ]

  return (
    <motion.section
      ref={ref}
      style={{ y }}
      className="py-10 md:py-28 -mt-6 md:-mt-15 bg-white dark:bg-[#2e0057] rounded-t-4xl relative z-30 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-[#6b1fad] via-purple-600 to-blue-600 dark:from-white dark:to-white bg-clip-text text-transparent"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About Wixx Studios
          </motion.h2>
          <motion.p
            className="text-base md:text-xl text-gray-600 dark:text-white/60 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We are a passionate team of animators and digital artists dedicated to bringing stories
            to life through the magic of motion. Every frame we create is infused with creativity,
            precision, and a deep understanding of visual storytelling.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#6b1fad] to-purple-600 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-[#6b1fad] mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
