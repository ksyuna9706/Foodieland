import "./Main.css";
import timer from './Timer.webp';
import kn from './ForkKnife.webp';
import chicken from "./baked-chicken-wings-asian-style-tomatoes-sauce-plate 1.webp";
import chef from './featured.webp';
import CA from '../blogArticle/CA.webp';
import john from './Ellipse 2.webp';
import Chicken from './i.webp';
import past from './i (1).webp'

import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Main(){
    return(
<div className="main wrap">
<Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Chicken}
          alt="chicken"
        />
        <Carousel.Caption>
          <h5>Spicy delicious chicken wings</h5>
          <p>These spicy delicious chicken wings are a masterpiece of texture and flavor, boasting a perfectly crisp, golden-brown exterior that gives way to incredibly tender, juicy meat.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={chef}
          alt="chef"
        />
        <Carousel.Caption>
          <h5>Full Guide to Becoming a Professional Chef</h5>
          <p>Becoming a professional chef is a path that combines craft, management, and continuous learning. Here is a detailed guide that will help you chart this course.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={past}
          alt="CA"
        />
        <Carousel.Caption>
          <h5>We’re Hiring a Communications Assistant!</h5>
          <p>Here is a detailed and ready‑to‑publish job posting template for “Communications Assistant,” which can be adapted to suit your company..</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    {/* <div className="inf">
       <h1>Spicy delicious chicken wings</h1> 
       <p>These spicy delicious chicken wings are a masterpiece of texture and flavor, boasting a perfectly crisp, golden-brown exterior that gives way to incredibly tender, juicy meat. </p>
       <div className="cook">
        <div className="time"><img src={timer} alt="" />30 minutes</div>
       <div className="ch"><img src={kn} alt="" />Chicken</div>
       </div>
       
       <div className="person">
        <img src={john} alt="" />
        <div className="infoJohn">
         <h3>John Smith</h3>
        <p>15 March 2026</p>   
        </div>
        
       </div>
    </div>
    <div className="photo">
        <img src={chicken} alt="" />
    </div> */}

</div>
    )
}

export default Main;

