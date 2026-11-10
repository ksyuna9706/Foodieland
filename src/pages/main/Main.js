import "./Main.css";
import timer from './Timer.webp';
import kn from './ForkKnife.webp';
import chicken from "./baked-chicken-wings-asian-style-tomatoes-sauce-plate 1.webp";
import john from './Ellipse 2.webp'

function Main(){
    return(
<div className="main wrap">
    <div className="inf">
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
    </div>

</div>
    )
}

export default Main;

