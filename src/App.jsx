
import React from 'react'
import './App.css'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      pokemonId: 0,
      pokemonName:""
    }
  }

  async componentDidMount(){
    console.log("Component mounted");

    let randomPokemonID = Math.floor(Math.random() * 1025) + 1;
    console.log("Ramdom Pokemon ID to get is : " + randomPokemonID);

    let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + randomPokemonID);
    let data = await response.json();

    console.log(data);

    this.setState((previousState) => {
      return{
        // Guarantee that previous state is all kept
        ...previousState,
        // pokemonId: previousState.pokemonId,
        // and then overwrite the specific bit
        pokemonName : data.name,
        pokemonId: data.id
    }
    });

  }

  componentDidUpdate(){
    console.log(this.state)
  }

  componentWillUnmount(){
    console.log("API stuff is all done, goodbye!");
  }

  render () {
    return(
    <>
      <h1>
        This is a class Component
      </h1>
      {this.state.pokemonName.length > 0 && 
      <h1>
        {this.state.pokemonName}
      </h1>
      }
    </>
    )
  } 
}

export default App
