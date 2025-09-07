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

  // Duplicate arrays for seamless loop
  const topRowDuplicated = [...topRowLogos, ...topRowLogos, ...topRowLogos]

  return (
    <div className="bg-[#2e0057] py-16 md:py-12 -mt-20 md:-mt-20 dark:bg-gray-900 dark:border-t dark:border-white rounded-t-4xl relative z-30 shadow-2xl overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 dark:bg-purple-400/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-500/10 dark:bg-blue-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="mx-auto relative">
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
            <motion.div
              className="flex items-center space-x-8 md:space-x-12"
              animate={{
                x: [0, -1896], // Adjust based on total width of logos
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 90,
                  ease: 'linear',
                },
              }}
            >
              {topRowDuplicated.map((logo, index) => (
                <motion.div
                  key={`top-${index}`}
                  className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100 border border-white p-4 rounded-4xl"
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
