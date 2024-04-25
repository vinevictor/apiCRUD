const db = require('../db')

module.exports = {
    buscarTodos: () =>{
        return new Promise((aceito, rejeitado) =>{

            db.query('SELECT * FROM users', (error, results) =>{
                if(error) {rejeitado(error); return;}
                aceito(results);
            })
            
        })
    }

};