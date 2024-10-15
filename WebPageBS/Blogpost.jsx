import React from 'react'

export default function Cetagory() {

    const pcolour = {
        color: "#8F8F8F",
        FontSize: "20px"
    };
    return (
        <div>
            <div>
                <div class="container my-2">
                    <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card h-100 border-0">
                                <img src="https://themewagon.github.io/kaira/images/post-image1.jpg" class="card-img-top" alt="" />
                                <div class="card-body">
                                    <p style={{pcolour}}>Fashion /  jul 11, 2022</p>
                                    <h4 class="card-title">SHOP FOR MEN</h4>
                                    <p style={{pcolour}}>Dignissim lacus,turpis ut suspendisse vel tellus.Turpis purus,gravida orci,fringilla...</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100 border-0">
                                <img src="https://themewagon.github.io/kaira/images/post-image2.jpg" class="card-img-top" alt="" />
                                <div class="card-body">
                                    <p style={{pcolour}}>Fashion /  jul 11, 2022</p>
                                    <h4 class="card-title">SHOP FOR WOMEN</h4>
                                    <p style={{pcolour}}>Dignissim lacus,turpis ut suspendisse vel tellus.Turpis purus,gravida orci,fringilla...</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100 border-0">
                                <img src="https://themewagon.github.io/kaira/images/post-image3.jpg" class="card-img-top" alt="" />
                                <div class="card-body">
                                    <p style={{pcolour}}>Fashion /  jul 11, 2022</p>
                                    <h4 class="card-title" >SHOP FOR ACCESSORISE</h4>
                                    <p style={{pcolour}}>Dignissim lacus,turpis ut suspendisse vel tellus.Turpis purus,gravida orci,fringilla...</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
