import * as db from '../repository/jogosRepository.js';
import { Router } from 'express';
const endpoints = Router();

endpoints.get ('/jogo/', async(req,resp) => {
    try {
        let registros = await db.consultarJogo();
        resp.send(registros);
    } 
    catch(err) {
        resp.status(400).send({erro: err.message});
    }
});


endpoints.get ('/jogo/:id', async(req,resp) => {
    try {

        let id= req.params.id
        let registros = await db.consultarJogoPorId(id);
        resp.send(registros);
    } 
    catch(err) {
        resp.status(400).send({erro: err.message});
    }
});

endpoints.post ('/jogo/', async (req, resp) => {
    try {
        let novoJogo = req.body;
        let id = await db.inserirJogo(novoJogo);
        resp.send({novoId: id});
    }
    catch(err) {
        resp.status(400).send({erro: err.message});
    }
});

endpoints.put ('/jogo/:id', async (req,resp) => {
    try {
        let id = req.params.id;
        let novoJogo = req.body;
        let linhasAfetadas = await db.alterarJogo(id, novoJogo);

        if (linhasAfetadas >= 1){
            resp.send();
        }
        else{
            resp.status(400).send({erro: 'Nenhum registro encontrado.'});
        }
    }
    catch(err) {
        resp.status(400).send({erro: err.message});             
    }
});

endpoints.delete ('/jogo/:id', async (req,resp) => {
    try {
        let id = req.params.id;
        let linhasAfetadas = await db.deletarJogo(id);

        if (linhasAfetadas >= 1){
            resp.send();
        }
        else{
            resp.status(400).send({erro: 'Nenhum registro encontrado.'});
        }
    }
    catch(err) {
        resp.status(400).send({erro: err.message});              
    }
});

export default endpoints;