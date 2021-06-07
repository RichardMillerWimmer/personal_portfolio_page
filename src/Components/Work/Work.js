import React from "react";
import WorkBox from "./WorkBox";

import WorkArr from "../../Media/WorkArr";


function Work() {

  // console.log(WorkArr)


  let mappedWork = WorkArr.map((elem) => {
    return <div key={elem.id}>
      <WorkBox work={elem}></WorkBox>
    </div>
  })
  return (
    <div className="work">
      <h3>Work</h3>
        {mappedWork}
    </div>
  );
}

export default Work;
