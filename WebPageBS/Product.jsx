import React from 'react'

export default function Product() {
    const cardtitle = {
        color: "#000",
        fontweight: "bold"
    };
    const cardtext = {
        color: "#000"
    };
    const viewall = {
        textalign: "right"
    };

    return (
        <div>

            <div class="container my-5">
                <div>
                        <h2>OUR NEW ARRIVALS</h2>
                        <p class="text-end" style={viewall}>More</p>
                </div>
                <div class="row row-cols-1 row-cols-md-4 g-4">
                    <div class="col">
                        <div class="card h-100 border-0">
                            <img src="https://themewagon.github.io/kaira/images/product-item-1.jpg" class="card-img-top" alt="Dark Florish Onepiece" />
                            <div class="card-body text-center">
                                <h6 class="card-title" style={{ cardtitle }}>DARK FLORISH ONEPIECE</h6>
                                <p class="card-text" style={{ cardtext }}>$95.00</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 border-0">
                            <img src="https://themewagon.github.io/kaira/images/product-item-2.jpg" class="card-img-top" alt="Baggy Shirt" />
                            <div class="card-body text-center">
                                <h6 class="card-title" style={{ cardtitle }}>BAGGY SHIRT</h6>
                                <p class="card-text" style={{ cardtext }}>$55.00</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 border-0">
                            <img src="https://themewagon.github.io/kaira/images/product-item-3.jpg" class="card-img-top" alt="Cotton Off-White Shirt" />
                            <div class="card-body text-center">
                                <h6 class="card-title" style={{ cardtitle }}>COTTON OFF-WHITE SHIRT</h6>
                                <p class="card-text" style={{ cardtext }}>$65.00</p>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card h-100 border-0">
                            <img src="https://themewagon.github.io/kaira/images/product-item-4.jpg" class="card-img-top" alt="Crop Sweater" />
                            <div class="card-body text-center">
                                <h6 class="card-title" style={{ cardtitle }}>CROP SWEATER</h6>
                                <p class="card-text" style={{ cardtext }}>$50.00</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    )
}
