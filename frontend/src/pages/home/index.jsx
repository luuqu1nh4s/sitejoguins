import {Link} from 'react-router-dom'

export default function Home(){
    return(
        <div className="secao">
            <button><Link to = './cadastrar'>CADASTRAR</Link></button>
            <button><Link to = './consultar'>CONSULTAR</Link></button>
        </div>
    )
}