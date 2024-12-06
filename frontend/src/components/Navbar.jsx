import React from "react";

const Navbar = () => {
  const user = JSON.parse(localStorage.getItem('currentUser'));
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          ReZsoBa Rooms
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {user ? (
              <>
                <div class="dropdown">
                  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    {user.name}
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    <li><a class="dropdown-item" href="#">Foglalások</a></li>
                    <li><a class="dropdown-item" href="#">Kijelentkezés</a></li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <li className="nav-item active">
                  <a className="nav-link" href="/register">
                    Regisztráció
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    Belépés
                  </a>
                </li>

              </>)}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
