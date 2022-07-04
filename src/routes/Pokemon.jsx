import React from 'react'
import { useParams } from 'react-router-dom';
import  { useEffect, useState } from 'react'
import axios from "axios"


export const Pokemon = () => {
  const params= useParams();
  const [pokemon, setPokemon] = useState({
    name: '',
    weight: '',
    height: '',
    base_experience: '',
    sprites:{
      front_default:''
    },
    abilities: [],
    types: [],
    stats: [],

  })
  

  useEffect(()=>{
    const pokemon= async ()=>{
      const res= await axios("https://pokeapi.co/api/v2/pokemon/"+params.id)
      console.log(res.data.sprites.front_default);
      setPokemon(res.data)
    }
    pokemon()
  },[])

  return (
    <a  className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={pokemon.sprites.front_default} alt=""/>
    <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{pokemon.name}</h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Peso: {pokemon.weight} Altura: {pokemon.height} Experiencia: {pokemon.base_experience}</p>
    </div>
</a>
  )
}

export default Pokemon