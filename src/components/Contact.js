import React from 'react';


const Contact = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="footer-brand">
            <a href="#" className="logo">
              <img src="/images/logo.png" width="190" height="28" alt="findevent" />
            </a>
            <p className="body-medium footer-text">
              Lorem ipsum dolor sit amet consectetur. Non bibendum sit non congue pharetra pulvinar leo. Sed ut amet ipsum.
            </p>
          </div>
          <nav className="footer-nav" aria-labelledby="nav-label-1">
            <p className="title-small footer-list-title" id="nav-label-1">Quick link</p>
            <ul className="footer-list">
              <li><a href="#" className="body-medium footer-link">Anasayfa</a></li>
              <li><a href="#" className="body-medium footer-link">Etkinlikler</a></li>
              <li><a href="#" className="body-medium footer-link">Kategoriler</a></li>
              <li><a href="#" className="body-medium footer-link">Daha fazla</a></li>
            </ul>
          </nav>
          <nav className="footer-nav" aria-labelledby="nav-label-2">
            <p className="title-small footer-list-title" id="nav-label-2">Destek</p>
            <ul className="footer-list">
              <li><a href="#" className="body-medium footer-link">Hakkımızda</a></li>
              <li><a href="#" className="body-medium footer-link">İletişim</a></li>
              <li><a href="#" className="body-medium footer-link">Privacy Policy</a></li>
              <li><a href="#" className="body-medium footer-link">Terms & Conditions</a></li>
            </ul>
          </nav>
          <nav className="footer-nav" aria-labelledby="nav-label-3">
            <p className="title-small footer-list-title" id="nav-label-3">Get in touch</p>
            <ul className="footer-list">
              <li><a href="mailto:hello@findevent.com" className="body-medium footer-link">hello@findevent.com</a></li>
              <li><address className="address body-medium">Turkey/Istanbul</address></li>
              <li>
                <ul className="social-list">
                  <li><a href="#" className="social-link"><img src="images/facebook.svg" alt="facebook" /></a></li>
                  <li><a href="#" className="social-link"><img src="images/twitter.svg" alt="twitter" /></a></li>
                  <li><a href="#" className="social-link"><img src="/images/insta.svg" alt="instagram" /></a></li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p className="copyright body-medium">
            Copyright 2024 Sirin
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Contact;
