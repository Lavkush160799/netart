import React from "react";
import {BiPhoneCall} from "@react-icons/all-files/bi/BiPhoneCall";
import {CgFacebook} from "@react-icons/all-files/cg/CgFacebook";
import {AiFillGoogleCircle} from "@react-icons/all-files/ai/AiFillGoogleCircle";
const Footer = () => {
  const style={color:"white", margin:"5px",fontSize:"30px"};
  return (
    <div className="footer-para">
      <h4>C.R.I. FLUID SYSTEMS PRODUCTS CARTER TO DIVERSE SEGMENTICS</h4>
     <p> CHEMICALS & PROCESS | POWER | WATER AND WASTE WATER | OIL 7 GAS | PHARMA |
      SUGERS & DISTILLERIES | PAPER AND PULP | MARINE & DEFENCE | METAL & MINING
      | FOOD & BEVERAGE | PETROCHEMICALS & REFINERS | SOLAR | BUILDING | HVAC |
      FIRE FIGHTIG | AGRICULTURE & RESIDENTAL</p>
      <div className="social">
        <p><BiPhoneCall style={style}/>Toll Free NO 1800 200 1234</p>
        <p><CgFacebook style={style}/>www.facebook.com/cripumps</p>
        <p><AiFillGoogleCircle style={style}/>www.crigroup.com</p>
      </div>
    </div>
  );
};

export default Footer;
