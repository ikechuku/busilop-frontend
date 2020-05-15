import React, { useContext, useState } from 'react'
import './style.css'
import nodeStoreContext from '../../stores/nodeStore'
import Button from '@material-ui/core/Button';
import axios from 'axios'
import { observer } from 'mobx-react-lite';
import FieldForm from './fieldform'
import FieldList from './fieldlist'




const App = () => {
  const [table, setTable] = useState([{ id: 1, field_title: "firstname", type: "string", }, { id: 2, field_title: "lastname", type: "string" }])
  const [Name, setName] = useState("")
  function handleChange(e) {
    setName(e.target.field_title)
  }

  return (
    <div className="todoForm">
      <FieldForm setTable={setTable} table={table} />
      <FieldList setTable={setTable} table={table} />
      {/* <PostButton table={table} /> */}

      <Button variant="contained" color="disabled">
        Add New Table
      </Button>
    </div>
  )
}

export default App;



