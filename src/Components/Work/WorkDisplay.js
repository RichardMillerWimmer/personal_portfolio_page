import React, { useState, useEffect } from "react";
import axios from 'axios';

// import ImageSlider from "./ImageSlider";

function WorkDisplay(props) {
  const [project, setProject] = useState({});

  // console.log(props)

  useEffect(() => {
    getProject()
  }, []);

  const getProject = () => {
    // console.log('getProject');
    axios.get(`/api/work/${props.match.params.id}`)
    .then(res => {
      console.log(res.data);
      setProject(res.data[0]);
    })
    .catch(err => console.log(err));
  }


  // console.log(props)
  console.log(project);

  return (
    <div className="work">
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  );
}

export default WorkDisplay;
