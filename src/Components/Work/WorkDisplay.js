import React, { useState, useEffect } from "react";
import axios from "axios";

import ImageSlider from "./ImageSlider";

function WorkDisplay(props) {
  const [project, setProject] = useState({});
  const [imageSlides, setImageSlides] = useState([]);

  // console.log(props)

  useEffect(() => {
    getProject();
  }, []);

  useEffect(() => {
    setImageSlides(project.images);
    // console.log(imageSlides)
  }, [project]);

  const getProject = () => {
    // console.log('getProject');
    axios
      .get(`/api/work/${props.match.params.id}`)
      .then((res) => {
        // console.log(res.data);
        setProject(res.data[0]);
        setImageSlides(res.data[0].images);
        // console.log(res.data[0].images)
        // console.log(imageSlides)
      })
      .catch((err) => console.log(err));
  };

  // console.log(imageSlides)
  // console.log(project);

  return (
    <section className="workDisplay">
      <h2>{project.title}</h2>
      <p className="workDisplayText">{project.description}</p>
      <ImageSlider imageSlides={imageSlides} />
      <div>
        <h4>Highlight Technologies</h4>
        <p className="techsList">{project.tech}</p>
      </div>
      <iframe 
        src={project.video}
        loading='eager'
        height='230'
        width='400'
        title={project.title}
        border='none'
      />
    </section>
  );
}

export default WorkDisplay;
