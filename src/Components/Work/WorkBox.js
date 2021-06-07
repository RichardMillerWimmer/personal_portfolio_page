import React from "react";
import {Link} from 'react-router-dom';

function WorkBox(props) {

    console.log(props)
    
  return (
    <section className="workFlex">
    <div className="workContainer">
      <h4>{props.work.title}</h4>
      <div className="wrapImage">
        <Link to={`/project/${props.work.id}`}>
          <img
            className="workImg"
            src={props.work.imgOne}
            alt={props.work.title}
          />
        </Link>
      </div>
    </div>
  </section>
  );
}

export default WorkBox;
