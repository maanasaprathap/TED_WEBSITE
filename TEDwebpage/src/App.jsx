import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Speakers from "./pages/Speakers";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Feminism from "./components/Article_Pages/Feminism";
import ComfortZoneArticle from "./components/Article_Pages/Comfort_zone";
import DNA_Article from "./components/Article_Pages/DNA";
import ImposterSyndromeArticle from "./components/Article_Pages/Imposter_syndrome";
import { Innovate_18 } from "./components/Events_Articles/innovate'18";
import { Innovate_19 } from "./components/Events_Articles/innovate'19";
import { Innovate_19_2 } from "./components/Events_Articles/innovate'19.2.0";
import { Innovate_21 } from "./components/Events_Articles/innovate'21";
import { Innovate_22 } from "./components/Events_Articles/innovate'22";
import { Innovate_23 } from "./components/Events_Articles/innovate'23";
import { Innovate_24 } from "./components/Events_Articles/innovate'24";
import { Orginate_24 } from "./components/Events_Articles/orginate'24";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/speakers" element={<Speakers />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/feminism" element={<Feminism />} />
        <Route path="/comfort-zone" element={<ComfortZoneArticle />} />
        <Route path="/dna-storage" element={<DNA_Article />} />
        <Route path="/imposter-syndrome" element={<ImposterSyndromeArticle />} />
        <Route path="/innovate'18" element={<Innovate_18 />} />
        <Route path="/innovate'19" element={<Innovate_19 />} />
        <Route path="/innovate'19.2.0" element={<Innovate_19_2 />} />
        <Route path="/innovate'21" element={<Innovate_21 />} />
        <Route path="/innovate'22" element={<Innovate_22 />} />
        <Route path="/innovate'23" element={<Innovate_23 />} />
        <Route path="/innovate'24" element={<Innovate_24 />} />
        <Route path="/orginate'24" element={<Orginate_24 />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
