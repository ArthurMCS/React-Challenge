import React from "react";
import CardStyled from "../stledComponents/CardStyled"


export default function Card({doc}) {
  return (
    <CardStyled>
        <h2>{doc.client_name}</h2>
        <p>date: {doc.date}</p>
        <p>number: {doc.number}</p>
        <p>status: {doc.status}</p>
        <p>total: {doc.total_w_vat}</p>
        <p>type: {doc.type}</p>
    </CardStyled>
  )
}
