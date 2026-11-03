import CategoryItem from "../categoryitem/CategoryItem";
import "./CategoryList.css";

function CategoryList({catalog=[]}){
    return(
        <div className="list wrap">
          <div className="cL"> 
            <h1>Categories</h1>
            </div> 
            <div className="cI">
                {
    catalog.map(el=>(
        
            <CategoryItem key={el.idCategory}{...el}/>
        ))

   
}
            </div>
            

        </div>
    )
}

export default CategoryList;