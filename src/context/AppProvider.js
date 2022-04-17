/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/jsx-filename-extension */
import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import AppContext from './AppContext';
import getDocs from '../services/docApi';

export default function AppProvider({ children }) {
  const [documents, setDocuments] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState({});

  const pages = Math.ceil(documents.length / 7);

  useEffect(() => {
    getDocs().then((docs) => {
      setDocuments(docs);
    });
  }, []);

  const context = {
    pages,
    documents,
    setDocuments,
    currentPage,
    setCurrentPage,
    search,
    setSearch,
    filters,
    setFilters,
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
