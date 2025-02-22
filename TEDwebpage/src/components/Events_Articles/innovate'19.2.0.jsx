import { motion } from "framer-motion";

export const Innovate_19_2 = () =>{
    return(
    <div className="p-8 bg-black min-h-screen flex flex-col overflow-hidden relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="p-8 bg-black text-white max-w-3xl mx-auto shadow-xl rounded-lg"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl font-extrabold text-red-500 text-center mb-4"
        >
          Art of Failing
        </motion.h1>
        <motion.h2
         initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-3xl font-extrabold text-red-500 text-center mb-4"
        >
            “Ever tried. Ever failed. No matter.
Try again. Fail again. Fail better.”
        </motion.h2>

        <motion.img
          src="/assets/Events/2019/innovate-name.jpg"
          alt="Innovate 19 2.0"
          className="w-full my-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-500"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />

         <motion.p
          className="mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
         <strong>INNOVATE 2019</strong> returned back with an exciting theme - Art of Failing surrounded by suspense. TEDc MIT held pleasure in hosting an event combining students and their ideas that would pave the way to an evolutionary generation. <strong>INNOVATE'19</strong> - the intercollegiate event, glorified the<strong>Rajam Hall of MIT</strong> on the 28th of September,2019.

         <br />
         <br />
        </motion.p>
        <motion.div className="space-y-4">
          {[{
            name: "Mr. Murali Vijayakumar(Biglee)",
            image: "/assets/Events/2019/guest-2.jpg",
            description: "Coach Murali Vijayakumar, widely known as BigLee, delivered an electrifying talk on 'The Art of Falling'. He shared how failure is inevitable in any journey, whether in bodybuilding or life. He emphasized that just like in lifting weights, where a failed rep teaches more than a successful one, setbacks in life build resilience. He spoke about the importance of controlled failure, learning from mistakes, and pushing forward with discipline and consistency. 'You don’t get stronger by avoiding the fall—you get stronger by learning how to rise again,' he said, leaving the audience motivated to embrace challenges head-on."
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
        ].map((speaker, index) => (
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
                <h3 className="text-lg font-semibold">{index + 1}. {speaker.name}</h3>
                <p>{speaker.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.p
        className="mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 1 }}
      >Online games were conducted by the club through social media for motivating the enthusiastic audience.

TEDc MIT takes privilege in thanking all the club members, dignitaries, speakers of the show and our exuberant audience for making the event a memorable one. We are eager to present you more of such interesting events very soon!

</motion.p>


        </motion.div>
    </div>
    );
}