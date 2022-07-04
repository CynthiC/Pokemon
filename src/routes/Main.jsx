import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';

import {Link} from 'react-router-dom'

export const Main = () => {
    const [pokeData , setPokeData] = useState([]);
    const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();
    const [disable, setDisable] = React.useState(true);


    const pokeFunc = async() => {
        const res = await axios.get(url);

        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemonData(res.data.results);
       

        console.log("PREV", res.data.previous);
        console.log("NEXT", res.data.next);

        if (res.data.previous != null) {
            setDisable(false);
        } else {
            setDisable(true);
        }
    }

    const getPokemonData = async(res) => {
        res.map(async(item)=>{
            const result =  await axios.get(item.url);
            // console.log("MAP DATA", result.data);
            setPokeData(state => {
                state = [...state,result.data]
                state.sort((a,b) => a.id>b.id?1:-1)
                return state;
            })
           
        })
        
    }


    useEffect(() => {
        pokeFunc()
    }, [url])

    return(
    <div className=' md:grid md:grid-cols-3 md:gap-3 sm:grid sm:grid-cols-2 sm:gap-2 flex flex-col  items-center'>
    {pokeData.map(
        (pokeData, index) => {
            return(
                <div className='w-60 border rounded-lg'>
                <div className='flex justify-center items-center px-2'>
          
                  <img
                    src={pokeData.sprites.front_default}
                    alt={pokeData.name}
                    />
          
                  <div className="px-4 py-6">
                    <h2 className="font-bold text-2xl">{pokeData.name[0].toUpperCase() + pokeData.name.substring(1)}</h2>
                  </div>
          
                </div>
                <Link to={`/pokemon/${pokeData.id}`}>
                <button className='w-full border border-gray-400 rounded-lg hover:bg-slate-100 duration-200'>Ver</button>
                </Link>
              </div> 
            )
        }
    )}
</div>
    )
    
}

export default Main