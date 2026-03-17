//Importando o model
import Game from "../models/Games.js"

class gameService {
    //método (serviço) para buscar todos os registros no banco
    //funções assincronas são não bloqueantes. então elas não bloqueiam o código para buscar algo
    async getAll(){ //getall pq é a função para buscar todos os jogos
        //try - trata o sucesso
        try{
            //.find - metodo do mongoose para buscar registros no banco
            const games = await Game.find();
            return games;
        } catch (error){ //catch trata as falhas
            console.log(error);
        }
    }

    //Método para cadastrat um game
    async Create(title, platform, year, price){
        try{
            const newGame = new Game({
                //desestruturação. não há necessidade de repetir os campos
                title,
                platform,
                year,
                price
            })
            //Gravando no banco
            await newGame.save() //.save() método mongoose para cadastrar no bd
        } catch(error){
            console.log(error)
        }
    }
    //Método para excluir um jogo
    async Delete(id){
        try{
            //excluindo o jogo pela id
            await Game.findByIdAndDelete(id)
            console.log(`Game com a id ${id} foi deletado.`)
        } catch(error){
            console.log(error)
        }
    }
    //método para alterar um jogo
    async Update(id,title,platform,year,price){
        try{
            const updatedGame = await Game.findByIdAndUpdate(id, {
                title,
                platform,
                year,
                price
            },
            {new:true}
        )
            console.log(`O jogo com a id ${id} foi alterado`)
            return updatedGame
        } catch(error){
            console.log(error)
        }
    }

    //Método para listar um jogo único
    async getOne(id){
        try{
            const game = await Game.findOne({_id: id})
            return game
        } catch (error){
            console.log(error)
        }
    }
}

//exportando a classe
export default new gameService();