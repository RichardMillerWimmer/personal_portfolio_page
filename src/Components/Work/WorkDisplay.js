import React, { useState, useEffect } from "react";
// import ImageSlider from "./ImageSlider";

function WorkDisplay(props) {
  const [project, setProject] = useState({});

//   useEffect(() => {
//       setProject(props.location.state.work.work)
//   })

  useEffect(() => {
    const data = localStorage.getItem("project-object");
    setProject(JSON.parse(data));
  }, []);

  useEffect(() => {
    //   if(!project.id){
    //       setProject(props.location.state.work.work)
    //   } else {
    //     const data = localStorage.getItem("project-object");
    //     setProject(JSON.parse(data));
    //   }
      localStorage.setItem(
        "project-object",
        JSON.stringify(project)
      );
      return () => {
        localStorage.clear()
    }
  });
  
//   useEffect(() => {
//       return () => {
//           localStorage.clear()
//       }
//   })

  // console.log(props)
  console.log(project);

  return (
    <div className="work">
      <h3>Work Display Component</h3>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  );
}

export default WorkDisplay;
