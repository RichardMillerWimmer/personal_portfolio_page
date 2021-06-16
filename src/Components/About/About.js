import React from "react";
import {Link} from 'react-router-dom';

function About() {
  return (
    <div className="about">
      <h2>About Me</h2>
      <section className="aboutText">
        <p>
          Allow me to introduce myself, My name is Richard, and I'm a full stack web
          developer/designer. My family and I call the Cincinnati/Northern
          Kentucky area home.
        </p>
        <br></br>
        <p>
          My professional path has lead me to development but along the way I
          have gathered many skills in other creative disciplines. Some of these areas include music, graphic design, video, social media content and strategy. This gives me a
          unique approach to development and design.
        </p>
        <br></br>
        <p>
          I am a driven lifelong learner who is always looking to take on a new
          skill and tackle exciting projects. Along with web development, I enjoy improving my german skills, woodworking, and home improvment projects.  
        </p>
        <br></br>
        <p>
          I would love to connect with you, find me on <a className='linkedInLink' href='https://www.linkedin.com/in/richard-miller-wimmer/' target='_blank' rel="noreferrer">LinkedIn</a> and shoot
          me a message. You can also contact me <Link className='contactLink' to='/contact'>here</Link>.
        </p>
        <br></br>
        <div className='centerBtn'>
          <a
            className="resumeLink"
            href="https://docs.google.com/document/d/1_gpG0nhrPrHhr04xQLNj1Yf3b2En5tP3-XkwiF19gP0/export?format=pdf"
          >
            my resume
          </a>
        </div>
      </section>
    </div>
  );
}

export default About;
