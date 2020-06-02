import React, { useContext } from 'react'
import Editor from "blocks-ui";
import { HeaderBasic } from "@blocks/react";
import CustomBlock from "./custom";
import CompactForm from "./form";
import Title from "./title";
import Button from "./button";
import Skip from "./skip";
// import { observer } from 'mobx-react-lite';
import nodeStoreContext from '../../stores/nodeStore';

const JSX = `
import React from 'react'
export default () => (
  <Blocks.Root>
  </Blocks.Root>
)
`;

export default () => {

  const store = useContext(nodeStoreContext)
  const onChange = (newCode) => {
    store.setTemplate(newCode)
    console.log(store.all.template);
  };

  return (
    <Editor
      src={JSX}
      blocks={{ CompactForm, Title, Button, CustomBlock, HeaderBasic, Skip }}
      onChange={onChange} // get  code
    />
  );
};