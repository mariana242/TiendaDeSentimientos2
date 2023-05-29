import React from 'react';
import NavigationMenu from './NavigationMenu';
import SentimientoCard from './SentimientoCard';
import sentimientosData from './sentimientos.json';

function App() {
  return (
    <div>
      <NavigationMenu />
      <h1>Bienvenido a la Tienda de Sentimientos</h1>
      <h2>Listado de Sentimientos</h2>
      <div className="card-container">
        {sentimientosData.map((sentimiento) => (
          <SentimientoCard key={sentimiento.id} sentimiento={sentimiento} />
        ))}
      </div>
    </div>
  );
}

export default App;
