/** @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { Controls } from "blocks-ui";
import { ControlType, applyPropertyControls } from "property-controls";

const Skip = ({ justifyContent = "space-between", ...props }) => {
  return (
    <header
      sx={{
        variant: "styles.header",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent,
      }}
      {...props}
    />
  );
};

Skip.Checkbox = ({ gender = "male" }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "70%",
        margin: "3rem",
        backgroundColor: "#f6d6d6",
      }}
    >
      {gender === "male" && <h4>This text is <b style={{color: "red"}}><i>invisible</i></b> when female is selected</h4>}
    </div>
  );
};

applyPropertyControls(Skip.Checkbox, {
  gender: {
    type: ControlType.Enum,
    title: "Gender Selection",
    defaultValue: 'male',
    options: ["male", "female"],
    optionTitles: ["Male", "Female"],
  },
});

Skip.usage = `
  <Skip>
    <h4>Skip1 Function Test</h4>
    <Skip.Checkbox />
  </Skip>
`;
export default Skip;
