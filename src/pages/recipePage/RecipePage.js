import { useState, useEffect } from "react"
import { getAllCategories } from "../../api"
import Preloader from "../../components/preloader/Preloader"
import CategoryList from "../../components/categoryList/CategoryList"

function RecipePage() {
    const [catalog, setCatalog] = useState([]);

    useEffect(() => {
        getAllCategories().then(data => {
            setCatalog(data.categories);
        })
    }, []);

    return (
        <div className="wrap">
            {
                !catalog.length ? <Preloader /> : <CategoryList catalog={catalog} />}

        </div>
    )}
    export default RecipePage;






// import { useState, useEffect } from "react";
// import { getAllCategories } from "../../api";
// import Preloader from "../../components/preloader/Preloader";
// import CategoryList from "../../components/categoryList/CategoryList";
// import Main from "../main/Main";
// import Example from "../example/Example";
// import Blog from "../blog/Blog";
// import CheckOut from "../check/CheckOut";
// import Try from "../try/Try";
// import Form from "../../components/form/Form";

// function Home() {
//     const [catalog, setCatalog] = useState([]);

//     useEffect(() => {
//         getAllCategories().then(data => {
//             setCatalog(data.categories);
//         })
//     }, []);

//     // console.log(catalog);


//     return (

//         <div className="wrap">
//             <Main />
//             {
//                 !catalog.length ? <Preloader /> : <CategoryList catalog={catalog} />
//             }
//             <Example />
//             <Blog/>
//             <CheckOut/>
//             <Try />
//             <Form />
//         </div>
//     )
// }

// export default Home;