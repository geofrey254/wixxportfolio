'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Image from 'next/image'
import { useTheme } from 'next-themes'

export default function Parallax() {
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

  return (
    <motion.section
      ref={ref}
      style={{ y }}
      className="relative rounded-t-4xl h-[80vh] w-full -mt-16 md:-mt-16 bg-[#2e0057] dark:bg-gray-900 dark:border-t dark:border-white z-30 shadow-2xl overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-t bg-scroll  from-[#2e0057] dark:from-gray-900 to-black/40 z-10"></div>

      <div className="">
        <Image src="/images/bg.jpg" alt="Wixx Logo" fill className="object-cover md:w-96" />
      </div>
    </motion.section>
  )
}
