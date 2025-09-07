import React from 'react'
import { FiPlay, FiUsers, FiTrendingUp, FiStar } from 'react-icons/fi'

export default function AboutContent() {
  return (
    <section className="py-10 md:py-28 -mt-6 md:-mt-15 bg-white dark:bg-gray-900 dark:border-t dark:border-white  rounded-t-4xl relative z-30 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-purple-100 to-transparent rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-indigo-100 to-transparent rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium mb-4">
            <FiStar size={16} />
            <span>About Our Studio</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Where Stories Meet
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">
              Stunning Animation
            </span>
          </h2>
        </div>

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900">Our Creative Journey</h3>
              <p className="text-gray-700 leading-relaxed">
                Founded with a simple belief that animation should do more than just move – it
                should move people. Our studio has grown from a one-person passion project into a
                creative powerhouse that brings ideas to life through cutting-edge animation
                techniques and unbounded imagination.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Every project we touch becomes a canvas for innovation. From brand commercials that
                stop scrollers in their tracks to explainer videos that make complex ideas crystal
                clear, we craft visual experiences that resonate, engage, and inspire action.
              </p>
            </div>

            <div className="flex gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
                <FiPlay size={16} className="text-purple-600" />
                <span className="text-sm font-medium text-gray-700">2D Animation</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
                <FiPlay size={16} className="text-purple-600" />
                <span className="text-sm font-medium text-gray-700">Motion Graphics</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-full">
                <FiPlay size={16} className="text-purple-600" />
                <span className="text-sm font-medium text-gray-700">3D Modeling</span>
              </div>
            </div>
          </div>

          {/* Right stats */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl text-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiUsers size={24} className="text-white" />
              </div>
              <h4 className="text-3xl font-bold text-purple-900 mb-2">150+</h4>
              <p className="text-purple-700 font-medium">Happy Clients</p>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 p-8 rounded-2xl text-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiPlay size={24} className="text-white" />
              </div>
              <h4 className="text-3xl font-bold text-indigo-900 mb-2">500+</h4>
              <p className="text-indigo-700 font-medium">Projects Delivered</p>
            </div>

            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-2xl text-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiTrendingUp size={24} className="text-white" />
              </div>
              <h4 className="text-3xl font-bold text-pink-900 mb-2">98%</h4>
              <p className="text-pink-700 font-medium">Client Satisfaction</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-8 rounded-2xl text-center transform hover:scale-105 transition-transform duration-300">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiStar size={24} className="text-white" />
              </div>
              <h4 className="text-3xl font-bold text-orange-900 mb-2">15+</h4>
              <p className="text-orange-700 font-medium">Awards Won</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
