import GlobalStyle from './assets/styles/GlobalStyle';
import Login from './pages/Login';
import Register from './pages/Register';
import HomeHabit from './pages/HomeHabit'
import HabitToday from './pages/HabitToday'
import History from './pages/History';
import ContextLogin from './constants/ContextLogin.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { React, useState } from 'react';

export default function App() {

    const [user, setUser] = useState({id: null, name: null, image: null, email: null, password: null, token: null, progress:null})
    const [habitList, setHabitList] = useState([])

    return (
        <BrowserRouter>
            <GlobalStyle />
            <ContextLogin.Provider value={{user, setUser, habitList, setHabitList}}>
            <Routes>
                <Route path='/' element={<Login/>}  />
                <Route path='/cadastro' element={<Register/>}/>
                <Route path='/habitos' element={<HomeHabit/>}/>
                <Route path='/hoje' element={<HabitToday/>}/>
                <Route path='/historico' element={<History/>}/>
            </Routes>
            </ContextLogin.Provider>         
        </BrowserRouter>
            )
}