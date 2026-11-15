import { Link } from 'react-router-dom'

import crochet from './crochet.webp';
import fruit from './fruit.webp';
import chef from './fire.webp';
import lasania from './lasania.webp';
import pinto from './pinto.webp';
import CA from './CA.webp';
import meatballs from './meatballs.webp';
import pasta from './pasta.webp';
import dumplings from './dumplings.webp';
import health from './health.webp';
import Form from '../../components/form/Form';
import './BlogArticle.css'

function BlogArticle() {
    return (
        <div className="blog-article wrap">

            <h1 style={{ fontSize: "85px",marginBottom:'10px' }} >Blog & Article</h1>
            <h3>Find Your Recipe </h3>
            <div className="food-article">
                <div className="food">
                    <div className="food-block-recipes">
                        <img src={crochet} alt="" />
                        <div className='food-block-recipes-info'>
                        <Link to='/Crochet'>Crochet Project for Noodle Lovers</Link>
                        <p>Here are several crochet project ideas tailored for noodle lovers, ranging from practical kitchen items to whimsical decor</p></div>
                    </div>
                    <div className="food-block-recipes">
                        <img src={fruit} alt="" />
                        <div className='food-block-recipes-info'>
                        <Link to='/VegRec'>10 Vegetarian Recipes to Eat in This Month</Link>
                        <p>Here are 10 diverse vegetarian recipes that will be perfect for the menu for the coming month. They cover different cuisines around the world, textures, and cooking methods — from quick dinners to cozy weekend dishes.</p></div>
                    </div>
                    <div className="food-block-recipes">
                        <img src={chef} alt="" />
                        <div className='food-block-recipes-info'>
                        <Link to='/Chef'>Full Guide to Becoming a Professional Chef</Link>
                        <p>Becoming a professional chef is a path that combines craft, management, and continuous learning. Here is a detailed guide that will help you chart this course.</p></div>
                    </div>
                    <div className="food-block-recipes">
                        <img src={lasania} alt="" />
                        <div className='food-block-recipes-info'>
                        <Link to='/Lasagna'>Simple & Delicious Vegetarian Lasagna</Link>
                        <p>Here’s a simple and delicious recipe for vegetarian lasagna that turns out juicy but not watery, with a rich flavor from the vegetables and a creamy layer of cheese.</p></div>
                    </div>
                    <div className="food-block-recipes">
                        <img src={pinto} alt="" />
                        <div className='food-block-recipes-info'>
                        <Link to='/pinto'>Plantain and Pinto Stew with Aji Verde</Link>
                        <p>Here’s a rich and cozy plan: a spicy stew made with plantains and pinto beans, served with a bright green salsa aji verde. This dish is thick, hearty, and very aromatic — the plantain adds a slightly sweet “body,” the pinto beans provide creaminess, and the aji verde adds fresh spiciness.</p></div>
                    </div>
                    <div className="food-block-recipes">
                        <img src={CA} alt="" />
                        <div className='food-block-recipes-info'>
                        <Link to='/CA'>We’re Hiring a Communications Assistant!</Link>
                        <p>Here is a detailed and ready‑to‑publish job posting template for “Communications Assistant,” which can be adapted to suit your company.</p></div>
                    </div>
                </div>
                <div className="food-tasty-recipes">
                    <h1>Tasty Recipes</h1>
                    <div className="food-tasty-recipes-block">
                        <img src={meatballs} alt="" />
                        <div className="food-tasty-recipes-block-info">
                        <h2>Chicken Meatballs with Creamy Cheese</h2>
                        <p>by Andreas Paula</p></div>
                    </div>
                    <div className="food-tasty-recipes-block">
                        <img src={pasta} alt="" />
                        <div className="food-tasty-recipes-block-info">
                        <h2>Traditional Bolognaise Ragu</h2>
                        <p>by Andreas Paula</p></div>
                    </div>
                    <div className="food-tasty-recipes-block">
                        <img src={dumplings} alt="" />
                        <div className="food-tasty-recipes-block-info">
                        <h2>Pork and Chive Chinese Dumplings</h2>
                        <p>by Andreas Paula</p></div>
                    </div>
                    <img src={health} alt="" />
                </div>
            </div>
            <Form />
        </div>
    )
}
export default BlogArticle;


// import './Header.css';
// import { Link } from 'react-router-dom';
// import fb from './001-facebook.webp';
// import tw from './003-twitter.webp';
// import inst from "./004-instagram.webp";

// function Header() {
//     return <div className="header">
//         <div className="wrap">
//             <div className="logo"><Link to="/">Foodieland</Link></div>
//             <div className="right">
//                 <ul>
                    
//                      <li><Link to="/recipes">Recipes</Link></li>
//                      <li><Link to="/blog">Blog</Link></li>
//                     <li><Link to="/about">About</Link></li>
//                     <li><Link to="/contacts">Contacts</Link></li>
//                 </ul>
//                 <div className="social">
//                  <Link to="/contacts"><img src={fb} alt="" /></Link>
//                 <Link to="/contacts"><img src={tw} alt="" /></Link>
//                 <Link to="/contacts"><img src={inst} alt="" /></Link>   
//                 </div>
//                  </div>
           
//         </div> 
//         <hr  className='wrap' style={{marginTop:'45px'}}/>
//     </div>
// }

// export default Header;