'use client'
import { useState, useEffect, useMemo } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  // Array of texts to cycle through
  const animationTypes = useMemo(
    () => [
      '2D Animation',
      '3D Animation',
      'Motion Graphics',
      'Character Design',
      'VFX & Compositing',
      'Logo Animation',
    ],
    [],
  )

  useEffect(() => {
    setIsVisible(true)
  }, [])

  // Typing animation effect
  useEffect(() => {
    const typingSpeed = 150
    const deletingSpeed = 100
    const pauseDuration = 2000

    const timer = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < animationTypes[currentTextIndex].length) {
            setCurrentText(animationTypes[currentTextIndex].substring(0, charIndex + 1))
            setCharIndex(charIndex + 1)
          } else {
            // Pause before deleting
            setTimeout(() => setIsDeleting(true), pauseDuration)
          }
        } else {
          if (charIndex > 0) {
            setCurrentText(animationTypes[currentTextIndex].substring(0, charIndex - 1))
            setCharIndex(charIndex - 1)
          } else {
            setIsDeleting(false)
            setCurrentTextIndex((currentTextIndex + 1) % animationTypes.length)
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed,
    )

    return () => clearTimeout(timer)
  }, [charIndex, isDeleting, currentTextIndex, animationTypes])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 80,
        damping: 20,
      },
    },
  }

  return (
    <section className="relative h-[80vh] md:h-screen overflow-hidden">
      {/* Video Background */}
      <video
        preload="none"
        autoPlay
        playsInline
        muted
        loop
        className="w-full h-full md:h-screen object-cover"
      >
        <source src="/videos/vid2.mp4" type="video/mp4" />
        <div className="absolute w-full h-full bg-gradient-to-br from-purple-900 to-black flex items-center justify-center">
          <div className="w-full h-full bg-gradient-to-br from-[#2e0057] to-black"></div>
        </div>
      </video>

      {/* Parallax Gradient Overlay */}
      <motion.div className="absolute inset-0 bg-gradient-to-t from-[#2e0057] dark:from-gray-900 via-black/60 to-black/40 z-10" />

      {/* Main Content */}
      <motion.div
        className="w-full absolute bottom-28 md:bottom-32 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center text-white z-20"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? 'visible' : 'hidden'}
      >
        {/* Animated Typing Text */}
        <motion.div className="text-center" variants={itemVariants}>
          <div className="text-5xl md:text-7xl 2xl:text-9xl font-light text-purple-300 h-10 flex items-center">
            <div className="w-4 md:w-12 h-1 md:h-2 bg-white" />{' '}
            <span className={`text-white font-bold w-full text-left`}>
              {currentText}
              <motion.span
                animate={{ opacity: [1, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                  ease: 'easeInOut',
                }}
                className="ml-1 text-purple-400"
              >
                |
              </motion.span>
            </span>
            <div className="w-4 md:w-12 h-1 md:h-2 bg-white" />
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <span className="text-white/70 text-xs mb-2 tracking-wider">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
            ease: 'easeInOut',
          }}
        >
          <ChevronDown className="w-6 h-6 text-white/70" />
        </motion.div>
      </motion.div>
    </section>
  )
}
