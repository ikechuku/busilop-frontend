import React from 'react'
import { Templates , FormBuilder} from 'react-formio';
// import Builder from './builder'
import { Link } from "react-router-dom";

Templates.framework = 'bootstrap';

const App = () => {

  const saved_schema = {}
  return (
    <div className="container">
      <h3>Form Builder</h3>
<FormBuilder form={{ display: 'form', Templates }} onChange={(schema) => console.log(schema)} />
      {/* <Builder /> */}
      <br /><br /><br /><br />

      {/* <h3>Form Render</h3>
      <Form src={schema} onSubmit={console.log} /> */}
       <Link to="/builder">
     <input type="button" className="btn btn-lg btn-success" value="Next (Form Builder)"/>
    </Link>
      </div>
  );
}

export default App;