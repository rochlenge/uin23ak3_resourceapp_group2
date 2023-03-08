import { Outlet, NavLink } from "react-router-dom";
import React, { useState } from "react";

function MyButton() {
  const [isActive, setIsActive] = useState(false);

  function handleClick(event) {
    event.preventDefault();
    setIsActive(true);
    event.currentTarget.querySelector("a").click();
  }

  return (
    <>
      <div>
        <header>
          <h1 id="title">RESSURSARKIV</h1>
        </header>
        <nav>
          <ul id="buttonbox">
            <li className={`button ${isActive ? "active" : ""}`} onClick={handleClick}>
              <NavLink to="/css" activeClassName="active">
                CSS
              </NavLink>
            </li>
            <li className="button" onClick={handleClick}>
              <NavLink to="/html">HTML</NavLink>
            </li>
            <li className="button" onClick={handleClick}>
              <NavLink to="/JavaScript">JavaScript</NavLink>
            </li>
            <li className="button" onClick={handleClick}>
              <NavLink to="/React">React</NavLink>
            </li>
            <li className="button" onClick={handleClick}>
              <NavLink to="/Sanity">Sanity</NavLink>
            </li>
          </ul>
        </nav>
        <Outlet />
      </div>
    </>
  );
}

export default MyButton;