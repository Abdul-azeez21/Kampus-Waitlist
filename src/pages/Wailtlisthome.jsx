import React from "react";

//components
import Header from "../component/Header";
import Headbanner from "../component/Headbanner";
import Features from "../component/Features";
import TechSkills from "../component/TechSkills";
import Footer from "../component/Footer";
import Faq from "../component/Faq";

const Wailtlisthome = () => {
  return (
    <div>
      <Header />
      <div>
        <Headbanner />
      </div>
      <div>
        <TechSkills />
      </div>
      <div>
        <Features />
      </div>
      <div>
        <Faq />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Wailtlisthome;
