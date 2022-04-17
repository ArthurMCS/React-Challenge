import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import AppContext from '../context/AppContext';
import 'bootstrap/dist/css/bootstrap.css';
import FormContainerStyled from '../stledComponents/FormStyled';

export default function FormComponent() {
  const {
    search,
    setSearch,
    setCurrentPage,
    setFilters,
  } = useContext(AppContext);

  const [statusFilter, setStatusFilter] = useState('Any');
  const [typeFilter, setTypeFilter] = useState('Any');
  const [numberFilter, setNumberFilter] = useState('');
  const [dateFilter, setDateFilter] = useState('');
  const [valueFilter, setValueFilter] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const filters = {
      statusFilter,
      typeFilter,
      numberFilter,
      dateFilter,
      valueFilter,
    };

    setFilters(filters);
    setCurrentPage(0);
  };

  const handleSearch = (e) => {
    setSearch(e);
    setCurrentPage(0);
  };

  return (
    <FormContainerStyled>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Name"
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Status</Form.Label>
          <Form.Select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option>Any</option>
            <option>Draft</option>
            <option>Final</option>
            <option> Paid</option>
            <option>Cancelled</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label>type</Form.Label>
          <Form.Select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
          >
            <option>Any</option>
            <option>Invoice</option>
            <option>Invoice-Receipt</option>
            <option>Receipt</option>
          </Form.Select>
        </Form.Group>
        <Form.Group>
          <Form.Label>Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="year/number"
            value={numberFilter}
            onChange={(e) => setNumberFilter(e.target.value.toLocaleLowerCase())}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Date</Form.Label>
          <Form.Control
            type="month"
            value={dateFilter}
            onChange={(e) => setDateFilter(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Total without VAT</Form.Label>
          <Form.Control
            type="number"
            value={valueFilter}
            step="any"
            onChange={(e) => setValueFilter(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </FormContainerStyled>
  );
}
