import React from 'react'
import { FormBuilder } from 'react-formio'

const App = () => {
  return (
    <FormBuilder form={{ display: 'form' }} onChange={(schema) => console.log(schema)} />
  );
}

export default App;