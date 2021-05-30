import React from "react";

import github from "../../Images/github_icon.png";
import linkedin from "../../Images/linkedin_icon.png";

function Footer() {
  return (
    <div className="footer">
      <div className="titleContainer">
      <a href="mailto: richardmmill@gmail.com"><h4>Richard Miller Wimmer</h4></a>
        <div>
          <a href="https://github.com/RichardMillerWimmer" target="_blank">
            <img className="icon" src={github} alt="github link" />
          </a>
          <a href="https://www.linkedin.com/in/richard-miller-wimmer/"
            target="_blank">
            <img className="icon" src={linkedin} alt="linkedin link" />
            <br></br>
            
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
