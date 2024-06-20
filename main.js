console.log(pokemons)

const contenedorCards = document.getElementById("contenedor_cards");
let cardsHtml =""

for(let pokemon in pokemons){
// console.log(pokemons [pokemon])
cardsHtml += crearCards (pokemon)
}
contenedorCards.innerHTML = cardsHtml


function crearCards(pokemon){
    let card = document.createElement ('div')
    card.classList.add('card')

    let id = document.createElement ('div')
    let name=document.createElement('p')
    let image = document.createElement('img')

    id.innerText = pokemons [pokemon].id
    name.innerText = pokemons [pokemon].name
    image.src =pokemons[pokemon].image

    card.append (id,name,image)

    return card.outerHTML

}
