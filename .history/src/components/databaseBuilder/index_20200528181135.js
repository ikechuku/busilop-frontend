import React from "react";
import Table from "./table";
import { connect, useSelector } from "react-redux";
import {
  getEntityDataAction,
  addEntityDataAction,
} from "../../actions/Entity.actions";
import EntityCard from './EntityCard'

import { addRelationshipDataAction } from "../../actions/Relationship.action";

import { getConfigDataAction } from "../../actions/Config.actions";

import { getFormDataAction } from "../../actions/Form.actions";
import RelationshipCard from './RelationshipCard'
import PostButton from './PublishButton'

const App = (props) => {
  const {
    entityStore,
    relationshipStore,
    configStore,
    formStore,
  } = useSelector((state) => state);
  console.log(relationshipStore, "This is the relationship store###");

  const store = {
    entities: entityStore,
    relationships: relationshipStore,
  };

  const stores = {
    entities: entityStore,
    relationships: relationshipStore,
    config: configStore,
    form: formStore,
  };

  return (
    <div className="container">
      <h1 className="h1 text-center">Entity Builder</h1>
      <Table
        setEntity={props.addEntityDataAction}
        setRelationship={props.addRelationshipDataAction}
        store={store}
      ></Table>

      <div className="summary">
        <div className="col w-50">
          <h3 className="text-center">Entities</h3>
          <EntityCard store={store} />
        </div>

        <div className="col w-50" >
          <h3 className="text-center h3"> Relationships</h3>
          <RelationshipCard store={store} />
        </div>
      <PostButton store={stores} />
      </div>


    </div>
  );
};

const mapDispatchToProps = {
  getEntityDataAction,
  addEntityDataAction,
  addRelationshipDataAction,
  getConfigDataAction,
  getFormDataAction,
};

export default connect(null, mapDispatchToProps)(App);
