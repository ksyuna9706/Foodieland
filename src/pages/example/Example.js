import './Example.css';
import timer from '../main/Timer.webp';
import kn from "../main/ForkKnife.webp";
import hamburger from './burger.webp';
import fish from './fish.webp';
import pan from "./pancake.webp";
import veg from './vegetables.webp';
import meatballs from './meatballs.webp';
import orange from './orangePancake.webp';
import chicken from './chiken.webp';
import pasta from './pasta.webp';
import health from './Mask Group.webp'
import food from './01.webp';

function Example() {
    return (
        <div className="example">
            <div className="wrap">
                <h1>Simple and tasty recipes</h1>
                <p>The philosophy of simple and tasty recipes lies in the art of letting high-quality ingredients speak for themselves, transforming a routine weeknight dinner into a genuine moment of joy without demanding hours in the kitchen.</p>
                <div className="recipeExapmle">
                    <div className="blockExample">
                        <img src={hamburger} alt="" />
                        <h3>Big and Juicy Wagyu Beef Cheesburger</h3>
                        <div className="time"><img src={timer} alt="" />30 minutes</div>
                        <div className="ch"><img src={kn} alt="" />Snack</div>
                    </div>
                    <div className="blockExample">
                        <img src={fish} alt="" />
                        <h3>Big and Juicy Wagyu Beef Cheesburger</h3>
                        <div className="time"><img src={timer} alt="" />30 minutes</div>
                        <div className="ch"><img src={kn} alt="" />Snack</div>
                    </div>
                    <div className="blockExample">
                        <img src={pan} alt="" />
                        <h3>Big and Juicy Wagyu Beef Cheesburger</h3>
                        <div className="time"><img src={timer} alt="" />30 minutes</div>
                        <div className="ch"><img src={kn} alt="" />Snack</div>
                    </div>
                    <div className="blockExample">
                        <img src={veg} alt="" />
                        <h3>Big and Juicy Wagyu Beef Cheesburger</h3>
                        <div className="time"><img src={timer} alt="" />30 minutes</div>
                        <div className="ch"><img src={kn} alt="" />Snack</div>
                    </div>
                    <div className="blockExample">
                        <img src={meatballs} alt="" />
                        <h3>Big and Juicy Wagyu Beef Cheesburger</h3>
                        <div className="time"><img src={timer} alt="" />30 minutes</div>
                        <div className="ch"><img src={kn} alt="" />Snack</div>
                    </div>
                   <div className="health">
                    <p>Don't forget to eat healthy food</p>
                    <img src={food} alt="" />
                    <p>www.foodieland.com</p>

                   </div>
                    <div className="blockExample">
                        <img src={orange}  alt="" />
                        <h3>Big and Juicy Wagyu Beef Cheesburger</h3>
                        <div className="time"><img src={timer} alt="" />30 minutes</div>
                        <div className="ch"><img src={kn} alt="" />Snack</div>
                    </div>
                    <div className="blockExample">
                        <img src={chicken} alt="" />
                        <h3>Big and Juicy Wagyu Beef Cheesburger</h3>
                        <div className="time"><img src={timer} alt="" />30 minutes</div>
                        <div className="ch"><img src={kn} alt="" />Snack</div>
                    </div>
                    <div className="blockExample">
                        <img src={pasta} alt="" />
                        <h3>Big and Juicy Wagyu Beef Cheesburger</h3>
                        <div className="time"><img src={timer} alt="" />30 minutes</div>
                        <div className="ch"><img src={kn} alt="" />Snack</div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Example;
