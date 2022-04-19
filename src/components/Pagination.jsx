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

  /* Aqui eu divi o tamanho do array de documentos filtrados por 7,
  uma vez que o desafio pede 7 faturas por tela no máximo, usei o
  Math.ceil para arredondar o número de páginas */
  const pages = Math.ceil(documentsFiltered.length / 7);

  /* Aqui eu retorno um map do array do tamanho de numero de paginas,
  ou seja, o array sempre vai ter um length do tamanho do numero de paginas */
  return (
    <PaginationStyled>
      {Array
        .from(Array(pages))
        .map((_n, index) => (

          <button
            type="button"
            data-testid="btn-page"
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
