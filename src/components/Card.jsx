import React from "react";


export default function Card({doc}) {
  return (
    <div className="card">
        <h2>{doc.client_name}</h2>
        <p>date: {doc.date}</p>
        <p>number: {doc.number}</p>
        <p>status: {doc.status}</p>
        <p>total: {doc.total_w_vat}</p>
        <p>type: {doc.type}</p>
    </div>
  )
}
