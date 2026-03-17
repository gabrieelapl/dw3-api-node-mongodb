import express from 'express';
import gameController from "../controllers/gameController.js";
const gameRoutes = express.Router();

//endpoint para listar todos os games
gameRoutes.get('/games',gameController.getAllGames)

//endpoint para cadastrar um game
gameRoutes.post("/games", gameController.createGame)

//endpoint para excluir um game
gameRoutes.delete("/games/:id", gameController.deleteGame)

//endpoint para alterar um game
gameRoutes.put("/games/:id", gameController.UpdateGame)

//endpoint para listar um jogo único
gameRoutes.get("/games/:id", gameController.getOneGame)

export default gameRoutes;