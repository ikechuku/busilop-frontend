import React from 'react'

const Fields = ({ fields }) => {
    // console.log(fields);
  
    return (
      <ul className="list-group">
        {fields.length &&
          fields.map((item, index) => {
            return (
              
              <li key={index}>
                {item.field_title} , {item.type}
              </li>
            );
          })}
      </ul>
    );
  };
  

  export default Fields