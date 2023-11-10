const db = require('../dbconnection');

class TemasModel {
    static async consultar() {
        let query = db('temas');
        return await query;
    }

    static consultarNormal() {
        let query = db('temas');
        db.then((result) => {
            console.log(result);
        }).catch((reason) => {
            conseole.error(result);
        });
    }
    
}

module.exports = TemasModel;