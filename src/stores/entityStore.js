import { decorate, observable, action } from 'mobx'
import { createContext } from 'react'
// import axios from 'axios';


class EntityForm {
  Entities = [
    {
      name: "Employee",
      fields: [{ field_title: "Firstname", type: "String" },
      { field_title: "Lastname", type: "String" }
      ]
    },
    {
      name: "Country",
      fields: [{ field_title: "Firstname", type: "String" },
      { field_title: "population", type: "long" }
      ]
    }
  ]

  relationships = [{
    type: "one to many", entity: "Employee"
  }
  ]

  addEntity(value) {
    console.log(value, "fuck joel kk");
    this.Entities = [...this.Entities, value]
  }
}

decorate(EntityForm, {
  Entities: observable,
  addEntity: action
})

const entityStore = createContext(new EntityForm())

export default entityStore
