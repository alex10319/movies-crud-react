import React, { useState, useEffect } from 'react';
import { MovieForm } from './components/MovieForm';
import { API_URL } from './constants';

function App() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/movies/`)
            .then(res => res.ok ? res.json() : [])
            .then(data => setMovies(data))
            .catch(err => console.log("Backend desconectado, usando modo simulación local."));
    }, []);

    const handleAddMovie = (title) => {
        // ---------------------------------------------------------------------
        // TODO: En un entorno productivo, aquí se debería realizar la petición 
        // HTTP POST utilizando fetch() hacia `${API_URL}movies/` para persistir 
        // el registro en la base de datos real del backend.
        // ---------------------------------------------------------------------

        // Simulación local interactiva para que el frontend funcione durante la prueba:
        const newMovie = {
            id: Date.now(),
            title: title,
            created_at: new Date().toISOString()
        };
        setMovies(prev => [...prev, newMovie]);
    };

    return (
        <div className="app-container">
            <h2>Listado de Películas</h2>
            {movies.length === 0 ? <p>No hay películas o el backend está apagado.</p> : (
                <ul>{movies.map(m => <li key={m.id}>{m.title}</li>)}</ul>
            )}
            <hr style={{ margin: '20px 0', border: 'none', borderTop: '1px solid #eee' }} />
            <MovieForm onAddMovie={handleAddMovie} />
        </div>
    );
}
export default App;