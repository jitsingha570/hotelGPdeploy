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
  { name: "DAKSHINESWR", photo: Imgvisiting1, distance: "22km", description: "Dakshineswar is famous for its Kali Temple, built by Rani Rashmoni in 1855 near Kolkata. Situated along the Hooghly River, it's a revered spiritual site linked to Sri Ramakrishna, drawing devotees and tourists for its beauty and sacred vibe.", map:"https://www.google.com/maps/dir/Hotel+Gokul+Palace,+43,+Santragachi+Station+Rd,+Santragachi,+Howrah,+West+Bengal+711111/dakshineswar+temple/@22.6202418,88.2298791,25725m/data=!3m2!1e3!4b1!4m13!4m12!1m5!1m1!1s0x3a02795718926ce3:0x641ba829c3ab419b!2m2!1d88.2855122!2d22.5854994!1m5!1m1!1s0x39f89d03ddd97829:0xffa380efed305d4c!2m2!1d88.3577424!2d22.6549345?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D",wiki:"https://en.wikipedia.org/wiki/Dakshineswar"},
  { name: "KALIGHAT", photo: Imgvisiting2, distance: "11km", description: "Kalighat, located in Kolkata, is a revered Hindu temple dedicated to Goddess Kali. It's one of the 51 Shakti Peethas and attracts thousands of devotees and pilgrims every day.", map:"https://www.google.com/maps/dir/Hotel+Gokul+Palace,+43,+Santragachi+Station+Rd,+Santragachi,+Howrah,+West+Bengal+711111/Kalighat,+Kolkata,+West+Bengal/@22.5512767,88.2746445,12957m/data=!3m2!1e3!4b1!4m13!4m12!1m5!1m1!1s0x3a02795718926ce3:0x641ba829c3ab419b!2m2!1d88.2855122!2d22.5854994!1m5!1m1!1s0x3a027735910fb58b:0xb4aa7a69732fbe0a!2m2!1d88.3458699!2d22.516951?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D",wiki:"https://en.wikipedia.org/wiki/Kalighat"},
  { name: "VICTORIA MEMORIAL", photo: Imgvisiting3, distance: "9km", description: "The Victoria Memorial in Kolkata is a grand marble monument built in memory of Queen Victoria. Blending British and Mughal architecture, it's a major tourist attraction showcasing historical artifacts and lush gardens." , map:"https://www.google.com/maps/dir/Hotel+Gokul+Palace,+43,+Santragachi+Station+Rd,+Santragachi,+Howrah,+West+Bengal+711111/Victoria+Memorial+View+point,+Victoria+Memorial+Hall,+1,+Queens+Way,+Maidan,+New+Market+Area,+Taltala,+Kolkata,+West+Bengal+700071/@22.5659553,88.2941291,6478m/data=!3m2!1e3!4b1!4m13!4m12!1m5!1m1!1s0x3a02795718926ce3:0x641ba829c3ab419b!2m2!1d88.2855122!2d22.5854994!1m5!1m1!1s0x3a0277cab13236d1:0x4530ad082790626f!2m2!1d88.3428337!2d22.5463412?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D",wiki:"https://en.wikipedia.org/wiki/Victoria_Memorial,_Kolkata" },
  { name: "BOTANICAL GARDEN", photo: Imgvisiting4, distance: "6km", description: "The Acharya Jagadish Chandra Bose Indian Botanic Garden, located in Shibpur, Howrah, spans 109 hectares and houses over 12,000 plant species. Established in 1787, it's renowned for the Great Banyan Tree and diverse palm collection. ", map:"https://www.google.com/maps/dir/Hotel+Gokul+Palace,+43,+Santragachi+Station+Rd,+Santragachi,+Howrah,+West+Bengal+711111/Botanical+Garden+Area,+Howrah,+West+Bengal/@22.5706833,88.2809475,6478m/data=!3m2!1e3!4b1!4m13!4m12!1m5!1m1!1s0x3a02795718926ce3:0x641ba829c3ab419b!2m2!1d88.2855122!2d22.5854994!1m5!1m1!1s0x3a0279c98e771d7d:0xf4e85addf41ff7ab!2m2!1d88.3057061!2d22.5558616?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D",wiki:"https://en.wikipedia.org/wiki/Acharya_Jagadish_Chandra_Bose_Indian_Botanic_Garden" },
  { name: "PRINSEP GHAT", photo: Imgvisiting5, distance: "9km", description: "Prinsep Ghat, built during British rule along the Hooghly River, is a peaceful retreat in Kolkata. It offers scenic views, evening boat rides, and a beautiful blend of history and nature." , map:"https://www.google.com/maps/dir/Hotel+Gokul+Palace,+43,+Santragachi+Station+Rd,+Santragachi,+Howrah,+West+Bengal+711111/James+Prinsep+Monument,+Strand+Rd,+Maidan,+Fort+William,+Hastings,+Kolkata,+West+Bengal+700021/@22.5645511,88.2883959,6478m/data=!3m2!1e3!4b1!4m13!4m12!1m5!1m1!1s0x3a02795718926ce3:0x641ba829c3ab419b!2m2!1d88.2855122!2d22.5854994!1m5!1m1!1s0x3a0277e8759cc711:0xd07fc37f36f0e58f!2m2!1d88.3311699!2d22.5552828?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D",wiki:"https://en.wikipedia.org/wiki/Prinsep_Ghat"},
  { name: "HOWRAH BRIDGE", photo: Imgvisiting6, distance: "8km", description: "Howrah Bridge, an iconic cantilever bridge over the Hooghly River, connects Kolkata and Howrah. It's a marvel of engineering, bustling with traffic, and symbolizes the city’s colonial legacy and cultural vibrance.", map:"https://www.google.com/maps/dir/Hotel+Gokul+Palace,+43,+Santragachi+Station+Rd,+Santragachi,+Howrah,+West+Bengal+711111/Howrah+Bridge,+Kolkata,+West+Bengal+700001/@22.5735867,88.2954757,6477m/data=!3m2!1e3!4b1!4m13!4m12!1m5!1m1!1s0x3a02795718926ce3:0x641ba829c3ab419b!2m2!1d88.2855122!2d22.5854994!1m5!1m1!1s0x3a0277bfbb1eeb1b:0xc9840aaa8c411199!2m2!1d88.3468342!2d22.5851545?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoJLDEwMjExNDUzSAFQAw%3D%3D",wiki:"https://en.wikipedia.org/wiki/Howrah_Bridge" },
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
                  <a href={card.map} target="_blank" rel="noopener noreferrer">
                    <img src={Iconmap} alt="map" className="w-8 h-8" />
                  </a>
                  <a href={card.wiki}target="_blank" rel="noopener noreferrer">
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
