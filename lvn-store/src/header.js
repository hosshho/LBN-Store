import React, { useState } from "react";
import {BsSearch} from 'react-icons/bs'
import {RiAccountCircleLine} from 'react-icons/ri'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {GiHamburgerMenu} from 'react-icons/gi'
import logo from "./images/logo.png"
export default function Header() {
    let headStyle = {}
        const [btnColor, setBtnColor] = useState("#797979")
    return (
        <div className="header" style={(headStyle)?headStyle:""}>
            <div className="container">
                <div className="logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="links">
                    <ul>
                        <li>Categories</li>
                        <li><a href="#">Offers</a></li>
                        <li><a href="#">Customer Service</a></li>
                        <li><a href="#">What's new</a></li>
                    </ul>
                </div>
                <div className="search">
                <input type="text" onInput={(e) => {(e.target.value)? setBtnColor("#0b8bda"): setBtnColor("#797979")}} placeholder="Product Search"/>
                <button style={{backgroundColor: btnColor}}><BsSearch/></button>
                </div>
                <div className="btns">
                    <button><RiAccountCircleLine /> Account</button>
                    <button><AiOutlineShoppingCart /> Cart</button>
                </div>
                <div className="burger"><GiHamburgerMenu/></div>
            </div>
        </div>
    )
}


window.addEventListener("scroll", () => {
    if (window.scrollY >= 450) {
        document.querySelector(".header").style.position = "fixed";
        document.querySelector(".header").style.backgroundColor = "#0b8bda";
    } else {
        document.querySelector(".header").style = ""
    }
})