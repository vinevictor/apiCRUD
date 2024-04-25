const { buscarId } = require('../controllers/userController');
const db = require('../db')

module.exports = {
    buscarTodos: () =>{
        return new Promise((aceito, rejeitado) =>{

            db.query('SELECT * FROM users', (error, results) =>{
                if(error) {rejeitado(error); return;}
                aceito(results);
            })
            
        })
    },

    buscarId: (id) =>{
        return new Promise((aceito, rejeitado) =>{

            db.query('SELECT * FROM users WHERE id = ?', [id], (error, results) =>{
                if(error) {rejeitado(error); return;}
                if(results.length > 0){
                    aceito(results[0]);
                }else{
                    aceito(false);
                }
            });
        });
    }

};