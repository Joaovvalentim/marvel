import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { navItems } from "./navitems";
import DropdownPersonagens from './dropdownContent/dropdownPersonagens.js'
import DropdownQuadrinhos from './dropdownContent/dropdownQuadrinhos.js'
import DropdownCriadores from './dropdownContent/dropdownCriadores.js'
import DropdownEventos from './dropdownContent/dropdownEventos.js'
import DropdownSeries from './dropdownContent/dropdownSeries.js'
import DropdownStories from './dropdownContent/dropdownStories.js'


function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const [dropdown2, setDropdown2] = useState(false);
  const [dropdown3, setDropdown3] = useState(false);
  const [dropdown4, setDropdown4] = useState(false);
  const [dropdown5, setDropdown5] = useState(false);
  const [dropdown6, setDropdown6] = useState(false);

  return (
    <>
      <nav className="navbar">
        <ul className="nav-items">
          {navItems.map((item) => {
            if (item.title === "personagens") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown && <DropdownPersonagens />}
                </li>
              );
            }
            if (item.title === "quadrinhos") {
              return (
                <li

                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown2(true)}
                  onMouseLeave={() => setDropdown2(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown2 && <DropdownQuadrinhos />}
                </li>
              );
            }
            if (item.title === "criadores") {
              return (
                <li

                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown3(true)}
                  onMouseLeave={() => setDropdown3(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown3 && <DropdownCriadores />}
                </li>
              );
            }
            if (item.title === "eventos") {
              return (
                <li

                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown4(true)}
                  onMouseLeave={() => setDropdown4(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown4 && <DropdownEventos />}
                </li>
              );
            }
            if (item.title === "series") {
              return (
                <li

                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown5(true)}
                  onMouseLeave={() => setDropdown5(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown5 && <DropdownSeries />}
                </li>
              );
            }
            if (item.title === "stories") {
              return (
                <li

                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown6(true)}
                  onMouseLeave={() => setDropdown6(false)}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown6 && <DropdownStories />}
                </li>
              );
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;