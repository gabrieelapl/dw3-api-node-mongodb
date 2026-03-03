import gameService from "../services/gameService.js"

//Função para tratar a requisição LISTAR os jogos
const getAllGames = async (req,res) => {
    try{
        const games = await gameService.getAll();
        res.status(200).json({games : games})
        //cod 200 - ok, requisição feita com sucesso
    } catch(error){
        console.log(error)
        res.status(500).json({error : "Erro interno do servidor"})
    }
}

//Função para tratar a vrequisição de cadastrar um jogo
const createGame = async(req,res) =>{
    try{
        //desestruturação
        const{title,platform,year,price} = req.body //coletandop os dados do corpo da requisição
        //passando os dados para o service
        await gameService.Create(title,platform,year,price)
        res.status(201).json({message: "O jogo foi cadastrado com sucesso"})
        //cod 201 - created - um novo recurso foi criado no servidor
    } catch(error){
        console.log(error)
        res.status(500).json({error: "Erro interno do servidor. Não foi possível cadastrar o jogo."})
    }
}
export default {getAllGames,createGame}