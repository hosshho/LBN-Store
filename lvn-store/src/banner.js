import React, { useEffect, useState } from "react";
import LG from "./images/LG-mobile.png"
import Vivo from "./images/Vivo-v8.png"
import Iphones from "./images/Iphones.png"

export default function Banner() {
    return (
        <div className="container">
            <div className="banner">
                <div className="slides">
                <div className="slide">
                    <div className="head">
                    <h1>Get Upto 50% off on your favorite smart phone!</h1>
                    </div>
                    <div className="img">
                    <img src={LG} alt="mobile"/>
                    </div>
                </div>
                <div className="slide">
                    <div className="head">
                    <h1>Grap a nice smart phone that fit with your life-style </h1>
                    </div>
                    <div className="img">
                    <img src={Vivo} alt="mobile"/>
                    </div>
                </div>
                <div className="slide">
                    <div className="head">
                    <h1>We have all versions of all Iphones, If you need the apple.</h1>
                    </div>
                    <div className="img">
                    <img src={Iphones} alt="mobile"/>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}