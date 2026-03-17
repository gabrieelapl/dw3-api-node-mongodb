import express from 'express'
// carregar o express.Router()
const userRoutes = express.Router()
// importar controller de usuários
import userController from '../controllers/userController.js'

//endpoint para cadastrar os usuários
userRoutes.post("/user", userController.createUser)

export default userRoutes;


























