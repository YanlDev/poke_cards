const url = 'https://pokeapi.co/api/v2/pokemon/ditto';



// Creando el numero random para la web

const getRandomInt = (min, max) =>{
  return Math.floor(Math.random() * (max - min) + min );
}

// getRandomInt(1,150)

// Solicitud a la API

const fetchData = async () =>{
  try {
    const res = await fetch(url)
    const data = await res.json()
    console.log(data)
  } catch (error) {
    return console.log(error);
  }
};

fetchData()


const print = () =>{
  
}