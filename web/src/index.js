const DATA = 'https://pokeapi.co/api/v2/pokemon?limit=100'      //API endpoint

document.addEventListener('DOMContentLoaded', () => {           //wait for DOMContentLoaded

  const form = document.getElementById("pokemon-search-form")   //obtain form HTML element
  const container = document.getElementById("pokemon-container")//obtain container HTML element

  function fetchPokemons(){ //fetch all the pokemons data
    container.innerHTML = ''
    fetch(DATA)
    .then(resp => resp.json())
    .then(json => json.results.forEach(renderPokemon)) //for each pokemon fetched, render it
  }

  function renderPokemon(pokemon){
    fetch(pokemon.url)
    .then(response => response.json())
    .then(function(pokeData){ //get more information about pokemon by fetching information provided by pokemon.url
      const outerDiv = document.createElement("div") //create a new div element
      outerDiv.className = "pokemon-card"

      const h1 = document.createElement("div") //create a h1 element that contains the name of the pokemon
      h1.innerText = `${pokeData.name.charAt(0).toUpperCase() + pokeData.name.slice(1)}`
      h1.className = "center-text"
      h1.dataset.id = `${pokeData.id}`
      //create pre-styled divs
      const secondDiv = document.createElement("div")
      secondDiv.className = "pokemon-frame"
      const innerDiv = document.createElement("div")
      innerDiv.className = "pokemon-image"
      //create an img element with the image of the pokemon obtained from the server
      const img = document.createElement("img")
      img.dataset.id = `${pokeData.id}`
      img.className = "sprite"
      img.src = `${pokeData.sprites.front_default}`
      //append all the elements in the appropriate order, so styling looks good
      innerDiv.appendChild(img)

      secondDiv.appendChild(h1)
      secondDiv.appendChild(innerDiv)

      outerDiv.appendChild(secondDiv)
      container.appendChild(outerDiv)
    })
  }


  function updatePokemons(e) {
    container.innerHTML = '' //remove all the pokemon cards displayed in the container
    fetch(DATA)
    .then(resp => resp.json())
    .then(function(json){   //refetch pokemons that fit our search term
      json.results.forEach(function(pokemon){
        if (pokemon.name.includes(e.target.value)){
          renderPokemon(pokemon)
        } 
      })
    })
  }
  //call the initial function and add event listener to a search bar
  fetchPokemons()
  form.addEventListener("input", updatePokemons)
})
