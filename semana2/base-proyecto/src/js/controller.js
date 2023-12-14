import { cargarReceta  } from "./recipeView";
import { searchRecipes } from "./searchView";
/* import icons from "../img/icons.svg" */

//No se puede tener un import adentro de un elemento de control por lo que se tiene que poner un type="module" en el index.html en el script de controller

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////////////
///////////////////////////////////////

//const RECIPE_ID = "5ed6604591c37cdc054bc886"
window.addEventListener('hashchange', function(event){
  let hash = this.location.hash.substring(1)
  mostrarReceta(hash)
})

document.getElementById("btnSearch").addEventListener('click', function () {
  let searchInput = document.querySelector('.search__field')
  searchRecipes(searchInput.value)
})

/* async function showRecipe(id) {
  const URL_API = `https://forkify-api.herokuapp.com/api/v2/recipes/${id}`
  return await fetch(URL_API)
  .then((response) => response.json())
  .then((response) => response.data) //es un return resumido en una linea
  .then((data) => data.recipe) 
      .then((recipe) => recipe)
      .catch((razon) => {throw new Error(razon.message) }) //Trae el mensaje de error si llegara a fallar
}*/

/*  function cargarReceta(hash) {
  getRecipe(hash)
  .then ((recipe) => {
    //Cambiar el contenido del recipe
    let parentElement = document.querySelector('.recipe')
    parentElement.insertAdjacentHTML('afterbegin', recipeMarkup(recipe))
    /* .insertAdjacentElement //insertAdjacentElement sirve para que se agrege como un elemento extra 
  })
  .catch((error) => {
    console.log(error.message);
  })
}  */

/*showRecipe('5ed6604591c37cdc054bc886')
  .then((recipe) => {
    console.log(recipe);

    //Cambiar el contenido del recipe
    let parentElement = document.querySelector('.recipe')
    parentElement.insertAdjacentHTML('afterbegin', recipeMarkup(recipe))
    /* .insertAdjacentElement //insertAdjacentElement sirve para que se agrege como un elemento extra 
  })
  .catch((error) => {
    console.log(error.message);
  }) */

/*   function showResults () {
    let resultContainer = document.querySelector('.results')
    if(recipeContainer && Array.isArray(results)) {
      resultContainer.innerHTML = resultMarkup(results)
    }
  }

  function search(searchString) {
    getRecipe(`?search=${searchString}&key=75c2ecea-5192-4b2d-856f-7fe6f4e864d5`)
      .then((resultado) => {
        console.log('resultado', resultado);
      })
      .catch((er) => {
        console.error(er);
      })
  }
 */
// Obtener el ID de la receta mediante la URL de la ventana 
//Con esto podemos obtener las recetas
  /* .then((response) => {
    console.log('response', response);
    if(response.ok) {
      return response.json()
    }
  }) */
  /*.then((response) => {
    return response.data
  })*/ //Es lo mismo que el then de arriba solo que nos ahorramos el return
