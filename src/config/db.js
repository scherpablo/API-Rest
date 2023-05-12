//Importamos createPool from mysql2
import { createPool }  from "mysql2/promise";
//Importamos las variables de entorno
import { MYSQLHOST, MYSQLDATABASE, MYSQLPASSWORD, MYSQLPORT, MYSQLUSER } from "../config.js";

export const POOL = createPool ({
    host: MYSQLHOST,
    database: MYSQLDATABASE,  
    password: MYSQLPASSWORD,
    port: MYSQLPORT,
    user: MYSQLUSER
})

