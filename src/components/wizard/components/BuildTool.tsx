import * as React from "react";
import styles from "../styles";
import { AbstractControl } from "react-reactive-form";

const BuildTool = ({ handler }: AbstractControl) => (
  <div>
    <div>
      <label>BuildTool:</label>
    </div>
    <div>
      <div>
        <input {...handler("radio", "Maven")} />
        <label>Maven</label>
      </div>
      <div>
        <input {...handler("radio", "Gradle")} />
        <label>Gradle</label>
      </div>
    </div>
  </div>
);

export default BuildTool;
