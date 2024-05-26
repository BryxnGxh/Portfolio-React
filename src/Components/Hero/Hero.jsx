import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id='home' className="hero">
      <img src={profile_img} alt="" />
      <h1>
        <span>I'm Alex Bennett,</span> frontend developer based in USA.
      </h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus,
        iste non.
      </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className="anchor-link" offset={50} href="#contact">Connect with Me</AnchorLink></div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
};

export default Hero;
