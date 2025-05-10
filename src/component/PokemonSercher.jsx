import React, { useEffect, useState } from 'react'
import '../App.css'

export function PokemonSearcher(){
  // eslint-disable-next-line no-unused-vars
  let [pokemonData, setpokemonData] = useState({});
  let [pokemonName, setPokemonName] = useState("");
  let [pokemonSpriteUrl, setPokemonSpriteUrl] = useState("");
  let [_, setPokemonId] = useState(0);
  let [pokemonSearchTerm, setPokemonSearchTerm] = useState("");


  // equivallent to componentDidmount
  useEffect(() => {
    console.log("Use Effect says Hello");
    getRandomPokemon();
    
    return(()=>{
      console.log("Component is unmounting now");
    })
    
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // equivallent to componentDidUpdate
  useEffect(() => {
    console.log("Use Effect says Hello on re-render");
  });
  // equivallent to componentDidUpdate for specific variable
  useEffect(() => {
    console.log("Use Effect says Hello, on update of pokemonName");
  }, [pokemonName]);



  const getRandomPokemon = async() => {
    let randomPokemonID = Math.floor(Math.random() * 1025) + 1;
    console.log("Ramdom Pokemon ID to get is : " + randomPokemonID);

    getSpecificPokemon(randomPokemonID);

  }

  const getSpecificPokemon = async(targetPokemonValue) => {
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + targetPokemonValue);
    let data = await response.json();

    console.log(data);
    
    setPokemonName(data.name);
    setPokemonSpriteUrl(data.sprites.other.home.front_default);
    setPokemonId(data.id);

    // setpokemonData((previousState) => {
    //   return{
    //     // Guarantee that previous state is all kept
    //     ...previousState,
    //     // pokemonId: previousState.pokemonId,
    //     // and then overwrite the specific bit
    //     pokemonName : data.name,
    //     pokemonId: data.id,
    //     pokemonSpriteUrl : data.sprites.other.home.front_default
    // }
    // });

  }




  return(
    <>
      <h1>
        This is a class Component
      </h1>
      
      <button onClick = {getRandomPokemon}>
        Get a random Pokemon
      </button>

      <section>
        <label htmlFor="pokemonNameInput"> Pokemon to search for: </label>
        <input 
          type = "text" 
          name = "pokemonNameInput" 
          id="pokemonNameInput" 
          value={pokemonSearchTerm}
          onChange={(event)=>{
            setPokemonSearchTerm(event.target.value);
          }}
          onKeyDown={(event)=> {
            if (event.key === "Enter"){
              getSpecificPokemon(setPokemonSearchTerm)
            }
          }}
          
          >
            
        </input>
        
        <button onClick={() => getSpecificPokemon(setPokemonSearchTerm)}>
          Search
        </button>
      </section>

      {pokemonName.length > 0 && 
      <h1>
        {pokemonName}
      </h1>
      }
      {pokemonSpriteUrl.length > 0 &&
        <img src={pokemonSpriteUrl} />
      }
      
    </>
    )
  
}

