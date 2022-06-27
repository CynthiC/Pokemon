import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [id, setId] = useState(343)
  const [pokemon, setPokemon] = useState({

  });

  useEffect(() => {
    const get = async () => {
      const data = await axios.get("https://pokeapi.co/api/v2/pokemon/343")
      setPokemon({
        name: data.data.name,
        image: data.data.sprites.front_default,
        experience: data.data.base_experience,
        weight:data.data.weight,
      })
      return data.data
    }
    get()
    }, []);


  const obtenerInformacion = async (id) => {
    console.log(id)
      const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      setPokemon({
        name: data.data.name,
        image: data.data.sprites.front_default,
        experience: data.data.base_experience,
        weight:data.data.weight,
      });      console.log(data.data)
    let a = id + 1;
    setId(a)
  }

  const pokemonReducir = async (id) => {
    if(id<0){
      return
    }
    else{
      const data = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      setPokemon({
        name: data.data.name,
        image: data.data.sprites.front_default,
        experience: data.data.base_experience,
        weight:data.data.weight,

      });      console.log(data.data)
      console.log(data.data.abilities)
    let a = id - 1;
    setId(a)
    }
  }


  return (
    <div className="App" >
    <div className="imagen" >
        <h1 className="">{pokemon.name}</h1>  
        <img src={pokemon.image} alt="pokemon" />   
        <h1>Experiencia:{pokemon.experience}</h1>
        <h1>Peso:{pokemon.weight} Kg.</h1>
        </div>
        <button onClick={() => pokemonReducir(id)} className="boton">Atras</button>
        <button onClick={() => obtenerInformacion(id)} className="boton">Siguiente</button>
        <div class="center-on-page">
  <br></br>
  <br></br>
  
</div>
    </div>
  );
}

export default App;
