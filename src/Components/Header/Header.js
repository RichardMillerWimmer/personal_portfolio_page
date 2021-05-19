import React from "react";

function Header() {
  return (
    <div className="header">
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
                <li>home</li>
              </a>
              <a href="#">
                <li>about</li>
              </a>
              <a href="#">
                <li>work</li>
              </a>
              <a href="#">
                <li>contact</li>
              </a>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
