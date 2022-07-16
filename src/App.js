import React from "react";
import "./App.css";
import Header from "./Header";
import img1 from "./images/1.png";
import img2 from "./images/2.png";
import img3 from "./images/3.png";
import Footer from "./Footer";
const App = () => {
  return (
    <div className="main-div">
     <Header/>
      <div className="Container">
      <div className="Img-container">
      <img className="img-1" src={img1} alt='trophy'/>
      </div>
        <div className="cont-2">
          <div className="Heading">
            <h4>
              C.R.I. PUMPS WIN THE NATIONAL ENERGY CONVERVATION AWARD 2018 FOR
              THE 4th TIME
            </h4>
            <li>
              C.R.I.'s energy effecient product are well recognized by Goverment
              Institution , as trustworthy product for various project's across
              the globle to save energy.
            </li>
            <li>
              C.R.I. is the highest constributor in the country for the projects
              of EESL (Energy Effecient Services Limited) to replace the old
              inifficient pumps wiyh 5 star rated energy effecient smart pumps
              with lot enabled control panel.
            </li>
          </div>
          <img className="img-2" src={img2} alt='award'/>
          <div className="para">
            Goverment of india has awarded the
            <b>" NATIONAL ENERGY CONVERVATION AWARDN 2018" .</b> Mr. G. Selvarj,
            Joint Managing Director of C.R.I. Group received the award from Smt.
            Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh .
            Honorable Minister of state .
          </div>
          </div>
        </div>
      <h3>
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
        RESUILTING IN A CUMULATIVE SAVING OF MORE THEN 9,000 MILLION UNITS OF
        POWER FOR THE NATION .
      </h3>
      <div className="cont-3">
        <img className="img-3" src={img3} alt='products'/>
        <h4>Volves - Pumps - Pipes - loT Drives & Controllers - Wires and Cable - Solar System - Motors</h4>
        <hr className="new4"/>
        </div>
        <Footer/>
    </div>
  );
};

export default App;
