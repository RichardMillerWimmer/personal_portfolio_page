import React, { useContext } from "react";
// import axios from "axios";

import WorkBox from "./WorkBox";

import {WorkContext} from '../../WorkContext';

function Work() {
  // const [workArr, setWorkArr] = useState([]);
  const [workArr] = useContext(WorkContext);

  // useEffect(() => {
  //   getAllWork();
  // }, []);

  // console.log(WorkArr)

  // const getAllWork = () => {
  //   // console.log("getAllWork");
  //   axios.get('/api/work')
  //     .then((res) => {
  //       // console.log(res.data);
  //       setWorkArr(res.data);
  //     })
  //     .catch((err) => console.log(err));
  // };

  let mappedWork = workArr.map((elem) => {
    return (
      <div key={elem.id}>
        <WorkBox work={elem}></WorkBox>
      </div>
    );
  });
  return (
    <div className="work">
      <h3>Work</h3>
      {mappedWork}
    </div>
  );
}

export default Work;
