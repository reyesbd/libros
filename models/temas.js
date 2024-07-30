const db = require('../dbconnection');

class TemasModel {
    static async consultar() {
        let query = db('temas');
        return await query;
    }

    static async consultarPorID(id){
        return await db('temas').where('id_tema', id);
    }
    
    static agregarTema(nombre, res){
        if (!nombre){
            return res.json({success:false, message:'Un error ha ocurrido, por favor intente más tarde'});
        }

        db('temas')
        .insert({nombre})
        .catch((err)=>{
            console.log(err);
            return res.json({
                success:false, 
                message:'Un error ha ocurrido, por favor intente más tarde'
            });
        })
    }
}

module.exports = TemasModel;