import React from 'react';
// import '../css/SearchBar.css';

function SearchBar() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1 className="headline-large hero-title">Keşfet, Katıl, Unutulmaz Anılar Biriktir!</h1>
          <p className="body-large hero-text">
          Müzikten spora, aile etkinliklerinden sahne gösterilerine kadar geniş bir yelpazede etkinlikleri keşfedin. Size en uygun etkinlikleri bulun ve hemen katılın. 
          </p>
          <form action="./" method="get" className="search-bar">
            <label className="search-item">
              <span className="label-medium label">Kategoriler</span>
              <select name="want-to" className="search-item-field body-medium">
                <option value="muzik" selected>Müzik</option>
                <option value="spor">Spor</option>
                <option value="sahne">Sahne</option>
                <option value="aile">Aile</option>
                <option value="Egitim & Fazlasi">Eğitim & Fazlası</option>
              </select>
              <span className="material-symbols-rounded" aria-hidden="true">person_celebrate</span>
            </label>
            <label className="search-item">
              <span className="label-medium label">Tarih</span>
              <select name="property-type" className="search-item-field body-medium">
                <option value="tum_tarihler" selected>Tüm Tarihler</option>
                <option value="bugun">Bugün</option>
                <option value="hafta_sonu">Hafta Sonu</option>
                <option value="onumuzdeki_hafta_sonu">Önümüzdeki Hafta Sonu</option>
                <option value="bu_hafta">Bu Hafta</option>
                <option value="onumuzdeki_14_gun">Önümüzdeki 14 Gün</option>
                <option value="onumuzdeki_30_gun">Önümüzdeki 30 Gün</option>
                <option value="tarih_araligi">Tarih Aralığı</option>
              </select>
              <span className="material-symbols-rounded" aria-hidden="true">calendar_month</span>
            </label>
            <label className="search-item">
              <span className="label-medium label">Location</span>
              <input type="text" name="location" placeholder="Street, City, Zip..." className="search-item-field body-medium" />
              <span className="material-symbols-rounded" aria-hidden="true">location_on</span>
            </label>
            <button type="submit" className="search-btn">
              <span className="material-symbols-rounded" aria-hidden="true">search</span>
              <span className="label-medium">Search</span>
            </button>
          </form>
        </div>
        <img src="/images/hero.png" width="816" height="659" role="presentation" className="hero-banner" />
        <img src="/images/bg-pattern.png" width="1240" height="840" role="presentation" className="bg-pattern" />
      </div>
    </section>
  );
}

export default SearchBar;
