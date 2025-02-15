import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      title: "Are Feminist movements going too far?",
      description:
        "To all the young girls out there ( sorry boys)Looking for ways to empower yourself ?? Has all the feminist talks left you with goosebumps and the urge...",
      image: "/assets/Articles/Feminism/Feminism_1.png",
      link: "/articles/feminism",
      date: "January 8, 2022",
    },
    {
      id: 2,
      title: "ARE YOU LOST IN THE GRAVEYARD OF DREAMS?",
      description:
        "Think back to the moment when you’ve had too many anxious thoughts about life. When was the last time you did something for the first time?...",
      image: "/assets/Articles/ComfortZone_2.jpg",
      link: "/articles/comfort-zone",
      date: "July 31, 2021",
    },
    {
      id: 3,
      title: "DIGITAL DNA STORAGE IS CLOSER THAN YOU THINK!",
      description:
        "Still caught up deciding between a 32gb or a 64 gb pendrive ?? Annoyed by the frequent 'not enough space' and 'running out of storage' notifications?? Not anymore!!!",
      image: "/assets/Articles/DNA_2.png",
      link: "/articles/dna-storage",
      date: "June 26, 2021",
    },
    {
      id: 4,
      title: "IMPOSTER SYNDROME: TAKING IMPOSTERS BEYOND AMONG US",
      description:
        "Imposters have infiltrated and now they’re among us. A prestigious conference with renowned tycoons and artists...",
      image: "/assets/Articles/ImpoSyn_1.jpg",
      link: "/articles/imposter-syndrome",
      date: "September 18, 2021",
    },
  ];

  return (
    <div className="p-8 bg-black">
      <h1 className="text-3xl font-bold text-red-600 mb-4 text-center">Gallery</h1>
      <p className="mb-6 text-center text-white">Check out our exciting events.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center">
        {galleryItems.map((item) => (
          <motion.div 
            key={item.id} 
            className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-[28rem] mx-auto transform transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-500/50"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(239, 68, 68, 0.8)" }}
          >
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-6 text-center">
              <h2 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h2>
              <p className="text-gray-700 text-sm mb-4">{item.description}</p>
              <p className="text-gray-500 text-xs mb-2">{item.date}</p>
              <Link
                to={item.link}
                className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition"
              >
                Read More
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
