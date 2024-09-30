import conn from './connection.js';

export async function inserirJogo(novoJogo){
    const comando = `
        INSERT INTO db_games.tb_jogos (nm_jogo, ds_desenvolvedora, dt_lancamento, ds_plataforma, nt_avlmetacritic, nt_avlusuario)
        VALUES (?, ?, ?, ?, ?, ?);
    `
    let resposta = await conn.query(comando, [novoJogo.nomeJogo, novoJogo.desenvolvedora, novoJogo.dataLancamento, novoJogo.plataformas, novoJogo.notaMetacritic, novoJogo.notaUsuarios]);
    
    let info = resposta[0];
    return info.insertId;
}


export async function consultarJogo(){
    const comando = `
        SELECT
            id_jogo 	        	idJogo,
            nm_jogo                 nomeJogo,       
            ds_desenvolvedora	    desenvolvedora,
            dt_lancamento		    dataLancamento,
            ds_plataforma		    plataformas,
            nt_avlmetacritic	    notaMetacritic,
            nt_avlusuario		    notaUsuarios
        FROM db_games.tb_jogos;
    `
    
    let resposta = await conn.query(comando);
    let info = resposta[0];    
    return info;
}


export async function consultarJogoPorId(id){
    const comando = `
        SELECT
            id_jogo 	        	idJogo,
            nm_jogo                 nomeJogo,       
            ds_desenvolvedora	    desenvolvedora,
            dt_lancamento		    dataLancamento,
            ds_plataforma		    plataformas,
            nt_avlmetacritic	    notaMetacritic,
            nt_avlusuario		    notaUsuarios
        FROM db_games.tb_jogos;
    `
    
    let resposta = await conn.query(comando, [id]);
    let info = resposta[0];    
    return info;
}



export async function alterarJogo(id, novoJogo){
    const comando = `
        UPDATE db_games.tb_jogos 
            SET nm_jogo = ?,
                ds_desenvolvedora = ?,	
                dt_lancamento = ?,	
                ds_plataforma = ?,		
                nt_avlmetacritic = ?,	
                nt_avlusuario = ?		
        WHERE id_jogo = ?
    `

    let resposta = await conn.query(comando, [novoJogo.nomeJogo, novoJogo.desenvolvedora, novoJogo.dataLancamento, novoJogo.plataformas, novoJogo.notaMetacritic, novoJogo.notaUsuarios, id]);

    let info = resposta[0];
    return info.affectedRows;
}


export async function deletarJogo(id){
    const comando = `
        DELETE FROM db_games.tb_jogos 
        WHERE id_jogo = ?
    `

    let resposta = await conn.query(comando, [id]);
    let info = resposta[0];
    return info.affectedRows;
}