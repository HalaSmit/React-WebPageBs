import React from 'react'

export default function Slider() {

  const h5colour = {
    colour: "#111111",
    fontSize: "25px",
    fontFamily: "cursive"
  };

  return (
    <div >
      <div id="cardSlider" class="carousel slide" data-bs-ride="carousel" style={{backgroundColor: "#F1F1F0"}}>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <div class="row">
              <div class="col-md-4">
                <div class="card h-100 border-0">
                  <img src="https://themewagon.github.io/kaira/images/banner-image-6.jpg" class="card-img-top" alt="" />
                  <div class="card-body" style={{backgroundColor: "#F1F1F0"}}>
                    <h5 class="card-title" style={h5colour}>Soft leather jackets</h5>
                    <p class="card-text">Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.</p>
                    <a href="..." class="btn-link fs-6 text-uppercase item-anchor text-decoration-none">Discover Now</a>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card h-100 border-0">
                  <img src="https://themewagon.github.io/kaira/images/banner-image-1.jpg" class="card-img-top" alt="" />
                  <div class="card-body" style={{backgroundColor: "#F1F1F0"}}>
                    <h5 class="card-title" style={h5colour}>Soft leather jackets</h5>
                    <p class="card-text">Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.</p>
                    <div class="btn-left">
                      <a href="..." class="btn-link fs-6 text-uppercase item-anchor text-decoration-none">Discover Now</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card h-100 border-0">
                  <img src="https://themewagon.github.io/kaira/images/banner-image-2.jpg" class="card-img-top" alt="" />
                  <div class="card-body" style={{backgroundColor: "#F1F1F0"}}>
                    <h5 class="card-title" style={h5colour}>Soft leather jackets</h5>
                    <p class="card-text">Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.</p>
                    <a href="..." class="btn-link fs-6 text-uppercase item-anchor text-decoration-none">Discover Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              <div class="col-md-4">
                <div class="card h-100 border-0">
                  <img src="https://themewagon.github.io/kaira/images/banner-image-3.jpg" class="card-img-top" alt="" />
                  <div class="card-body" style={{backgroundColor: "#F1F1F0"}}>
                    <h5 class="card-title" style={h5colour}>Soft leather jackets</h5>
                    <p class="card-text">Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.</p>
                    <a href="..." class="btn-link fs-6 text-uppercase item-anchor text-decoration-none">Discover Now</a>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card h-100 border-0">
                  <img src="https://themewagon.github.io/kaira/images/banner-image-4.jpg" class="card-img-top" alt="" />
                  <div class="card-body" style={{backgroundColor: "#F1F1F0"}}>
                    <h5 class="card-title" style={h5colour}>Out crop sweater</h5>
                    <p class="card-text">Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.</p>
                    <a href="..." class="btn-link fs-6 text-uppercase item-anchor text-decoration-none">Discover Now</a>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div class="card h-100 border-0">
                  <img src="https://themewagon.github.io/kaira/images/banner-image-5.jpg" class="card-img-top" alt="" />
                  <div class="card-body" style={{backgroundColor: "#F1F1F0"}}>
                    <h5 class="card-title" style={h5colour}>Soft leather jackets</h5>
                    <p class="card-text">Scelerisque duis aliquam qui lorem ipsum dolor amet, consectetur adipiscing elit.</p>
                    <a href="..." class="btn-link fs-6 text-uppercase item-anchor text-decoration-none">Discover Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#cardSlider" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#cardSlider" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}
