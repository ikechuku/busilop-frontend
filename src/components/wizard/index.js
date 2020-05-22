import * as React from "react";
import Wizard from "./wizard";
import { Link } from "react-router-dom";
import { PackageManager } from "./components/PackageManager.tsx";
import clientApp from "./components/ClientApp.tsx";
import { FieldControl, Validators } from "react-reactive-form";
import BuildTool from "./components/BuildTool.tsx";
import DatabaseLang from "./components/Database.tsx";
import Auth from "./components/Auth.tsx";
import Blueprint from "./components/Blueprint.tsx";
import Button from "@material-ui/core/Button";

import styles from "./styles";

const handleSubmit = (control) => {
  alert(`You submitted \n ${JSON.stringify(control.value, null, 2)}`);
};
const Error = ({ msg }) => (
  <div>
    <span style={styles.error}>{msg}</span>
  </div>
);

const WizardForm = () => (
  <div className="container px-2">

  <div style={styles.main} className="container">
    {/* <h2>Busilop Setup Wizard</h2> */}

    <Wizard onSubmit={handleSubmit}>
      <Wizard.Step>
        <h2 style={{ color: "#808080" }}>Basic Configuration</h2>
        <FieldControl
          strict={false}
          name="baseName"
          options={{
            validators: Validators.required,
          }}
          render={({ handler, hasError, submitted }) => (
            <div>
              <label>Application BaseName:</label>
              <input style={styles.input} {...handler()} />
              {submitted && hasError("required") && (
                <Error msg="Base Name is required" />
              )}
            </div>
          )}
        />
        <FieldControl
          strict={false}
          name="packageName"
          options={{
            validators: Validators.required,
          }}
          render={({ handler, hasError, submitted }) => (
            <div>
              <label>Package Name:</label>
              <input style={styles.input} {...handler()} />
              {submitted && hasError("required") && (
                <Error msg="Package Name is required" />
              )}
            </div>
          )}
        />
      </Wizard.Step>
      <Wizard.Step>
        <h2 style={{ color: "#808080" }}>Frontend Configuration</h2>
        <FieldControl
          strict={false}
          name="clientApp"
          options={{
            validators: [Validators.email, Validators.required],
          }}
          render={({ submitted, handler, hasError }) => {
            return (
              <div>
                <FieldControl name="clientApp" render={clientApp} />

                <br />

                <br />
                <FieldControl name="package Manager" render={PackageManager} />

                {/* <label>Email:</label>
                <input style={styles.input} {...handler()} />
                {submitted &&
                  (hasError("required") && <Error msg="Email is required" />)}
                {submitted &&
                  (hasError("email") && <Error msg="Invalid email" />)} */}
              </div>
            );
          }}
        />
        {/* <FieldControl
          strict={false}
          name="age"
          render={({ handler }) => (
            <div>
              <label>Age:</label>
              <input type="number" style={styles.input} {...handler()} />
            </div>
          )}
        /> */}
      </Wizard.Step>
      {/* <Wizard.Step>
        <h2 style={{ color: "#808080" }}>Step 3</h2>
        <FieldControl
          strict={false}
          name="city"
          render={({ handler }) => (
            <div>
              <label>City:</label>
              <input style={styles.input} {...handler()} />
            </div>
          )}
        />
        <FieldControl
          strict={false}
          name="country"
          render={({ handler }) => (
            <div>
              <label>Country:</label>
              <input style={styles.input} {...handler()} />
            </div>
          )}
        />
      </Wizard.Step> */}
      <Wizard.Step>
        <h2 style={{ color: "#808080" }}>Backend Configuration</h2>
        <FieldControl
          strict={false}
          name="notes"
          render={({ handler }) => (
            <div style={styles.genderContainer}>
              <FieldControl name="Blueprint" render={Blueprint} />
              <FieldControl name="Database" render={DatabaseLang} />
              <FieldControl name="Authentication" render={Auth} />
              <FieldControl name="package Manager" render={BuildTool} />
            </div>
          )}
        />
        {/* <FieldControl
          strict={false}
          name="terms"
          formState={false}
          options={{ validators: Validators.requiredTrue }}
          render={({ handler, hasError, submitted }) => (
            <div>
              <input {...handler("checkbox")} />
              <label>&nbsp;&nbsp;I agree to the terms and condition.</label>

              {submitted &&
                (hasError("required") && (
                  <Error msg="Please do agree to terms." />
                ))}
            </div>
          )}
        /> */}
      </Wizard.Step>
    </Wizard>
    <br />
    <br />
    <Link to="/form">
     <input type="button" className="btn btn-lg btn-success" value="Next (Form Builder)"/>
    </Link>
  </div>
  </div>

);

export default WizardForm;
