import React from 'react'

export default function Navbar() {
    return (
        <>
            <div>

                <nav class="navbar navbar-expand-lg bg-body-tertiary m-0 p-0 sticky-top" >
                    <div class=" container-fluid" style={{ backgroundColor: "#F1F1F0", color: "#8F8F8F", }}>
                        <a class="navbar-brand fs-1" href="..." style={{fontFamily: "sans-serif"}} >KAIRA</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mx-auto mb-2 mb-lg-0 gap-3">

                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle active" href="..." role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        HOME
                                    </a>
                                    <ul class="dropdown-menu ">
                                        <li><a class="dropdown-item" href="...">Action</a></li>
                                        <li><a class="dropdown-item" href="...">Another action</a></li>
                                        <li><a class="dropdown-item" href="...">Something else here</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle active" href="..." role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        SHOP
                                    </a>
                                    <ul class="dropdown-menu ">
                                        <li><a class="dropdown-item" href="...">Action</a></li>
                                        <li><a class="dropdown-item" href="...">Another action</a></li>
                                        <li><a class="dropdown-item" href="...">Something else here</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle active" href="..." role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        PAGES
                                    </a>
                                    <ul class="dropdown-menu ">
                                        <li><a class="dropdown-item" href="...">Action</a></li>
                                        <li><a class="dropdown-item" href="...">Another action</a></li>
                                        <li><a class="dropdown-item" href="...">Something else here</a></li>
                                    </ul>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active dropdown-toggle" href="..." role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        BLOG
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active " aria-current="page" href="...">CONTACT</a>
                                </li>
                            </ul>
                            <form class="d-flex mt-2 mb-2" role="search">
                                <input class="form-control  me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button class="btn fw-bold " type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
                            </form>
                        </div>
                    </div>
                </nav>

            </div>

            <div class="row justify-content-center py-3" style={{backgroundColor: "#F1F1F0"}} >
                <h1 class="section-title text-center mt-4 fw-lighter" style={{fontFamily: "cursive", fontSize: "72px", color: "#111"}}>New Collections</h1>
                <div class="text-center">
                    <p class="col-md-6 mx-auto" style={{fontFamily: "sans-serif", fontSize: "18px", color: "#8F8F8F"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptas ut dolorum consequuntur, adipisci
                        repellat! Eveniet commodi voluptatem voluptate, eum minima, in suscipit explicabo voluptatibus harum,
                        quibusdam ex repellat eaque!</p>
                </div>
            </div>
        </>
    )
}
