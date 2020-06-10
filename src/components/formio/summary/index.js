import React from "react";
import { Link } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import { getFormDataAction } from "../../../actions/Form.actions";
import { getConfigDataAction } from "../../../actions/Config.actions";

const App = (props) => {
  const { configStore } = useSelector((state) => state);
  const summary = configStore
  console.log(summary);
  
  return (
    <div className="">
      <h1>Config summary </h1>
      <div className="container cont text-center">
        <br />
<ul>
<li><strong> Basename: </strong> {summary.baseName} </li> 
<br/>
<li><strong> Package Name: </strong> {summary.packageName} </li> 
<br/>
<li><strong> Clientside Framework: </strong> {summary.clientsideFramework} </li> 
<br/>
<li><strong> PackageManager: </strong> {summary.packageManager} </li> 
<br/>
<li><strong> ServerSide Language: </strong> {summary.serverSideLanguage} </li> 
<br/>
<li><strong> Authentication: </strong> {summary.auth} </li> 
<br/>
<br/>
</ul>
        <br />
        <br />
        <div className="dflex">
          <div></div>
          <Link to="/">
            <input
              type="button"
              className="btn btn-lg btn-info"
              value="Back"
              // onClick={()=>alert("going back will clear your submission")}
            />
          </Link>
          &nbsp;
          &nbsp;
          <Link to="/form">
            <input
              type="button"
              className="btn btn-lg btn-success"
              value="Next (Form Builder)"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  getConfigDataAction,
  getFormDataAction,
};

export default connect(null, mapDispatchToProps)(App);
