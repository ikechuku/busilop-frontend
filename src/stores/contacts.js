import { decorate, observable } from 'mobx'
// import { createContext } from 'react'


class Contacts {
  all = [
    {id:1, name: 'John', email: 'jon@yahoo.com'},
    {id:2, name: 'Mike', email: 'Mike@yahoo.com'},
    {id:3, name: 'Sam', email: 'sam@yahoo.com'},
  ]
}


decorate(Contacts, {
  all: observable
})



export default new Contacts()

