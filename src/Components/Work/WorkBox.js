import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

function WorkBox(props) {
    const [work, setWork] = useState()
    
    useEffect(() => {
        setWork(props.work)
    },[])
  // console.log(props);

  const setLocalStorage = (localProject) => {
    localStorage.setItem("project-object", JSON.stringify(localProject))
  };

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
            onClick={setLocalStorage(work)}
          >
            <img src={props.work.images[0]} alt={props.work.title} className="workImg" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default WorkBox;
