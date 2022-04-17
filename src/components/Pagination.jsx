/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import PaginationStyled from '../stledComponents/PaginationStyled';

export default function Pagination() {
  const {
    documentsFiltered,
    setCurrentPage,
    currentPage,
  } = useContext(AppContext);

  const pages = Math.ceil(documentsFiltered.length / 7);

  return (
    <PaginationStyled>
      {Array
        .from(Array(pages))
        .map((_n, index) => (

          <button
            type="button"
            style={index === currentPage ? { backgroundColor: '#007bff' } : null}
            key={index}
            value={index}
            onClick={(e) => setCurrentPage(Number(e.target.value))}
          >
            {index + 1}
          </button>
        ))}
    </PaginationStyled>
  );
}
