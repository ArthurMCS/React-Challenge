/* eslint-disable react/no-array-index-key */
import React, { useContext } from 'react';
import CardContainerStyled from '../stledComponents/CardContainer';
import Card from './Card';
import AppContext from '../context/AppContext';

export default function CardContainer() {
  const { docsOnPage } = useContext(AppContext);
  return (
    <CardContainerStyled>
      {docsOnPage.map((doc, index) => <Card doc={doc} key={index} />)}
    </CardContainerStyled>
  );
}
