import React from 'react'
import { GiMiddleArrow } from 'react-icons/gi'

export default function AboutHero() {
  return (
    <section className="py-20 md:py-36 px-8 bg-[#2e0057] dark:bg-gray-900 dark:border-t dark:border-white relative z-30 shadow-2xl overflow-hidden flex flex-col gap-8">
      <div className="w-full h-full flex justify-between">
        {/* left */}
        <div className="w-md">
          <p className="text-white">
            I{"'"}m Wixx Mangutha, an animator and content creator who makes pixels dance,
            characters breathe, and stories come alive. Whether it
            {"'"}s for brands, creators, or just wild ideas that refuse to stay still, I love
            turning concepts into visuals that entertain, inspire, and stick in your memory.
          </p>
        </div>

        {/* right */}
        <div className="flex justify-end w-md">
          <h3 className="text-5xl font-bold text-white/80">A Passionate User-Centric Animator.</h3>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex gap-2 font-bold">
          <h3 className="text-7xl text-white">08</h3>
          <div>
            <div className="text-white">+</div>
            <div className="w-1/2">
              <p className="text-base ml-4 capitalize text-white/70">years of experience</p>
            </div>
          </div>
        </div>

        {/* arrow */}
        <div>
          <GiMiddleArrow size={90} className="text-[#e8ceff] dark:text-white" />
        </div>

        {/* email */}

        <div>
          <h3 className="text-2xl text-white/70">
            Email: <span>wixx@gmail.com</span>
          </h3>
        </div>
      </div>
    </section>
  )
}
