'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ModeToggle } from './ThemeChange'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { Modak } from 'next/font/google'

export default function Navbar() {
  const { theme } = useTheme()
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect for backdrop blur
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? 'backdrop-blur-md bg-white/10 dark:bg-black/20 shadow-lg shadow-purple-500/10 border-b border-white/10 dark:border-purple-500/10'
          : 'bg-transparent'
      }`}
    >
      {/* Main navbar container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0 group">
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
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            <div className="flex items-baseline space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group relative px-4 py-2 text-white dark:text-white font-medium transition-all duration-300"
                >
                  <span className="relative z-10">{link.name}</span>

                  {/* Animated underline */}
                  <div className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400 group-hover:w-full group-hover:left-0 transition-all duration-300" />

                  {/* Subtle glow effect */}
                  <div className="absolute inset-0 rounded-lg bg-purple-400/20 dark:bg-purple-400/20 scale-0 group-hover:scale-100 transition-transform duration-300 blur-md" />
                </Link>
              ))}
            </div>

            {/* Theme Toggle */}
            <div className="ml-4 pl-4 border-l border-gray-300/50 dark:border-purple-500/30">
              <ModeToggle />
            </div>
          </div>

          {/* Mobile menu button and theme toggle */}
          <div className="md:hidden flex items-center space-x-3">
            {/* Mobile Theme Toggle */}
            <ModeToggle />

            {/* Hamburger Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="relative inline-flex items-center justify-center p-2 rounded-lg text-gray-800 dark:text-white hover:text-purple-600 dark:hover:text-purple-300 hover:bg-purple-500/10 dark:hover:bg-purple-500/20 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-transparent transition-all duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>

              {/* Hamburger icon with animation */}
              <div className="relative w-6 h-6">
                <span
                  className={`absolute block h-0.5 w-6 bg-white transform transition-all duration-300 ${
                    isOpen ? 'rotate-45 translate-y-2.5' : 'translate-y-1'
                  }`}
                />
                <span
                  className={`absolute block h-0.5 w-6 bg-white transform transition-all duration-300 ${
                    isOpen ? 'opacity-0' : 'translate-y-2.5'
                  }`}
                />
                <span
                  className={`absolute block h-0.5 w-6 bg-white transform transition-all duration-300 ${
                    isOpen ? '-rotate-45 translate-y-2.5' : 'translate-y-4'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 transition-all duration-500 ease-out ${
          isOpen
            ? 'opacity-100 visible transform translate-y-0'
            : 'opacity-0 invisible transform -translate-y-4'
        }`}
      >
        <div className="backdrop-blur-xl bg-white dark:bg-black border-b border-[#2e0057] dark:border-white">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="space-y-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`group block px-4 py-3 rounded-lg text-gray-800 dark:text-white font-medium transition-all duration-300 hover:text-purple-600 dark:hover:text-purple-300 hover:bg-gradient-to-r hover:from-purple-500/10 hover:to-pink-500/10 dark:hover:from-purple-600/30 dark:hover:to-pink-600/30 transform hover:translate-x-2 ${
                    isOpen ? 'animate-fadeInUp' : ''
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 dark:from-purple-400 dark:to-pink-400 rounded-full mr-3 scale-0 group-hover:scale-100 transition-transform duration-300" />
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.4s ease-out forwards;
        }
      `}</style>
    </nav>
  )
}
