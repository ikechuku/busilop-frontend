import React, { useContext } from 'react'
import Table from './table'
import { observer } from 'mobx-react-lite'
import nodeStoreContext from '../../stores/nodeStore'
import Button from '@material-ui/core/Button';
import axios from 'axios'
import entityStoreContext from '../../stores/entityStore'
import FieldList from './fieldlist'

const Entity = ({ name, fields }) => {
  const store = useContext(entityStoreContext)
  return (
    <div>
      <h1>{name}</h1>

      <ul>
        {fields.map((field) => {
          return (
            <li>{field}</li>
          )
        }
        )}

      </ul>
    </div>
  );
}



const EntityCard = observer(() => {
  const store = useContext(entityStoreContext)
  let list = store.all

  return (
    <div>
      {list.map((item) => {
        return (
          <div>
            <h5>{item.name}</h5>
            <FieldList table={item.fields} />
          </div>
        )
      })}
    </div>
  );
})


const App = () => {
  return (
    <>

      <Table>
      </Table>

      <EntityCard />
      <PostButton />
    </>
  );
}

export default App;





const PostButton = () => {
  const store = useContext(nodeStoreContext)
  let data = store.all
  return (
    <Button
      onClick={() => {
            axios.post('http://localhost:5000/form', { data })
      }}
      variant="contained"
      color="primary">
      Post Entities
    </Button>
  );
}

