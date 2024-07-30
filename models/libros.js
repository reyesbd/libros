const db = require('../dbconnection');

class LibrosModel {
    static async consultar() {
        // let query =  await db('libros');
        let query = await db('libros as l')
        .join('autores as a','a.id_autor','l.fk_id_autor')
        .join('editoriales as e','e.id_editorial','l.fk_id_editorial')
        .join('temas as t','t.id_tema','l.fk_id_tema')
        .select('l.id_libro','l.titulo', 'l.edicion','a.nombre as nombre_autor','a.apellidos as apellido_autor', 'e.nombre as nombre_editorial', 't.nombre as nombre_tema');

        return  query;
    }

}

module.exports = LibrosModel;