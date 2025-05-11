import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PokemonSearcher } from './component/PokemonSercher.jsx'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import { BaseLayout } from './pages/layouts/baseLayout.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <PokemonSearcher /> */}
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout /> } />
        <Route path="/about" element={<h1>Hello, aboutPage</h1>}/>
        <Route path="/pokemon" element={<PokemonSearcher/> }>
            {/*localhost:3000/pokemon */}
            <Route index element={<PokemonSearcher/>} />
            {/*localhost:3000/pokemon/pikachu */}
            <Route path=":searchTerm" element={<PokemonSearcher/>} />
        </Route>
        

        
      </Routes>
    </BrowserRouter>,
  </StrictMode>,
)
