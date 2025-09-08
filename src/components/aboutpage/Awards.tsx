'use client'
import React from 'react'
import { FiStar, FiZap } from 'react-icons/fi'
import { FaTrophy } from 'react-icons/fa'

export default function AwardsSection() {
  const awards = [
    {
      year: '2024',
      title: 'Best Motion Graphics',
      organization: 'Creative Animation Awards',
      category: 'Commercial Animation',
      icon: FaTrophy,
      description:
        'Recognized for outstanding motion graphics in brand storytelling and commercial animation work.',
    },
    {
      year: '2023',
      title: 'Excellence in Visual Storytelling',
      organization: 'Digital Arts Festival',
      category: '2D Animation',
      icon: FiStar,

      description:
        'Awarded for exceptional narrative techniques and character development in animated content.',
    },
    {
      year: '2023',
      title: 'Innovation Award',
      organization: 'Motion Design Conference',
      category: 'Technical Excellence',
      icon: FiZap,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'from-blue-50 to-cyan-50',
      description:
        'Honored for pushing creative boundaries and implementing innovative animation techniques.',
    },
  ]

  return (
    <section className="py-10 md:py-28 -mt-6 md:-mt-15 bg-[#2e0057] dark:bg-gray-900 dark:border-t dark:border-white  rounded-t-4xl relative z-30 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-br from-purple-200/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-indigo-200/20 to-transparent rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-100 to-indigo-100 text-purple-800 rounded-full text-sm font-semibold mb-6">
            <FaTrophy size={18} />
            <span>Recognition & Awards</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Celebrating Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-[#efddff] to-indigo-600">
              Creative Excellence
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our dedication to pushing creative boundaries and delivering exceptional animation has
            been recognized by industry leaders and clients worldwide.
          </p>
        </div>

        {/* Awards Grid */}
        <div className="grid lg:grid-cols-3 gap-8 px-8">
          {awards.map((award, index) => {
            return (
              <div
                key={index}
                className="group relative p-8 rounded-3xl cursor-pointer transition-all duration-500 hover:scale-105 transform bg-white hover:bg-gradient-to-br hover:from-gray-50 hover:to-purple-50 shadow-lg hover:shadow-xl"
              >
                {/* Year badge */}
                <div className="absolute -top-4 left-8">
                  <div
                    className={`px-4 py-2 bg-white text-[#2e0057] text-sm font-bold rounded-full shadow-lg`}
                  >
                    {award.year}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                    {award.title}
                  </h3>

                  <div className="space-y-2">
                    <p className="text-purple-600 font-semibold">{award.organization}</p>
                    <p className="text-sm text-gray-500 font-medium">{award.category}</p>
                  </div>

                  <p className="text-gray-600 leading-relaxed text-sm">{award.description}</p>
                </div>

                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-indigo-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
