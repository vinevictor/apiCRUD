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
    },

    inserir: async (req, res) => {
        let json = { error: '', result: {} };
    
        let nome = req.body.nome;
        let cpf = req.body.cpf;
    
        if (nome && cpf) {
            let userId = await userService.inserir(nome, cpf);
            json.result = {
                id: userId,
                nome,
                cpf
            };
        } else {
            json.error = 'Campos não Enviados';
        }
    
        res.json(json);
    },
    alterar: async (req, res) => {
        let json = { error: '', result: {} };
    
        let id = req.params.id;
        let nome = req.body.nome;
        let cpf = req.body.cpf;
    
        if (id && nome && cpf  ) {
            await userService.alterar(id, nome, cpf);
            json.result = {
                id,
                nome,
                cpf
            };
        } else {
            json.error = 'Campos não Enviados';
        }
    
        res.json(json);
    },

    excluir: async(req, res)=>{
        let json = { error: '', result: {} };

        await userService.excluir(req.params.id);

        res.json(json)
    
    }
    
    
}