import React from "react";
import AboutUsSection from "./AboutUsSection";
import AboutUsSlider from "./AboutUsSlider";
import "./index.css"

export default function AboutUsComponent(){
   return(
    <section className="bk-image   ">
    <div className="container  mb-5 sectHero mt-5 shadow p-5">
    <div className="row ">
        <div className="col-md-6 order-md-1 order-2 mb-3 mt-1">
            <AboutUsSlider /> 
        </div>
        <div className="col-md-6 order-md-2 order-1 mt-1"  >
            <AboutUsSection /> 
        </div>
    </div>
</div>
</section>
)
}