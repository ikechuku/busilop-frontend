import * as React from "react";
import styles from "./../styles";
import { AbstractControl } from "react-reactive-form";

const TextArea = ({ handler }: AbstractControl) => (
  <div>
    <div>
      <label>Notes:</label>
    </div>
    <div>
      <textarea {...handler()} />
    </div>
  </div>
);

export default TextArea;
