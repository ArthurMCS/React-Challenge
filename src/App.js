/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/no-array-index-key */
import './App.css';
import { React, useEffect, useContext } from 'react';
import getDocs from './services/docApi';
import CardContainer from './components/CardContainer';
import Pagination from './components/Pagination';
import AppContext from './context/AppContext';

function App() {
  const { setDocuments } = useContext(AppContext);

  useEffect(() => {
    getDocs()
      .then((e) => setDocuments(e));
  }, []);

  return (
    <div className="App">
      <Pagination />
      <CardContainer />
    </div>
  );
}

export default App;
