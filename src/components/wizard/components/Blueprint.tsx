import * as React from "react";
import styles from "./../styles";
import { AbstractControl } from "react-reactive-form";

const SelectBox = ({ handler }: AbstractControl) => (
  <div>
    <label>Blueprint:</label>
    <select  {...handler()}>
      <option value="" disabled>
        Select
      </option>
      <option value="Java">Java</option>
      <option value="Node">Node</option>
      <option value="Kotlin">Kotlin</option>
    </select>
  </div>
);
export default SelectBox;
