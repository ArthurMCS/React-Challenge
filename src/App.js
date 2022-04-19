/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/no-array-index-key */
import './App.css';
import { React } from 'react';
import FormComponent from './components/Form';
import Pagination from './components/Pagination';
import TableComponent from './components/Table';
import AppProvider from './context/AppProvider';

function App() {
  return (
    <AppProvider>
      <div className="App">
        <FormComponent />
        <Pagination />
        <TableComponent />
      </div>
    </AppProvider>
  );
}

export default App;
