// import React from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import  './NavbarStyle.css'

// function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-dark  ">
//       <div className="container-fluid">
//         <NavLink className="navbar-brand" to="/">ShopNation</NavLink>
//         <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
//           <span className="navbar-toggler-icon"></span>
//         </button>
//         <div className="collapse navbar-collapse" id="navbarNav">
//           <ul className="navbar-nav ms-auto">
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/">Home</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/about">About Us</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
//             </li>
//             <li className="nav-item">
//                   <NavLink className="nav-link" to="/register">Register</NavLink>
//            </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;




import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './NavbarStyle.css'

function Navbar() {
  const [navbarScrolled, setNavbarScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavbarScrolled(true);
    } else {
      setNavbarScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg ${navbarScrolled ? 'navbar-light bg-light' : 'navbar-dark bg-dark'} sticky-top`}>
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">ShopNation</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/register">Register</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
