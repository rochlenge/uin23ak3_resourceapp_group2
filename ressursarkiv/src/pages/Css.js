import { Outlet, Link } from "react-router-dom";

const Css = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Css</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Css;