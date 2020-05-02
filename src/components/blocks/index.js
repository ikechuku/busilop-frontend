import React, { useContext, Component } from 'react';
// import { HeaderBasic, TaglineContent, } from '@blocks/react'
import Blocks from './blocks'
import axios from 'axios';
import Button from '@material-ui/core/Button';
import "./style.css"
// import { observer } from 'mobx-react-lite'
import nodeStoreContext from '../../stores/nodeStore'


const App = () => {

  const store = useContext(nodeStoreContext)
  const data = store.all

  return (
    <div>
      <div className="d-flex" >

        <h1>Busilop form builder  </h1>

        <Button
          onClick={() => {
            axios.post('http://localhost:5000/form', { data })
              .then(console.log(data)
              )
          }}
          variant="contained"
          color="primary">
          Create this Page
        </Button>
      </div>
      <Blocks />
    </div >
  );
}

export default App;
