import { decorate, observable } from 'mobx'
import { createContext } from 'react'

class cliForm {
  yorc = {
    "generator-jhipster": {
      "promptValues": {
        "packageName": "org.jhipster.blog",
        "nativeLanguage": "en"
      },
      "jhipsterVersion": "5.0.1",
      "applicationType": "monolith",
      "baseName": "blog",
      "packageName": "org.jhipster.blog",
      "packageFolder": "org/jhipster/blog",
      "serverPort": "8080",
      "authenticationType": "jwt",
      "cacheProvider": "ehcache",
      "enableHibernateCache": true,
      "websocket": false,
      "databaseType": "sql",
      "devDatabaseType": "h2Disk",
      "prodDatabaseType": "postgresql",
      "searchEngine": false,
      "messageBroker": false,
      "serviceDiscoveryType": false,
      "buildTool": "maven",
      "enableSwaggerCodegen": false,
      "jwtSecretKey": "455e1315207269bf7ba9685bdba93b4ff0224ba0",
      "clientFramework": "angularX",
      "useSass": false,
      "clientPackageManager": "yarn",
      "testFrameworks": [
        "protractor"
      ],
      "jhiPrefix": "jhi",
      "enableTranslation": true,
      "nativeLanguage": "en",
      "languages": [
        "en",
        "es"
      ]
    }
  }

}


decorate(cliForm, {
  yorc: observable
})


const jhipStore = createContext(new cliForm());
export default jhipStore


