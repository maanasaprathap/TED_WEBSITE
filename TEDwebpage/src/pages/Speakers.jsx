import { motion } from "framer-motion";

const Speakers = () => {
 const speakers = [
    {
       name: " Mr. Ubagarampillai Sahayam | Former IAS officer",
            image: "/assets/Events/2021/sagayam_ias.jpeg",
            description: ""
    },
          {
            name: "Dr. Jangid IPS",
            image: "/assets/Events/2022/Jangid IPS.jpeg",
            description: ""
          },
          {
            name: "Raj Mohan | Director",
            image: "/assets/Events/2022/Rajmohan.jpeg",
            description: ""
          },
          {
            name: "Mrs Bharathi Baskar | Tamil Orator",
            image: "/assets/Events/2021/bharathi baskar.jpeg",
            description: ""
          },
           {
            name: "Dr. Sivaraman",
            image: "/assets/Events/2022/Dr.Sivaraman.jpeg",
            description: ""
          },
          {
            name: "RJ Vignesh - BlackSheep Entertainment",
            image: "/assets/Events/2024/rj vignesh.JPG",
            description: ""
          },
           {
            name: "Mr TamilSelvan |  Founder of TamilTech",
            image: "/assets/Events/2024/tamilselvan.JPG",
            description: ""
          },
          {
            name: "Mr. Anbuthasan | Actor",
            image: "/assets/Events/2024/Anbuthasan.JPG",
            description: ""
          },
          {
            name: "Mr. Suresh Kumar | Founder of Pepul",
            image: "/assets/Events/2022/guest-1.jpg",
            description: ""
          }, {
            name: "Ms. Padmini Janaki | CEO of Mind and Mom",
            image: "/assets/Events/2022/guest-2.jpg",
            description: ""
          }, {
            name: "Mr. Sivaraman | Founder of deHub for Architects",
            image: "/assets/Events/2022/guest-3.jpg",
            description: ""
          }, {
            name: "Mr. Senthil Raj | Founder of On the Streets Musical Community",
            image: "/assets/Events/2022/guest-4.jpg",
            description: ""
          }, 
          {
            name: "Ms Kritanya Krishnamurthy | trainer and a coach",
            image: "/assets/Events/2024/kirtana.JPG",
            description: ""
          },
          {
            name: "Agnel John | Error Makes Clever",
            image: "/assets/Events/2024/Angel John.JPG",
            description: ""
          }, 
          { name: "Vikkals of Vikram | Actor",
            image: "/assets/Events/2024/vikkals.jpeg",
            description: ""},

          { name: "Epaphra | Entrepreneur",
            image: "/assets/Events/2024/Epaphra.jpeg",
            description: ""},

          {name: "Mr Sethu Raman | Entrepreneur",
            image: "/assets/Events/2024/sethu raman.jpeg",
            description: ""},
          {
             name: "Mr. Murali Shankarnarayanan",
            image: "/assets/Events/2021/mike murali.jpeg",
            description: ""
          },
          {
             name: "Mr. Sumanth C",
            image: "/assets/Events/2021/sumanth c raman.jpeg",
            description: ""
          },
          {
             name: "Mr. Vijay Anandh",
            image: "/assets/Events/2021/Vijay Anandh.jpeg",
            description: ""
          },
          {
            name: "Mr. Mathur Sathya",
            image: "/assets/Events/2022/guest-5.jpg",
            description: ""
          }, {
            name: "Mr. Jayakumar Kanagarajan | Industry leader at Caterpillar",
            image: "/assets/Events/2022/guest-6.jpg",
            description: ""
          }, {
            name: "Ms. Kanishsri | Para Asian Games 2018 champion",
            image: "/assets/Events/2022/guest-7.jpeg",
            description: ""
          },
          {
            name: "Mr. A. Gokulnath | ICLS, the Registrar of Companies",
            image: "/assets/Events/2023/guest-1.jpeg",
            description: ""
          }, {
            name: "Mr. Milton Samsundar | artist and educator",
            image: "/assets/Events/2023/guest-2.jpeg",
            description: ""
          }, {
            name: "Mr. Vignesh Vellappan | Founder of Seyal Foundation",
            image: "/assets/Events/2023/guest-3.jpeg",
            description: ""
          }, {
            name: "Dr. Prahallathan K. K | Co-founder of Bhumi NGO",
            image: "/assets/Events/2023/guest-4.jpeg",
            description: ""
          }, {
            name: "Mr. Thozhamaiyan | Founder of Deleted Drafts",
            image: "/assets/Events/2023/guest-5.jpg",
            description: ""
          }, {
            name: "Mr. Arivarasu Kalainesan | Rapper and lyricist",
            image: "/assets/Events/2023/guest-6.jpg",
            description: ""
          },
          {
            name: "Mr. Murali Vijayakumar(Biglee) | Coach",
            image: "/assets/Events/2019/guest-2.jpg",
            description: ""
          }, {
            name: "Mr. Sriram | Founder and CTO - Primefort",
            image: "/assets/Events/2019/guest-3.jpg",
            description: ""
          }, {
            name: "Mr. Prashanth R | Tamil Cinema Reviewer",
            image: "/assets/Events/2019/guest-5.jpg",
            description: ""
          }, {
            name: "Mrs. K. Suriya Prabha | Founder and CEO - Youcode Intelligence Solutions",
            image: "/assets/Events/2019/guest-4.jpg",
            description: ""
          },
          
          {
            name: "Yuva Prakash - Athlete",
            image: "/assets/Events/2022/Yuvaprakash.jpeg",
            description: ""
          },
          {
            name: "Aarthi - SP Robotics",
            image: "/assets/Events/2022/AArthi_sp robotics.jpeg",
            description: ""
          },
         
          {
            name: "Ms. Nikila Shankar | Actor",
            image: "/assets/Events/2024/nikila.JPG",
            description: ""
          },
          {name: "Ms Iswarya | Content Creator",
            image: "/assets/Events/2024/iswarayagp.jpeg",
            description: ""},
          {name: "Ms Jaya Jagdeesh | Entrepreneur",
            image: "/assets/Events/2024/jaya_jagdeesh.jpeg",
            description: ""},
         
  ];

  return (
    <div className="p-16 bg-black min-h-screen flex flex-col items-center">
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="text-4xl font-bold text-red-600 text-center mb-8"
        style={{ fontFamily: "'Cutive Mono', monospace" }}
      >
        PAST SPEAKER
      </motion.h1>
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="text-2xl font-bold text-red-600 text-center mb-8"
        style={{ fontFamily: "'Cutive Mono', monospace" }}
      >
       TAKE A LOOK AT OUR PAST SPEAKERS WHO INCREASED THE VALUE OF OUR STAGE
      </motion.h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl">
        {speakers.map((speaker, index) => (
          <motion.div
            key={index}
            className="bg-black rounded-lg shadow-lg p-4 flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
          >
            <motion.img
              src={speaker.image}
              alt={speaker.name}
              className="w-40 h-40  mb-4 shadow-md hover:scale-105 transition-transform duration-500"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            />
            <h3 className="text-lg text-white font-semibold text-center">{speaker.name}</h3>
            <p className="text-center text-white text-sm mt-2">{speaker.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Speakers;
