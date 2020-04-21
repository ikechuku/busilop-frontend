import { decorate, observable, action } from 'mobx'
import { createContext } from 'react'
import axios from 'axios';


class generatorForm {
  all = {
    appName: 'application',
    appDescription: 'Simple Survey app',
    serverName: 'testjhipster',
    serverDescription: '',
    serverVersion: '0.1.0',
    authorName: 'ik',
    authorEmail: 'ik@yahoo.com',
    databaseName: 'testjhipster',
    frontend:'react',
    template: 'none',
    useDocker: true,
    model: 'user',
    fields: [ 'id', ' title', ' description' ],
    backend: 'node'
  }

  setAppName(value) {
    this.all.appName = value;
}
  setAppDescription(value) {
    this.all.appDescription = value;
}
  setServerDescription(value) {
    this.all.serverDescription = value;
}
  setServerName(value) {
  this.all.serverName = value;
  }
  setAuthorName(value) {
    this.all.authorName = value;
}
  setAuthorEmail(value) {
    this.all.authorEmail = value;
}
  setDatabaseName(value) {
    this.all.databaseName = value;
}
  setFrontend(value) {
    this.all.frontend = value;
}
  setTemplate(value) {
    this.all.template = value;
}
  setBackend(value) {
    this.all.backend = value;
}

postData(store){
  axios.post('http://localhost:5000/home', {
   store
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}
}
decorate(generatorForm, {
  all: observable, 
  setAppName: action,
  setAppDescription: action,
  setServerDescription: action,
  setServerName: action,
  setAuthorName: action,
  setAuthorEmail: action,
  setDatabaseName: action,
  setFrontend: action,
  setTemplate: action,
  setBackend: action,
})



const nodeStore = createContext(new generatorForm())

export default nodeStore








// import React from 'react'
// import { useLocalStore, useObserver } from 'mobx-react'


// export const StoreContext = React.createContext();

// const StoreProvider = ({ children }) => {
//   const store = useLocalStore(() => ({
//     bugs: ["busilop", "another bug"]
//   }));


//   return (
//     <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
//   )

// }

// export default StoreProvider
