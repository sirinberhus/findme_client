import React from 'react';
import './EventDetail.css';
import useEventDetail from './useEventDetail';
import { useParams } from 'react-router-dom';

const EventDetail = () => {
    const { eventId } = useParams();
    const { event, loading, error } = useEventDetail(eventId);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error loading event details: {error}</div>;

    return (
        <div className="event-detail">
            <h1 className="event-title">{event.title}</h1>
            <div className="event-image-container">
                <img src={event.imageUrl} alt={event.title} className="event-image" />
            </div>
            <h2 className="event-subtitle">Etkinlik Hakkında</h2> {/* Sabit başlık */}
            <p className="event-description">{event.description}</p>
        </div>
    );
};

export default EventDetail;
