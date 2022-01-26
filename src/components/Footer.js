import React from 'react';

export default function Footer() {
  let year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="footer__text">&copy; {year} Around The U.S.</p>
    </footer>
  );
}
