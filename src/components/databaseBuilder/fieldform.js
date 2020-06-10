import React, { useState } from "react";

const FieldForm = ({ table, setTable, setName, Name }) => {
  console.log(table);
  const [Field, setField] = useState("");
  const [Type, setType] = useState("");

  function addField(e) {
    setField(e.target.value);
  }
  function addType(e) {
    setType(e.target.value);
  }
  function addName(e) {
    setName(e.target.value);
  }

  return (
    <div className="center">
      <div>
        <input
          className="form-control"
          type="text"
          placeholder="Entity name"
          value={Name}
          onChange={addName}
        />
        <br />
        <br />
      </div>

      <input
        className="form-control"
        type="text"
        value={Field}
        onChange={addField}
        placeholder="Field"
      />

      <input
        className="form-control"
        type="text"
        value={Type}
        onChange={addType}
        placeholder="type"
      />
      <input
        className="btn btn-info add"
        type="button"
        value="add"
        onClick={() => {
          if (Field.length === 0 || Type.length === 0) {
            alert("please enter a field");
          } else {
            setTable([...table, { id: 1, field_title: Field, type: Type }]);
            setField("");
            setType("");
            console.log(table);
          }
        }}
      />
    </div>
  );
};

export default FieldForm;
