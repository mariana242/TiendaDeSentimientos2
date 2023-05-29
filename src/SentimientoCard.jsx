import React from 'react';

function SentimientoCard({ sentimiento }) {
  return (
    <div className="card">
      <img src={sentimiento.imagen} alt={sentimiento.nombre} />
      <h2>{sentimiento.nombre}</h2>
      <p>{sentimiento.descripcion}</p>
      {/* Mostrar otros atributos del sentimiento */}
    </div>
  );
}

export default SentimientoCard;
