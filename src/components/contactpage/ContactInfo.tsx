'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin } from 'lucide-react'
import Link from 'next/link'
import { FaInstagram, FaTwitter, FaLinkedin, FaDribbble } from 'react-icons/fa'

export default function ContactInfo() {
  const containerVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      value: 'hello@yourdesign.com',
      description: 'Drop us a line anytime',
      href: 'mailto:hello@yourdesign.com',
      color: 'from-orange-500 to-red-600',
    },
  ]

  const socialLinks = [
    { name: 'Instagram', href: '#', icon: FaInstagram },
    { name: 'Twitter', href: '#', icon: FaTwitter },
    { name: 'LinkedIn', href: '#', icon: FaLinkedin },
    { name: 'Dribbble', href: '#', icon: FaDribbble },
  ]

  return (
    <motion.div
      id="contact-info"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="space-y-8 pb-8"
    >
      {/* Header */}
      <motion.div variants={itemVariants}>
        <h2 className="text-4xl lg:text-5xl font-bold text-[#2e0057] dark:text-white mb-4">
          Get In Touch
        </h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
          Ready to discuss your project? Choose your preferred way to connect with us. We{"'"}re
          here to help bring your vision to life.
        </p>
      </motion.div>

      {/* Contact Methods Grid */}
      <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {contactMethods.map((method, index) => (
          <motion.a
            key={index}
            href={method.href}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="group block transition-all duration-300"
          >
            <div className="flex items-start gap-4">
              <div
                className={`p-3 rounded-xl bg-gradient-to-r ${method.color} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
              >
                <method.icon className="w-6 h-6 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-[#2e0057] dark:group-hover:text-purple-400 transition-colors">
                  {method.title}
                </h3>
                <p className="text-[#2e0057] dark:text-purple-400 font-medium mb-1">
                  {method.value}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{method.description}</p>
              </div>
            </div>
          </motion.a>
        ))}
      </motion.div>

      {/* Office Location */}
      <motion.div
        variants={itemVariants}
        className="bg-gradient-to-br from-[#2e0057]/5 to-purple-100/50 dark:from-gray-800 dark:to-gray-700 p-8 rounded-3xl border border-[#2e0057]/10 dark:border-gray-600"
      >
        <div className="flex items-start gap-6">
          <div className="p-4 bg-gradient-to-r from-[#2e0057] to-purple-700 rounded-2xl shadow-lg">
            <MapPin className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#2e0057] dark:text-white mb-3">Our Studio</h3>
            <div className="space-y-2 text-gray-600 dark:text-gray-300">
              <p>123 Creative Avenue</p>
              <p>Design District, Nairobi</p>
              <p>Kenya</p>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} className="inline-block mt-4">
              <Link
                href="#map"
                className="text-[#2e0057] dark:text-purple-400 font-semibold hover:underline flex items-center gap-2"
              >
                View on Map
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Social Links */}
      <motion.div variants={itemVariants}>
        <h3 className="text-xl font-semibold text-[#2e0057] dark:text-white mb-4">
          Follow Our Work
        </h3>
        <div className="flex gap-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 bg-gradient-to-r from-[#2e0057] to-purple-700 rounded-xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
              title={social.name}
            >
              <social.icon className="w-6 h-6" />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
