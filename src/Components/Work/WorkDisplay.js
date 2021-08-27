import React, { useState, useEffect } from "react";
// import axios from "axios";

import ImageSlider from "./ImageSlider";

function WorkDisplay(props) {
  const [project, setProject] = useState({});
  const [imageSlides, setImageSlides] = useState([]);

  // console.log(props.location.state.work)

  useEffect(() => {
    setProject(props.location.state.work)
    setImageSlides(props.location.state.work.images)
  }, []);
  

  // useEffect(() => {
    // getProject();
  // }, []);

  // useEffect(() => {
  //   setImageSlides(project.images);
  //   // console.log(imageSlides)
  // }, [project]);

  // const getProject = () => {
  //   // console.log('getProject');
  //   axios
  //     .get(`/api/work/${props.match.params.id}`)
  //     .then((res) => {
  //       // console.log(res.data);
  //       setProject(res.data[0]);
  //       setImageSlides(res.data[0].images);
  //       // console.log(res.data[0].images)
  //       // console.log(imageSlides)
  //     })
  //     .catch((err) => console.log(err));
  // };

  // console.log(imageSlides)
  // console.log(project);

  return (
    <section className="workDisplay">
      <a href={project.url} target="_blank" rel="noreferrer"><h2>{project.title}</h2></a>
      <div className="workDisplayFlex">
        <p className="workDisplayText">{project.description}</p>
        <div className="imageSliderContainer">
          <ImageSlider imageSlides={imageSlides} url={project.url} />
        </div>
        <div className="techContainer">
          <h4>Highlight Technologies</h4>
          <p className="techsList">{project.tech}</p>
        </div>
        <div className="iframeContainer">
          <iframe
            className="responsiveIframe"
            src={project.video}
            loading="eager"
            allowFullScreen='true'
            title={project.title}
            border="none"
            width="100%"
          />
        </div>
      </div>
    </section>
  );
}

export default WorkDisplay;
