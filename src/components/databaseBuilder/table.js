import React, { useContext, useState } from "react";
import "./style.css";
import nodeStoreContext from "../../stores/entityStore";
import Button from "@material-ui/core/Button";
import { observer } from "mobx-react-lite";
import FieldForm from "./fieldform";
import FieldList from "./fieldlist";

const App = observer(({ setStore, store }) => {
  const [table, setTable] = useState([
    { id: 1, field_title: "firstname", type: "String" },
    { id: 2, field_title: "lastname", type: "String" },
  ]);

  const [rel, setRel] = useState([
    {
      type: "one to many",
      entity: "Employee",
      field: "Employee",
      target_entity: "Employee",
    },
  ]);

  const [Name, setName] = useState("");
  const [Type, setType] = useState("");
  const [Entity, setEntity] = useState("");
  const [Field, setField] = useState("");
  const [Target_entity, setNTarget_entity] = useState("");

  // var store = useContext(nodeStoreContext)

  function createEntity() {
    if (Name.length == 0) {
      alert("please enter an Entity");
    } else {
      const entityData = {};
      entityData["name"] = Name;
      entityData["fields"] = table;
      setStore([...store.entities, entityData]);
      setName("");
      setTable([]);
    }
  }

  function addRelationship() {
    if (Name.length == 0) {
      alert("please enter an Entity");
    } else {
      const relationshipData = {};
      relationshipData["type"] = Type;
      relationshipData["entity"] = Entity;
      relationshipData["field"] = Field;
      relationshipData["target_entity"] = Target_entity;
      setStore([...store, relationshipData]);
      setName("");
      setTable([]);
    }
  }

  return (
    <div className="todoForm d-flex">
      <div className="container">
        <FieldForm
          setTable={setTable}
          table={table}
          setName={setName}
          Name={Name}
          />
          <h4>Create Entity  Hoeld</h4>
        <FieldList setTable={setTable} table={table} />
        <Button variant="contained" color="primary" onClick={createEntity}>
          Save Entity
        </Button>
      </div>
      <div className="container">
      <h4>Create Relationship </h4>
      <label htmlFor="fk">Entity</label>
      <select name="Entity" id="">
        <option default value=""></option>
        <option value="Country"> Country</option>
        <option value="Employee">Employee</option>
      </select>
      &nbsp;
      <label htmlFor="fk">Relationship type</label>
      <select name="Relationship type" id="">
        <option default value=""></option>
        <option value="OneToOne">OneToOne</option>
        <option value="OneToMany">OneToMany</option>
        <option value="ManyToOne">ManyToOne</option>
      </select>
      <br />
      <br />
      <label htmlFor="fk">with</label>
      <select name="With" id="">
        <option default value=""></option>
        <option value="Country"> Country</option>
        <option value="Employee">Employee</option>
      </select>
      <label htmlFor="fk">foreign key</label>
      <select name="Foreign Key" id="fk">
        <option default value=""></option>
        <option value="firstame"> Name</option>
        <option value="lastName">lastName</option>
      </select>
      <br />
      <br />
      <Button variant="contained" color="primary" onClick={addRelationship}>
        Add Relationship
      </Button>
      </div>
    </div>
  );
});

export default App;
