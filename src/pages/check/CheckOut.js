import './CheckOut.css';
import post1 from './Post.webp';
import post2 from './Post (1).webp';
import post3 from './Post (2).webp';
import post4 from "./Post (3).webp"

function CheckOut(){
    return(
        <div className="wrap">
            <h1>Check out @foodieland on Instagram</h1>
            <p>If your stomach is already rumbling just looking at these photos, you know what to do — head over to @foodieland on Instagram for a daily dose of culinary inspiration that will fill your feed with flavor.</p>
            <div className="blockCheck">
             <img src={post1} alt="" />   
             <img src={post2} alt="" />   
             <img src={post3} alt="" />   
             <img src={post4} alt="" />   
            </div>
        </div>
    )
}
export default CheckOut;