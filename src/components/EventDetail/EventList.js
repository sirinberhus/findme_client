import React from 'react';
import { Link } from 'react-router-dom';
//import './EventList.css';
import { events } from './eventData';

function EventList() {
    return (
        <section className="section property" aria-labelledby="property-label">
            <div className="container">
                <div className="title-wrapper">
                    <div>
                        <h2 className="section-title headline-small">ÖNE ÇIKANLAR</h2>
                        <p className="section-text body-large">Kontenjanlar dolmadan kaydını yaptırmayı unutma!</p>
                    </div>
                    <a href="#" className="btn btn-outline">
                        <span className="label-medium">Explore more</span>
                        <span className="material-symbols-rounded" aria-hidden="true">arrow_outward</span>
                    </a>
                </div>
                <div className="property-list">
                    {events.map(event => (
                        <div className="card" key={event.id}>
                            <div className="card-banner">
                                <figure className="img-holder" style={{ "--width": 585, "--height": 390 }}>
                                    <img src={event.imageUrl} width="585" height="390" alt={event.title} className="img-cover" />
                                </figure>
                            </div>
                            <div className="card-content">
                                <span className="title-large">{event.date}</span>
                                <h3>
                                    <Link to={`/event/${event.id}`} className="title-small card-title">{event.title}</Link>
                                </h3>
                                <address className="body-medium card-text">{event.address}</address>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default EventList;
