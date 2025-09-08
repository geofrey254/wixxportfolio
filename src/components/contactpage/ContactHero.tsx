'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function ContactHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  return (
    <section className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2e0057] via-[#3d0a6b] to-[#4a1180] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-24">
      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center mt-4"
      >
        {/* Main Heading */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ ease: 'easeInOut', duration: 1 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <h1 className="text-5xl md:text-7xl lg:text-7xl font-black">
              <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                Let{"'"}s Create
              </span>
            </h1>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Something Amazing
            </span>
          </h2>
        </motion.div>
      </motion.div>
    </section>
  )
}
