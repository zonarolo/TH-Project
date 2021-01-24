import React from 'react';

const Footer = () => {
  return (
    <nav class="navbar fixed-bottom navbar-light bg-light">
      <div class="container-fluid">
        <p>
          Made with <i class="fas fa-heart"></i> by Juan Rolo
        </p>
        <p className="navbar-center">2021 &copy;. All rights reserved.</p>
        <div class="d-flex">
          <a href="https://www.twitter.com/zonarolo" class="nav-link">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://www.linkedin.com/in/juanrolo/" class="nav-link">
            <i class="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/zonarolo" class="nav-link">
            <i class="fab fa-github"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
