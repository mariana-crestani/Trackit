import GlobalStyle from './assets/styles/GlobalStyle';
import Login from './pages/Login';
import Register from './pages/Register';
import HomeHabit from './pages/HomeHabit'
import HabitToday from './pages/HabitToday'
import History from './pages/History';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {

    return (
        <BrowserRouter>

            <GlobalStyle />
            <Routes>
                <Route path='/' element={<Login/>}  />
                <Route path='/cadastro' element={<Register/>}/>
                <Route path='/habitos' element={<HomeHabit/>}/>
                <Route path='/hoje' element={<HabitToday/>}/>
                <Route path='/historico' element={<History/>}/>
            </Routes>

        </BrowserRouter>
            )
}