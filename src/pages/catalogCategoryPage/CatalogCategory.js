import './CatalogCategory.css';
import bf from './image 25.webp';
import vegan from './image 20.webp';
import beef from './image 24.webp';
import desert from './image 22.webp';
import Miscellaneous from './image 23.webp';
import shrimp from './shrimp-emoji-clipart-md.png';
import { Link } from 'react-router-dom';

function CatalogCategory(){
    return(
        <div className="wrap" >
            <div className="catalogInfo">
             <h1>Catalog</h1>
            <p><Link to='/recipes'>View All Categories</Link></p>   
            </div>
            
            <div className="catalog">
<div className="Breakfast">
<img src={bf} alt="" />
<h3>Breakfast</h3>
</div>
<div className="Vegan">
<img src={vegan} alt="" />
<h3>Vegan</h3>
</div>
<div className="Beef">
<img src={beef} alt="" />
<h3>Beef</h3>
</div>
<div className="Dessert">
<img src={desert} alt="" />
<h3>Dessert</h3>
</div>
<div className="Miscellaneous">
<img src={Miscellaneous} alt="" />
<h3>Miscellaneous</h3>
</div>
<div className="Shrimp">
<img src={shrimp} alt="" />
<h3>Shrimp</h3>
</div>
</div>

        </div>
    )
}
export default CatalogCategory;