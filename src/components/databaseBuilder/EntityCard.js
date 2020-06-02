import React from 'react';
import Fields from './Fields'


const App = ({ store }) => {
  return (
    <div className="col entitycard text-center d-flex">
      {store["entities"].map((item, index) => {
        return (
          <div  className="card er text-white bg-d " key={index}>
            <div className="card-header"> <strong>{item.name}</strong></div>
            <ul>
              <Fields fields={item.fields || []} />
            </ul>
          </div>
        );
      })}
    </div>
  );
};
export default App;