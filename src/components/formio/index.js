import React from 'react'
import { Form, Templates , FormBuilder} from 'react-formio';
// import Builder from './builder'
Templates.framework = 'bootstrap';

const App = () => {
  return (
    <>
      <h3>Form Builder</h3>
<FormBuilder form={{ display: 'form', Templates }} onChange={(schema) => console.log(schema)} />
      {/* <Builder /> */}
      <br /><br /><br /><br />

      <h3>Form Render</h3>
      <Form src="https://example.form.io/example" onSubmit={console.log} />
    </>
  );
}

export default App;