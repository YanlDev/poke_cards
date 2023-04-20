
document.addEventListener('DOMContentLoaded',()=>{
  const numId = getRandomInt(1,151);
  fetchData(numId)
});


// Creando el numero random para la web

const getRandomInt = (min, max) =>{
  return Math.floor(Math.random() * (max - min) + min );
}

// getRandomInt(1,150)

// Solicitud a la API

const fetchData = async (numId) =>{
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${numId}`)
    const data = await res.json()
    console.log(data)

    const pokemon = {
      img: data.sprites.other.dream_world.front_default,
      nombre : data.name,
      hp: data.stats[0].base_stat,
      experiencia: data.base_experience,
      ataque: data.stats[1].base_stat,
      especial: data.stats[3].base_stat,
      defensa: data.stats[2].base_stat
    }

    pintarCard(pokemon)
  } catch (error) {
    return console.log(error);
  }
};




const pintarCard = (pokemon) =>{
  const main = document.querySelector('.main')
  const template = document.getElementById('template').content;
  const clone = template.cloneNode('true');
  const fragment = document.createDocumentFragment();

  clone.querySelector('.card__photo').setAttribute('src', pokemon.img)
  clone.querySelector('.card__name').innerHTML = `${pokemon.nombre} <span class="age">${pokemon.hp} hp</span>`
  clone.querySelector('.card__city').textContent = pokemon.experiencia + ' Exp'
  clone.querySelectorAll('.card__followers')[0].textContent = pokemon.ataque + 'K'
  clone.querySelectorAll('.card__followers')[1].textContent = pokemon.especial + 'K'
  clone.querySelectorAll('.card__followers')[2].textContent = pokemon.defensa + 'K'

  fragment.appendChild(clone)
  main.appendChild(fragment)

}