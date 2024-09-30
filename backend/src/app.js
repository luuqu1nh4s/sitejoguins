import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import adicionarRotas from './router.js';

const servidor = express();
servidor.use (cors());
servidor.use (express.json());

adicionarRotas(servidor)
servidor.listen (process.env.PORT, () => console.log(`--> A API subiu na porta ${process.env.PORT} <--`));