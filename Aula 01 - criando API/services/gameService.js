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
}

//exportando a classe
export default new gameService();