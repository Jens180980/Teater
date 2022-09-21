import React from "react";
import { Hero } from "../Partials/Hero";
import { FrontGallery } from "../Partials/FrontGallery";
import { NavLink } from "react-router-dom";
import Style from "../../Assets/scss/Home.module.scss";

export const Home = () => {
  return (
    <div>
      {/* <Hero /> */}
      <FrontGallery />
      <div className={Style.link}>
        <NavLink to="/events">Se alle forestillinger</NavLink>
      </div>
    </div>
  );
};
