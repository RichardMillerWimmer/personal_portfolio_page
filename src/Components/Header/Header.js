import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="headerContainer">
        <div className="logo">
          <p>R</p>
        </div>
        <div className="menu">
          <nav role="navigation">
            <div id="menuToggle">
              <input type="checkbox" />

              <span className="span1"></span>
              <span className="span2"></span>
              <span className="span3"></span>

              <ul id="menu">
                <a href="#">
                  <li><Link to='/'>home</Link></li>
                </a>
                <a href="#">
                  <li><Link to='/work'>work</Link></li>
                </a>
                <a href="#">
                  <li><Link to='/contact'>contact</Link></li>
                </a>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
