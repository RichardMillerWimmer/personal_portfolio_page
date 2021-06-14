import React, {useState, useEffect} from "react";
import axios from 'axios';

import WorkBox from "./WorkBox";




function Work() {
  const [workArr, setWorkArr] = useState([]) 
  
  useEffect(() => {
    getAllWork()
  }, [])

  // console.log(WorkArr)

  const getAllWork = () => {
    axios('/api/getwork')
    .then(res => {
      console.log(res.data);
      setWorkArr(res.data);
    })
    .catch(err => console.log(err))
  };

  let mappedWork = workArr.map((elem) => {
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
