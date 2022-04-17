/* eslint-disable react/no-array-index-key */
import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import AppContext from '../context/AppContext';

export default function TableComponent() {
  const {
    currentPage,
    documents,
    search,
    filters,
  } = useContext(AppContext);

  const {
    statusFilter,
    typeFilter,
    numberFilter,
    dateFilter,
    valueFilter,
  } = filters;
  const startIndex = currentPage * 7;
  const endIndex = startIndex + 7;

  const valueFilterNumber = Number(valueFilter);

  const rendeThead = () => (
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

  const filtersFunc = () => {
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

    return docsFiltered;
  };

  const docs = () => {
    const result = filtersFunc();

    return result.slice(startIndex, endIndex).map((doc, index) => (
      <tr key={index}>
        <td>{doc.client_name}</td>
        <td>{doc.status}</td>
        <td>{doc.type}</td>
        <td>{doc.number}</td>
        <td>{doc.date}</td>
        <td>{doc.total_w_vat}</td>
      </tr>
    ));
  };

  const rendeTbody = () => (
    <tbody>
      {docs()}
    </tbody>
  );

  return (
    <Table striped bordered hover size="sm">
      {rendeThead()}
      {rendeTbody()}
    </Table>
  );
}
