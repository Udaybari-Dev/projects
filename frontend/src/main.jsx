import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Login from './components/login'
import Signup from './components/Signup'



createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
        <Routes>
            <Route path='/' element= {<App/>} />
            <Route path='/Login' element = {<Login/>}/>
            <Route path= '/Signup' element = {<Signup/>}/>
        </Routes>  
      </BrowserRouter>
  </StrictMode>,
)
