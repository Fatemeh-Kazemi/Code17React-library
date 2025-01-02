import { Link, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <div style={{width: "100%"}}>
      <div className="navbar">
        <Link to="/books">کتاب ها</Link>
        <Link to="/about">درباره ما</Link>
      </div>
      <hr />

      <Outlet />
    </div>
  );
};

export default Navbar;
