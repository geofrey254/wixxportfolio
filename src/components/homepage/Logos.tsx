'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Logos() {
  // First row of logos (scrolling left to right)
  const topRowLogos = [
    {
      name: 'Transistor',
      src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg',
      width: 158,
      height: 48,
    },
    {
      name: 'Reform',
      src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-white.svg',
      width: 158,
      height: 48,
    },
    {
      name: 'Tuple',
      src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg',
      width: 158,
      height: 48,
    },
    {
      name: 'SavvyCal',
      src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg',
      width: 158,
      height: 48,
    },
    {
      name: 'Statamic',
      src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg',
      width: 158,
      height: 48,
    },
    {
      name: 'Laravel',
      src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/laravel-logo-white.svg',
      width: 158,
      height: 48,
    },
  ]

  // Second row of logos (scrolling right to left)
  const bottomRowLogos = [
    {
      name: 'Mirage',
      src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-white.svg',
      width: 158,
      height: 48,
    },
    {
      name: 'StaticKit',
      src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/laravel-logo-white.svg',
      width: 158,
      height: 48,
    },
    {
      name: 'Workcation',
      src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-white.svg',
      width: 158,
      height: 48,
    },
    {
      name: 'Pocket',
      src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg',
      width: 158,
      height: 48,
    },
    {
      name: 'Chronicle',
      src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-white.svg',
      width: 158,
      height: 48,
    },
    {
      name: 'Syntax',
      src: 'https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-white.svg',
      width: 158,
      height: 48,
    },
  ]

  // Duplicate arrays for seamless loop
  const topRowDuplicated = [...topRowLogos, ...topRowLogos, ...topRowLogos]
  const bottomRowDuplicated = [...bottomRowLogos, ...bottomRowLogos, ...bottomRowLogos]

  return (
    <div className="bg-[#2e0057] py-16 md:py-28 -mt-20 md:-mt-20 dark:bg-gray-900 dark:border-t dark:border-white rounded-t-4xl relative z-30 shadow-2xl overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 dark:bg-purple-400/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-500/10 dark:bg-blue-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-center text-2xl md:text-3xl font-bold text-white mb-4">
            Trusted by
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              {' '}
              Amazing Brands
            </span>
          </h2>
          <p className="text-gray-300 dark:text-gray-400 text-lg">
            We{"'"}ve had the privilege to work with some incredible companies
          </p>
        </motion.div>

        {/* Dual Row Carousel */}
        <motion.div
          className="space-y-8 md:space-y-12 pb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Top Row - Left to Right Animation */}
          <div className="relative overflow-hidden">
            {/* Gradient masks for smooth fade */}
            <div className="absolute left-0 top-0 w-20 md:w-32 h-full bg-gradient-to-r from-[#2e0057] to-transparent dark:from-gray-900 z-10"></div>
            <div className="absolute right-0 top-0 w-20 md:w-32 h-full bg-gradient-to-l from-[#2e0057] to-transparent dark:from-gray-900 z-10"></div>

            <motion.div
              className="flex items-center space-x-8 md:space-x-12"
              animate={{
                x: [0, -1896], // Adjust based on total width of logos
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 25,
                  ease: 'linear',
                },
              }}
            >
              {topRowDuplicated.map((logo, index) => (
                <motion.div
                  key={`top-${index}`}
                  className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    alt={logo.name}
                    src={logo.src}
                    width={logo.width}
                    height={logo.height}
                    className="h-8 md:h-12 w-auto object-contain"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Bottom Row - Right to Left Animation */}
          <div className="relative overflow-hidden">
            {/* Gradient masks for smooth fade */}
            <div className="absolute left-0 top-0 w-20 md:w-32 h-full bg-gradient-to-r from-[#2e0057] to-transparent dark:from-gray-900 z-10"></div>
            <div className="absolute right-0 top-0 w-20 md:w-32 h-full bg-gradient-to-l from-[#2e0057] to-transparent dark:from-gray-900 z-10"></div>

            <motion.div
              className="flex items-center space-x-8 md:space-x-12"
              animate={{
                x: [-1896, 0], // Opposite direction
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 25,
                  ease: 'linear',
                },
              }}
            >
              {bottomRowDuplicated.map((logo, index) => (
                <motion.div
                  key={`bottom-${index}`}
                  className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Image
                    alt={logo.name}
                    src={logo.src}
                    width={logo.width}
                    height={logo.height}
                    className="h-8 md:h-12 w-auto object-contain"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
