import React from "react";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
  const menu = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Our Tours", path: "/tours" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
    <nav className="container-fluid d-flex justify-content-between align-items-center">
      <div><NavLink to='/'><i class="fa-solid fa-mountain-sun" /></NavLink> </div>
      <div>{menu.map(item=><span className="p-2" key={item.name}><NavLink to={item.path}>{item.name}</NavLink></span> )}</div>
      
    </nav>
    </>
  )
};
