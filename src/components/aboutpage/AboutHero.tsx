'use client'
import React from 'react'
import { GiMiddleArrow } from 'react-icons/gi'
import { motion } from 'framer-motion'

export default function AboutHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, duration: 0.8 },
    },
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' as const } },
  }

  return (
    <motion.section
      id="about-hero"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="py-20 md:py-36 px-8 bg-[#2e0057] dark:bg-gray-900 dark:border-t dark:border-white relative z-30 shadow-2xl overflow-hidden flex flex-col gap-8"
    >
      <div className="w-full h-full flex flex-col md:flex-row justify-between gap-10">
        {/* left */}
        <motion.div variants={fadeUp} className="w-full md:w-1/2">
          <p className="text-white leading-relaxed text-lg">
            I{"'"}m Wixx Mangutha, an animator and content creator who makes pixels dance,
            characters breathe, and stories come alive. Whether it{"'"}s for brands, creators, or
            just wild ideas that refuse to stay still, I love turning concepts into visuals that
            entertain, inspire, and stick in your memory.
          </p>
        </motion.div>

        {/* right */}
        <motion.div variants={fadeUp} className="flex justify-end w-full md:w-1/2">
          <h3 className="text-5xl font-bold text-white/80 text-right">
            A Passionate User-Centric Animator.
          </h3>
        </motion.div>
      </div>

      <motion.div
        variants={fadeUp}
        className="flex justify-between items-center flex-col md:flex-row gap-8 md:gap-0"
      >
        {/* experience */}
        <motion.div
          variants={fadeUp}
          whileHover={{ scale: 1.05 }}
          className="flex gap-2 font-bold items-end"
        >
          <h3 className="text-7xl text-white">08</h3>
          <div>
            <div className="text-white">+</div>
            <div className="w-1/2">
              <p className="text-base ml-4 capitalize text-white/70">years of experience</p>
            </div>
          </div>
        </motion.div>

        {/* arrow with bounce animation */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <GiMiddleArrow size={90} className="text-[#e8ceff] dark:text-white" />
        </motion.div>

        {/* email */}
        <motion.div variants={fadeUp}>
          <h3 className="text-2xl text-white/70">
            Email: <span className="text-white font-medium">wixx@gmail.com</span>
          </h3>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
