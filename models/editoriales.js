const db = require('../dbconnection');

class EditorialesModel {
    static async consultar() {
        let query = db('editoriales');
        return await query;
    }

    static async consultarPorID(id){
        return await db('editoriales').where('id_editorial', id);
    }     
}

module.exports = EditorialesModel;