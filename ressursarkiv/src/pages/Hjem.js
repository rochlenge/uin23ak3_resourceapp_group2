import { Outlet, NavLink } from "react-router-dom";

function handleClick(event) {
    event.preventDefault();
    event.currentTarget.querySelector("a").click();
  }

const hjem = () => {
  return (
    <>
    <div>
    <header>
        <h1 id="title">RESSURSARKIV</h1>
    </header>
      <nav>
      <ul id="buttonbox">
        <li className="button" onClick={handleClick}>
          <NavLink to="/css">CSS</NavLink>
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

  )
};

export default hjem;
