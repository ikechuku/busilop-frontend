import React from "react";
import axios from "axios";

const PostButton = ({ store }) => {
  return (
    <div className="pob">
      <br />
      <br />
      <input
        type="button"
        className="btn btn-block mx-auto btn-success"
        value="Publish"
        onClick={() => {
          axios.post("http://localhost:5000/entity", { store });
        }}
      />
    </div>
  );
};

export default PostButton;
