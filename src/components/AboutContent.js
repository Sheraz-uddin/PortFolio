import React from 'react'
import "./AboutContentstyle.css"
import { Link } from 'react-router-dom'
import React1 from "../assets/react1.jpg"
import React2 from "../assets/react2.webp"


const AboutContent = () => {
  return (
  <div className="about">
    <div className="left">
        <h1>Who Am I?</h1>
        <p>Im a react front-end developer. I create responsive secure websites for my clients</p>
        <Link to="/contact">
            <button className='btn'>Contact</button>
        </Link>
    </div>

    <div className="right">
        <div className="img-container">
            <div className="img-stack top">
                <img className='img' src={React1} alt="" />
            </div>
            <div className="img-stack bottom">
                <img className='img' src={React2} alt="" />
            </div>
        </div>
    </div>
  </div>
  )
}

export default AboutContent
