import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/login';
import Home from "./pages/home";
import Cadastrar from "./pages/cadastrar";
import Consultar from "./pages/consultar";


export default function Navegacao (){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/home' element={<Home/>}/>
                <Route path='/cadastrar' element={<Cadastrar/>}/>
                <Route path='/consultar' element={<Consultar/>}/>
                <Route path='/consultar/:id' element={<Consultar/>}/>
            </Routes>
        </BrowserRouter>
    )
}