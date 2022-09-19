import React from "react";
import { Link } from "react-router-dom";
import { Navigation } from "../Partials/Navigation";
import Style from "../../Assets/scss/Header.module.scss";
import { SearchBar } from "./SearchBar";

export const Header = () => {
  return <header className={Style.header}></header>;
};
