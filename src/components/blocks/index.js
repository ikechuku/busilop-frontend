import React from 'react';
import { HeaderBasic, TaglineContent, } from '@blocks/react'
import Blocks from './blocks'
import Custom from './custom'

const App = () => {
  return (
    <div>
      <h1>Busilop form builder</h1>
      <Custom />


      <Blocks />
    </div>
  );
}

export default App;