import "./Footer.css"
import { Link } from 'react-router-dom';
import fb from '../header/001-facebook.webp';
import tw from '../header/003-twitter.webp';
import inst from "../header/004-instagram.webp";

function Footer() {
    return (
        <div className="wrap">
            <div className="logo"><Link to="/">Foodieland</Link></div>
            <div className="right">
                <ul>

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
            <div className="footer">Copyright - {new Date().getFullYear()}</div>
        </div>




    )


}

export default Footer;