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
            axios.post("http://3e7f7ee613d1.ngrok.io", { store });
            alert("");
          }}
        />
      </div>
    );
  };
  
export default PostButton