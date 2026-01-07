import React from 'react';
import { HeartIcon, XMarkIcon } from '@heroicons/react/24/solid';

/**
 * Componente Favorites con diseño minimalista
 */
const Favorites = ({ favorites, onRemoveFavorite }) => {
  if (favorites.length === 0) {
    return null;
  }

  return (
    <div className="favorites-section">
      <h2>
        <HeartIcon style={{ width: '18px', height: '18px', display: 'inline', marginRight: '8px', verticalAlign: 'middle' }} />
        Favoritos ({favorites.length})
      </h2>
      <div className="favorites-list">
        {favorites.map((event) => (
          <div key={event.id} className="favorite-item">
            <span>{event.titulo}</span>
            <button
              className="remove-favorite-btn"
              onClick={() => onRemoveFavorite(event.id)}
              title="Quitar de favoritos"
            >
              <XMarkIcon style={{ width: '16px', height: '16px' }} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
