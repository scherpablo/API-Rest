//Importamos Express
import express from "express";
//Importamos clientes.routes.js
import clientesRoutes from "./routes/clientes.routes.js";
//Iportamos index.routes.js
import indexRoutes from "./routes/index.routes.js";

//Instanciamos Express
const APP = express();

//Utilizamo el método JSON
APP.use(express.json());

//Utilizamos las rutas clientes.routes.js
APP.use('/api',  clientesRoutes);
APP.use(indexRoutes);

//Creamos un middleware para manejar errores
APP.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

//Exportamos APP
export default APP;