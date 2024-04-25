const userService = require('../services/userService')

module.exports = {
    buscarTodos: async (rec, res)=>{
        let json = {error:'', result:[]};

        let users = await userService.buscarTodos();

        for(let i in users){
            json.result.push({
                id: users[i].id,
                nome: users[i].nome
            })
        }
        res.json(json);
    },

    buscarId: async(req, res)=>{
        let json = {error:'', result:{}};

        let id = req.params.id;
        let user = await userService.buscarId(id);

        if(user){
            json.result =  user;
        }

        res.json(json);
    }
}