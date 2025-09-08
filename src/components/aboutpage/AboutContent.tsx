'use client'
import React from 'react'
import { FiPlay, FiUsers, FiTrendingUp, FiStar } from 'react-icons/fi'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef } from 'react'

export default function AboutContent() {
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

  return (
    <motion.section
      ref={ref}
      style={{ y }}
      className="py-10 md:py-28 -mt-15 md:-mt-15 bg-white dark:bg-gray-900 dark:border-t dark:border-white  rounded-t-4xl relative z-30 overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-100 to-transparent rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-indigo-100 to-transparent rounded-full blur-3xl opacity-50"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
            <span>About Our Studio</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-light text-gray-900 mb-6 leading-tight flex flex-col justify-center items-center">
            Where Stories Meet
            <span className="text-white font-bold bg-[#2e0057] p-2 rounded-3xl">
              Stunning Animation
            </span>
          </h2>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center px-8">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Our Creative Journey</h3>
              <p className="text-gray-700 leading-relaxed">
                Founded with a simple belief that animation should do more than just move – it
                should move people. Our studio has grown from a one-person passion project into a
                creative powerhouse that brings ideas to life through cutting-edge animation
                techniques and unbounded imagination.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Every project we touch becomes a canvas for innovation. From brand commercials that
                stop scrollers in their tracks to explainer videos that make complex ideas crystal
                clear, we craft visual experiences that resonate, engage, and inspire action.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
                <FiPlay size={16} className="text-purple-600" />
                <span className="text-sm font-medium text-gray-700">2D Animation</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
                <FiPlay size={16} className="text-purple-600" />
                <span className="text-sm font-medium text-gray-700">Motion Graphics</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
                <FiPlay size={16} className="text-purple-600" />
                <span className="text-sm font-medium text-gray-700">3D Modeling</span>
              </div>
            </div>
          </div>

          {/* Right stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            <motion.div
              variants={cardVariants}
              className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl text-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-[#2e0057] rounded-full flex items-center justify-center mx-auto mb-4">
                <FiUsers size={24} className="text-white" />
              </div>
              <h4 className="text-3xl font-bold text-purple-900 mb-2">150+</h4>
              <p className="text-[#2e0057] font-medium">Happy Clients</p>
            </motion.div>

            <motion.div
              initial="hidden"
              className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl text-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-[#2e0057] rounded-full flex items-center justify-center mx-auto mb-4">
                <FiPlay size={24} className="text-white" />
              </div>
              <h4 className="text-3xl font-bold text-indigo-900 mb-2">500+</h4>
              <p className="text-[#2e0057] font-medium">Projects Delivered</p>
            </motion.div>

            <motion.div
              whileInView="visible"
              className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-2xl text-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-[#2e0057] rounded-full flex items-center justify-center mx-auto mb-4">
                <FiTrendingUp size={24} className="text-white" />
              </div>
              <h4 className="text-3xl font-bold text-pink-900 mb-2">98%</h4>
              <p className="text-[#2e0057] font-medium">Client Satisfaction</p>
            </motion.div>

            <motion.div
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl text-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-[#2e0057] rounded-full flex items-center justify-center mx-auto mb-4">
                <FiStar size={24} className="text-white" />
              </div>
              <h4 className="text-3xl font-bold text-orange-900 mb-2">15+</h4>
              <p className="text-[#2e0057] font-medium">Awards Won</p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  )
}
