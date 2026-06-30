import React from "react";
import logo from "../../assets/logo.png";
import "./NavBar.css";

export default function NavBar() {
  return (
    <header className="site-header">
      <div className="container">
        <div className="nav-row">

          <nav className="site-nav">
            <ul>
              <li><a href="#about">من نحن</a></li>
              <li><a href="#book-month">كتاب الشهر</a></li>
              <li><a href="#readings">القراءات</a></li>
            </ul>
          </nav>

          <a href="#hero" className="site-brand">
            <img src={logo} alt="رواء" />
          </a>

        </div>
      </div>
    </header>
  );
}