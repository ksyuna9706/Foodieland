import './Try.css';
import salad from './image 26.webp';
import meat from './image 26 (1).webp';
import rice from './image 26 (2).webp';
import taco from './image 26 (3).webp';
import ChSalad from './image 26 (4).webp';
import sandwich from './image 26 (5).webp';
import vegan from './image 26 (6).webp';
import ramen from './image 26 (7).webp';
import timer from '../main/Timer.webp';
import kn from '../main/ForkKnife.webp';

function Try() {
    return (
        <div className="wrap">
            <div className="try">
                <h1>Try this delicious recipe to make your day</h1>
                <p>If your day needs a spark of pure comfort, try this delicious recipe to make your day truly special. Imagine the aroma of freshly baked banana bread or a sizzling skillet of garlic butter shrimp filling your kitchen, instantly melting away the stress of the morning.</p>
                <div className="tryBlocks">
                    <div className="tryBlock">
                        <img src={salad} alt="salad" />
                        <h1>Mixed Tropical Fruit Salad with Superfood Boosts </h1>
                        <div className="time"><img src={timer} alt="" />30 minutes</div>
                        <div className="ch"><img src={kn} alt="" />Snack</div>
                    </div>
                    <div className="tryBlock">
                        <img src={meat} alt="meat" />
                        <h1>Big and Juicy Wagyu Beef Cheeseburger </h1>
                        <div className="time"><img src={timer} alt="" />30 minutes</div>
                        <div className="ch"><img src={kn} alt="" />Snack</div>
                    </div>
                    <div className="tryBlock">
                        <img src={rice} alt="rice" />
                        <h1>Healthy Japanese Fried Rice with Asparagus </h1>
                        <div className="time"><img src={timer} alt="" />30 minutes</div>
                        <div className="ch"><img src={kn} alt="" />Snack</div>
                    </div>
                    <div className="tryBlock">
                        <img src={taco} alt="taco" />
                        <h1>Cauliflower Walnut Vegetarian Taco Meat </h1>
                        <div className="time"><img src={timer} alt="" />30 minutes</div>
                        <div className="ch"><img src={kn} alt="" />Snack</div>
                    </div>
                    <div className="tryBlock">
                        <img src={ChSalad} alt="ChSalad" />
                        <h1>Rainbow Chicken Salad with Almond Honey Mustard Dressing</h1>
                        <div className="time"><img src={timer} alt="" />30 minutes</div>
                        <div className="ch"><img src={kn} alt="" />Snack</div>
                    </div>
                    <div className="tryBlock">
                        <img src={sandwich} alt="sandwich" />
                        <h1>Barbeque Spicy Sandwiches with Chips </h1>
                        <div className="time"><img src={timer} alt="" />30 minutes</div>
                        <div className="ch"><img src={kn} alt="" />Snack</div>
                    </div>
                    <div className="tryBlock">
                        <img src={vegan} alt="vegan" />
                        <h1>Firecracker Vegan Lettuce Wraps - Spicy!  </h1>
                        <div className="time"><img src={timer} alt="" />30 minutes</div>
                        <div className="ch"><img src={kn} alt="" />Snack</div>
                    </div>
                    <div className="tryBlock">
                        <img src={ramen} alt="ramen" />
                        <h1>Chicken Ramen Soup with Mushroom   </h1>
                        <div className="time"><img src={timer} alt="" />30 minutes</div>
                        <div className="ch"><img src={kn} alt="" />Snack</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Try;