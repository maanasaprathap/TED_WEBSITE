import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const Innovate_23 = () => {
  return (
    <div className="p-8 bg-black min-h-screen flex flex-col overflow-hidden relative pb-24">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="p-6 bg-gray-900 text-white max-w-4xl mx-auto shadow-lg rounded-lg"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl font-extrabold text-red-500 text-center"
        >
          One World One Voice
        </motion.h1>
        <p className="text-sm text-gray-500 text-center">TEDcMIT - Innovate 23, April 28, 2023</p>
        <motion.img
          src="/assets/Events/2023/innovate-23.jpg"
          alt="Innovate 23"
          className="w-full my-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />
        <p className="text-gray-300">
          Innovate 23, TEDcMIT’s flagship event, embraced the theme "One World, One Voice," advocating for global unity and equality. The event featured a diverse lineup of impactful speakers, insightful discussions, and creative performances.
        </p>
        
        <p className="text-lg font-semibold text-red-500 mt-6">Guest Speakers</p>
        <motion.div className="space-y-4">
         {[{
             name: "Mr. A. Gokulnath |Registrar of companies,Puducherry ",
             image:"/assets/Events/2023/guest-1.jpeg",
             description: "Mr. A. Gokulnath ICLS, the Registrar of companies,Puducherry, shared his insights and intellect about the civil services in India. He also narrated his own experience in tackling the UPSC civil services exam after graduating in engineering and recollected his moments of transformation. It proved to be a speech that boasted the contribution of the well-educated in our world."
         },
         {
           name: "Mr Milton Samsundar | artist and art educator ",
             image:"/assets/Events/2023/guest-2.jpeg",
             description: "Milton Samsundar, artist and art educator, the proud North-Madras resident, engaged the whole gathering with his speech of how he transitioned his devastation into an antidote for the same. He began with his breath taking Parai performance and went on explaining his darkest hour of losing his dearest cousin and the brightest hours of talking with random strangers through his Instagram initiative!!! This talk made us realize the importance of voicing our heart out."
         },
         {
           name: "Mr. Vignesh Vellappan | The Founder of Seyal Foundation ",
             image:"/assets/Events/2023/guest-3.jpeg",
             description: "Vignesh Vellappan, the Founder of Seyal Foundation, and the recipient of the Pride of India award and also a sophomore at Sri Sairam college, made everyone raise their brows with his talk about what is 'to act' or 'Seyal' . Being an independent youngster, his socialresponsibility and civic awareness made him to jump into work and feed as many, not people, but whole families as possible, only with his earnings and pocket money."
         },
        {
           name: "Dr. Prahallathan K. K | the co-founder of Bhumi NGO ",
             image:"/assets/Events/2023/guest-4.jpeg",
             description: " Dr. Prahallathan K. K., the co-founder of Bhumi NGO, beautifully took us through the decades long journey of Bhumi and its contributions to our country. From a little computertable to a multi-branched national NGO, this massive turn over for Bhumi happened only because 'every volunteer acts like a leader, rather than a leader commanding them ', saidDr.Prahallathan."

        },
        {
           name: "Mr. Thozhamaiyan | the founder of Deleted Drafts ",
             image:"/assets/Events/2023/guest-5.jpg",
             description: "Mr. Thozhamaiyan, the founder of Deleted Drafts, writer and instrumentalist , glided through the indirect oppression towards women folk in the entertainment industry. He quoted several lyrics from vast area of cinema songs. That was a truly 'innovative' talk altering our perspectives towards assessing and accepting media content."

        },
        {
          name: "Mr. Arivarasu Kalainesan | rapper, lyricist and singer, ",
             image:"/assets/Events/2023/guest-6.jpg",
             description: "Mr. Arivarasu Kalainesan, rapper, lyricist and singer, known for his appearance in the song 'Enjoy Enjaami, was the most awaited speaker for the day who talked about the inhumanitarian suppression. He explained about the societal discriminations by means of race, community, and gender. He highly specified the importance of education, a schooling, or a graduation, which is the only viable means of victory. The talk echoed the theme of unification and oneness."
        }].map((speaker, index) => (
            <motion.div
              key={index}
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.7 }}
            >
              <motion.img
                src={speaker.image}
                alt={speaker.name}
                className="w-60 h-60 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
              />
              <div>
                <h3 className="text-lg font-semibold text-red-400">{index + 1}. {speaker.name}</h3>
                <p className="text-gray-300">{speaker.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-lg font-bold text-red-500 text-center mt-6">INSPIRE. INNOVATE. INVENT.</p>
        
        <motion.div className="text-center mt-6" whileHover={{ scale: 1.1 }}>
          <Link to="/events" className="text-red-500 hover:underline">← Back to Gallery</Link>
        </motion.div>
      </motion.div>
    </div>
  );
};
