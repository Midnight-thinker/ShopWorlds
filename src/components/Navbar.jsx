import React from 'react'
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div>
      
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">ShopWorlds</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown active mx-2">
                <Link class="nav-link dropdown-toggle active" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Category
                </Link>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link class="dropdown-item" to="/grocery">Grocery</Link></li>
                  <li><Link class="dropdown-item" to="/butcher">Butcher</Link></li>
                  <li><Link class="dropdown-item" to="/bakery">Baker</Link></li>                  
                  <li><Link class="dropdown-item" to="/chemist">Chemist</Link></li>

                </ul>
              </li>
             
              <li class="nav-item dropdown active mx-2">
                <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Location
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link class="dropdown-item" to="/nagpur">Nagpur</Link></li>
                  <li><Link class="dropdown-item" to="/kolkata"> Kolkata</Link></li>
                  <li><Link class="dropdown-item" to="/madras">Madras</Link></li>
                  <li><Link class="dropdown-item" to="/chennai">Chennai</Link></li>

                </ul>
              </li>

              <li class="nav-item dropdown active mx-2">
                <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Status
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><Link class="dropdown-item" to="/open">Open</Link></li>
                  <li><Link class="dropdown-item" to="/closed">Closed</Link></li>

                </ul>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search for shops here" aria-label="Search" />
              <button class="btn btn-outline-light" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
