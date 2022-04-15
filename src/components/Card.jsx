/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import CardStyled from '../stledComponents/CardStyled';

export default function Card({ doc }) {
  const {
    client_name, date, number, status, total_w_vat, type,
  } = doc;
  return (
    <CardStyled>
      <h2>{client_name}</h2>
      <p>
        date:
        {date}
      </p>
      <p>
        number:
        {number}
      </p>
      <p>
        status:
        {status}
      </p>
      <p>
        total:
        {total_w_vat}
      </p>
      <p>
        type:
        {type}
      </p>
    </CardStyled>
  );
}

Card.propTypes = {
  doc: PropTypes.shape({
    client_name: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    total_w_vat: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,

};
