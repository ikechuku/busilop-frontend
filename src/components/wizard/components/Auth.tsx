import * as React from "react";
import styles from "../styles";
import { AbstractControl } from "react-reactive-form";

const SelectBox = ({ handler }: AbstractControl) => (
  <div>
    <label>Authentication Type:</label>
    <select {...handler()}>
      <option value="" disabled>
        Select
      </option>
      <option value="JWt">JWt</option>
      <option value="OAuth">OAuth</option>
      <option value="HTTP Session">HTTP Session</option>
    </select>
  </div>
);
export default SelectBox;
