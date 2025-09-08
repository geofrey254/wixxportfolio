'use client'
import React, { useState, useEffect } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import { ExternalLink, ChevronLeft, ChevronRight, Play } from 'lucide-react'
import Image from 'next/image'

export default function PortfolioSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const [itemsToShow, setItemsToShow] = useState(1) // default for SSR

  const portfolioItems = [
    {
      id: 1,
      title: 'Brand Animation Series',
      category: 'Branding',
      instagramUrl: 'https://instagram.com/p/example1',
      thumbnail:
        'https://images.unsplash.com/photo-1558618666-fccd7c356bff?w=800&h=1200&fit=crop&auto=format&q=80',
    },
    {
      id: 2,
      title: 'Character Design Showcase',
      category: 'Character Design',
      instagramUrl: 'https://instagram.com/p/example2',
      thumbnail:
        'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=1200&fit=crop&auto=format&q=80',
    },
    {
      id: 3,
      title: 'Product Explainer Magic',
      category: 'Motion Graphics',
      instagramUrl: 'https://instagram.com/p/example3',
      thumbnail:
        'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&h=1200&fit=crop&auto=format&q=80',
    },
    {
      id: 4,
      title: 'Social Media Campaign',
      category: 'Social Media',
      instagramUrl: 'https://instagram.com/p/example4',
      thumbnail:
        'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&h=1200&fit=crop&auto=format&q=80',
    },
    {
      id: 5,
      title: '3D Motion Experiments',
      category: '3D Animation',
      instagramUrl: 'https://instagram.com/p/example5',
      thumbnail:
        'https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?w=800&h=1200&fit=crop&auto=format&q=80',
    },
    {
      id: 6,
      title: 'Logo Animation Collection',
      category: 'Logo Design',
      instagramUrl: 'https://instagram.com/p/example6',
      thumbnail:
        'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=1200&fit=crop&auto=format&q=80',
    },
  ]

  // ✅ Handle responsiveness safely
  useEffect(() => {
    const updateItemsToShow = () => {
      if (window.innerWidth >= 1024) setItemsToShow(3)
      else if (window.innerWidth >= 768) setItemsToShow(2)
      else setItemsToShow(1)
    }

    updateItemsToShow() // run once on mount
    window.addEventListener('resize', updateItemsToShow)
    return () => window.removeEventListener('resize', updateItemsToShow)
  }, [])

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % portfolioItems.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, portfolioItems.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % portfolioItems.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length)
    setIsAutoPlaying(false)
  }

  const getVisibleItems = () => {
    const items = []
    const totalItems = portfolioItems.length

    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentSlide + i) % totalItems
      items.push({
        ...portfolioItems[index],
        position: i,
        isCenter: i === Math.floor(itemsToShow / 2),
      })
    }

    return items
  }

  return (
    <section className="bg-[#2e0057] dark:bg-gray-900 min-h-screen w-full relative overflow-hidden py-12">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Header Section */}
      <div className="relative z-10 pt-16 pb-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent mb-6">
            Featured Works
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed">
            Discover our latest creative projects and visual masterpieces
          </p>
        </div>
      </div>

      {/* Main Carousel Container */}
      <div className="relative z-10 px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Portfolio Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {getVisibleItems().map((item) => (
              <Card
                key={`${item.id}-${currentSlide}`}
                className={`group relative overflow-hidden bg-transparent border-0 cursor-pointer transition-all duration-700 transform
                  ${item.isCenter ? 'lg:scale-105 lg:z-20' : 'lg:scale-95 lg:z-10'}
                  hover:scale-105 hover:z-30
                `}
                onMouseEnter={() => {
                  setHoveredItem(item.id)
                  setIsAutoPlaying(false)
                }}
                onMouseLeave={() => {
                  setHoveredItem(null)
                  setTimeout(() => setIsAutoPlaying(true), 2000)
                }}
              >
                <CardContent className="p-0 h-96 lg:h-[500px] relative">
                  <div className="relative w-full h-full overflow-hidden rounded-2xl bg-gradient-to-br from-purple-900/20 to-pink-900/20 backdrop-blur-sm border border-white/10">
                    {/* Image */}
                    <Image
                      fill
                      src={item.thumbnail}
                      alt={item.title}
                      className={`absolute inset-0 w-full h-full object-cover transition-all duration-700
                        ${hoveredItem === item.id ? 'scale-110 blur-sm' : 'scale-100'}
                      `}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>

                    {/* Animated Border */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-blue-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[2px]">
                      <div className="w-full h-full rounded-2xl bg-black/20 backdrop-blur-sm"></div>
                    </div>

                    {/* Play Button Overlay */}
                    <div
                      className={`absolute inset-0 flex items-center justify-center transition-all duration-500
                      ${hoveredItem === item.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}
                    `}
                    >
                      <div className="bg-white/20 backdrop-blur-md rounded-full p-6 border border-white/30 shadow-2xl">
                        <Play className="w-8 h-8 text-white ml-1" fill="white" />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <div className="mb-2">
                        <span className="inline-block px-3 py-1 text-xs font-semibold text-purple-200 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-400/30">
                          {item.category}
                        </span>
                      </div>
                      <h3 className="text-white font-bold text-xl lg:text-2xl mb-4 leading-tight drop-shadow-lg">
                        {item.title}
                      </h3>
                      <a
                        href={item.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-white hover:text-purple-200 transition-all duration-300 text-sm font-medium bg-gradient-to-r from-purple-600/80 to-pink-600/80 backdrop-blur-sm px-4 py-2 rounded-full hover:from-purple-500/90 hover:to-pink-500/90 border border-white/20 hover:border-white/40 shadow-lg hover:shadow-purple-500/25 transform hover:scale-105"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Watch Video
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-6">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="group bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 hover:border-white/40 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <ChevronLeft className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>

            {/* Dots Indicator */}
            <div className="flex gap-2">
              {portfolioItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentSlide(index)
                    setIsAutoPlaying(false)
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 border border-white/30
                    ${
                      currentSlide === index
                        ? 'bg-gradient-to-r from-purple-500 to-pink-500 scale-125 shadow-lg shadow-purple-500/50'
                        : 'bg-white/20 hover:bg-white/40 hover:scale-110'
                    }
                  `}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="group bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 hover:border-white/40 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <ChevronRight className="w-6 h-6 group-hover:scale-110 transition-transform" />
            </button>
          </div>

          {/* Auto-play Indicator */}
          <div className="flex items-center justify-center mt-6">
            <div
              className={`text-xs text-white/60 flex items-center gap-2 transition-opacity duration-300 ${
                isAutoPlaying ? 'opacity-100' : 'opacity-50'
              }`}
            >
              <div
                className={`w-2 h-2 rounded-full bg-green-400 ${
                  isAutoPlaying ? 'animate-pulse' : ''
                }`}
              ></div>
              Auto-playing
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
