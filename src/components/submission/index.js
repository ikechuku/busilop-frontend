import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style.css";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:8081/sub");
      

      setData(result["data"]);
    };

    fetchData();
  }, []);

  return (
    <div className="container">
      <h2>Form Submissions</h2>
      <p></p>
      <table className="table table-hover table-dark">
        <thead>
          <tr>
            <th>id</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.email}</td>
              <td>
                <Link
                  to={`/formdetails/${item.id}`}
                  state={
                    {jowl:"teeee"}}
                >
                  View Submission
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;
