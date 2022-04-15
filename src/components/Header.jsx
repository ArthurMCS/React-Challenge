import React, { useContext } from 'react';
import Pagination from './Pagination';
import AppContext from '../context/AppContext';
import HeaderStyled from '../stledComponents/HeaderStyled';

export default function Header() {
  const { documents } = useContext(AppContext);
  return (
    <HeaderStyled>
      <div>
        <p>total documents:</p>
        <p>{documents.length}</p>
      </div>
      <Pagination />
    </HeaderStyled>
  );
}
