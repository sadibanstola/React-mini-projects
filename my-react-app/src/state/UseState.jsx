
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0); // Fixed: Resets count to 0 instead of incrementing
  };

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gray-700 p-8 rounded-xl shadow-lg max-w-md w-full text-center"
      >
        <h1 className="text-3xl md:text-4xl font-extrabold text-amber-300 mb-6">
          Count: <motion.span
            key={count} // Ensures animation on count change
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-amber-200"
          >
            {count}
          </motion.span>
        </h1>
        <div className="flex justify-center space-x-4">
          <motion.button
            onClick={increment}
            whileHover={{ scale: 1.05, boxShadow: '0 0 10px rgba(251, 191, 36, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="bg-amber-600 text-white py-2 px-6 rounded-full font-semibold hover:bg-amber-700 transition duration-300"
          >
            Add
          </motion.button>
          <motion.button
            onClick={reset}
            whileHover={{ scale: 1.05, boxShadow: '0 0 10px rgba(251, 191, 36, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-600 text-white py-2 px-6 rounded-full font-semibold hover:bg-gray-500 transition duration-300"
          >
            Reset
          </motion.button>
          <motion.button
            onClick={decrement}
            whileHover={{ scale: 1.05, boxShadow: '0 0 10px rgba(251, 191, 36, 0.5)' }}
            whileTap={{ scale: 0.95 }}
            className="bg-amber-600 text-white py-2 px-6 rounded-full font-semibold hover:bg-amber-700 transition duration-300"
          >
            Subtract
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default Counter;
