import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import image from "../../Images/polymath1.png";

function WorkBox(props) {
    const [work, setWork] = useState()
    useEffect(() => {
        setWork(props)
    },[])
//   console.log(props);


  return (
    <section className="workFlex">
      <div className="workContainer">
        <h4>{props.work.title}</h4>
        <div className="wrapImage">
          <Link
            to={{
              pathname: `/project/${props.work.id}`,
              state: { work: work },
            }}
          >
            <img src={props.work.imgOne} alt={props.work.title} className="workImg" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default WorkBox;
