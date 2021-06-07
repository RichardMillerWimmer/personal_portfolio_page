import React from "react";
import ImageSlider from "./ImageSlider";

import polymath1 from "../../Images/polymath1.png";

import ttg1 from "../../Images/ttg1.png";
import { Link } from "react-router-dom";

function Work() {
  return (
    <div className="work">
      <h3>Work</h3>
      <section className="workFlex">
        <div className="workContainer">
          <h4>Polymath Visuals Store</h4>
          <div className="wrapImage">
            <Link>
              <img
                className="workImg"
                src={polymath1}
                alt="Polymath Visuals Imgage"
              />
            </Link>
          </div>
          <p></p>
        </div>
        <div className="workContainer">
          <h4>TopTable Games</h4>
          <div className="wrapImage">
            <Link>
              <img className="workImg" src={ttg1} alt="TableTop Games Image" />
            </Link>
          </div>
          <p></p>
        </div>
      </section>
    </div>
  );
}

export default Work;
