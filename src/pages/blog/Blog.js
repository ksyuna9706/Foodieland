import "./Blog.css";
import chef from './portrait-happy-male-chef-dressed-uniform 1.webp'

function Blog(){
    return(
        <div className="wrap">
            <div className="blogAbout">
                <div className="titleblock">
                 <h1>Everyone can be a chef in thir own kitchen</h1>  
                 <p>Your own kitchen is the ultimate culinary playground where you set the rules, experiment with flavors without fear of judgment, and discover that the most valuable Michelin star is the happy silence at the dinner table when everyone enjoys the meal you have created.</p> 
                 <a href="">Learn More</a>
                </div>
                
               <img src={chef} alt="" />
            </div>
        </div>
    )
}
export default Blog;