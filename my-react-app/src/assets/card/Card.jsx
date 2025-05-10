import React from 'react'
import { motion } from 'framer-motion'

const products = [
  {
    id: 1,
    name: "Royal Sapphire Ring",
    price: "$899",
    image: "https://images.unsplash.com/photo-1610702237464-c12127fd8a4a", // Sapphire ring
  },
  {
    id: 2,
    name: "Emerald Necklace",
    price: "$1,250",
    image: "https://images.unsplash.com/photo-1606312619349-1e800938f236", // Emerald necklace
  },
  {
    id: 3,
    name: "Diamond Stud Earrings",
    price: "$499",
    image: "https://images.unsplash.com/photo-1581579185169-73f6e9c32d20", // Diamond earrings
  },
]

const Card = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] py-16 px-6">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-5xl font-bold text-amber-100 mb-4 drop-shadow-md">
          Exquisite Collections
        </h2>
        <p className="text-gray-300 text-lg">
          Handpicked luxury pieces to elevate your elegance.
        </p>
      </div>

      <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {products.map((item, index) => (
          <motion.div
            key={item.id}
            className="bg-white rounded-3xl overflow-hidden shadow-xl group transform transition-all duration-500 hover:scale-105"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="overflow-hidden">
              <img
                src={item.image + "?auto=format&fit=crop&w=600&q=80"}
                alt={item.name}
                className="h-64 w-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="p-6 text-center bg-gradient-to-br from-white via-white/90 to-amber-50">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {item.name}
              </h3>
              <p className="text-lg font-bold text-amber-500">{item.price}</p>
              <button className="mt-4 px-6 py-2 bg-amber-400 hover:bg-amber-300 transition-all rounded-full font-medium text-gray-900 shadow">
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Card
