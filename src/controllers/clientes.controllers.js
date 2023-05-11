//Importamos POOl del archivo db.js
import { POOL } from "../config/db.js";

export const getClientes = async (req, res) => {
    //Obtener todos los clientes
    try {
        const [ROWS] = await POOL.query('SELECT * FROM clientes');
    res.send(ROWS);
    }catch(error){
        return res.status(500).json({messagge: "Algo salio mal"})
    }    
}
export const getCliente = async (req, res) => {
    //Obtenemos un cliente por su id
    try {
        const [ROWS] = await POOL.query('SELECT * FROM clientes WHERE id = ?', [req.params.id]);
    if (ROWS.length === 0) {return res.status(404).json({messagge: "Cliente no encontrado"})}
    res.send(ROWS[0]);        
    }catch(error){
        return res.status(500).json({messagge: "Algo salio mal"})
    }
};
export const createtClientes = async (req, res) => {
    const { nombre, apellido, dni_cuit, fecha_de_nacimiento, domicilio, localidad, codigo_postal, telefono, clave_anses, clave_afip } = req.body;
    try {        
        const [ROWS] = await POOL.query('INSERT INTO clientes(nombre, apellido, dni_cuit, fecha_de_nacimiento, domicilio, localidad, codigo_postal, telefono, clave_anses, clave_afip) VALUES (?,?,?,?,?,?,?,?,?,?)', [nombre, apellido, dni_cuit, fecha_de_nacimiento, domicilio, localidad, codigo_postal, telefono, clave_anses, clave_afip])

        res.send({ 
            id: ROWS.insertId,
            nombre,
            apellido,
            dni_cuit,
            fecha_de_nacimiento,
            domicilio,
            localidad,
            codigo_postal,
            telefono,
            clave_anses,
            clave_afip
        });
    } catch (error) {
        return res.status(500).json({messagge: "Algo salio mal"})
    }
};
export const updateClientes = async (req, res) => {
    //Actualizamos un cliente por su id
    const { id } = req.params;
    const { nombre, apellido, dni_cuit, fecha_de_nacimiento, domicilio, localidad, codigo_postal, telefono, clave_anses, clave_afip } = req.body;
    try {
        const [RESUTL] = await POOL.query('UPDATE clientes SET nombre = IFNULL(?, nombre), apellido = IFNULL(?, apellido), dni_cuit = IFNULL(?, dni_cuit), fecha_de_nacimiento = IFNULL(?, fecha_de_nacimiento), domicilio = IFNULL(?, domicilio), localidad = IFNULL(?, localidad), codigo_postal = IFNULL(?, codigo_postal), telefono = IFNULL(?, telefono), clave_anses = IFNULL(?, clave_anses), clave_afip  = IFNULL(?, clave_afip) WHERE id = ?', [nombre, apellido, dni_cuit, fecha_de_nacimiento, domicilio, localidad, codigo_postal, telefono, clave_anses, clave_afip, id]);
        
        if (RESUTL.affectedRows === 0) {return res.status(404).json({messagge: "Cliente no encontrado"})}

        const [ROWS] = await POOL.query('SELECT * FROM clientes WHERE id = ?', [id]);

        res.json(ROWS[0]);
    } catch (error) {
        return res.status(500).json({messagge: "Algo salio mal"})
    }
}
export const deleteClientes = async (req, res) => {
    //Eliminamos un cliente por su id
    try {
        const [result] = await POOL.query('DELETE FROM clientes WHERE id = ?', [req.params.id]);
    if (result.affectedRows === 0) {return res.status(404).json({messagge: "Cliente no encontrado"})}
    res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({messagge: "Algo salio mal"})
    }
}