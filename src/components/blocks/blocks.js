import React from "react";
import Editor from "blocks-ui";
import { HeaderBasic, TaglineBold } from "@blocks/react";
import CustomBlock from "./custom";
import CompactForm from "./form";
import Title from "./title";
import Button from "./button";
import Skip from "./skip";
import button from "./title";
const JSX = `
import React from 'react'
export default () => (
  <Blocks.Root>
  </Blocks.Root>
)
`;
const myJSX = `

`;
export default () => {
  const onChange = (newCode) => {
    console.log(newCode);
  };

  return (
    <Editor
      src={JSX}
      blocks={{ CompactForm, Title, Button, CustomBlock, HeaderBasic, Skip }}
      onChange={onChange} // get  code
    />
  );
};
