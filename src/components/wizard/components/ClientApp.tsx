import * as React from "react";
import styles from "../styles";
import { AbstractControl } from "react-reactive-form";

const ClieintApp = ({ handler }: AbstractControl) => (
  <div >
    <div >
      <label>Clientside Application:</label>
    </div>
    <div >
      <div>
        <input {...handler("radio", "React")} />
        <label>React</label>
      </div>
      <div>
        <input {...handler("radio", "Angular")} />
        <label>Angular</label>
      </div>
    </div>
  </div>
);


export default ClieintApp