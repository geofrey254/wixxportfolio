'use client'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { useRef, useState } from 'react'
import {
  Play,
  Palette,
  Layers,
  Video,
  Sparkles,
  Zap,
  Clock,
  Users,
  Award,
  Target,
  Star,
  Heart,
  Hexagon,
} from 'lucide-react'
import { FaLocationArrow } from 'react-icons/fa'
import Link from 'next/link'

export default function Services() {
  const ref = useRef(null)
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 0.8', '0.6 1'],
  })

  // Parallax transforms with spring physics
  const rawY = useTransform(scrollYProgress, [0, 1], [60, 0])

  const y = useSpring(rawY, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  })

  // Services data with images and visual elements
  const services = [
    {
      id: 1,
      icon: Video,
      title: '2D Animation',
      subtitle: 'Character & Motion Design',
      description:
        'Bringing characters to life with fluid, expressive 2D animation. From concept to final render, I create engaging animated content that tells your story.',
      features: [
        'Character Design',
        'Frame-by-frame Animation',
        'Rigged Animation',
        'Storyboarding',
      ],
      price: 'Starting at $500',
      duration: '1-3 weeks',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'bg-gradient-to-br from-purple-500/20 to-pink-500/20',
      image: '/api/placeholder/400/300',
      preview: '/api/placeholder/600/400',
      demoElements: [
        { x: 20, y: 30, size: 'w-8 h-8', color: 'bg-purple-400', delay: 0 },
        { x: 80, y: 60, size: 'w-6 h-6', color: 'bg-pink-400', delay: 0.3 },
        { x: 50, y: 80, size: 'w-4 h-4', color: 'bg-purple-300', delay: 0.6 },
      ],
    },
    {
      id: 2,
      icon: Layers,
      title: 'Motion Graphics',
      subtitle: 'Brand & UI Animation',
      description:
        'Eye-catching motion graphics that enhance your brand identity. Perfect for logos, infographics, and user interface animations.',
      features: ['Logo Animation', 'Infographics', 'UI/UX Animation', 'Explainer Videos'],
      price: 'Starting at $300',
      duration: '3-7 days',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20',
      image: '/api/placeholder/400/300',
      preview: '/api/placeholder/600/400',
      demoElements: [
        { x: 30, y: 20, size: 'w-10 h-2', color: 'bg-blue-400', delay: 0 },
        { x: 60, y: 40, size: 'w-6 h-6', color: 'bg-cyan-400', delay: 0.2 },
        { x: 20, y: 70, size: 'w-12 h-3', color: 'bg-blue-300', delay: 0.4 },
      ],
    },
    {
      id: 3,
      icon: Sparkles,
      title: '3D Animation',
      subtitle: 'Product & Environment',
      description:
        'Stunning 3D animations and visualizations. From product showcases to architectural walkthroughs, I create photorealistic 3D content.',
      features: [
        'Product Visualization',
        '3D Modeling',
        'Lighting & Rendering',
        'Camera Animation',
      ],
      price: 'Starting at $800',
      duration: '2-4 weeks',
      gradient: 'from-emerald-500 to-teal-500',
      bgGradient: 'bg-gradient-to-br from-emerald-500/20 to-teal-500/20',
      image: '/api/placeholder/400/300',
      preview: '/api/placeholder/600/400',
      demoElements: [
        { x: 40, y: 30, size: 'w-8 h-8', color: 'bg-emerald-400', delay: 0 },
        { x: 70, y: 50, size: 'w-6 h-6', color: 'bg-teal-400', delay: 0.4 },
        { x: 25, y: 65, size: 'w-5 h-5', color: 'bg-emerald-300', delay: 0.8 },
      ],
    },
    {
      id: 4,
      icon: Palette,
      title: 'Content Creation',
      subtitle: 'Social Media & Marketing',
      description:
        'Complete content packages for your social media and marketing needs. Engaging animations optimized for different platforms.',
      features: ['Social Media Content', 'Ad Animations', 'Template Creation', 'Brand Consistency'],
      price: 'Starting at $200',
      duration: '1-2 weeks',
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'bg-gradient-to-br from-orange-500/20 to-red-500/20',
      image: '/api/placeholder/400/300',
      preview: '/api/placeholder/600/400',
      demoElements: [
        { x: 35, y: 25, size: 'w-7 h-7', color: 'bg-orange-400', delay: 0 },
        { x: 65, y: 45, size: 'w-5 h-5', color: 'bg-red-400', delay: 0.3 },
        { x: 45, y: 70, size: 'w-6 h-6', color: 'bg-orange-300', delay: 0.6 },
      ],
    },
  ]

  const stats = [
    { icon: Users, value: '50+', label: 'Happy Clients' },
    { icon: Play, value: '200+', label: 'Projects Completed' },
    { icon: Award, value: '5+', label: 'Years Experience' },
    { icon: Zap, value: '24h', label: 'Response Time' },
  ]

  // Floating animation elements
  const FloatingElements = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated shapes */}
      <motion.div
        className="absolute top-20 left-10 w-16 h-16 border-2 border-purple-300/30 dark:border-purple-400/30 rounded-full"
        animate={{
          y: [-10, 10, -10],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg"
        animate={{
          y: [10, -10, 10],
          rotate: [360, 180, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-40 left-1/4 w-12 h-12"
        animate={{
          y: [-15, 15, -15],
          x: [-5, 5, -5],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <Hexagon className="w-full h-full text-emerald-400/40 dark:text-emerald-300/40" />
      </motion.div>
      <motion.div
        className="absolute top-60 right-1/3 w-6 h-6 bg-gradient-to-r from-pink-400 to-red-400 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )

  return (
    <motion.section
      ref={ref}
      style={{ y }}
      className="py-20 md:py-28 -mt-20 md:-mt-20 bg-white dark:bg-gray-900 dark:border-t dark:border-white rounded-t-4xl relative z-30 shadow-2xl overflow-hidden"
    >
      {/* Enhanced decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500/5 dark:bg-purple-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/5 dark:bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/5 dark:bg-emerald-400/5 rounded-full blur-3xl"></div>

        {/* Animated gradient orbs */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-2xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <FloatingElements />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Enhanced Header with animated elements */}
        <motion.div
          className="text-center mb-20 relative"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative elements around title */}
          <motion.div
            className="absolute -top-10 left-1/2 transform -translate-x-1/2"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          >
            <Star className="w-6 h-6 text-purple-400/60 dark:text-purple-300/60" />
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white relative">
            My
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 dark:from-purple-400 dark:via-pink-400 dark:to-blue-400 bg-clip-text text-transparent relative">
              {' '}
              Services
              <motion.div
                className="absolute -right-8 top-0 w-4 h-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
                animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
            From concept to completion, I offer comprehensive animation and content creation
            services tailored to bring your vision to life.
          </p>
        </motion.div>

        {/* Enhanced Stats Section with images */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Animated background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ scale: 0 }}
                whileHover={{ scale: 1 }}
                transition={{ duration: 0.3 }}
              />

              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <stat.icon className="w-8 h-8 text-purple-600 dark:text-purple-400 mx-auto mb-3 relative z-10" />
              </motion.div>
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1 relative z-10">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 relative z-10">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced Services Grid with more visual elements */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={`group relative p-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-transparent hover:shadow-2xl hover:shadow-purple-500/10 dark:hover:shadow-purple-400/10 transition-all duration-500 cursor-pointer overflow-hidden ${
                hoveredService === service.id ? service.bgGradient : ''
              }`}
              onMouseEnter={() => setHoveredService(service.id)}
              onMouseLeave={() => setHoveredService(null)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              {/* Enhanced Service Icon with animation */}
              <motion.div
                className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${service.gradient} mb-6 relative`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <service.icon className="w-6 h-6 text-white" />

                {/* Sparkle effect */}
                <motion.div
                  className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100"
                  animate={
                    hoveredService === service.id
                      ? {
                          scale: [0, 1, 0],
                          opacity: [0, 1, 0],
                        }
                      : {}
                  }
                  transition={{ duration: 1, repeat: Infinity, delay: 0.5 }}
                />
              </motion.div>

              {/* Service Content */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-purple-600 dark:text-purple-400 font-medium mb-4">
                  {service.subtitle}
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Enhanced Features with icons */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3 uppercase tracking-wide">
                  What{"'"}s Included:
                </h4>
                <div className="grid grid-cols-1 gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-600 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors"
                      initial={{ x: -10, opacity: 0 }}
                      animate={
                        hoveredService === service.id
                          ? { x: 0, opacity: 1 }
                          : { x: -10, opacity: 0.8 }
                      }
                      transition={{ delay: featureIndex * 0.1 }}
                    >
                      <motion.div
                        className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"
                        animate={hoveredService === service.id ? { scale: [1, 1.3, 1] } : {}}
                        transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                      />
                      {feature}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Service Details */}
              <div className="flex items-center justify-between mb-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <Clock className="w-4 h-4 mr-1" />
                  {service.duration}
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <Target className="w-4 h-4 mr-1" />
                  {service.price}
                </div>
              </div>

              {/* Enhanced Hover Effect Border */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}
              ></div>
            </motion.div>
          ))}
        </div>

        {/* Enhanced Process Section */}
        <motion.div
          className="mt-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How We Work Together
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              A streamlined process designed to deliver exceptional results on time and within
              budget.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description: 'We discuss your vision, goals, and requirements',
                icon: Target,
              },
              {
                step: '02',
                title: 'Concept',
                description: 'I create initial concepts and storyboards for approval',
                icon: Palette,
              },
              {
                step: '03',
                title: 'Production',
                description: 'Animation production with regular updates and feedback',
                icon: Video,
              },
              {
                step: '04',
                title: 'Delivery',
                description: 'Final delivery with all source files and revisions',
                icon: Heart,
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                className="text-center relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                {/* Connection line */}
                {index < 3 && (
                  <motion.div
                    className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-purple-300 to-blue-300 dark:from-purple-600 dark:to-blue-600 z-0"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                  />
                )}

                <motion.div
                  className="relative z-10 inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 text-white font-bold text-xl rounded-full mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {process.step}
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    animate={{
                      boxShadow: [
                        '0 0 0 0 rgba(147, 51, 234, 0.4)',
                        '0 0 0 10px rgba(147, 51, 234, 0)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                </motion.div>

                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {process.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                  {process.description}
                </p>

                {/* Process icon */}
                <motion.div
                  className="mt-4 flex justify-center"
                  animate={{ y: [-2, 2, -2] }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <process.icon className="w-5 h-5 text-purple-400 dark:text-purple-300" />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          className="text-center mt-20 relative mb-8 md:mb-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative elements */}
          <motion.div
            className="absolute -top-4 left-1/2 transform -translate-x-1/2 flex space-x-2"
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
            <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
            <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
          </motion.div>

          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-4 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-500 dark:to-blue-500 text-white py-4 px-8 rounded-2xl font-medium hover:shadow-2xl hover:shadow-purple-500/25 dark:hover:shadow-purple-400/25 transition-all duration-300 hover:scale-105 relative overflow-hidden group"
          >
            <motion.span
              className="absolute inset-0 bg-white/10"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />
            Start Your Project
            <span>
              <FaLocationArrow className="animate-[bounce_3s_ease-in-out_infinite] group-hover:animate-pulse" />
            </span>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  )
}
