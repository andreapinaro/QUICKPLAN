import React from 'react';
import { CalendarIcon, MapPinIcon, TagIcon, DocumentTextIcon, HeartIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';

/**
 * Modal de detalle del evento con iconos de Heroicons
 */
const EventDetail = ({ event, onClose, onAddFavorite, isFavorite }) => {
  if (!event) return null;

  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  };

  const handleOverlayClick = (e) => {
    if (e.target.className === 'modal-overlay') {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <h2>{event.titulo}</h2>
        
        <div className="modal-info">
          <p>
            <TagIcon className="modal-info-icon" />
            <span className="category-badge">{event.categoria}</span>
          </p>
          
          <p>
            <CalendarIcon className="modal-info-icon" />
            <strong>Fecha:</strong> {formatDate(event.fecha)}
          </p>
          
          <p>
            <MapPinIcon className="modal-info-icon" />
            <strong>Lugar:</strong> {event.lugar}
          </p>
          
          <div className="modal-description">
            <strong>
              <DocumentTextIcon className="modal-info-icon" style={{ display: 'inline', width: '18px', marginRight: '8px' }} />
              Descripción
            </strong>
            <p>{event.descripcion}</p>
          </div>
        </div>
        
        <div className="modal-buttons">
          <button
            className="favorite-btn"
            onClick={() => onAddFavorite(event)}
            disabled={isFavorite}
          >
            {isFavorite ? (
              <>
                <HeartSolidIcon style={{ width: '18px', height: '18px', display: 'inline', marginRight: '8px' }} />
                En favoritos
              </>
            ) : (
              <>
                <HeartIcon style={{ width: '18px', height: '18px', display: 'inline', marginRight: '8px' }} />
                Añadir a favoritos
              </>
            )}
          </button>
          
          <button className="close-btn" onClick={onClose}>
            <XMarkIcon style={{ width: '18px', height: '18px', display: 'inline', marginRight: '8px' }} />
            Cerrar
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;
