import React, { useState, useEffect } from 'react';
import './App.css';
import EventCard from './components/EventCard';
import EventDetail from './components/EventDetail';
import Favorites from './components/Favorites';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

function App() {
  const [eventos, setEventos] = useState([]);
  const [eventosFiltrados, setEventosFiltrados] = useState([]);
  const [busqueda, setBusqueda] = useState('');
  const [categoriaFiltro, setCategoriaFiltro] = useState('Todas');
  const [eventoSeleccionado, setEventoSeleccionado] = useState(null);
  const [favoritos, setFavoritos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cargarEventos = async () => {
      try {
        setCargando(true);
        await new Promise(resolve => setTimeout(resolve, 800));
        
        const response = await fetch('/eventos.json');
        
        if (!response.ok) {
          throw new Error('No se pudo cargar el archivo de eventos');
        }
        
        const data = await response.json();
        
        if (!data || data.length === 0) {
          throw new Error('El archivo de eventos está vacío');
        }
        
        setEventos(data);
        setEventosFiltrados(data);
        setError(null);
        
      } catch (err) {
        console.error('Error al cargar eventos:', err);
        setError(err.message);
      } finally {
        setCargando(false);
      }
    };

    cargarEventos();
  }, []);

  useEffect(() => {
    let resultado = eventos;

    if (busqueda.trim() !== '') {
      const busquedaLower = busqueda.toLowerCase();
      resultado = resultado.filter(
        evento =>
          evento.titulo.toLowerCase().includes(busquedaLower) ||
          evento.lugar.toLowerCase().includes(busquedaLower)
      );
    }

    if (categoriaFiltro !== 'Todas') {
      resultado = resultado.filter(
        evento => evento.categoria === categoriaFiltro
      );
    }

    setEventosFiltrados(resultado);
  }, [busqueda, categoriaFiltro, eventos]);

  const handleVerDetalle = (evento) => {
    setEventoSeleccionado(evento);
  };

  const handleCerrarDetalle = () => {
    setEventoSeleccionado(null);
  };

  const handleAñadirFavorito = (evento) => {
    const yaEsFavorito = favoritos.find(fav => fav.id === evento.id);
    
    if (!yaEsFavorito) {
      setFavoritos([...favoritos, evento]);
    }
  };

  const handleQuitarFavorito = (eventoId) => {
    setFavoritos(favoritos.filter(fav => fav.id !== eventoId));
  };

  const esFavorito = (eventoId) => {
    return favoritos.some(fav => fav.id === eventoId);
  };

  if (cargando) {
    return (
      <div className="app">
        <div className="loading">Cargando eventos...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app">
        <div className="error">
          <h2>Error</h2>
          <p>{error}</p>
          <p>Verifica que el archivo eventos.json existe en la carpeta public.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <header className="header">
        <h1>QUICKPLAN</h1>
      </header>

      <Favorites 
        favorites={favoritos} 
        onRemoveFavorite={handleQuitarFavorito} 
      />

      <div className="controls">
        <div className="search-filter">
          <div className="search-input-wrapper">
            <MagnifyingGlassIcon className="search-icon" />
            <input
              type="text"
              className="search-input"
              placeholder="Buscar evento..."
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
            />
          </div>

          <select
            className="filter-select"
            value={categoriaFiltro}
            onChange={(e) => setCategoriaFiltro(e.target.value)}
          >
            <option value="Todas">Todas</option>
            <option value="Charla">Charlas</option>
            <option value="Taller">Talleres</option>
            <option value="Torneo">Torneos</option>
            <option value="Excursión">Excursiones</option>
          </select>
        </div>
      </div>

      <div className="events-container">
        {eventosFiltrados.length === 0 ? (
          <div className="no-results">
            No se encontraron eventos
          </div>
        ) : (
          <div className="events-gallery">
            {eventosFiltrados.map((evento) => (
              <EventCard
                key={evento.id}
                event={evento}
                onViewDetail={handleVerDetalle}
              />
            ))}
          </div>
        )}
      </div>

      {eventoSeleccionado && (
        <EventDetail
          event={eventoSeleccionado}
          onClose={handleCerrarDetalle}
          onAddFavorite={handleAñadirFavorito}
          isFavorite={esFavorito(eventoSeleccionado.id)}
        />
      )}
    </div>
  );
}

export default App;