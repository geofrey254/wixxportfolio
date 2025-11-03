'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Instagram,
  Youtube,
  ArrowUp,
  Heart,
  Send,
} from 'lucide-react'
import Image from 'next/image'
import { useTheme } from 'next-themes'

export default function Footer() {
  const { theme } = useTheme()
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleNewsletterSubmit = async () => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setEmail('')
    setIsSubmitting(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com',
      color: 'hover:text-blue-400',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://instagram.com',
      color: 'hover:text-pink-400',
    },
    { name: 'YouTube', icon: Youtube, href: 'https://youtube.com', color: 'hover:text-red-400' },
  ]

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
  ]

  const services = [
    { name: '2D Animation', href: '/services/2d-animation' },
    { name: '3D Animation', href: '/services/3d-animation' },
    { name: 'Motion Graphics', href: '/services/motion-graphics' },
    { name: 'Brand Identity', href: '/services/brand-identity' },
    { name: 'Video Editing', href: '/services/video-editing' },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-[#2e0057] via-[#1a0033] to-black dark:from-gray-900 dark:via-gray-950 dark:to-black rounded-t-4xl -mt-16 dark:border-t dark:border-white z-30 shadow-2xl overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-500/5 dark:bg-purple-400/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-blue-500/5 dark:bg-blue-400/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-purple-500/3 to-pink-500/3 dark:from-purple-400/3 dark:to-pink-400/3 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand Section */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6">
                {theme === 'light' ? (
                  <Link href="/" className="text-xl lg:text-2xl font-bold relative overflow-hidden">
                    <Image
                      src="/images/dark1.png"
                      alt="Logo"
                      width={500}
                      height={500}
                      className="inline-block mr-2 w-32 transform transition-transform duration-300 group-hover:rotate-12"
                    />
                  </Link>
                ) : (
                  <Link href="/" className="text-xl lg:text-2xl font-bold relative overflow-hidden">
                    <Image
                      src="/images/dark2.png"
                      alt="Logo"
                      width={500}
                      height={500}
                      className="inline-block mr-2 w-32 transform transition-transform duration-300 group-hover:rotate-12"
                    />
                  </Link>
                )}
                <p className="text-gray-300 dark:text-gray-400 leading-relaxed mb-6">
                  Bringing stories to life through exceptional animation and motion graphics.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300 dark:text-gray-400">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <a
                    href="mailto:hello@youranimation.com"
                    className="hover:text-purple-400 transition-colors"
                  >
                    hello@wixx.com
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 dark:text-gray-400">
                  <Phone className="w-4 h-4 text-purple-400" />
                  <a href="tel:+1234567890" className="hover:text-purple-400 transition-colors">
                    +254 712 345 678
                  </a>
                </div>
                <div className="flex items-center space-x-3 text-gray-300 dark:text-gray-400">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span>Nairobi, KE</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold text-white dark:text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-300 dark:text-gray-400 hover:text-purple-400 dark:hover:text-purple-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-purple-500/50 rounded-full mr-3 scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold text-white dark:text-white mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <Link
                      href={service.href}
                      className="text-gray-300 dark:text-gray-400 hover:text-purple-400 dark:hover:text-purple-400 transition-colors duration-300 flex items-center group"
                    >
                      <span className="w-2 h-2 bg-purple-500/50 rounded-full mr-3 scale-0 group-hover:scale-100 transition-transform duration-300"></span>
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold text-white dark:text-white mb-6">
                Stay Updated
              </h4>
              <p className="text-gray-300 dark:text-gray-400 text-sm mb-6">
                Subscribe to our newsletter for the latest updates and animation tips.
              </p>

              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/15 transition-all duration-300"
                  />
                </div>
                <motion.button
                  onClick={handleNewsletterSubmit}
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-all duration-300 disabled:opacity-70 cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Subscribe</span>
                    </>
                  )}
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Social Links & Divider */}
          <motion.div
            className="mt-16 pt-8 border-t border-white/10 dark:border-gray-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
              {/* Social Links */}
              <div className="flex items-center space-x-6">
                <span className="text-gray-400 dark:text-gray-500 text-sm font-medium">
                  Follow us:
                </span>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon
                    return (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`text-gray-400 dark:text-gray-500 ${social.color} transition-colors duration-300`}
                        whileHover={{ scale: 1.2, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    )
                  })}
                </div>
              </div>

              {/* Back to Top */}
              <motion.button
                onClick={scrollToTop}
                className="bg-white/10 hover:bg-white/20 border border-white/20 hover:border-purple-400/50 text-white p-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>

          {/* Bottom Section */}
          <motion.div
            className="mt-8 pt-8 border-t border-white/10 dark:border-gray-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="flex items-center space-x-2 text-gray-400 dark:text-gray-500 text-sm">
                <span>© 2025 WixxStudios. Made with</span>
                <Heart className="w-4 h-4 text-red-400 fill-current animate-pulse" />
                <span>by Maina Geofrey</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Animated Border */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>
      </div>
    </footer>
  )
}
