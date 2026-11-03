// import { useState,useEffect } from "react";

// import { getAllCategories } from "../../api";


// function Home() {

// const [catalog,setCatalog] = useState([]);
// useEffect(()=>{
//     getAllCategories().then(data=>{
//         setCatalog(data.categories);
//     })
// },[]);


//     return (
//         <div className="wrap">

//         </div>
//     )
// }
// export default Home;
import { useState, useEffect } from "react";
import { getAllCategories } from "../../api";
import Preloader from "../../components/preloader/Preloader";
import CategoryList from "../../components/categoryList/CategoryList";
import Main from "../main/Main"

function Home() {
    const [catalog, setCatalog] = useState([]);

    useEffect(() => {
        getAllCategories().then(data => {
            setCatalog(data.categories);
        })
    }, []);

    // console.log(catalog);


    return (

        <div className="wrap">
             <Main/>
            {
                !catalog.length ? <Preloader />  :<CategoryList catalog={catalog} /> 
            }
        </div>
    )
}

export default Home;