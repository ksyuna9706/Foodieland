import './Header.css';
import { Link } from 'react-router-dom';
import fb from './001-facebook.webp';
import tw from './003-twitter.webp';
import inst from "./004-instagram.webp";

function Header() {
    return <div className="header">
        <div className="wrap">
            <div className="logo"><Link to="/">Foodieland</Link></div>
            <div className="right">
                <ul>
                    <li><Link to="/main">Home</Link></li>
                    <li><Link to="/recipes">Recipes</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contacts">Contacts</Link></li>
                </ul>
                <div className="social">
                 <Link to="/contacts"><img src={fb} alt="" /></Link>
                <Link to="/contacts"><img src={tw} alt="" /></Link>
                <Link to="/contacts"><img src={inst} alt="" /></Link>   
                </div>
                
            </div>
        </div>
    </div>
}

export default Header;