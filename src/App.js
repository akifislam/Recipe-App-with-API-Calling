import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Recipe from './Recipe'

function App() {
  const API_ID = "ad145a74";
  const API_KEY = "20a5e07d8b28f1115c0a3c761fa65d49";  

  const [recipes, setRecipes] = useState([]);
  const[search,setSearch]=useState('');
  const[query,setQuery]=useState('chicken')

  useEffect(() => {
    console.log("Using Effect");
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=ad145a74&app_key=20a5e07d8b28f1115c0a3c761fa65d49`);
    const data = await response.json();
    setRecipes(data.hits)
    console.log(data.hits);
  };

  const getSearch = (e)=>{
    e.preventDefault();
    setQuery(search)
  };

  const updateSearch = (e)=>{
    setSearch(e.target.value)
    console.log(search)
  }

  return (
    <div className="App">
      <h1 style={{fontSize:'50px'}}>Akif's Recipe Search</h1>
      <h5>(All data are generated through an API from edamam.com)</h5>
      <form className="recipes" >
        <input value={search} type="text" onChange={updateSearch}></input>
        <button type="submit" onClick={getSearch} >Search</button>
        {recipes.map (recipe =>(
          <Recipe title = {recipe.recipe.label} calories = {recipe.recipe.calories} image = {recipe.recipe.image}/>
        ))}
      </form>
    </div>
  );
}

export default App;
