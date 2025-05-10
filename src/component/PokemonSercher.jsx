import React, { useState } from 'react'
import '../App.css'

export function PokemonSearcher(){
  let [pokemonData, setpokemonData] = useState({});
  let [pokemonName, setPokemonName] = useState("");
  let [pokemonSpriteUrl, setPokemonSpriteUrl] = useState("");
  let [pokemonId, setPokemonId] = useState(0);
  let [pokemonSearchTerm, setPokemonSearchTerm] = useState("");




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



class App extends React.Component {
  constructor(){
    super();
    state = {
      pokemonId: 0,
      pokemonName:"",
      pokemonSpriteUrl: "",
      pokemonSearchTerm: ""
    }

    this.getRandomPokemon = this.getRandomPokemon.bind(this);
  }

  async componentDidMount(){
    console.log("Component mounted");
    this.getRandomPokemon();
  }

  componentDidUpdate(){
    console.log(this.state)
  }

  componentWillUnmount(){
    console.log("API stuff is all done, goodbye!");
  }

  async getRandomPokemon () {
    let randomPokemonID = Math.floor(Math.random() * 1025) + 1;
    console.log("Ramdom Pokemon ID to get is : " + randomPokemonID);

    this.getSpecificPokemon(randomPokemonID)

  }

  async getSpecificPokemon(targetPokemonValue){
    let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + targetPokemonValue);
    let data = await response.json();

    console.log(data);

    this.setState((previousState) => {
      return{
        // Guarantee that previous state is all kept
        ...previousState,
        // pokemonId: previousState.pokemonId,
        // and then overwrite the specific bit
        pokemonName : data.name,
        pokemonId: data.id,
        pokemonSpriteUrl : data.sprites.other.home.front_default
    }
    });

  }


  render () {
    return(
    <>
      <h1>
        This is a class Component
      </h1>
      
      <button onClick = {this.getRandomPokemon}>
        Get a random Pokemon
      </button>

      <section>
        <label htmlFor="pokemonNameInput"> Pokemon to search for: </label>
        <input 
          type = "text" 
          name = "pokemonNameInput" 
          id="pokemonNameInput" 
          value={this.state.pokemonSearchTerm}
          onChange={(event)=>{
            this.setState({
              pokemonSearchTerm: event.target.value
            });
          }}
          onKeyDown={(event)=> {
            if (event.key === "Enter"){
              this.getSpecificPokemon(this.state.pokemonSearchTerm)
            }
          }}
          
          >
            
        </input>
        
        <button onClick={() => this.getSpecificPokemon(this.state.pokemonSearchTerm)}>
          Search
        </button>
      </section>

      {this.state.pokemonName.length > 0 && 
      <h1>
        {this.state.pokemonName}
      </h1>
      }
      {this.state.pokemonSpriteUrl.length > 0 &&
        <img src={this.state.pokemonSpriteUrl} />
      }
      
    </>
    )
  } 
}

export default App
