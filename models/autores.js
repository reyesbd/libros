const db = require('../dbconnection');

class AutoresModel {
    static async consultar() {
        let query = db('autores');
        return await query;
    }
    
    static async consultarPorID2(id){
        console.log(id);
        return  db('autores').where('id_autor', id);
    }    
}

module.exports = AutoresModel;