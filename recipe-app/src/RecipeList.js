import React from "react";
// import RecipeCreate from './RecipeCreate';
// import './App.css'
import RecipeView from './RecipeView'
// import App from './App';
// import RecipeData from './RecipeData';

function RecipeList({recipes, deleteRecipe, editRecipe}) {
  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Cuisine</th>
            <th>Photo</th>
            <th>Ingredients</th>
            <th>Preparation</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
            {
            recipes.map((recipe, index) => (
              <RecipeView 
                deleteRecipe={() => deleteRecipe(index)}
                editRecipe={editRecipe}
                index={index}
                key={index}
                recipe={recipe}
              />
            
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default RecipeList;