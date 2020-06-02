import React from 'react'
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
            alert("Please wait a few minutes. your app will run at https://623e78ece24a.ngrok.io/8080  ")
            axios.post("http://effea4907d1c.ngrok.io/entity", { store }).then(
              ()=> alert("Visit  https://623e78ece24a.ngrok.io")
            )            
          }}
        />
      </div>
    );
  };
  
export default PostButton