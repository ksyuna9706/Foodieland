import CategoryItem from "../categoryitem/CategoryItem";
import "./CategoryList.css";

function CategoryList({catalog=[]}){
    return(
        <div className="list">
{
    catalog.map(el=>(
        
            <CategoryItem key={el.idCategory}{...el}/>
        ))

   
}
        </div>
    )
}

export default CategoryList;