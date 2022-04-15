/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

export default function Pagination() {
  const { pages, setCurrentPage } = useContext(AppContext);
  return (
    <div>
      Pages:
      {Array
        .from(Array(pages))
        .map((_n, index) => (

          <button
            type="button"
            key={index}
            value={index}
            onClick={(e) => setCurrentPage(Number(e.target.value))}
          >
            {index + 1}
          </button>
        ))}
    </div>
  );
}
