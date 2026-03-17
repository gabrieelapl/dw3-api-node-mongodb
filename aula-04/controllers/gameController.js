import gameService from "../services/gameService.js"
//importando o objectid
import { ObjectId } from "mongodb";

//Função para tratar a requisição LISTAR os jogos
const getAllGames = async (req, res) => {
    try {
        const games = await gameService.getAll();
        res.status(200).json({ games: games })
        //cod 200 - ok, requisição feita com sucesso
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Erro interno do servidor" })
    }
}

//Função para tratar a vrequisição de cadastrar um jogo
const createGame = async (req, res) => {
    try {
        //desestruturação
        const { title, platform, year, price } = req.body //coletandop os dados do corpo da requisição
        //passando os dados para o service
        await gameService.Create(title, platform, year, price)
        res.status(201).json({ message: "O jogo foi cadastrado com sucesso" })
        //cod 201 - created - um novo recurso foi criado no servidor
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: "Erro interno do servidor. Não foi possível cadastrar o jogo." })
    }
}

//função para deletar o jogo
const deleteGame = async (req, res) => {
    try {
        //coletando a id
        const id = req.params.id

        //validação do id
        if (ObjectId.isValid(id)) {
            await gameService.Delete(id)
            res.status(204).json({ message: "O jogo foi excluído com sucesso!" })
            //cod 204 - no content
        } else {
            res.status(400).json({ error: "Ocorreu um erro na validação do id" })
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Erro interno do servidor" })
    }
}

//função para alterar um jogo
const UpdateGame = async (req, res) => {
    try {
        const id = req.params.id
        if (ObjectId.isValid(id)) {
            const { title, platform, year, price } = req.body
            const game = await gameService.Update(id, title, platform, year, price)
            res.status(200).json({ message: "Jogo atualizado com sucesso!", game: game })
        } else {
            res.status(400).json({ error: "Ocorreu um erro na validação da Id." })
        }
    } catch (error){
        console.log(error)
        res.status(500).json({error: "Erro interno do servidor"})
    }
}

//função para buscar um jogo único
const getOneGame = async(req,res) => {
    try{
        const id = req.params.id
        if(ObjectId.isValid(id)){
            const game = await gameService.getOne(id)
            //verificando se o jogo foi encontrado
            if(!game){ //Se o jogo não existir ( ! - NOT )
                res.status(404).json({error: "O jogo não foi encontrado."})
            } else{ //jogo encontrado
                res.status(200).json({game})
            }
        } else{
            res.status(400).json({error: "A id informada é inválida."})
            //400 (BAD REQUEST) - requisição mal formada
        }
    } catch(error){
        console.log(error)
        res.status(500).json({error: "Erro interno do servidor"})

    }
}
export default { getAllGames, createGame, deleteGame, UpdateGame, getOneGame }