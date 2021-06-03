import React, {useState} from "react";

import { Link } from "react-router-dom";

function Header() {
  const [checkbox, setCheckbox] = useState(false);

  const toggleCheckbox = () => {
    setCheckbox(!checkbox);
  }; 

  return (
    <div className="header">
      <div className="headerContainer">
        <div className="logo">
          <p>R</p>
        </div>
        <div className="menu">
          <nav role="navigation">
            <div id="menuToggle">
              <input type="checkbox" id='checkbox' checked={checkbox} onChange={toggleCheckbox}/>

              <span className="span1"></span>
              <span className="span2"></span>
              <span className="span3"></span>

              <ul id="menu">
                <a href="#">
                  <li><Link to='/' onClick={toggleCheckbox}>home</Link></li>
                </a>
                <a href="#">
                  <li><Link to='/work' onClick={toggleCheckbox}>work</Link></li>
                </a>
                <a href="mailto: richardmmill@gmail.com">
                  <li onClick={toggleCheckbox}>contact</li>
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
