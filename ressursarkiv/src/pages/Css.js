import { Outlet, Link } from "react-router-dom";

const css = () => {
  return (
    <>
    <header>
        <h1>VÆLKØMMEN</h1>
    </header>
      <nav>
        <ul>
          <li>
            <Link to="/">CSS</Link>
          </li>
          <li>
            <Link to="/html">HTML</Link>
          </li>
          <li>
            <Link to="/JavaScript">JavaScript</Link>
          </li>
          <li>
            <Link to="/React">React</Link>
          </li>
          <li>
            <Link to="/Sanity">Sanity</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default css;