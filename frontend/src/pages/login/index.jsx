import { useState } from 'react';
import './index.scss';
import {Link, useNavigate} from 'react-router-dom';

export default function Login(){
    const[nome, setNome] = useState('');
    const[senha, setSenha] = useState('');

    const navigate = useNavigate();

    async function Entrar(){
        const usuario = {
            "nomeUsuario": nome,
            "senhaUsuario": senha
        }
    }

    return(
        <div className="pagina-login">
            <div className="secaomae">
                <h1>Seja bem-vindo(a) ao SiteJoguins</h1>

                <div className="dologin">
                    <h3>ACESSE SUA CONTA</h3>

                    <div className="campo">
                        <h3>Nome:</h3>
                        <input id='nome' type='text' value={nome} onChange={e => setNome(e.target.value)}/>
                    </div>

                    <div className="campo">
                        <h3>Senha:</h3>
                        <input id='senha' type='text' value={senha} onChange={e => setSenha(e.target.value)}/>
                    </div>
                </div>

                <button className='botao'><Link to={'/home'}>ENTRAR</Link></button>
            </div>
        </div>
    )
}