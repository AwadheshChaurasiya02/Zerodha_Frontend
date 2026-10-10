import { useRef } from "react";
import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

export default function Navbar() {

  let menu = useRef();
  let mobile = useRef();

  return (
    <nav className="sticky-top border-bottom">
      <div className="container py-3 d-flex align-items-center justify-content-between border-bottom">

        <div className="leftMenu">
          <Link to="/">
          <img
            src={Logo}
            alt="Logo"
            style={{ width: "25%" }}
          />
          </Link>
        </div>

        <div className="rightMenu">

          <ul id="desktop-menu">
            <Link to="/about">About</Link >
            <Link to="/products">Products</Link >
            <Link to="/pricing">Pricing</Link >
            <Link to="/support">Support</Link >
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link >
          </ul>

          <div
            id="hamberger"
            ref={menu}
            onClick={() => {
              mobile.current.classList.toggle("activemobile");
              menu.current.classList.toggle("activemenu");

              document.body.classList.toggle(
                "menu-open",
                mobile.current.classList.contains("activemobile")
              );
            }}
          >
            <div className="ham"></div>
            <div className="ham"></div>
            <div className="ham"></div>
          </div>

          <ul id="mobile-menu" ref={mobile}>
            <Link to="/signup">Signup</Link >
            <Link to="/about">About</Link >
            <Link to="/products">Products</Link >
            <Link to="/pricing">Pricing</Link >
            <Link to="/support">Support</Link >
          </ul>

        </div>
      </div>
    </nav>
  );
}