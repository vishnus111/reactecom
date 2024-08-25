import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-dark text-light pt-4 pb-2 mt-5">
      <div className="container text-center">
        <p>© 2024 E-commerce Site. All rights reserved.</p>
        <p>
          <Link href="#" className="text-light me-4">Privacy Policy</Link> |
          <Link href="#" className="text-light ms-4">Terms of Service</Link>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
