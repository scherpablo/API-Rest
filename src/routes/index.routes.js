//Importamos Router de express
import { Router } from "express";

//Importamos PING del archivo index.controllers.js
import { PING } from "../controllers/index.controllers.js";

const ROUTER = Router();

//Creamos rutas tipo GET
ROUTER.get('/ping', PING );

//Exportamos Router
export default ROUTER;