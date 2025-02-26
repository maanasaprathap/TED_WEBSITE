import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import {FaArrowLeft, FaArrowRight, FaBook } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { useState } from "react";

import { FaBullseye } from "react-icons/fa";

const teamImages = [
   "/assets/group_images/team 2024.jpeg",
  "/assets/group_images/team _2024.jpeg",
   "/assets/group_images/innovate 23.JPG",
    "/assets/group_images/innovate 22.JPG",
  "/assets/group_images/team 2019.jpg",

];

// Flip card component for a team member
const getObjectPosition = (name) => {
  switch (name) {
    case "Selvalingam B":
      return "center 55%"; // Bring it down
    case "Shanthosh S":
      return "center 15%";
    case "Shalini M":
      return "center 30%";
      case "Thennarasu V":
        return "center 30%";
        case "Anish H":
          return "center 40%";
          case "Thulasidharan C A":
            return "center 65%";
            case "Dhinesh K":
              return "center 25%";
              case "Dinesh P":
                return "center 40%";
                case "Sriram K":
                  return "center 45%";
                  case "Dhanush M":
                    return "center 20%";
                    case "Sripushkalai S":
                      return "center 40%";
                      case "Aishwarya I":
                        return "center 130%";
                        case "Manivasagam G":
                          return "center 35%";
                          case "Mukesh L":
                          return "center 40%";
                         
                                              
    default:
      return "center 60%";
  }
};

const Group_Images = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % teamImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + teamImages.length) % teamImages.length);
  };

  return (
    <div className="relative flex justify-center items-center">
      <FaArrowLeft className="absolute left-0 cursor-pointer text-white" size={30} onClick={prevSlide} />
      <img src={teamImages[currentIndex]} alt={`Team ${currentIndex + 1}`} className="w-full max-w-lg rounded-lg shadow-lg" />
      <FaArrowRight className="absolute right-0 cursor-pointer text-white" size={30} onClick={nextSlide} />
    </div>
  );
};




const TeamCard = ({ member }) => {
  return (
    <div className="w-full h-full" style={{ perspective: "1000px" }}>
      <motion.div
        className="relative w-full h-full"
        whileHover={{
          rotateY: 180,
          scale: 1.05,
          boxShadow: "0 0 15px rgba(239,68,68,0.8)"
        }}
        transition={{ duration: 0.5 }}
        style={{
          transformStyle: "preserve-3d",
          boxShadow: "0 0 8px rgba(239,68,68,0.4)"
        }}
      >
        {/* Front Side */}
        

          <div className="h-4/4">
            {member.img ? (
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover object-center"
                style={{ objectPosition: getObjectPosition(member.name) }}
              />
            ) : null}
          </div>
          
        
        {/* Back Side */}
        <div
          className="absolute inset-0 flex flex-col items-center justify-center bg-red-200 rounded-xl shadow-md p-4"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)"
          }}
        >
          <p
            className="text-gray-800 text-3xl font-bold"
            style={{ fontFamily: "'Caviar Dreams', sans-serif" }}
          >
            {member.name}
          </p>
          <p
            className="text-gray-800 text-2xl mt-2"
            style={{ fontFamily: "'Cutive Mono', monospace" }}
          >
            {member.position}
          </p>
          <div className="flex space-x-4 mt-4">
            <a
              href={member.git}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500"
            >
              <FaGithub size={24} />
            </a>
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href={member.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};


const About = () => {
  // An array of 14 team members with dummy details.
  const teamMembers = [
    { 
      name: "Dr P Prakash",
      position: "President",
      img: "/assets/Team_Images/Prakash_sir.jpeg",
      git: "../alice",
      linkedin: "..alice",
      instagram: "..alice",
    },
    {
      name: "Selvalingam B",
      position: "Chairperson",
       img: "/assets/Team_Images/Selvalingam B.jpg",
      git: "../alice",
      linkedin: "..alice",
      instagram: "..alice",
    },
    {
      name: "Shanthosh S",
      position: "Vice-Chairperson",
      img: "/assets/Team_Images/Shanthosh S.jpg",
      git: "../bob",
      linkedin: "..bob",
      instagram: "..bob",
    },
    {
      name: "Shalini M",
      position: "Vice-Chairperson",
      img: "/assets/Team_Images/Shalini M.jpg",
      git: "../charlie",
      linkedin: "..charlie",
      instagram: "..charlie",
    },
    {
      name: "Thennarasu V",
      position: "General Secratory",
      img: "/assets/Team_Images/Thennarasu V.jpg",
      git: "../david",
      linkedin: "..david",
      instagram: "..david",
    },
    {
      name: "Anish H",
      position: "Treasurer",
      img: "/assets/Team_Images/Anish H.jpg",
      git: "../eve",
      linkedin: "..eve",
      instagram: "..eve",
    },
    {
      name: "Thulasidharan C A",
      position: "Head of Public Relations",
      img: "/assets/Team_Images/Thulasidharan C A.jpg",
      git: "../frank",
      linkedin: "..frank",
      instagram: "..frank",
    },
    {
      name: "Dhinesh K",
      position: "Head of Public Relations",
      img: "/assets/Team_Images/Dhinesh K.jpg",
      git: "../grace",
      linkedin: "..grace",
      instagram: "..grace",
    },
    {
      name: "Dinesh P",
      position: "Head of Event Management",
      img: "/assets/Team_Images/Dinesh P.jpg",
      git: "../heidi",
      linkedin: "..heidi",
      instagram: "..heidi",
    },
    {
      name: "Sriram K",
      position: "Head of Event Management",
      img: "/assets/Team_Images/Sriram K.JPG",
      git: "../ivan",
      linkedin: "..ivan",
      instagram: "..ivan",
    },
    {
      name: "Dhanush M",
      position: "Head of Design",
      img: "/assets/Team_Images/Dhanush M.jpg",
      git: "../judy",
      linkedin: "..judy",
      instagram: "..judy",
    },
    {
      name: "Sripushkalai S",
      position: "Head of Design",
      img: "/assets/Team_Images/Sripushkalai S.jpg",
      git: "../kevin",
      linkedin: "..kevin",
      instagram: "..kevin",
    },
    {
      name: "Aishwarya I",
      position: "Head of Content Curation",
      img: "/assets/Team_Images/Aishwarya I.jpg",
      git: "../laura",
      linkedin: "..laura",
      instagram: "../laura",
    },
    {
      name: "Manivasagam G",
      position: "Head of Content Curation",
      img: "/assets/Team_Images/Manivasagam G.jpg",
      git: "../mallory",
      linkedin: "..mallory",
      instagram: "..mallory",
    },
    {
      name: "Mukesh L",
      position: "Head of Website Development",
      img: "/assets/Team_Images/Mukesh L.jpg",
      git: "../niaj",
      linkedin: "..niaj",
      instagram: "..niaj",
    },
   
    
  ];

  return ( <div className="p-8 bg-black dark:bg-black ">
    <motion.div
      style={{
        backgroundImage: "url('/assets/Team_Images/background_image.avif')",
        fontFamily: "'Playfair Display', serif",
      }}
      className="p-8 min-h-screen bg-cover bg-center text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {/* About Header */}
      <motion.h1
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.7 }}
  className="text-4xl font-extrabold text-red-600 drop-shadow-lg text-center"
  style={{ fontFamily: "'Cutive Mono', monospace" }}
>
  About TED Club of MIT
</motion.h1>



     <div className="flex flex-col items-center gap-6">
  {/* Preamble Section */}
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.3, duration: 0.7 }}
    className="bg-transparent p-6 rounded-lg shadow-2xl transition-transform duration-300 hover:shadow-red-500 w-full md:w-2/3"
  >
    <motion.h2
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 0.99,
        textShadow: "0px 0px 8px rgba(239, 68, 68, 0.8)",
        transition: { duration: 0.3 }
      }}
      className="text-4xl font-semibold text-red-400 transition-all hover:text-red-300 inline-flex items-center"
    >
      <FaBook size={32} className="mr-2" />
      PREAMBLE
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="mt-3 text-lg leading-relaxed text-white"
      style={{ fontFamily: "'Cutive Mono', monospace" }}
    >
      To cultivate a vibrant community of innovators at MIT by fostering the exchange of ideas through
local forums we aim to empower students to think critically, share their unique perspectives, and
engage with diverse voices across various fields. The TED Club of MIT ignites intellectual
curiosity and broadens student perspectives
    </motion.p>
  </motion.div>

  {/* Goal Section */}
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5, duration: 0.7 }}
    className="bg-transparent p-6 rounded-lg shadow-2xl transition-transform duration-300 hover:shadow-red-500 w-full md:w-2/3"
  >
    <motion.h2
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        scale: 0.99,
        textShadow: "0px 0px 8px rgba(239, 68, 68, 0.8)",
        transition: { duration: 0.3 }
      }}
      className="text-4xl font-semibold text-red-400 transition-all hover:text-red-300 inline-flex items-center"
    >
      <FaBullseye size={32} className="mr-2" />
      GOAL
    </motion.h2>
    <motion.p
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="mt-3 text-lg leading-relaxed text-white"
      style={{ fontFamily: "'Cutive Mono', monospace" }}
    >
     With a goal of organizing a TEDx event on a huge scale, this club would work to identify the
inherent talent of students with direct insight and to design a theme to conduct interactive talks.
The club would also inspire students to think from a broader perspective and introduce them to
newer developments in all research fields of interest of students. The club would also identify and
invite potential speakers of various research fields and professions.

    </motion.p>
  </motion.div>
</div>

<div className="p-8 bg-black dark:bg-black">
      <motion.div
        
        className="p-8 min-h-screen bg-cover bg-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
        style={{ fontFamily: "'Cutive Mono', monospace" }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-red-600 text-center mb-6"
        >
          Meet Our Journey Makers
        </motion.h1>
        <Group_Images />
     
  
<br></br>
<br></br>
<br></br>
      {/* Our Team Section */}
      <motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.3, duration: 0.7 }}
  className=" transition-transform duration-300 hover:shadow-red-500 mt-6"
>
<motion.h2
  initial={{ opacity: 0, y: -10 }}
  animate={{ opacity: 1, y: 0 }}
  whileHover={{
    scale: 0.99,
    textShadow: "0px 0px 8px rgba(239, 68, 68, 0.8)",
    transition: { duration: 0.3 }
  }}
  transition={{ duration: 0.1 }}
  className="text-4xl font-semibold text-red-400 transition-all hover:text-red-300 inline-flex items-center"
>

<FaUsers size={32} className="mr-2" />
  <h1 className="text-3xl font-bold text-red-600">Meet Our Leading Crew</h1>
</motion.h2>

</motion.div>


      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6"
      >
        {teamMembers.map((member, index) => (
  <div key={index} className="h-70">
    <TeamCard member={member} />
  </div>
))}

      </motion.div>
    </motion.div> 
    </div>
    </motion.div>
    </div>
  );
};

export default About;
