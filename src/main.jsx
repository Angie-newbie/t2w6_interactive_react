import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { PokemonSearcher } from './component/PokemonSercher.jsx'
import { HashRouter, Outlet, Route, Routes } from 'react-router-dom'
import { BaseLayout} from './pages/layouts/baseLayout.jsx'
import { UserJwtProvider } from './context/UserJwtProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <PokemonSearcher /> */}
  <UserJwtProvider>

    <HashRouter>
      <Routes>
        <Route path="/" element={<BaseLayout /> } >
          <Route index element = {<h1>Hello Home Page </h1>} />
          <Route path="/about" element={<h1>Hello, aboutPage</h1>}/>
          <Route path="/pokemon" element={<Outlet/> }>
            {/*localhost:3000/pokemon */}
            <Route index element={<PokemonSearcher/>} />
            {/*localhost:3000/pokemon/pikachu */}
            <Route path=":searchTerm" element={<PokemonSearcher/>} />

        </Route>
        </Route>
        
      </Routes>
    </HashRouter>,

  </UserJwtProvider>



  </StrictMode>,
)
