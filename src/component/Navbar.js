import React from 'react'
import bootstrap from 'bootstrap'
import Netflixlogo from'../asset/image/Netflixlogo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons'
function Navbar() {
    return (
        <div>
            <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-danger">
                <div class="container-fluid bg-dark">
                    <img src={Netflixlogo} alt="..." />
                    <a class="navbar-brand text-danger" href="#"><h4>NETFLIX</h4></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active text-light" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active text-light" aria-current="page" href="#">TV Shows</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active text-light" aria-current="page" href="#">Movies</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active text-light" aria-current="page" href="#">News & Popular</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active text-light" aria-current="page" href="#">My List</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link active text-light" aria-current="page" href="#">Audio & Subtitle</a>
                            </li>
                        </ul>
                        <form class="form-search" method="get" id="s" action="/">
                            <div class="input-append">
                                <FontAwesomeIcon className='text-light mx-2' icon={faSearch}/>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar