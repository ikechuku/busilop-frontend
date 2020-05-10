import React from "react";
import axios from 'axios'
import { FormBuilder } from 'react-formio';



const FormBuilderPage = props => {
  var schema = {}
  const setSchema = (x) => {
    schema = x
  }
  function postData(data) {
    axios.post('http://localhost:5000/form', {
      schema
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="container mt-4">
      <br /><br /><br />
      <FormBuilder
        form={{ display: 'form' }}
        onChange={(data) => {
          setSchema(data)
          console.log(schema)
        }}
      />
      <div className="text-center">
        <input className="btn btn-large btn-success" type="submit" value="Submit this form "
          onClick={() => {
            alert(JSON.stringify(schema))
            postData(JSON.stringify(schema))
          }}
        />
      </div>
    </div>
  )
}

export default FormBuilderPage;