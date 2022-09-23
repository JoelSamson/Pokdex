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
            type:data.types.map( (type) => type.type.name).join(', ')

        }))
        //console.log(pokemon)
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
        <p class= "card-subtitle">${poke.type}</p>
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