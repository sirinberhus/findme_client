import React, { useEffect, useRef } from 'react';
// import '../css/Navbar.css';

function Navbar() {
  const navbarRef = useRef(null);
  const navTogglerRef = useRef(null);
  const headerRef = useRef(null);

  useEffect(() => {
    const $navbar = navbarRef.current;
    const $navToggler = navTogglerRef.current;
    const $header = headerRef.current;

    const handleToggle = () => {
      $navbar.classList.toggle("active");
    };

    const handleScroll = () => {
      $header.classList[window.scrollY > 50 ? "add" : "remove"]("active");
    };

    $navToggler.addEventListener("click", handleToggle);
    window.addEventListener("scroll", handleScroll);

    return () => {
      $navToggler.removeEventListener("click", handleToggle);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="header" ref={headerRef} data-header>
      <div className="container">
        <a href="#" className="logo">
          <img src="/images/logo.png" width="190" height="28" alt="findevent" />
        </a>
        <nav className="navbar" ref={navbarRef} data-navbar>
          <ul className="navbar-list">
            <li><a href="#" className="navbar-link label-medium active">Home</a></li>
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
        <button
          className="nav-toggle-btn icon-btn"
          aria-label="toggle navbar"
          ref={navTogglerRef}
          data-nav-toggler
        >
          <span className="material-symbols-rounded open" aria-hidden="true">menu</span>
          <span className="material-symbols-rounded close" aria-hidden="true">close</span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
