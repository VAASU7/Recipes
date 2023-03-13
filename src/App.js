import React,{useState,useEffect} from 'react'
import Recipe from './Recipe';
import './App.css'

const App = () => {

const APP_Id = '0fe63a31';
const APP_KEy = '2d4ad86250aa95116f1a8934088f5268';

const [recipes,setRecipes] = useState([]);
const [search, setSearch] = useState('');
const [query, setQuery] = useState(' ');


useEffect (() => {
  getRecipes();
}, [query]);

const getRecipes = async () => {
  const respons = await fetch (`https://api.edamam.com/search?q=${query}&app_id=${APP_Id}&app_key=${APP_KEy}`);
  const data = await respons.json();
  setRecipes(data.hits);
  console.log(data.hits);
};

const updateSearch = e => {
  setSearch(e.target.value);
};

const getSearch = e =>{
  e.preventDefault();
  setQuery(search)
}



  return (
    <div className='App'>
      <h1>Recipe App</h1>
      <form className='head' onSubmit={getSearch}>
        <input type='text' placeholder='Enter The Recipe Name'
        value={search} onChange={updateSearch}></input>
        <button type='submit'>Search</button>
      </form>

      <div className='body'>
        {recipes.map(recipe =>(
          <Recipe title={recipe.recipe.label} 
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
      
    </div>

  )
}

export default App
