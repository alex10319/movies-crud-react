// =============================================================================
// PREGUNTAS TEÓRICAS (Para responder oralmente durante la revisión del código):
// 1. ¿Qué es un 'hook' en React y para qué sirve 'useState'?
// 2. ¿Qué es el 'Virtual DOM' y por qué React lo utiliza en lugar del DOM real?
// 3. En Redux (o Context), ¿cuál es el propósito principal del 'Store' y las 'Actions'?
// =============================================================================

import React, { useState } from 'react';
import './MovieForm.css';

export const MovieForm = ({ onAddMovie }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    // ---------------------------------------------------------------------
    // MINI EJERCICIO PRÁCTICO:
    // El candidato debe enviar el título de la película hacia el componente
    // padre utilizando la prop 'onAddMovie', y luego limpiar el input.
    // Además, debe asegurarse de que el input tenga estilos CSS básicos
    // (definidos en MovieForm.css) para que no se vea nativo desordenado.
    // ---------------------------------------------------------------------
    
    // TU CÓDIGO AQUÍ:
  };

  return (
    <form onSubmit={handleSubmit} className="movie-form">
      <h3>Agregar Película</h3>
      <input 
        type="text" 
        value={title} 
        onChange={(e) => setTitle(e.target.value)} 
        placeholder="Nombre de la película..."
      />
      <button type="submit">Guardar</button>
    </form>
  );
};