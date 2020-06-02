import React from 'react'
import axios from "axios";

const PostButton = ({ store }) => {
    return (
      <div className="btn">
        <br />
        <br />
        <input
          type="button"
          className="btn btn-block btn-success"
          value="Publish"
          onClick={() => {
            axios.post("http://localhost:5000/entity", { store });
            alert(JSON.stringify(store));
          }}
        />
      </div>
    );
  };
  
export default PostButton