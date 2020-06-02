import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const FieldList = ({ table, setTable }) => {

  function removeField(todoIndex) {
    const newTable = table.filter((_, index) => index !== todoIndex);

    setTable(newTable)
  }

  return (
    <ul className="list-group">
      {table.map((item, index) => {
        return (
          <li key={index}  >
            {item.field_title} , {item.type} <IconButton
              aria-label="Delete"
              onClick={() => {
                removeField(index);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </li>
        );
      })}
    </ul>
  );
}


export default FieldList