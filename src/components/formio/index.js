import React from "react";
import { Templates, FormBuilder } from "react-formio";
import { Link } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import {
  getFormDataAction,
  addFormDataAction,
} from "../../actions/Form.actions";

Templates.framework = "bootstrap";

const App = (props) => {
  const { formStore } = useSelector((state) => state);


  function handleState(e) {
    if (e) {
      return e;
    } else return {};
    // props.addFormDataAction(e)
  }

  return (
    <div className="">
      <h1>Form Builder </h1>
      <div className="container cont">
        <FormBuilder
          form={{ display: "form", Templates }}
          onChange={(schema) => {
            // console.log(props.getFormDataAction, "INITIAL");

            props.addFormDataAction(handleState(schema));
            console.log(formStore, "UPDATED store******");
          }}
        />
        <br />

        <br />
        <br />
        <div className="d-flex">
          <div></div>
          <div>
          {/* <Link to="/summary">
            <input
              type="button"
              className="btn btn-lg btn-info"
              value="back"
            />
          </Link> */}
          &nbsp;
          <Link to="/builder">
            <input
              type="button"
              className="btn btn-lg btn-success"
              value="Next (Database Builder)"
            />
          </Link>
          </div>
          
        </div>
      </div>
      

    </div>
  );
};

const mapDispatchToProps = {
  addFormDataAction,
  getFormDataAction,
};

export default connect(null, mapDispatchToProps)(App);
