import React, { useContext, useState } from 'react'

const FieldForm = ({ table, setTable }) => {
  console.log(table)
  const [Field, setField] = useState("")
  const [Type, setType] = useState("")

  function addField(e) {
    setField(e.target.value)
  }
  function addType(e) {
    setType(e.target.value)
  }


  return (
    <div className="center">
      <div>
        <input type="text" placeholder="Entity name" />
      </div>

      <input type="text" value={Field} onChange={addField} placeholder="Field" />

      <input type="text" value={Type} onChange={addType} placeholder="type" />
      <input type="button" value="add" onClick={() => {

        if (Field.length == 0 || Type.length == 0) {
          alert("please enter a field")
        }
        else {

          setTable([...table, { id: 1, field_title: Field, type: Type }])
          setField("")
          setType("")
          console.log(table);
        }
      }} />

    </div>

  );
}

export default FieldForm
