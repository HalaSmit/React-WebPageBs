import React from 'react'

export default function Add() {

    const icolour = {
        color: "#8F8F8F"
    }
    return (
        <div>
            <section class="features py-5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 text-center aos-init aos-animate">
                            <div class="py-5">
                                <i class="fa-regular fa-calendar-days fs-1" style={icolour}></i>
                                <h4 class="element-title text-capitalize my-3">Book An Appointment</h4>
                                <p>At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
                            </div>
                        </div>
                        <div class="col-md-3 text-center aos-init aos-animate">
                            <div class="py-5">
                                <i class="fa-solid fa-bag-shopping fs-1"style={icolour}></i>
                                <h4 class="element-title text-capitalize my-3">Pick up in store</h4>
                                <p>At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
                            </div>
                        </div>
                        <div class="col-md-3 text-center aos-init aos-animate">
                            <div class="py-5">
                                <i class="fa-solid fa-gift fs-1"style={icolour}></i>
                                <h4 class="element-title text-capitalize my-3">Special packaging</h4>
                                <p>At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
                            </div>
                        </div>
                        <div class="col-md-3 text-center aos-init aos-animate">
                            <div class="py-5">
                                <i class="fa-solid fa-arrows-spin fs-1"style={icolour}></i>
                                <h4 class="element-title text-capitalize my-3">free global returns</h4>
                                <p>At imperdiet dui accumsan sit amet nulla risus est ultricies quis.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
