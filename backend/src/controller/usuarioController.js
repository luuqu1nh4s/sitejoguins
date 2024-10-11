import * as db from '../repository/jogosRepository.js';
import { Router } from 'express';
const endpoints = Router();

endpoints.get ('/login/', async(req,resp) => {
    try {
        let registros = await db.consultarUsuario();
        resp.send(registros);
    } 
    catch(err) {
        resp.status(400).send({erro: err.message});
    }
});

export default endpoints;