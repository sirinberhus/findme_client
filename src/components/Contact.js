import React from 'react';
 import '../css/Contact.css';

function Contact() {
  return (
    <section className="section contact">
      <div className="container">
        <h2 className="section-title headline-small">İletişim</h2>
        <p className="section-text body-large">Herhangi bir sorunuz veya geri bildiriminiz varsa, lütfen bizimle iletişime geçin.</p>
        <form action="/contact" method="post" className="contact-form">
          <label className="contact-item">
            <span className="label-medium label">Adınız</span>
            <input type="text" name="name" className="contact-item-field body-medium" />
          </label>
          <label className="contact-item">
            <span className="label-medium label">E-posta</span>
            <input type="email" name="email" className="contact-item-field body-medium" />
          </label>
          <label className="contact-item">
            <span className="label-medium label">Mesajınız</span>
            <textarea name="message" className="contact-item-field body-medium"></textarea>
          </label>
          <button type="submit" className="contact-btn">
            <span className="label-medium">Gönder</span>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
