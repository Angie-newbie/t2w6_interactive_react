import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PokemonSearcher } from './component/PokemonSercher.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PokemonSearcher />
  </StrictMode>,
)
