import React from 'react';
import Table from './table'
import Button from '@material-ui/core/Button';

const App = () => {
  return (
    <>
      <Button variant="contained" color="disabled">
        Add New Table
      </Button>
      <Table>
      </Table>
    </>
  );
}

export default App;