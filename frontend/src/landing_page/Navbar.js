import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LoginRegisterModal from './LoginRegisterModal';

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg border-bottom" style={{ backgroundColor: 'white' }}>
      <div className="container">
        <img src="media/images/logo.svg" style={{ width: '10%' }} alt="logo" />
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <span
                  className="nav-link"
                  style={{ marginLeft: '450px', cursor: 'pointer' }}
                  onClick={() => setIsModalOpen(true)}
                >
                  Signup
                </span>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about">About</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/pricing">Pricing</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/support">Support</Link>
              </li>

            </ul>
          </form>
        </div>
      </div>

      {/** Modal Component */}
      <LoginRegisterModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </nav>
  );
}

export default Navbar;
