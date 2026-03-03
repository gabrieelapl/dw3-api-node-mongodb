import express from 'express';
import gameController from "../controllers/gameController.js";
const gameRoutes = express.Router();

gameRoutes.get('/games',gameController.getAllGames)

gameRoutes.post("/games", gameController.createGame)

export default gameRoutes;