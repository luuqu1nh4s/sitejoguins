import conn from './connection.js';

export async function inserirUsuario(novoUsuario){
    const comando = `
        INSERT INTO db_games.tb_usuario (nm_usuario, ds_senha)
        VALUES (?, ?);
    `
    let resposta = await conn.query(comando, [novoUsuario.nomeUsuario, novoUsuario.senhaUsuario]);
    
    let info = resposta[0];
    return info.insertId;
}

export async function consultarUsuario(){
    const comando = `
        SELECT
            id_usuario 	    idUsuario,
            nm_usuario      nomeUsuario,       
            ds_senha        senhaUsuario
        FROM db_games.tb_usuario;
    `
    
    let resposta = await conn.query(comando);
    let info = resposta[0];    
    return info;
}

export async function consultarUsuarioPorId(id){
    const comando = `
        SELECT
            id_usuario 	    idUsuario,
            nm_usuario      nomeUsuario,       
            ds_senha        senhaUsuario
        FROM db_games.tb_usuario;
    `
    
    let resposta = await conn.query(comando, [id]);
    let info = resposta[0];    
    return info;
}