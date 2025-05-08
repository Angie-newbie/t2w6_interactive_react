
import React from 'react'
import './App.css'

class App extends React.Component {

  componentDidMount(){
    console.log("Component mounted")
  }

  render () {
    return(
    <>
      <h1>
        This is a class Component
      </h1>
    </>
    )
  }
  
}

export default App
