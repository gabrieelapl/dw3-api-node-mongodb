import User from "../models/Users.js"

class userService{
    // Método para cadastrar um usuário
    async Create(name,email,password){
        try{
            const newUser = new User({
                name,
                email,
                password,
            })
            // .save() -> utilizado para gravar um regisro no BD
            await newUser.save()
        } catch(error){
            console.log(error)
        }
    }
}

export default new userService();