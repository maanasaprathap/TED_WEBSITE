import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ComfortZoneArticle = () => {
  return (
    <motion.section
      className="py-12 bg-gray-100"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-12 gap-8">
        {/* Main Article */}
        <div className="col-span-8  p-6 rounded-lg shadow-lg">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-6"
          >
            <img
              src="/assets/Articles/Feminism/Feminism.jpg"
              loading="lazy"
              alt="Feminism"
              className="w-full rounded-lg shadow-md"
            />
          </motion.div>
          <motion.div
            className="text-gray-500 text-sm mb-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <i className="zmdi zmdi-alarm-check"></i> January 8, 2022
          </motion.div>
          <motion.p
            className="text-gray-700 text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            To all the young girls out there (sorry boys), looking for ways to
            empower yourself? Has all the feminist talk left you with goosebumps
            and the urge to do something about it?
            <br />
            <br />
            Here are a few misconceptions about Feminist activities that you
            might (not) want to follow:
            <br />
            1. Indulge in discussions proving men to be wrong
            <br />
            2. Break the womanly stereotypes and force others to do so
            <br />
            3. Throw in words that sound powerful even if it's out of context
            <br />
            <br />
            Though this might be a bit exaggerated, this is how modern
            feminists of today are liberating themselves through active feminist
            movements...
          </motion.p>
        </div>

        {/* Sidebar with Other Articles */}
        <div className="col-span-4">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Other Articles</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/feminism"
                  className="text-blue-500 hover:underline"
                >
                   {/* "To all the young girls out there (sorry boys) Looking for ways to empower yourself? Has all the feminist talks left you with goosebumps and the urge..." */}
                   Why Feminism went toxic
                </Link>
              </li>
              <li>
                <Link
                  to="/dna-storage"
                  className="text-blue-500 hover:underline"
                >
                   "Think back to the moment when you’ve had too many anxious thoughts about life. When was the last time you did something for the first time?"
                </Link>
              </li>
              <li>
                <Link
                  to="/imposter-syndrome"
                  className="text-blue-500 hover:underline"
                >
                   "Imposters have infiltrated and now they’re among us. A prestigious conference with renowned tycoons and artists..."
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ComfortZoneArticle;
