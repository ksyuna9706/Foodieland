import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/main/Home";
import About from "./pages/main/About";
import Contacts from "./pages/main/Contacts";
import NotFound from "./pages/main/NotFound";
import Category from "./pages/main/Category";
import Recipe from "./components/Recipe";
import RecipePage from "./pages/recipePage/RecipePage";
import BlogArticle from "./pages/blogArticle/BlogArticle";
import CrochetPage from "./pages/blogArticle/CrocketPage/CrochetPage";
import VegRecipes from "./pages/blogArticle/VegRec/VegRecipes";
import BecomeChef from "./pages/blogArticle/becomeChef/BecomeChef";

function App() {
  const text = {
    title: "Welcome to TheMealDb",
    description: "Welcome to TheMealDB: An open, crowd-sourced database of recipes from around the world.We offer a free recipe API for anyone wanting to use it, with additional premium features if required."
  }
  return (

    <>

      <Routes>

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About text={text} />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="blog" element={<BlogArticle />} />
          <Route path="recipes" element={<RecipePage />} />
          <Route path="Crochet" element={<CrochetPage />} />
          <Route path="VegRec" element={<VegRecipes />} />
          <Route path="/Chef" element={<BecomeChef />} />

     

          <Route path="category/:name" element={<Category />} />
          <Route path="meal/:id" element={<Recipe />} />
      

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>

    </>
  );
}

export default App;
