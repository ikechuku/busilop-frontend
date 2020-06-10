import React from "react";
import { Form } from "react-formio";
// import { Link } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import {
  getConfigDataAction,
  addConfigDataAction,
} from "../../actions/Config.actions";
import { useHistory } from "react-router-dom";


const App = (props) => {

  const history = useHistory();

const routeChange = () => {
  let path = `/summary`;
  history.push(path);
};
  const { configStore } = useSelector((state) => state);
  console.log(configStore, "This is the form store###");
  return (
    <div className="">
      <h1>Application Setup</h1>
      <div className="container cont">
        <div className="pd">
          <Form
            src="https://qxdmqlghscbavmk.form.io/configForm"
            onChange={(val) => {
              console.log(val.data);
            }}
            onSubmit={(submission) => {
              props.addConfigDataAction(submission.data);
              console.log(configStore, "This is the form store###");
               routeChange()
              // alert(JSON.stringify(submission.data), "SAVED!");
            }}
          />
        </div>

        <br />
        {/* <input className="btn btn-info btn-block" type="button" value="Save Form" onClick={()=>alert(JSON.stringify(formStore))}/> */}
        <br />
        <br />

        {/* <div className="d-flex">
          <div></div>
          <Link to="/summary">
            <input
            {...dsb}
              type="button"
              className="btn btn-lg btn-success"
              value="Next"
            />
          </Link>
        </div> */}
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  addConfigDataAction,
  getConfigDataAction,
};

export default connect(null, mapDispatchToProps)(App);
