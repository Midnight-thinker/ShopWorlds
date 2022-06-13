import React from 'react'

function Navbar() {
  return (
    <div>
      
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">ShopWorlds</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item dropdown active">
                <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Category
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Grocery</a></li>
                  <li><a class="dropdown-item" href="#">Butcher</a></li>
                  <li><a class="dropdown-item" href="#">Baker</a></li>                  
                  <li><a class="dropdown-item" href="#">Chemist</a></li>

                </ul>
              </li>
             
              <li class="nav-item dropdown active">
                <a class="nav-link dropdown-toggle active" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Location
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a class="dropdown-item" href="#">Nagpur</a></li>
                  <li><a class="dropdown-item" href="#"> Kolkata</a></li>
                  <li><a class="dropdown-item" href="#">Madras</a></li>
                  <li><a class="dropdown-item" href="#">Chennai</a></li>

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
