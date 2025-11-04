import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative h-[86vh] w-full overflow-hidden">
      {/* 3D Spline Scene as background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient veil to keep text readable (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/70 via-white/40 to-white" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-6xl mx-auto px-4 md:px-6 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <h1 className="font-serif text-4xl md:text-6xl text-black tracking-tight">
              Fragments of Yume
            </h1>
            <p className="mt-4 text-black/70 leading-relaxed">
              A quiet mystery unfolding through luminous chapters — echoes of memory drifting across
              a cosmic sea.
            </p>
            <p className="mt-2 text-black/60 text-sm md:text-base">
              Each NFT is a fragment: a title, an image, and a feeling — together forming Yume’s
              cinematic journey.
            </p>
            <div className="mt-8">
              <Link
                to="/chapters"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-black text-white text-sm md:text-base shadow-sm hover:shadow-md transition-shadow"
              >
                Enter the Story
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
