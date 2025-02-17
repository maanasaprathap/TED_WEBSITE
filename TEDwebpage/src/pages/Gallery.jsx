import { motion, useAnimation } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";


const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      title: "Are Feminist movements going too far?",
      description:
        "To all the young girls out there (sorry boys) Looking for ways to empower yourself? Has all the feminist talks left you with goosebumps and the urge...",
      image: "/assets/Articles/Feminism/Feminism_1.png",
      link: "/feminism",
      date: "January 8, 2022",
    },
    {
      id: 2,
      title: "ARE YOU LOST IN THE GRAVEYARD OF DREAMS?",
      description:
        "Think back to the moment when you’ve had too many anxious thoughts about life. When was the last time you did something for the first time?",
      image: "/assets/Articles/ComfortZone_2.jpg",
      link: "/comfort-zone",
      date: "July 31, 2021",
    },
    {
      id: 3,
      title: "DIGITAL DNA STORAGE IS CLOSER THAN YOU THINK!",
      description:
        "Still caught up deciding between a 32GB or a 64GB pendrive? Annoyed by the frequent 'not enough space' and 'running out of storage' notifications? Not anymore!",
      image: "/assets/Articles/DNA_2.png",
      link: "/dna-storage",
      date: "June 26, 2021",
    },
    {
      id: 4,
      title: "IMPOSTER SYNDROME: TAKING IMPOSTERS BEYOND AMONG US",
      description:
        "Imposters have infiltrated and now they’re among us. A prestigious conference with renowned tycoons and artists...",
      image: "/assets/Articles/ImpoSyn_1.jpg",
      link: "/imposter-syndrome",
      date: "September 18, 2021",
    },
  ];

  const [scrollX, setScrollX] = useState(0);
  const [centerCardIndex, setCenterCardIndex] = useState(0);
  const controls = useAnimation();
  const containerRef = useRef(null);

  const maxScroll = -(galleryItems.length * 320 - 960); // Adjust based on screen size

  const scrollLeft = () => {
    setScrollX((prev) => Math.min(prev + 300, 0));
  };

  const scrollRight = () => {
    setScrollX((prev) => Math.max(prev - 300, maxScroll));
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const containerWidth = containerRef.current.offsetWidth;
    const cardWidth = 320;
    const centerPosition = containerWidth / 2;

    let closestIndex = 0;
    let minDistance = Infinity;

    galleryItems.forEach((_, index) => {
      const cardPosition = index * cardWidth + scrollX;
      const distance = Math.abs(cardPosition - centerPosition);

      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });

    setCenterCardIndex(closestIndex);
  }, [scrollX]);

  return (
    <div className="p-8 bg-black overflow-hidden relative">
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-extrabold text-red-500 drop-shadow-lg text-center"
        style={{ fontFamily: "'Cutive Mono', monospace" }}
      >
        Gallery
      </motion.h1>
      <p className="mb-6 text-center text-white">Check out our exciting articles.</p>

      <button
        onClick={scrollLeft}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-200 transition"
        disabled={scrollX === 0}
      >
        <FaArrowLeft className="text-red-500" />
      </button>

      <button
        onClick={scrollRight}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-lg hover:bg-gray-200 transition"
        disabled={scrollX === maxScroll}
      >
        <FaArrowRight className="text-red-500" />
      </button>

      <motion.div
        ref={containerRef}
        className="flex space-x-6 w-max items-center"
        animate={{ x: scrollX }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        {galleryItems.map((item, index) => {
          const isCenter = index === centerCardIndex;
          return (
            <Link key={item.id} to={item.link} className="no-underline">
              <motion.div
                className={`bg-white rounded-lg shadow-lg overflow-hidden w-80 mx-2 transform transition duration-300 cursor-pointer ${
                  isCenter ? "scale-110 opacity-100" : "scale-90 opacity-50"
                }`}
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
          );
        })}
      </motion.div>
    </div>
  );
};

export default Gallery;
