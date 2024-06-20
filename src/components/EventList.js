import React from 'react';

// import '../css/EventList.css';

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
          <div className="card">
            <div className="card-banner">
              <figure className="img-holder" style={{ "--width": 585, "--height": 390 }}>
                <img src="/images/property-1.png" width="585" height="390" alt="Dark Blue and White Piano Jazz" className="img-cover" />
              </figure>
            </div>
            <div className="card-content">
              <span className="title-large">Ağustos 28</span>
              <h3><a href="#" className="title-small card-title">Dark Blue and White Piano Jazz</a></h3>
              <address className="body-medium card-text">The Cordon Bar + Bistro Lemington, Colorado</address>
            </div>
          </div>
          <div className="card">
            <div className="card-banner">
              <figure className="img-holder" style={{ "--width": 585, "--height": 390 }}>
                <img src="/images/property-3.jpg" width="585" height="390" alt="Party Tropical Night" className="img-cover" />
              </figure>
            </div>
            <div className="card-content">
              <span className="title-large">20 Şubat</span>
              <h3><a href="#" className="title-small card-title">Party Tropical Night</a></h3>
              <address className="body-medium card-text">3517 W. Gray St. Utica, Pennsylvania 57867</address>
            </div>
          </div>
          <div className="card">
            <div className="card-banner">
              <figure className="img-holder" style={{ "--width": 585, "--height": 390 }}>
                <img src="/images/property-4.jpg" width="585" height="390" alt="Party Tropical Night" className="img-cover" />
              </figure>
            </div>
            <div className="card-content">
              <span className="title-large">21,22,23 Kasım</span>
              <h3><a href="#" className="title-small card-title">Maanvita Kumari</a></h3>
              <address className="body-medium card-text">123 Anywhere ST, ..Any City</address>
            </div>
          </div>
          <div className="card">
            <div className="card-banner">
              <figure className="img-holder" style={{ "--width": 585, "--height": 390 }}>
                <img src="/images/property-5.jpg" width="585" height="390" alt="Party Tropical Night" className="img-cover" />
              </figure>
            </div>
            <div className="card-content">
              <span className="title-large">12 Mayıs</span>
              <h3><a href="#" className="title-small card-title">Solis Concert</a></h3>
              <address className="body-medium card-text">123 Anywhere ST, ..Any City</address>
            </div>
          </div>

          <div className="card">
            <div className="card-banner">
              <figure className="img-holder" style={{ "--width": 585, "--height": 390 }}>
                <img src="/images/property-7.jpg" width="585" height="390" alt="Marathon Festival" className="img-cover" />
              </figure>
            </div>
            <div className="card-content">
              <span className="title-large">23 Haziran</span>
              <h3><a href="#" className="title-small card-title">Marathon Festival</a></h3>
              <address className="body-medium card-text">123 Anywhere ST, ..Any City</address>
            </div>
          </div>

          <div className="card">
            <div className="card-banner">
              <figure className="img-holder" style={{ "--width": 585, "--height": 390 }}>
                <img src="/images/property-6.jpg" width="585" height="390" alt="Yaz Festivali Başlıyor" className="img-cover" />
              </figure>
            </div>
            <div className="card-content">
              <span className="title-large">13 Haziran</span>
              <h3><a href="#" className="title-small card-title">Yaz Festivali</a></h3>
              <address className="body-medium card-text">Atatürk Mah. Gazi Bulvarı No: 12 10100 Karesi/Balıkesir</address>
            </div>
          </div>

          <div className="card">
            <div className="card-banner">
              <figure className="img-holder" style={{ "--width": 585, "--height": 390 }}>
                <img src="/images/property-8.jpg" width="585" height="390" alt="Remix Party Night" className="img-cover" />
              </figure>
            </div>
            <div className="card-content">
              <span className="title-large">24 Aralık</span>
              <h3><a href="#" className="title-small card-title">Remix Party Night</a></h3>
              <address className="body-medium card-text">Yeni,16, 18280, Kizilirmak/Izmir, Turkey</address>
            </div>
          </div>

          <div className="card">
            <div className="card-banner">
              <figure className="img-holder" style={{ "--width": 585, "--height": 390 }}>
                <img src="/images/property-2.jpg" width="585" height="390" alt="Helin Kınay" className="img-cover" />
              </figure>
            </div>
            <div className="card-content">
              <span className="title-large">Aralık Ayı Turnesi</span>
              <h3><a href="#" className="title-small card-title">Helin Kınay</a></h3>
              <address className="body-medium card-text">Muğla, Bursa, İzmir, İstanbul</address>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EventList;
