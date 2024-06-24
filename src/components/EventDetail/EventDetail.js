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
        <>
            <header>
                <div className="header-container">
                    <div className="logo">
                        <img src="https://www.biletix.com/static/images/logo.svg" alt="findevent-logo" />
                    </div>
                    <nav>
                        <ul>
                            <li><a href="#">Anasayfa</a></li>
                            <li><a href="#">Etkinlikler</a></li>
                            <li><a href="#">Yardım</a></li>
                            <li><a href="#">İletişim</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div className="event-container">
                <div className="h1-title">
                    <h1>{event.title}</h1>
                </div>
                
                <div className="event-details">
                    <div className="event-description">
                        <div className="event-location">
                            <span className="material-symbols-outlined">location_on</span>
                            <a href="#">{event.address}</a>
                        </div>
                        <div className="date-time">
                            <span>{event.date}</span> 
                        </div>
                    </div>
                </div>
                  
                <div className="event-media-container">
                    <div className="event-image">
                        <img src={event.imageUrl} alt={event.title} />
                    </div>
                </div>
                <div className="tabs">
                    <button className="tablink" onClick={(e) => openTab(e, 'about')}>Etkinliğe Dair</button>
                    <button className="tablink" onClick={(e) => openTab(e, 'list')}>Etkinlikleri Listele</button>
                    <button className="tablink" onClick={(e) => openTab(e, 'rules')}>Etkinlik Kuralları</button>
                </div>
                <div id="about" className="tabcontent">
                    <h2>Etkinliğe Dair</h2>
                    <p>{event.description}</p>
                </div>
                <div id="list" className="tabcontent">
                    <h2>Etkinlikleri Listele</h2>
                    {/* Content for Event List */}
                </div>
                <div id="rules" className="tabcontent">
                    <h2>Etkinlik Kuralları</h2>
                    {/* Content for Event Rules */}
                </div>
            </div>
        </>
    );
};

const openTab = (event, tabName) => {
    var i;
    var x = document.getElementsByClassName("tabcontent");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";

    // Tüm tablink butonlarından active sınıfını kaldır
    var tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Tıklanan butona active sınıfını ekle
    event.currentTarget.className += " active";
};

export default EventDetail;
