import React from "react";
import ImageSlider from "./ImageSlider";

import polymath1 from "../../Images/polymath1.png";
import polymath2 from "../../Images/polymath2.png";
import polymath3 from "../../Images/polymath3.png";
import polymath4 from "../../Images/polymath4.png";

import ttg1 from "../../Images/ttg1.png";
import ttg2 from "../../Images/ttg2.png";
import ttg3 from "../../Images/ttg3.png";
import ttg4 from "../../Images/ttg4.png";

function Work() {
  const polymathImg = [polymath1, polymath2, polymath3, polymath4];

  const ttgImg = [ttg1, ttg2, ttg3, ttg4];

  return (
    <div className="work">
      <h3>Work</h3>
      <section className="workFlex">
        <div className='workContainer'>
          <h4>Polymath Visuals Store</h4>
          <ImageSlider
            slides={polymathImg}
            site={"https://polymathvisualsstore.com/#/"}
          />
          <p></p>
        </div>
        <div className='workContainer'>
          <h4>TopTable Games</h4>
          <ImageSlider slides={ttgImg} site={"https://toptablegames.net/#/"} />
          <p></p>
        </div>
      </section>
    </div>
  );
}

export default Work;
