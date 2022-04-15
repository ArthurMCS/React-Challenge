/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable react/jsx-filename-extension */
import React, { useState } from 'react';
import propTypes from 'prop-types';
import AppContext from './AppContext';

export default function AppProvider({ children }) {
  const [documents, setDocuments] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const pages = Math.ceil(documents.length / 7);
  const startIndex = currentPage * 7;
  const endIndex = startIndex + 7;
  const docsOnPage = documents.slice(startIndex, endIndex);

  const context = {
    pages,
    documents,
    setDocuments,
    setCurrentPage,
    docsOnPage,
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
