import { decorate, observable, action } from 'mobx'
import { createContext } from 'react'
import axios from 'axios';


class generatorForm {
  all = {
    baseName: '',
    appDescription: '',
    serverName: '',
    serverDescription: 'Description ',
    serverVersion: '0.1.0',
    packageName: '',
    packageManager: '',
    authorEmail: '',
    databaseName: '',
    clientFramework: '',
    databaseType: '',
    authenticationType: '',
    template: '',
    buildTool: '',
    model: '',
    tables: [],
    backend: '',
  }



  setTables(value) {
    this.all.tables = value;
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
  setPackageName(value) {
    this.all.packageName = value;
  }
  setPackageManager(value) {
    this.all.packageManager = value;
  }
  setAuthorEmail(value) {
    this.all.authorEmail = value;
  }
  setDatabaseName(value) {
    this.all.databaseName = value;
  }
  setDatabaseType(value) {
    this.all.databaseType = value;
  }
  setClientFramework(value) {
    this.all.clientFramework = value;
  }
  setAuthenticationType(value) {
    this.all.authenticationType = value;
  }
  setTemplate(value) {
    this.all.template = value;
  }
  setBackend(value) {
    this.all.backend = value;
  }
  setBuildTool(value) {
    this.all.buildTool = value;
  }

  postData(store) {
    axios.post('http://localhost:5000/genrun', {
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
  setBaseName: action,
  setAppDescription: action,
  setServerDescription: action,
  setServerName: action,
  setPackageName: action,
  setPackageManager: action,
  setAuthorEmail: action,
  setDatabaseName: action,
  setDatabaseType: action,
  setClientFramework: action,
  setAuthenticationType: action,
  setTemplate: action,
  setBackend: action,
  setBuildTool: action,
  setTables: action
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
