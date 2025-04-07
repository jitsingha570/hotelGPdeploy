import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const features = [
  {
    title: 'Presidential Suite',
    description: 'Luxury with a private pool and ocean view.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80',
  },
  {
    title: 'Rooftop Dining',
    description: 'Gourmet dishes with city views.',
    image: 'https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?auto=format&fit=crop&w=1600&q=80',
  },
];

export default function Featurespage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % features.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen w-full overflow-hidden relative">
      <img
        src={features[current].image}
        alt={features[current].title}
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      />

      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6 text-white">
        <motion.h1
          key={features[current].title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          {features[current].title}
        </motion.h1>
        <motion.p
          key={features[current].description}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-xl md:text-2xl max-w-2xl mb-8"
        >
          {features[current].description}
        </motion.p>
        <a
          href="/book"
          className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
        >
          Book Now
        </a>
      </div>
    </div>
  );
}
