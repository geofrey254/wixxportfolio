'use client'
import { useRef } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import Image from 'next/image'
import { useTheme } from 'next-themes'

export function Video() {
  const { theme } = useTheme()
  const ref = useRef(null)
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

  return (
    <motion.section
      ref={ref}
      style={{ y }}
      className="relative rounded-t-4xl -mt-16 md:-mt-16 bg-[#2e0057] dark:bg-gray-900 z-30 shadow-2xl overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b bg-scroll  from-[#2e0057] to-black/40 z-10"></div>
      <video
        preload="none"
        autoPlay
        playsInline
        muted
        loop
        className="w-full h-[40vh] md:h-[80vh] object-cover"
      >
        <source src="/videos/vid.mp4" type="video/mp4" />
      </video>
      <div className="absolute bottom-0 right-0">
        {theme === 'light' ? (
          <Image
            src="/images/bg2.png"
            alt="Wixx Logo"
            width={200}
            height={200}
            className="object-cover md:w-96"
          />
        ) : (
          <Image
            src="/images/bg3.png"
            alt="Wixx Logo"
            width={200}
            height={200}
            className="object-cover md:w-96"
          />
        )}
      </div>
    </motion.section>
  )
}
