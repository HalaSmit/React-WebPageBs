import React from 'react'

export default function Collection() {
    const main = {
        backgroundColor: "#F1F1F0"
    }
    return (
        <div>
            <div class="container-fulid my-5" style={main}>
                <div class="row align-items-center">
                    <div class="col-md-5">
                        <img src="https://themewagon.github.io/kaira/images/single-image-2.jpg" alt="Winter Collection" class="img-fluid"/>
                    </div>
                    <div class="col-md-7">
                        <div >
                            <h2 style={{fontSize: "50px"}}>Classic Winter Collection</h2>
                            <p style={{color: "#8F8F8F"}}>
                                Dignissim lacus, turpis ut suspendisse vel tellus. Turpis purus, gravida orci, fringilla a. Ac sed eu fringilla odio mi.
                                Consequat pharetra at magna imperdiet cursus ac faucibus sit libero.
                                Ulricies quam nunc, lorem sit lorem urna, pretium aliquam ut.
                                In vel, quis donec dolor id in.
                            </p>
                            <button class="btn btn-promary">Shop Collection</button>
                            <button class="btn btn-primery"></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
