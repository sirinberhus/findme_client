import React, { useEffect } from 'react';
// import '../css/Navbar.css';

function Navbar() {
  useEffect(() => {
    const $navbar = document.querySelector("[data-navbar]");
    const $navToggler = document.querySelector("[data-nav-toggler]");

    $navToggler.addEventListener("click", () => $navbar.classList.toggle("active"));
  }, []);

  return (
    <header className="header" data-header>
      <div className="container">
        <a href="#" className="logo">
          <img src="./assets/images/logo.png" width="190" height="28" alt="findevent" />
        </a>
        <nav className="navbar" data-navbar>
          <ul className="navbar-list">
            <li><a href="#" className="navbar-link label-medium active">Ana Sayfa</a></li>
            <li><a href="#" className="navbar-link label-medium">Etkinlikler</a></li>
            <li><a href="#" className="navbar-link label-medium">Kategoriler</a></li>
            <li><a href="#" className="navbar-link label-medium">İletişim</a></li>
            <li><a href="#" className="navbar-link label-medium">Hakkımızda</a></li>
          </ul>
          <div className="navbar-wrapper">
            <a href="#" className="btn-link label-medium">Giriş</a>
            <a href="#" className="btn btn-fill label-medium">Başlayın</a>
          </div>
        </nav>
        <button className="nav-toggle-btn icon-btn" aria-label="toggle navbar" data-nav-toggler>
          <span className="material-symbols-rounded open" aria-hidden="true">menu</span>
          <span className="material-symbols-rounded close" aria-hidden="true">close</span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
