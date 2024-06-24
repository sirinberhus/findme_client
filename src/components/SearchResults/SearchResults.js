import React from 'react';
import './SearchResults.css';

const SearchResults = () => {
  return (
    <div className="content-container">
      <header>
        <div className="header-content">
          <h1>findevent</h1>
          <nav>
            <ul>
              <li><a href="#">Müzik</a></li>
              <li><a href="#">Sahne</a></li>
              <li><a href="#">Spor</a></li>
              <li><a href="#">Aile</a></li>
              <li><a href="#">Eğitim & Fazlası</a></li>
            </ul>
          </nav>
          <div className="search-login">
            <input type="text" placeholder="Etkinlik, sanatçı ya da mekan arayın" />
            <button>Giriş Yap</button>
          </div>
        </div>
      </header>
      <main>
        <div className="filter-wrapper">
          <div className="filter-header">
            <span>Tüm Türkiye</span>
            <button>Sonuçları Filtrele</button>
          </div>
          <div className="filter-buttons">
            <button className="button1">Etkinlik <span>&#9662;</span></button>
            <button className="button2">Mekan <span>&#9662;</span></button>
            <button className="button3">Tarih <span>&#9662;</span></button>
          </div>
        </div>
        <div className="results">
          <div className="result-item">
            <div className="event-image-title">
              <img src="image/Animated White Club Remix Party Night Instagram Story.jpg" alt="Event 1" />
              <div className="event-details">
                <h2>DJ X Popüler 90lar - 2000ler - Kız Kıza Eğlence</h2>
                <a href="#">Satışta</a>
              </div>
            </div>
            <div className="event-venue">
              <p>Hayal Kahvesi Emaar</p>
              <p>İstanbul</p>
            </div>
            <div className="event-date">
              <p>Paz, 23/06/24 - Paz,</p>
            </div>
          </div>
          {/* Diğer etkinlikler burada tekrarlanacak */}
        </div>
      </main>
    </div>
  );
};

export default SearchResults;
