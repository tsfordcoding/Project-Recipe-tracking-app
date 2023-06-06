import React from 'react';

function Recipe({ recipe, deleteRecipe }) {
    const handleDelete = () => {
        deleteRecipe(recipe.id);
    };

    return (
      <tr>
        <td>{recipe.name}</td>
        <td>{recipe.cuisine}</td>
        <td>
          <img src={recipe.photo} />
        </td>
        <td className="content_td">
            <p>{recipe.ingredients}</p>
        </td>
        <td className="content_td">
            <p>{recipe.preparation}</p>
        </td>
        <td>
          <button onClick={handleDelete} name="delete">
            Delete
          </button>
        </td>
      </tr>
    );
}

export default Recipe;