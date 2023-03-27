import "./Heroimgstyle.css"
import React from 'react'
import IntroImg from "../assets/intro-bg.jpg"
import { Link } from "react-router-dom"


const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-img" src={IntroImg} alt="" />
      </div>
      <div className="content">
        <p>HI, I'M A FREELANCER</p>
        <h1>React Developer</h1>
        <div>
            <Link className="btn" to="/project">projects</Link>
            <Link className="btn btn-light" to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Heroimg
