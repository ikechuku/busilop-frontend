import React, { useEffect, useState } from "react";
// import { Form } from "react-formio";
import axios from "axios";

const App = (props) => {
  const [data, setData] = useState({});
  console.log(props.match.params.id);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:8081/sub");
      const raw_data = await result["data"].find(
        (item) => item.id == props.match.params.id
      );
      let x = JSON.parse(raw_data['submission'])
      x =x['data']
      setData(x);
    };

    fetchData();
  }, []);
  return (
    <div className="container">
      <h2 className="text-center"> Submission Details </h2>
       <h4>DATA</h4>
      <table className="table table-hover table-dark">
        <thead>
          <tr>
            <th>Field</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
            { Object.entries(data).map((item)=>(
        <tr key={item.id}>
              <td>{JSON.stringify(item[0])}</td>
              <td>
                {JSON.stringify(item[1])}
              </td>
            </tr>
       ))  }
        </tbody>
      </table>

       {/* { Object.entries(data).map((item)=>(
         <p>{JSON.stringify(item[0])}</p>
       ))  } */}
    </div>
  );
};
export default App;
