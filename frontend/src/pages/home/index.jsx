import {Link} from 'react-router-dom'
import './index.scss';

export default function Home(){
    return(
        <div className="pagina-home">
            <div className="secaomae">
                <div className="intro">
                    <h1>Olá, nome! É ótimo te ver de novo!</h1>
                    <h1>O que você gostaria de fazer?</h1>
                </div>
                <div className="opcoes">
                    <button><Link to = '/cadastrar'>CADASTRAR JOGO</Link></button>
                    <button><Link to = '/consultar'>CONSULTAR JOGOS</Link></button>
                </div>
            </div>
        </div>
    )
}