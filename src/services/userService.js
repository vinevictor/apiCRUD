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
    },

    inserir: (nome, cpf) =>{
        return new Promise((aceito, rejeitado) =>{

            db.query('INSERT INTO users (nome, cpf) VALUES (?, ?)', 
            [nome, cpf],
             (error, results) =>{
                if(error) {rejeitado(error); return;}
                 aceito(results.insertId);
            });
        });
    },

    alterar: (nome, cpf) =>{
        return new Promise((aceito, rejeitado) =>{

            db.query('UPDATE users SET nome = ?, cpf = ? WHERE id = ? ', 
            [nome, cpf, id],
             (error, results) =>{
                if(error) {rejeitado(error); return;}
                 aceito(results.insertId);
            });
        });
    },

    excluir : (id) =>{
    return new Promise((aceito, rejeitado)=> {
        db.query('DELETE FROM users WHERE id = ?', [id], (error, results)=>{
            if(error) {rejeitado(error); return;}
            aceito(results);    
        });
    }
    )}




};