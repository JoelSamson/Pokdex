document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

    // Check the user's preference for dark mode from localStorage
    const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
    
    // Set the initial theme based on user preference
    if (isDarkMode) {
        body.classList.add('dark-mode');
        toggleSwitch.checked = true;
    }

    // Toggle dark mode based on user interaction
    toggleSwitch.addEventListener('change', switchTheme, false);

    function switchTheme(e) {
        if (e.target.checked) {
            body.classList.add('dark-mode');
            localStorage.setItem('darkMode', 'enabled');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('darkMode', null);
        }
    }
});







const pokdex=document.getElementById('pokdex')
console.log('pokedex')

console.log("hello world")
const fetchPokemon = () => {
    const promises = []
    for(let i=1;i<=150;i++)
    {
    const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
    promises.push(fetch(url).then((res) => res.json()))
    }
    Promise.all(promises).then(results => {
        const pokemon = results.map( (data) => ({
            name:data.name,
            id:data.id,
            image:data.sprites['front_default'],
            type:data.types.map( (type) => type.type.name),
            base:data.base_experience,
            weight:data.weight,
            //move:data.moves.map( (moves) => moves.move.name),
        }))
        //console.log(datas)
        displayPokemon(pokemon)
    })
}

const displayPokemon = (pokemon) => {
    console.log(pokemon)
    //const html= `<li>Bulbasaur</li>`
    const pokemonHTMLString = pokemon.map( poke => `
    <li class="card">
        <img class="card-image" src="${poke.image}"/>
        <h2 class="card-title">${poke.id}. ${poke.name}</h2>
        <p class= "card-subtitle type">Type: ${poke.type}</p>
        <p class= "card-subtitle">Base Experience: ${poke.base}</p>
        <p class= "card-subtitle">Weight: ${poke.weight}</p>
    </li>
    `).join('')
    pokedex.innerHTML=pokemonHTMLString
}

    /*
    .then(data => {
        console.log(data)

        const pokemon = {name:data.name,id:data.id,image:data.sprites['front_default']};
        /*pokemon['type']=''
        data.types.forEach( type => {
            pokemon['type'] = pokemon['type'] + ", " + type.type.name
        }
            )*/
            /*
        pokemon['type']=data.types.map( (type) => type.type.name).join(', ')
        console.log(pokemon)
    });

}*/

fetchPokemon();


