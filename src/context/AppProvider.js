/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import AppContext from './AppContext';
import getDocs from '../services/docApi';

export default function AppProvider({ children }) {
  const [documents, setDocuments] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [documentsFiltered, setDocsFiltered] = useState([]);
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({});

  useEffect(() => {
    getDocs().then((docs) => {
      setDocuments(docs);
    });
  }, []);

  const context = {
    documents,
    setDocuments,
    currentPage,
    setCurrentPage,
    search,
    setSearch,
    filters,
    setFilters,
    documentsFiltered,
    setDocsFiltered,
  };

  return (
    <AppContext.Provider value={context}>
      { children }
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: propTypes.node.isRequired,
};
