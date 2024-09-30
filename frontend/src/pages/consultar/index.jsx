import { useState } from 'react'
import './index.scss'
import axios from 'axios'
import { Link } from 'react-router-dom';

export default function Consultar() {
    const [listaJogos, setListaJogos] = useState([]);

    async function buscarJogo(){
        const url = 'http://localhost:2024/jogo';
        let resp = await axios.get(url);
        setListaJogos(resp.data);
    }


   

    return (
        <div className='pagina-consultar'>
            <h1> CONSULTAR </h1>

            <button onClick={buscarJogo}>Buscar</button>

            <table>
                <thead>
                    <tr>
                        <th>ID do Jogo</th>
                        <th>Nome do Jogo</th>
                        <th>Desenvolvedora</th>
                        <th>Data de Lançamento</th>
                        <th>Plataformas</th>
                        <th>Nota do Metacritic</th>
                        <th>Nota de Usuários</th>
                    </tr>
                </thead>

                <tbody>
                    {listaJogos.map(item => 
                        <tr>
                            <td>{item.idJogo}</td>
                            <td>{item.nomeJogo}</td>
                            <td>{item.desenvolvedora}</td>
                            <td>{new Date(item.dataLancamento).toLocaleDateString()}</td>
                            <td>{item.plataformas}</td>
                            <td>{item.notaMetacritic}</td>
                            <td>{item.notaUsuarios}</td>
                            <td>

                              <Link to={`/cadastrar/${item.id}`}> Alterar  </Link>

                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}