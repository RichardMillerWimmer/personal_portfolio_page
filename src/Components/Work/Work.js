import React from "react";
import AliceCarousel from 'react-alice-carousel';

import polymath1 from '../../Images/polymath1.png';
import polymath2 from '../../Images/polymath2.png';
import polymath3 from '../../Images/polymath3.png';
import polymath4 from '../../Images/polymath4.png';

import ttg1 from '../../Images/ttg1.png';
import ttg2 from '../../Images/ttg2.png';
import ttg3 from '../../Images/ttg3.png';
import ttg4 from '../../Images/ttg4.png';


function Work() {

  const polymathImg = [
    <img src={polymath1} alt='' className='carouselImg'/>,
    <img src={polymath2} alt='' className='carouselImg'/>,
    <img src={polymath3} alt='' className='carouselImg'/>,
    <img src={polymath4} alt='' className='carouselImg'/>
  ]

  const ttgImg = [
    <img src={ttg1} alt='' className='carouselImg'/>,
    <img src={ttg2} alt='' className='carouselImg'/>,
    <img src={ttg3} alt='' className='carouselImg'/>,
    <img src={ttg4} alt='' className='carouselImg'/>
  ]

  return (
    <div className="work">
      <div className="titleContainer">
        <h4>Work</h4>
        <AliceCarousel autoPlay autoPlayInterval='3000' items={polymathImg}/>
        <AliceCarousel autoPlay autoPlayInterval='3000' items={ttgImg}/>
      </div>
    </div>
  );
}

export default Work;
