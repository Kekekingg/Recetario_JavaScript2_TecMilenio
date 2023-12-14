import { getRecipe } from "./recipeController";
import { recipeMarkup } from "./recipe-data";

export function cargarReceta(hash) {
    getRecipe(hash)
      .then((recipe) => {
        // Cambiar contenido de recipe
        let parentElement = document.querySelector('.recipe')
        parentElement.insertAdjacentHTML('afterbegin', recipeMarkup(recipe))
      })
      .catch((error) => {
        console.error(error.message);
      })
  }
  