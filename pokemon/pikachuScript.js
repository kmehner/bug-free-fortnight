// GOAL: Load pikachu's information when we load the page (DOMContentLoaded)

// Fetch the pokemon data from the server 
// Pokemon URL = https://pokeapi.co/api/v2/pokemon/pikachu
// Convert to json 
// Return the pokemon data 

async function fetchPokemonData(pokemonName){
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
  const pokemonData = await response.json(); 
  return pokemonData; 
}

// Add an event listener
  // Await the pokemon data from fetching function 
  // Get the element from our html page that we want to add the data to 
  // Display the data 
document.addEventListener("DOMContentLoaded", async () => {
  const pikachuData = await fetchPokemonData('pikachu'); 
  console.log(pikachuData); 

  const pokemonInfoElement = document.getElementById('pokemon-info');
  const pokemonDataName = pikachuData.name; 

  pokemonInfoElement.innerHTML = `
    <h2>${pokemonDataName}<h2> 
    <img src="${pikachuData.sprites.front_default}"> 
    <h3>Abilities: </h3>
    <ul>
      ${pikachuData.abilities.map(arrayItem => `<li>${arrayItem.ability.name}</li>`).join('')}
    </ul>
    <h3>Base Experience: </h3>
    <p>${pikachuData.base_experience}</p> 
    <h3>First Pikachu Move</h3>
    <p>${pikachuData.moves[0].move.name}</p>

    <h3>ALL Pikachu Move</h3>
    <ul>${pikachuData.moves.map(moveItem => `<li>${moveItem.move.name}</li>`).join('')}</ul>
  `


})