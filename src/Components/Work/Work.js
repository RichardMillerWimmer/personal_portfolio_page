import React from "react";
import AliceCarousel from 'react-alice-carousel';
import polymath1 from 


function Work() {

  const polymathImg = [
    <img src={} alt=''/>,
    <img src={} alt=''/>,
    <img src={} alt=''/>,
    <img src={} alt=''/>
  ]

  const ttgImg = [
    <img src={} alt=''/>,
    <img src={} alt=''/>,
    <img src={} alt=''/>,
    <img src={} alt=''/>
  ]

  return (
    <div className="work">
      <div className="titleContainer">
        <h4>Work</h4>
        <AliceCarousel></AliceCarousel>
        <AliceCarousel></AliceCarousel>
      </div>
    </div>
  );
}

export default Work;
