// Import react hooks
import React from "react";
import { NavLink } from "react-router-dom";

// import subcomponents
import { Hero } from "../Partials/Hero";
import { FrontGallery } from "../Partials/FrontGallery";

// import modular style sheet
import Style from "../../Assets/scss/Home.module.scss";

// Home function component
export const Home = () => {
  return (
    <div>
      <Hero />
      <FrontGallery />
      <div className={Style.link}>
        <NavLink to="/events">Se alle forestillinger</NavLink>
      </div>
    </div>
  );
};
