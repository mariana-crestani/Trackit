import GlobalStyle from './assets/styles/GlobalStyle';
import Login from './pages/Login';
import Register from './pages/Register'
import { BrowserRouter, Routes, Route } from "react-router-dom"

export default function App() {

    return (
        <BrowserRouter>

            <GlobalStyle />

            <Routes>
                <Route path='/' element={<Login/>}  />
                <Route path='/cadastro' element={<Register/>}/>
            </Routes>

        </BrowserRouter>
            )
}