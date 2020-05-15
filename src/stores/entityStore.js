import { decorate, observable, action } from 'mobx'
import { createContext } from 'react'
// import axios from 'axios';


class EntityForm {
  all = [
    {
      name: "Employee",
      fields: [{ field_title: "Firstname", type: "string" },
      { field_title: "Lastname", type: "string" }
      ]
    },
    {
      name: "Country",
      fields: [{ field_title: "Firstname", type: "string" },
      { field_title: "population", type: "long" }
      ]
    }
  ]

  relationship = {
    type: "one to many", entity: "Employee"
  }


  addEntity(value) {
    this.all.push(value)
  }
}

decorate(EntityForm, {
  all: observable,
  addEntity: action
})

const entityStore = createContext(new EntityForm())

export default entityStore
