'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Image from 'next/image'

export default function Parallax() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 0.8', '0.6 1'],
  })

  // Base parallax motion
  const rawY = useTransform(scrollYProgress, [0, 1], [80, 0])
  const y = useSpring(rawY, { stiffness: 80, damping: 20, mass: 0.5 })

  // Extra effects
  const scale = useTransform(scrollYProgress, [0, 1], [1.1, 1]) // smooth zoom
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]) // fade in overlay

  return (
    <motion.section
      ref={ref}
      style={{ y }}
      initial={{ opacity: 0, scale: 1 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative rounded-t-4xl h-[80vh] w-full -mt-16 md:-mt-32 bg-[#2e0057] dark:bg-gray-900 dark:border-t dark:border-white z-30 shadow-2xl overflow-hidden"
    >
      {/* Overlay */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 bg-gradient-to-t from-[#2e0057] dark:from-gray-900 to-black/40 z-10"
      />

      {/* Background Image with zoom effect */}
      <motion.div style={{ scale }}>
        <Image src="/images/bg.jpg" alt="Wixx Logo" fill priority className="object-cover" />
      </motion.div>
    </motion.section>
  )
}
