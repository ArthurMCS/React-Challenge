/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

export default function Pagination() {
  const NUMBER_OF_PAGES = 3;
  const { setCurrentPage } = useContext(AppContext);
  return (
    <div>
      Pages:
      {Array
        .from(Array(NUMBER_OF_PAGES))
        .map((_n, index) => (

          <button
            type="button"
            key={index}
            value={index + 1}
            onClick={(e) => setCurrentPage(Number(e.target.value))}
          >
            {index + 1}
          </button>
        ))}
    </div>
  );
}
