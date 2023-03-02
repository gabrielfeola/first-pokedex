const getJSON = async () => {
    for(i = 1; i<=151; i++){
        const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${[i]}`)
        const data = await response.json()
        const jsonObject = {
            name: data.species.name,
            sprite: data.sprites.front_default,
            type: data.types[0].type.name
        }

        const ul = document.querySelector('.pokedex');
        const li = document.createElement('li');
        li.innerHTML = createCard(jsonObject.name, jsonObject.sprite, jsonObject.type);
        ul.appendChild(li);
    }
    
}

getJSON()

function createCard(name, sprite, type) {
    
    return `
            <div class="card" style="background-color: var(--${type});">
                <div class="info">
                    <h3>${name}</h3>
                    <h5>${type}</h5>
                </div>
                <div class="sprite">
                    <img src="${sprite}" alt="pokemon">
                </div>
            </div>
            `
}