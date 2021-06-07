import React from "react";
// import ImageSlider from "./ImageSlider";


function WorkDisplay(props) {

    console.log(props)

  return (
    <div className="work">
      <h3>WorkDisplay Component</h3>
      <h3>{this.props.work.title}</h3>
      <p>{this.props.work.description}</p>
    </div>
  );
}

export default WorkDisplay;