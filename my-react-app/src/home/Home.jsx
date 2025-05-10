import React from 'react'
import { motion } from 'framer-motion'
import { Gem } from 'lucide-react'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] flex items-center justify-center px-6">
      <motion.div
        className="text-center space-y-8 max-w-3xl"
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <div className="relative inline-flex items-center justify-center w-24 h-24 mx-auto bg-gradient-to-tr from-amber-300 via-yellow-100 to-amber-400 rounded-full shadow-lg">
          <Gem className="text-gray-900 w-10 h-10" />
          <span className="absolute w-32 h-32 bg-amber-300 rounded-full blur-2xl opacity-30 animate-ping" />
        </div>

        <h1 className="text-6xl font-extrabold text-amber-100 tracking-tight drop-shadow-lg">
          Discover Timeless Beauty
        </h1>

        <p className="text-xl text-gray-300 leading-relaxed">
          Unveil a world of elegance through our handcrafted jewellery and ethically-sourced gemstones. Each piece tells a story of heritage and brilliance.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-8 py-3 bg-gradient-to-r from-amber-400 to-yellow-300 text-gray-900 font-semibold rounded-full shadow-md hover:shadow-xl transition duration-300"
        >
          View Collections
        </motion.button>
      </motion.div>
    </div>
  )
}

export default Home
