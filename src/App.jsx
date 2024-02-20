import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Books from './components/Books'
import Home from './components/Home'
import Navigations from './components/Navigations'
import Login from './components/Login'
import Register from './components/Register'
import Account from './components/Account' 
import Logout from './components/Logout' 
import SingleBook from './components/SingleBook'

function App() {
    const [token, setToken] = useState(null)
    const [user, setUser] = useState(null)
    const [books, setBooks] = useState(null)

    return (
        <>
            <Navigations setUser={setUser} token={token} setToken={setToken} />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/books' element={<Books books={books} setBooks={setBooks} />} />
                <Route path='/books/:id' element={<SingleBook token={token} />} />
                <Route path='/login' element={<Login user={user} setUser={setUser} token={token} setToken={setToken} />} />
                <Route path='/register' element={<Register user={user} setUser={setUser} token={token} setToken={setToken} />} />
                <Route path='/account' element={<Account token={token} />} />
                <Route path='/logout' element={<Logout />} />
            </Routes>
        </>
    )
}

export default App
