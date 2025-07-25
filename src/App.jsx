import './App.css'
import Login from '../src/pages/Login.jsx'
import Signup from '../src/pages/Signup.jsx'
import 'remixicon/fonts/remixicon.css'
import { Route, Routes } from 'react-router-dom'
import OtpInput from './pages/OtpInput.jsx'
import { Home } from './pages/Home.jsx'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/verify' element={<OtpInput/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
    </>
  )
}

export default App
