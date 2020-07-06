import React from "react";
import Sockt from "../socket";
// import Table from "./table";
import { connect, useSelector } from "react-redux";
import {
  getEntityDataAction,
  addEntityDataAction,
} from "../../actions/Entity.actions";
// import EntityCard from "./EntityCard";

import { addRelationshipDataAction } from "../../actions/Relationship.action";

import { getConfigDataAction } from "../../actions/Config.actions";

import { getFormDataAction } from "../../actions/Form.actions";
// import RelationshipCard from "./RelationshipCard";
import PostButton from "./PublishButton";

const App = (props) => {
  const {
    entityStore,
    relationshipStore,
    configStore,
    formStore,
  } = useSelector((state) => state);
  console.log(relationshipStore, "This is the relationship store###");

  // const store = {
  //   entities: entityStore,
  //   relationships: relationshipStore,
  // };

  const stores = {
    entities: entityStore,
    relationships: relationshipStore,
    config: configStore,
    form: formStore,
  };

  // alert(JSON.stringify(configStore))

  return (
    <div className="i-flex ">
      <Sockt />
      <h1 className="h1 text-center">Entity Builder</h1>
      <div className="w-100 d-flex">
        {/* <div className="w-50">
          <Table
            setEntity={props.addEntityDataAction}
            setRelationship={props.addRelationshipDataAction}
            store={store}
          ></Table>
        </div> */}

        <div className="w-50">
          {/* <div className="col">
            <h3 className="text-center">
              <strong>Entities</strong>{" "}
            </h3>
            <EntityCard store={store} />
          </div>

          <div className="w-50 text-center">
            <h3 className="text-center">
              <strong>Relationships</strong>{" "}
            </h3>
            <RelationshipCard store={store} />
          </div> */}
          <PostButton store={stores} />
        </div>
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
