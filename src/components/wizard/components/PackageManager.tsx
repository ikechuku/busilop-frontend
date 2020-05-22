import * as React from "react";
import styles from "../styles";
import { AbstractControl } from "react-reactive-form";

export const PackageManager = ({ handler }: AbstractControl) => (
  <div>
    <div>
      <label>Package Manager:</label>
    </div>
    <div>
      <div>
        <input {...handler("radio", "Yarn")} />
        <label>Yarn</label>
      </div>
      <div>
        <input {...handler("radio", "Npm")} />
        <label>Npm</label>
      </div>
    </div>
  </div>
);
