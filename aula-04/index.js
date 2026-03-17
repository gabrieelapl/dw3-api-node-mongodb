import express from "express";
//rota de games
import gameRoutes from "./routes/gameRoutes.js";
// rota usuários
import userRoutes from "./routes/userRoutes.js";
const app = express();
//importando mongooose
import mongoose from "mongoose";
//importando o model
import Game from "./models/Games.js"
//importando o model de usuários
import User from "./models/Users.js"

// configurações do express
app.use(express.json()) //permite o uso de json na aplicação
app.use("/", gameRoutes)
app.use("/", userRoutes)

//iniciando a conexão com o banco de dados mongodb
mongoose.connect("mongodb://127.0.0.1:27017/api-the-games")

app.get("/", (req,res) => {
    const games = [
        {
            title: "Game 1",
            year: "2020",
            plataform: "PC",
            price: 20
        },
        {
            title: "Game 2",
            year: "2024",
            plataform: "Xbox",
            price: 30
        },
    ]
    res.status(200).json(games)
})

// Rodando a API na porta 4000
const port = 4000;
app.listen(port, (error) => {
    if (error){
        console.log(error)
    } else {
        console.log(`API rodando em http://localhost:${port}`)
    }
});