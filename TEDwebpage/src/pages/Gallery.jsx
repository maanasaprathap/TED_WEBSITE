import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      title: "Are Feminist movements going too far?",
      description:
        "To all the young girls out there (sorry boys) Looking for ways to empower yourself? Has all the feminist talks left you with goosebumps and the urge...",
      image: "/src/TedcMit/assets/Articles/Feminism/Feminism_1.png",
      link: "/src/TedcMit/feminism",
      date: "January 8, 2022",
    },
    {
      id: 2,
      title: "ARE YOU LOST IN THE GRAVEYARD OF DREAMS?",
      description:
        "Think back to the moment when you’ve had too many anxious thoughts about life. When was the last time you did something for the first time?",
      image: "/src/TedcMit/assets/Articles/ComfortZone_2.jpg",
      link: "/src/TedcMit/comfort-zone",
      date: "July 31, 2021",
    },
    {
      id: 3,
      title: "DIGITAL DNA STORAGE IS CLOSER THAN YOU THINK!",
      description:
        "Still caught up deciding between a 32GB or a 64GB pendrive? Annoyed by the frequent 'not enough space' and 'running out of storage' notifications? Not anymore!",
      image: "/src/TedcMit/assets/Articles/DNA_2.png",
      link: "/src/TedcMit/dna-storage",
      date: "June 26, 2021",
    },
    {
      id: 4,
      title: "IMPOSTER SYNDROME: TAKING IMPOSTERS BEYOND AMONG US",
      description:
        "Imposters have infiltrated and now they’re among us. A prestigious conference with renowned tycoons and artists...",
      image: "/src/TedcMit/assets/Articles/ImpoSyn_1.jpg",
      link: "/src/TedcMit/imposter-syndrome",
      date: "September 18, 2021",
    },
  ];

  const [scrollX, setScrollX] = useState(0);
  const containerRef = useRef(null);
  const cardWidth = 320;
  const cardSpacing = 24;
  const scrollSpeed = 0.8;

  useEffect(() => {
    let animationFrameId;
    const animateScroll = () => {
      setScrollX((prev) => {
        const newScrollX = prev - scrollSpeed;
        if (newScrollX <= -galleryItems.length * (cardWidth + cardSpacing)) {
          return 0;
        }
        return newScrollX;
      });
      animationFrameId = requestAnimationFrame(animateScroll);
    };
    animationFrameId = requestAnimationFrame(animateScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [galleryItems.length]);

  const handleScroll = (direction) => {
    if (direction === "left") {
      setScrollX((prev) => Math.min(prev + (cardWidth + cardSpacing), 0));
    } else {
      setScrollX((prev) =>
        Math.max(prev - (cardWidth + cardSpacing), -galleryItems.length * (cardWidth + cardSpacing))
      );
    }
  };

  return (
    <div className="p-16 bg-black min-h-screen flex flex-col overflow-hidden relative">
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-red-600 text-center mb-8"
        style={{ fontFamily: "'Cutive Mono', monospace" }}
      >
        GALLERY
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-2xl font-bold text-red-600 text-center mb-8"
        style={{ fontFamily: "'Cutive Mono', monospace" }}
      >
       EXPLORE OUR LATEST THRILLING READS !
      </motion.h1>

      <div className="relative w-full flex items-center">
        <button
          className="absolute left-0 z-10 bg-white p-2 rounded-full shadow-md"
          onClick={() => handleScroll("left")}
        >
          <ChevronLeft size={24} />
        </button>

        <motion.div
          ref={containerRef}
          className="flex space-x-6 w-max items-center"
          animate={{ x: scrollX }}
          transition={{ ease: "linear", duration: 0 }}
        >
          {galleryItems.map((item) => (
            <Link key={item.id} to={item.link} className="no-underline">
              <motion.div
                className="bg-white rounded-lg shadow-lg overflow-hidden w-80 mx-2 transform transition duration-300 cursor-pointer"
                whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(239, 68, 68, 0.8)" }}
              >
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
                <div className="p-6 text-center">
                  <h2 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h2>
                  <p className="text-gray-700 text-sm mb-4">{item.description}</p>
                  <p className="text-gray-500 text-xs mb-2">{item.date}</p>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        <button
          className="absolute right-0 z-10 bg-white p-2 rounded-full shadow-md"
          onClick={() => handleScroll("right")}
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Gallery;
