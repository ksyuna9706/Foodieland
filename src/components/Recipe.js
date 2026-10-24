import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Recipe.css";
import { getMealById } from "../api";
import Preloader from "./preloader/Preloader";
import { useNavigate } from "react-router-dom";
function Recipe() {
    const { id } = useParams();
    useEffect(() => {
        getMealById(id).then(data => setRecipe(data.meals[0]))
    }, [id]);

    const [recipe, setRecipe] = useState({});
    // console.log(recipe);

    const navigate = useNavigate();
    let goBack = () => navigate(-1);
    return (
        <div className="wrap">
            <button className="btn" onClick={goBack}>Go Back</button>

            {
                !recipe.idMeal ? <Preloader /> : (
                    <div className="recipe">
                        <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                        <h1>{recipe.strMeal}</h1>
                        <div>Category: <h5>{recipe.strCategory}</h5> </div>
                        {recipe.strArea ? <div>Area: <h5>{recipe.strArea}</h5></div> : null}
                        <p>{recipe.strInstructions}</p>
                        <table className="table" >
                            <thead>
                                <tr >
                                    <th>Ingredient</th>
                                    <th>Measure</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    Object.keys(recipe).map(key => {
                                        if (key.includes("Ingredient") && recipe[key]) {
                                            return (
                                                <tr>
                                                    <td >{recipe[key]}</td>
                                                    <td >{recipe[`strMeasure${key.slice(13)}`]}</td>
                                                </tr>
                                            )
                                        }
                                    })
                                }
                            </tbody>
                        </table>
                    
                        
                         {
                            recipe.strYoutube ? (
                                <div>
                                    <h4>Video Recipe</h4>
                                    <div className="video-wrap">
                                        <iframe src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(-11)}`} allowFullScreen/>
                                         </div>
                                
                                </div>
                            ) : null
                        } 
                      
                        
                    </div>
                )

            }
            <button className="btn" onClick={goBack}>Go Back</button>
        </div>
    )
}
export default Recipe;

