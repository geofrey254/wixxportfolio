'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

export default function ContactCTA() {
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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.75,
        ease: 'easeInOut' as const,
      },
    },
  }

  const quickActions = [
    {
      icon: Play,
      title: 'Watch Demo',
      description: 'See our work in action',
      color: 'from-purple-500 to-violet-600',
      href: '#demo',
    },
  ]

  return (
    <section className="py-10 md:py-28 -mt-6 md:-mt-24 dark:border-t dark:border-white rounded-t-4xl relative z-30 overflow-hidden">
      {/* Background with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#2e0057] via-[#2e0057e5] to-[#2e0057] dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2,
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Header Section */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Ready to Start?
            </span>
          </h2>
          <p className="text-xl text-purple-100 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Join over 150+ satisfied clients who trusted us with their digital transformation. Let
            {"'"}s create something extraordinary together.
          </p>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center items-center mb-12 md:mb-0"
        >
          {quickActions.map((action, index) => (
            <motion.a
              key={index}
              href={action.href}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-16 py-2 text-center hover:bg-white/20 transition-all duration-300"
            >
              <div
                className={`inline-flex items-center justify-center p-2 bg-gradient-to-r ${action.color} rounded-2xl mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
              >
                <action.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{action.title}</h3>
              <p className="text-purple-200 dark:text-gray-300">{action.description}</p>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
