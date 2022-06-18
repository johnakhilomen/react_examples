import React, { useState } from 'react';

function RecipeView({recipe, deleteRecipe, editRecipe, index }) {
  const [name, setName] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [photo, setPhoto] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [preparation, setPreparation] = useState('');
  const [editMode, setEditMode] = useState(false);

  const updateHandler = (event) => {
    event.preventDefault();
    editRecipe(index, { name, cuisine, photo, ingredients, preparation })
    setEditMode(false);
  }

  const editModeClickHandler = (event) => {  
    setName(recipe.name);
    setCuisine(recipe.cuisine);
    setPhoto(recipe.photo);
    setIngredients(recipe.ingredients);
    setPreparation(recipe.preparation);
    setEditMode(true);
  };

  const nameChangeHandler = (event) => setName(event.target.value);
  const cuisineChangeHandler = (event) => setCuisine(event.target.value);
  const photoChangeHandler = (event) => setPhoto(event.target.value);
  const ingredientsChangeHandler = (event) => setIngredients(event.target.value);
  const preparationChangeHandler = (event) => setPreparation(event.target.value);

  return  editMode ? (
    <tr>
      <td>
        {(
          <input
            id="edit-name"
            name="edit-name"
            type="text"
            size="10"
            required={true}
            value={name}
            onChange={nameChangeHandler}
          />
        )}
      </td>
      <td>
        {(
          <input
            id="edit-cuisine"
            name="edit-cuisine"
            type="text"
            size="10"
            required={true}
            value={cuisine}
            onChange={cuisineChangeHandler}
          />
        )}
      </td>
      <td>
        {(
          <input
            id="edit-photo"
            name="edit-photo"
            type="url"
            size="10"
            required={true}
            value={photo}
            onChange={photoChangeHandler}
          />
        )}
      </td>
      <td>
        {(
          <textarea
            id="edit-ingredients"
            name="edit-ingredients"
            type="text"
            placeholder="Ingredients"
            rows="10"
            required={true}
            value={ingredients}
            onChange={ingredientsChangeHandler}
          />
        )}
      </td>
      <td>
        {(
          <textarea
            id="edit-preparation"
            name="edit-preparation"
            type="text"
            placeholder="Preparation"
            rows="10"
            required={true}
            value={preparation}
            onChange={preparationChangeHandler}
          />
        )}
      </td>
      <td>
        <button name="update" onClick={updateHandler}>Update</button>
      </td>
    </tr>
  ):(
    <tr>
      <td>{(recipe.name)}</td>
      <td>{(recipe.cuisine)}</td>
      <td>{(<img alt={recipe.photo} src={recipe.photo} />)}</td> 
      <td className="content_td"><p>{(recipe.ingredients)}</p></td>
      <td className="content_td"><p>{(recipe.preparation)}</p></td>
      <td>
        <button name="edit" onClick={editModeClickHandler}>
          Edit
        </button>
        <button name="delete" onClick={deleteRecipe}>
          Delete
        </button>
      </td>
    </tr>
  );  
}

export default RecipeView;