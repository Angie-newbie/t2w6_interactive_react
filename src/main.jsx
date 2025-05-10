import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PokemonSearcher } from './component/PokemonSercher.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <PokemonSearcher /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Hello, HomePage</h1>}/>
        <Route path="/about" element={<h1>Hello, aboutPage</h1>}/>
        <Route path="/pokemon" element={<PokemonSearcher/>}>
          {/*localhost:3000/pokemon/pikachu */}
          <Route index element={<PokemonSearcher/>} />
        </Route>
        {/*localhost:3000/pokemon/pikachu */}
        <Route exact path="/search/:searchTerm" element={<PokemonSearcher/>} />

        
      </Routes>
    </BrowserRouter>,
  </StrictMode>,
)
