import React from 'react';
import { CalendarIcon, MapPinIcon, TagIcon } from '@heroicons/react/24/outline';

/**
 * Componente EventCard con diseño elegante en negro/gris
 * He añadido iconos de Heroicons para un aspecto más profesional
 */
const EventCard = ({ event, onViewDetail }) => {
  const formatDate = (dateString) => {
    const [year, month, day] = dateString.split('-');
    return `${day}/${month}/${year}`;
  };

  return (
    <div className="event-card">
      <div className="event-card-content">
        <h3>{event.titulo}</h3>
        
        <div className="event-info">
          <p>
            <TagIcon className="event-info-icon" />
            <span className="category-badge">{event.categoria}</span>
          </p>
          
          <p>
            <CalendarIcon className="event-info-icon" />
            <span>{formatDate(event.fecha)}</span>
          </p>
          
          <p>
            <MapPinIcon className="event-info-icon" />
            <span>{event.lugar}</span>
          </p>
        </div>
        
        <button 
          className="view-detail-btn"
          onClick={() => onViewDetail(event)}
        >
          Ver detalle
        </button>
      </div>
    </div>
  );
};

export default EventCard;
