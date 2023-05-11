//Impotamos ROUTER 
import { Router } from "express";
//Iportamos clientes.controllers.js
import { getClientes, createtClientes, updateClientes, deleteClientes, getCliente } from "../controllers/clientes.controllers.js";

const ROUTER = Router();

//Creamnos rutas tipo GET para obtener todos los clientes
ROUTER.get('/clientes', getClientes);
//Creamos rutas tipo GET para obtener un cliente
ROUTER.get('/clientes/:id', getCliente);
//Creamos rutas tipo POST para crear clientes
ROUTER.post('/clientes', createtClientes);
//Creams rutas tipo PUT para actualizar clientes
ROUTER.patch('/clientes/:id', updateClientes);
//Creamos rutas tipo DELETE para eliminar clientes
ROUTER.delete('/clientes/:id', deleteClientes);

export default ROUTER;