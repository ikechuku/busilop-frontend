import React, { useState } from "react";
import "./style.css";
import FieldForm from "./fieldform";
import FieldList from "./fieldlist";
import { useSelector } from "react-redux";

const App = ({ setEntity, setRelationship, store }) => {
  const { entityStore } = useSelector((state) => state);

  const [table, setTable] = useState([]);

  const [Name, setName] = useState("");
  const [Type, setType] = useState("");
  const [EntityField, setEntityField] = useState("");
  const [Field, setField] = useState("");
  const [Target_entity, setTarget_entity] = useState("");

  function handleWith() {
    return entityStore.filter((item) => item.name !== EntityField);
  }

  function getRelatioinshipFields() {
    const val = entityStore.find((item) => item.name === EntityField);
    if (val) {
      return val.fields;
    } else {
      return [];
    }
  }

  function handleType(e) {
    setType(e.target.value);
  }
  function handleField(e) {
    setField(e.target.value);
  }

  function handleEntityField(e) {
    setEntityField(e.target.value);
  }
  function handleTarget_entity(e) {
    console.log(e.target.value, "target ENTITY");

    setTarget_entity(e.target.value);
  }

  function createEntity() {
    if (Name.length === 0) {
      alert("please enter an Entity");
    } else {
      const entityData = {};
      entityData["name"] = Name;
      entityData["fields"] = table;
      setEntity(entityData);
      setName("");
      setTable([]);
    }
  }

  function addRelationship() {
    if (
      Type.length === 0 ||
      EntityField.length === 0 ||
      Field.length === 0 ||
      Target_entity.length === 0
    ) {
      alert("please enter a Relationship");
    } else {
      const relationshipData = {};
      relationshipData["type"] = Type;
      relationshipData["entity"] = EntityField;
      relationshipData["field"] = Field;
      relationshipData["target_entity"] = Target_entity;
      setRelationship(relationshipData);
      setName("");
      setTable([]);
    }
  }

  return (
    <div className="todoForm d-flex">
      <div className="">
        <h4>Create Entity</h4>
        <FieldForm
          setTable={setTable}
          table={table}
          setName={setName}
          Name={Name}
        />
        <FieldList setTable={setTable} table={table} />
        <input
          value="save entity"
          type="button"
          className="btn btn-primary"
          onClick={createEntity}
        />
      </div>
      <div className="">
        <h4>Create Relationship </h4>
        <label htmlFor="fk">Entity</label>
        <select
          className="form-control"
          name="Entity"
          id=""
          onChange={handleEntityField}
        >
          <option default value=""></option>
          {entityStore.map((item) => {
            return <option value={item.name}>{item.name} </option>;
          })}
        </select>
        &nbsp;
        <label htmlFor="fk">Relationship type</label>
        <select
          className="form-control"
          name="Type"
          id=""
          onChange={handleType}
        >
          <option default value=""></option>
          <option value="OneToOne">OneToOne</option>
          <option value="OneToMany">OneToMany</option>
          <option value="ManyToOne">ManyToOne</option>
        </select>
        <br />
        <br />
        <label htmlFor="fk">with</label>
        <select
          className="form-control"
          name="With"
          id=""
          onChange={handleTarget_entity}
        >
          <option default value=""></option>
          {handleWith().map((item) => {
            return <option value={item.name}>{item.name} </option>;
          })}
        </select>
        <label htmlFor="fk">foreign key</label>
        <select
          className="form-control"
          name="Foreign Key"
          id="fk"
          onChange={handleField}
        >
          <option default value=""></option>
          {getRelatioinshipFields().map((item) => {
            return (
              <option value={item.field_title}>{item.field_title} </option>
            );
          })}
        </select>
        <br />
        <br />
        <input
          type="button"
          value="add relationship"
          className="btn btn-primary"
          color="primary"
          onClick={addRelationship}
        />
      </div>
    </div>
  );
};

export default App;
