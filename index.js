const poke_container = document.getElementById('poke-container')
// console.log(poke_container)
const pokemon_count = 150;

const colors = {
    fire: '#FDDFDF',  // red 
    grass: '#DEFDE0',  // green
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#F4E7DA',
	rock: '#D5D5D4',
	fairy: '#FCEAFF',
	poison: '#98D7A5',
	bug: '#F8D5A3',
	dragon: '#97B3E6',
	psychic: '#EAEDA1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}

const main_types = Object.keys(colors);
// console.log(main_types)

const fetchPokemons = async () => {
    for(let i = 1; i <= pokemon_count; i++){
        // console.log(i)
        await getPokemon(i)
    }

}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const response = await fetch(url); // promice 
    const data = await response.json();  // actual data
   // console.log(data)
    createPokemonCard(data)

};

const createPokemonCard =(pokemon) => {
    const pokemonEl = document.createElement("div")
    pokemonEl.classList.add("pokemon")
    const poke_types = pokemon.types.map( type => type.type.name);
    const type = main_types.find((type) => poke_types.indexOf(type) > -1); // -1 means it doesn't exist, so we choose to ignore if the results are undefined we don't use/see it.
    // console.log(type);
    const color = colors[type];
    pokemonEl.style.backgroundColor = color;
    const PokemonInnerHTML = 
    `
    <div class="image-container">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png">  
    </div>

    <div class='info'>
        <span class="number"> # ${pokemon.id}</span>
        <h3 class="name">${pokemon.name} </h3>
            <small class="type">Type <span>${type} </span></small>
    </div>

    `
    pokemonEl.innerHTML = PokemonInnerHTML
    poke_container.appendChild(pokemonEl)

}
fetchPokemons()
// async function logMovies() {
//     const response = await fetch("http://example.com/movies.json");
//     const movies = await response.json();
//     console.log(movies);
//   }

