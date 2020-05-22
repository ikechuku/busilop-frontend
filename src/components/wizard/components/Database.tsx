import * as React from "react";
import styles from "./../styles";
import { AbstractControl } from "react-reactive-form";

const SelectBox = ({ handler }: AbstractControl) => (
  <div>
    <label>Database Language:</label>
    <select {...handler()}>
      <option value="" disabled>
        Select
      </option>
      <option value="sql">SQL</option>
      <option value="mongodb">MongoDB</option>
      <option value="couch">Couch DB</option>
      <option value="Cassandra">Cassandra DB</option>
      <option value="none">No Database</option>
    </select>
  </div>
);
export default SelectBox;
