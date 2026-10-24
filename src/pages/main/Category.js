import { useParams,useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import { getFilteredCategory } from "../../api";
import MealList from "../../components/MealList";
import Preloader from "../../components/preloader/Preloader";
import "./Category.css";

function Category(){
    const {name}=useParams();
    const [meals,setMeals] = useState([]);
const navigate = useNavigate();//переменная стала функцией

let goBack = ()=>navigate(-1);
    useEffect(()=>{
getFilteredCategory(name).then(data=>setMeals(data.meals))
    },[name]);
    console.log(meals);
    
    return(
       <div className="wrap">
<button className="btn" onClick={goBack}>Go Back</button>

{
    !meals.length?<Preloader />:<MealList  meals={meals}/>
}
<button className="btn" onClick={goBack}>Go Back</button>
       </div>
    )
}
export default Category;