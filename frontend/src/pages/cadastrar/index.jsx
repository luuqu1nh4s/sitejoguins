import { useState } from 'react'
import { useEffect } from 'react';
import './index.scss'
import axios from 'axios'
import { useParams } from 'react-router-dom';

export default function Cadastrar() {
    const [nomeJogo, setNomeJogo] = useState('');
    const [nomeDev, setNomeDev] = useState('');
    const [dtLanca, setDtLanca] = useState('');
    const [plataformas, setPlataformas] = useState('');
    const [notaMC, setNotaMC] = useState('');
    const [notaUsers, setNotaUsers] = useState('');

    async function salvar() {
        const paramCorpo = {
            "nomeJogo": nomeJogo,
            "desenvolvedora": nomeDev,
            "dataLancamento": dtLanca,
            "plataformas": plataformas,
            "notaMetacritic": notaMC,
            "notaUsuarios": notaUsers     
        }

        if (id== undefined) {
            const url = 'http://localhost:2024/jogo';
            console.log(paramCorpo)
            let resp = await axios.post(url, paramCorpo);

            alert(`Jogo adicionado na tabela. Id: ${resp.data.novoId}`);
        } 
        else {
            const url = `http://localhost:2024/jogo/${id}`;
            console.log(paramCorpo)
            let resp = await axios.put(url, paramCorpo);

            alert('Jogo alterado na lista')
        }
    }

    const {id}= useParams();

    async function buscar() {
        const url = `http://localhost:2024/jogo/${id}`;
        let resp = await axios.get(url);
        
        console.log(resp.data);

        setNomeJogo(resp.data.nomeJogo)
        setNomeDev(resp.data.Desenvolvedora)
    }

  useEffect(() => {

    buscar()

  }, [])

    return (
        <div className='pagina-cadastrar'>
            <div className="secaomae">
                <h1> CADASTRAR </h1>

                <div className='form'>
                    <div>
                        <label>Nome do Jogo:</label>
                        <input type='text' value={nomeJogo} onChange={e => setNomeJogo(e.target.value)} />
                    </div>
                    <div>
                        <label>Desenvolvedora:</label>
                        <input type='text' value={nomeDev} onChange={e => setNomeDev(e.target.value)}/>
                    </div>
                    <div>
                        <label>Data de Lançamento:</label>
                        <input type='date' value={dtLanca} onChange={e => setDtLanca(e.target.value)} />
                    </div>
                    <div>
                        <label>Plataformas:</label>
                        <input type='text' value={plataformas} onChange={e => setPlataformas(e.target.value)} />
                    </div>
                    <div>
                        <label>Nota do Metacritic:</label>
                        <input type='text' value={notaMC} onChange={e => setNotaMC(e.target.value)} />
                    </div>                
                    <div>
                        <label>Nota de Usuários:</label>
                        <input type='text' value={notaUsers} onChange={e => setNotaUsers(e.target.value)} /> 
                    </div>               
                </div>
                <button onClick={salvar}> SALVAR </button>
            </div>
        </div>
    )
}