/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/no-array-index-key */
import './App.css';
import { React } from 'react';
import FormComponent from './components/Form';
import Pagination from './components/Pagination';
import TableComponent from './components/Table';

function App() {
  return (
    <div className="App">
      <FormComponent />
      <Pagination />
      <TableComponent />
    </div>
  );
}

export default App;
