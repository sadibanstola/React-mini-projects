import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ImageGallery = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    fetch('https://picsum.photos/v2/list?page=1&limit=9')
      .then(response => response.json())
      .then(data => setImages(data))
      .catch(error => console.log('Error fetching images:', error));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-blue-50 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="text-5xl font-serif text-center text-gray-800 mb-16 tracking-wide"
      >
        Artful Moments
      </motion.h1>

      {images.length === 0 ? (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center text-gray-500 text-lg font-light italic"
        >
          Preparing your gallery...
        </motion.p>
      ) : (
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {images.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.15, ease: 'easeOut' }}
                  className="group relative rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-500"
                >
                  <img
                    src={`${image.download_url}?w=400`}
                    alt={`Photo by ${image.author}`}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                    <p className="text-white text-sm font-medium p-3 tracking-wide">
                      {image.author}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;