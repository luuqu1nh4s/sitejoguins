import jogosController from './controller/jogosController.js'

export default function adicionarRotas(servidor){
    servidor.use (jogosController)
}