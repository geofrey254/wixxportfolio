'use client'
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { Play, ExternalLink, Calendar, Clock, ArrowRight } from 'lucide-react'
import { FaLocationArrow } from 'react-icons/fa'
import Image from 'next/image'
import Link from 'next/link'

export default function Projects() {
  const ref = useRef(null)
  const [selectedProject, setSelectedProject] = useState(null)
  const [hoveredProject, setHoveredProject] = useState(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 0.8', '0.6 1'],
  })

  // Parallax base transforms
  const rawY = useTransform(scrollYProgress, [0, 1], [60, 0])
  const rawOpacity = useTransform(scrollYProgress, [0, 1], [0, 1])

  // Smooth them out with spring physics
  const y = useSpring(rawY, {
    stiffness: 80,
    damping: 20,
    mass: 0.5,
  })

  const opacity = useSpring(rawOpacity, {
    stiffness: 100,
    damping: 25,
    mass: 0.5,
  })

  // Project data
  const projects = [
    {
      id: 1,
      title: 'Brand Identity Animation',
      subtitle: 'Tech Startup Rebrand',
      description:
        'A dynamic logo reveal and brand story for a tech startup, featuring sleek transitions and modern aesthetics. This project involved creating a complete visual identity system with animated elements.',
      thumbnail: '/images/3.jpg',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      duration: '2:30',
      date: '2024',
      category: 'Brand Design',
      tags: ['Logo Animation', '2D Motion', 'Brand Identity', 'After Effects'],
      client: 'TechFlow Inc.',
    },
    {
      id: 2,
      title: 'Character Animation Reel',
      subtitle: 'Emotional Storytelling',
      description:
        'Expressive character animations showcasing personality-driven movement and emotional storytelling. Features hand-drawn 2D characters with fluid motion and compelling narratives.',
      thumbnail: '/api/placeholder/600/400',
      videoUrl: 'https://vimeo.com/123456789',
      duration: '1:45',
      date: '2024',
      category: 'Character Design',
      tags: ['Character Animation', '2D Animation', 'Storytelling', 'TVPaint'],
      client: 'Animation Studio',
    },
    {
      id: 3,
      title: 'Motion Graphics Showcase',
      subtitle: 'UI/UX Animations',
      description:
        'A compilation of motion graphics work including infographics, transitions, and UI animations. Focused on clean, purposeful motion that enhances user experience.',
      thumbnail: '/api/placeholder/600/400',
      videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
      duration: '3:15',
      date: '2023',
      category: 'Motion Graphics',
      tags: ['Motion Graphics', 'Infographics', 'UI Animation', 'Cinema 4D'],
      client: 'Digital Agency',
    },
    {
      id: 4,
      title: '3D Product Visualization',
      subtitle: 'E-commerce Solutions',
      description:
        'Photorealistic product animations with dynamic lighting and camera movements for e-commerce platforms. Showcasing products in their best light with cinematic quality.',
      thumbnail: '/api/placeholder/600/400',
      videoUrl: 'https://vimeo.com/987654321',
      duration: '1:20',
      date: '2023',
      category: '3D Animation',
      tags: ['3D Animation', 'Product Viz', 'Rendering', 'Blender'],
      client: 'E-commerce Brand',
    },
  ]

  const handleVideoClick = (url) => {
    window.open(url, '_blank')
  }

  const activeProject = selectedProject || hoveredProject || projects[0]

  return (
    <motion.section
      ref={ref}
      style={{ y }}
      className="py-20 md:py-28 -mt-6 md:-mt-16 bg-[#2e0057] dark:bg-gray-900 rounded-t-4xl relative z-30 shadow-2xl overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 dark:bg-purple-400/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-blue-500/10 dark:bg-blue-400/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white dark:text-white">
            Featured
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              {' '}
              Projects
            </span>
          </h2>
          <p className="text-base md:text-xl text-gray-300 dark:text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Explore our latest animation works. Hover over project titles to see details, or click
            to watch.
          </p>
        </motion.div>

        {/* Main Projects Interface */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Project List */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white dark:text-white mb-2">Project List</h3>
              <p className="text-gray-400 dark:text-gray-500">Click or hover to explore details</p>
            </div>

            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                className={`group cursor-pointer p-6 rounded-xl border transition-all duration-300 ${
                  selectedProject?.id === project.id || hoveredProject?.id === project.id
                    ? 'bg-white/10 border-purple-400/50 shadow-lg shadow-purple-500/20'
                    : 'bg-white/5 border-white/10 hover:bg-white/8 hover:border-white/20'
                }`}
                onMouseEnter={() => setHoveredProject(project)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() =>
                  setSelectedProject(selectedProject?.id === project.id ? null : project)
                }
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-sm text-purple-400 font-medium">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <div className="h-px bg-gradient-to-r from-purple-400/50 to-transparent flex-1"></div>
                      <span className="text-xs text-gray-400 bg-white/10 px-2 py-1 rounded-full">
                        {project.category}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-gray-400 text-sm">{project.subtitle}</p>
                  </div>
                  <motion.div
                    className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ x: 5 }}
                  >
                    <ArrowRight className="w-5 h-5 text-purple-400" />
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side - Project Details */}
          <motion.div
            className="lg:sticky lg:top-32"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10"
              >
                {/* Video Thumbnail */}
                <div className="relative mb-6 h-64 bg-gray-800 rounded-xl overflow-hidden group cursor-pointer">
                  <Image
                    fill
                    src={activeProject.thumbnail}
                    alt={activeProject.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />

                  {/* Play Button Overlay */}
                  <div
                    className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    onClick={() => handleVideoClick(activeProject.videoUrl)}
                  >
                    <motion.div
                      className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play className="w-8 h-8 text-white ml-1" />
                    </motion.div>
                  </div>

                  {/* Duration & Date */}
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between">
                    <div className="bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-md flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {activeProject.duration}
                    </div>
                    <div className="bg-black/70 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-md flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {activeProject.date}
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{activeProject.title}</h3>
                    <p className="text-purple-400 font-medium mb-4">{activeProject.subtitle}</p>
                    <p className="text-gray-300 leading-relaxed">{activeProject.description}</p>
                  </div>

                  {/* Client */}
                  <div>
                    <span className="text-gray-400 text-sm">Client: </span>
                    <span className="text-white font-medium">{activeProject.client}</span>
                  </div>

                  {/* Watch Button */}
                  <motion.button
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium py-3 px-6 rounded-xl flex items-center justify-center gap-2 hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleVideoClick(activeProject.videoUrl)}
                  >
                    <Play className="w-4 h-4" />
                    Watch Project
                    <ExternalLink className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        <motion.div
          className="text-center flex items-center justify-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Link
            href="#"
            className="flex items-center justify-center gap-4 bg-white/5 border-white/10 py-3 px-6 rounded-3xl text-white hover:bg-white/10 hover:border hover:border-purple-400/50 hover:shadow-lg hover:shadow-purple-500/20"
          >
            More Projects{' '}
            <span>
              <FaLocationArrow className="animate-[bounce_3s_ease-in-out_infinite]" />
            </span>
          </Link>
        </motion.div>
      </div>
    </motion.section>
  )
}
