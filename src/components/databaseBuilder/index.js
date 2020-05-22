import React, { useContext, useState, useEffect } from "react";
import Table from "./table";
import { observer } from "mobx-react-lite";
import nodeStoreContext from "../../stores/nodeStore";
import Button from "@material-ui/core/Button";
import axios from "axios";
import entityStoreContext from "../../stores/entityStore";

const FieldList = ({ fields }) => {
  console.log(fields);

  return (
    <ul className="list-group">
      {fields.length &&
        fields.map((item, index) => {
          return (
            <li key={index}>
              {item.field_title} , {item.type}
            </li>
          );
        })}
    </ul>
  );
};

const RelList = ({ fields }) => {
  console.log(fields);

  return (
    <ul className="list-group">
      {fields.length &&
        fields.map((item, index) => {
          return (
            <li key={index}>
              {item.entity} , {item.type}, {item.field}, {item.target_entity}
            </li>
          );
        })}
    </ul>
  );
};

const EntityCard = ({ store }) => {
  // const store = useContext(entityStoreContext)
  // let list = store.Entities
  useEffect(() => {
    console.log(store, "usefft store");
  }, [store]);
  console.log(store, "store increase");

  return (
    <div className="container entitycard text-center card">
      {store["entities"].map((item, index) => {
        // console.log(item, "this is item");

        return (
          <div key={index}>
            <h4 className="h4">{item.name}</h4>
            <ul>
              <FieldList fields={item.fields || []} />
            </ul>
          </div>
        );
      })}
    </div>
  );
};

const RelationshipCard = ({ store }) => {
  // const store = useContext(entityStoreContext)
  // let list = store.Entities
  useEffect(() => {
    console.log(store, "usefft store");
  }, [store]);
  console.log(store, "store increase");

  return (
    <div className="container entitycard text-center card">
      {store["relationships"].map((item, index) => {
        // console.log(item, "this is item");

        return (
          <div key={index}>
            <h4 className="h4">Type: {item.type}</h4>
            <ul>
              <li><strong>Entity:</strong> &nbsp;&nbsp; {item.entity}</li>
              <li><strong>Foreign key: </strong> &nbsp;{item.field}</li>
              <li><strong>Target Entity:</strong> &nbsp; &nbsp;{item.target_entity}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
};

const App = () => {
  const [store, setStore] = useState({
    relationships: [
      {
        type: "One To Many",
        entity: "Employee",
        field: "Employee",
        target_entity: "Country",
      },
    ],
    entities: [
      {
        name: "Employee",
        fields: [
          { field_title: "firstname", type: "String" },
          { field_title: "lastname", type: "String" },
        ],
      },
      {
        name: "Country",
        fields: [
          { field_title: "Firstname", type: "String" },
          { field_title: "population", type: "String" },
        ],
      },
    ],
  });

  return (
    <>
      <h1 className="h1 text-center">Entity Builder</h1>
      <Table setStore={setStore} store={store}></Table>
      <div className="d-flex">
        <h3 className="text-center">Entities</h3>
        <EntityCard store={store} />
        <h3 className="text-center h3"> Relationships</h3>
        <RelationshipCard store={store} />
      </div>
      <PostButton store={store.entities} />
    </>
  );
};

export default App;

const PostButton = ({ store }) => {
  // const store = useContext(nodeStoreContext)
  // let data = store.Entities
  return (
    <div className="container">
      <br/>
      <br/>
      <input
        type="button"
        className="btn btn-block btn-success"
        value="Submit"
        onClick={() => {
          axios.post("http://localhost:5000/entity", { store });
          alert(store);
        }}
      />
    </div>
  );
};
