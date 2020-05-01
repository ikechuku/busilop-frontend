import React from 'react';
import { HeaderBasic, TaglineContent, } from '@blocks/react'
import Blocks from './blocks'
import Custom from './custom'
import Skip from './skip'

const App = () => {
  return (
    <div>
      <h1>Busilop form builder</h1>
      <Custom />
      <Skip />


      <Blocks />
    </div>
  );
}

export default App;