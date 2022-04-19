/* eslint-disable react/no-array-index-key */
import React, { useContext, useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import AppContext from '../context/AppContext';

export default function TableComponent() {
  const [state, setState] = useState([]);

  const {
    currentPage,
    documents,
    search,
    filters,
    setDocsFiltered,
  } = useContext(AppContext);

  const {
    statusFilter,
    typeFilter,
    numberFilter,
    dateFilter,
    valueFilter,
  } = filters;

  /* Aqui eu fiz uma conta para saber quantos documentos vão aparecer por página,
     assim a primeira página vai possuir os 7 primeiros documentos, já a segunda
     vai possuir do 7 ao 14 e assim por diante. Estes índices são utilizados na
     função slice no retorno do componente */
  const startIndex = currentPage * 7;
  const endIndex = startIndex + 7;

  const valueFilterNumber = Number(valueFilter);

  const renderThead = () => (
    <thead>
      <tr>
        <th>Client name</th>
        <th>Document status</th>
        <th>Document type</th>
        <th>Number</th>
        <th>Date</th>
        <th>Total without VAT</th>
      </tr>
    </thead>
  );

  /* A função 'filter' filtra as faturas usando os filtros escolhidos ou, se não houver nenhum,
    a função retorna o array original */
  const filter = () => {
    let docsFiltered = search.length > 0
      ? documents.filter((doc) => (doc.client_name.toLowerCase().includes(search)))
      : documents;

    if (statusFilter && statusFilter !== 'Any') {
      docsFiltered = docsFiltered.filter((doc) => doc.status === statusFilter);
    }

    if (typeFilter && typeFilter !== 'Any') {
      docsFiltered = docsFiltered.filter((doc) => doc.type === typeFilter);
    }

    if (numberFilter && numberFilter.length) {
      docsFiltered = docsFiltered.filter((doc) => doc.number.toLowerCase().includes(numberFilter));
    }

    if (dateFilter && dateFilter.length) {
      docsFiltered = docsFiltered.filter((doc) => doc.date.toLowerCase().includes(dateFilter));
    }

    if (valueFilter) {
      docsFiltered = docsFiltered.filter((doc) => doc.total_w_vat === valueFilterNumber);
    }
    setState(docsFiltered);
  };

  useEffect(() => {
    filter();
    setDocsFiltered(state);
  });

  /* Aqui eu utilizo o slice com os índices calculados lá em cima  */
  const docs = () => state.slice(startIndex, endIndex).map((doc, index) => (
    <tr key={index} data-testid="table-row">
      <td>{doc.client_name}</td>
      <td>{doc.status}</td>
      <td>{doc.type}</td>
      <td>{doc.number}</td>
      <td>{doc.date}</td>
      <td>{doc.total_w_vat}</td>
    </tr>
  ));

  const renderTbody = () => (
    <tbody>
      {docs()}
    </tbody>
  );

  return (
    <Table striped bordered hover size="sm" variant="dark">
      {renderThead()}
      {renderTbody()}
    </Table>
  );
}
