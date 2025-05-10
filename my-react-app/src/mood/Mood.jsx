
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MoodTracker = () => {
  const [mood, setMood] = useState('🥹');

  const moods = [
    { name: 'Happy', emoji: '🤣', color: 'bg-amber-600' },
    { name: 'Sad', emoji: '😞', color: 'bg-blue-600' },
    { name: 'Excited', emoji: '🥳', color: 'bg-green-600' },
    { name: 'Angry', emoji: '🤬', color: 'bg-red-600' },
  ];

  const selectMood = (emoji) => {
    setMood(emoji);
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
          Current Mood
        </h1>
        <motion.div
          key={mood} // Ensures animation on mood change
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-5xl md:text-6xl mb-6"
        >
          {mood}
        </motion.div>
        <div className="flex flex-wrap justify-center gap-4">
          {moods.map((moodItem) => (
            <motion.button
              key={moodItem.name}
              onClick={() => selectMood(moodItem.emoji)}
              whileHover={{ scale: 1.05, boxShadow: '0 0 10px rgba(251, 191, 36, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              className={`${moodItem.color} text-white py-2 px-6 rounded-full font-semibold hover:brightness-110 transition duration-300 flex items-center`}
            >
              <span className="mr-2">{moodItem.emoji}</span>
              {moodItem.name}
            </motion.button>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default MoodTracker;
