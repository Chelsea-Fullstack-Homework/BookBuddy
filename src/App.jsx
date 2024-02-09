import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Books from './components/Books'
import Home from './components/Home'
import Navigations from './components/Navigations'
import Login from './components/Login'
import Register from './components/Register'

function App() {
    const [token, setToken] = useState('')

    return (
        <>
            <Navigations token={token}/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/books' element={<Books />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />

            </Routes>
        </>
    )
}

export default App
