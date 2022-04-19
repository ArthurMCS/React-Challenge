import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import AppContext from '../context/AppContext';
import 'bootstrap/dist/css/bootstrap.css';
import FormContainerStyled from '../stledComponents/FormStyled';

/* No campo de filtragem por data, eu utilizei um type month, pois no json existem
faturas do dia 31 de fevereiro (uma data inválida), por isso achei melhor utilizar
esse tipo de input  */

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
    /* Esta função fica encarregada de lidar com o submit do forms,
    além disso ela salva as informações no estado geral da aplicação
    com o setFilters que também vem do estado geral, por último ela
    coloca a paginação na página inicial  */

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
  /* Esta func basicamente cuida do input text que salva a mudança no estado do componente
     e coloca a paginação na página inicial   */
    setSearch(e);
    setCurrentPage(0);
  };

  return (
    <FormContainerStyled>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            data-testid="name-input"
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
            data-testid="status-input"
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
            data-testid="type-input"
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
            placeholder="year/number or Draft"
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
        <Button
          variant="primary"
          type="submit"
          data-testid="btn-submit"
        >
          Submit
        </Button>
      </Form>
    </FormContainerStyled>
  );
}
