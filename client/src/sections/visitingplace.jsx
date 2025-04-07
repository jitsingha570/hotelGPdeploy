import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Imgvisiting1 from "../assets/visitingwebp/dakshineswar.webp";
import Imgvisiting2 from "../assets/visitingwebp/kalighat.webp";
import Imgvisiting3 from "../assets/visitingwebp/Imgvisiting1.jpg";
import Imgvisiting4 from "../assets/visitingwebp/Imgvisiting2.webp";  
import Imgvisiting5 from "../assets/visitingwebp/Imgvisiting3.webp";
import Imgvisiting6 from "../assets/visitingwebp/Imgvisiting4.jpg";
import Iconmap from "../assets/logo/map.png";
import Iconwiki from "../assets/logo/wiki.png";

const cards = [
  { name: "DAKSHINESWR", photo: Imgvisiting1, distance: "10km", description: "Dakshineswar is famous for its Kali Temple, built by Rani Rashmoni in 1855 near Kolkata. Situated along the Hooghly River, it's a revered spiritual site linked to Sri Ramakrishna, drawing devotees and tourists for its beauty and sacred vibe." },
  { name: "KALIGHAT", photo: Imgvisiting2, distance: "12km", description: "Kalighat, located in Kolkata, is a revered Hindu temple dedicated to Goddess Kali. It's one of the 51 Shakti Peethas and attracts thousands of devotees and pilgrims every day." },
  { name: "VICTORIA MEMORIAL", photo: Imgvisiting3, distance: "8km", description: "The Victoria Memorial in Kolkata is a grand marble monument built in memory of Queen Victoria. Blending British and Mughal architecture, it's a major tourist attraction showcasing historical artifacts and lush gardens." },
  { name: "BOTANICAL GARDEN", photo: Imgvisiting4, distance: "6km", description: "The Acharya Jagadish Chandra Bose Indian Botanic Garden, located in Shibpur, Howrah, spans 109 hectares and houses over 12,000 plant species. Established in 1787, it's renowned for the Great Banyan Tree and diverse palm collection. " },
  { name: "PRINSEP GHAT", photo: Imgvisiting5, distance: "15km", description: "Prinsep Ghat, built during British rule along the Hooghly River, is a peaceful retreat in Kolkata. It offers scenic views, evening boat rides, and a beautiful blend of history and nature." },
  { name: "HOWRAH BRIDGE", photo: Imgvisiting6, distance: "5km", description: "Howrah Bridge, an iconic cantilever bridge over the Hooghly River, connects Kolkata and Howrah. It's a marvel of engineering, bustling with traffic, and symbolizes the city’s colonial legacy and cultural vibrance." },
];

const Visitingplace = () => {
  const [bgImage, setBgImage] = useState(null);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Animated Background Image */}
      <AnimatePresence>
        {bgImage && (
          <motion.div
            key={bgImage}
            className="absolute inset-0 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            style={{
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: "blur(4px) brightness(0.6)",
            }}
          />
        )}
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="relative z-10 w-full py-20 px-4 md:px-16 bg-black/40 backdrop-blur-sm">
      <div className="felx md:item-center md:justify-center md:relative md:left-30 md:pb-10 "><h2 className="text-4xl text-white font-bold mb-2">NEARBY VISITING PLACES</h2> </div>
      
        {cards.map((card, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.div
              key={index}
              onMouseEnter={() => setBgImage(card.photo)}
              onMouseLeave={() => setBgImage(null)}
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`flex flex-col md:flex-row items-center justify-center gap-10 mb-16 
                ${!isEven ? "md:flex-row-reverse" : ""}
              `}
            >
              {/* Image */}
              <div className="w-72  h-72 rounded-full bg-yellow-200 flex items-center justify-center overflow-hidden shadow-lg hover:shadow-yellow-400 transition-all duration-300">
                <img src={card.photo} alt={card.name} className="w-full h-full object-cover rounded-full" />
              </div>

              {/* Details */}
              <div className="glass p-6 rounded-xl bg-yellow-200/60 backdrop-blur-md shadow-md w-full md:w-150  hover:shadow-xl transition-all">
                <h2 className="text-2xl text-blue-900 font-bold mb-2">{card.name}</h2>
                <p className="text-sm text-red-800 mb-2">{card.description}</p>
                <p className="text-sm text-gray-700 mb-4">{card.distance}</p>
                <div className="flex gap-4">
                  <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                    <img src={Iconmap} alt="map" className="w-8 h-8" />
                  </a>
                  <a href="https://en.wikipedia.org" target="_blank" rel="noopener noreferrer">
                    <img src={Iconwiki} alt="wiki" className="w-8 h-8" />
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Visitingplace;
