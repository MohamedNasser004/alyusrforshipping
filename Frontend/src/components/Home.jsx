import React from "react";
import Header from "./Header";
import HeroSection from "../Home/HeroSection";
import Services from "../Home/Services";
import About from "../Home/About";
import Footer from "./Footer";
import Branches from "../Home/Branches";

const Home = () => {
      return (
            <>
                  <Header />
                  <HeroSection />
                  <Branches />
                  <About />
                  <Services />
                  <Footer />
            </>
      )
}

export default Home;