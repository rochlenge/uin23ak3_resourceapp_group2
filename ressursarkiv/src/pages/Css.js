import { Outlet, Link } from "react-router-dom";

const Css = () => {
  return (
    <>
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

export default Css;