//Importamos createPool from mysql2
import { createPool }  from "mysql2/promise";

export const POOL = createPool ({
    host: "localhost",  
    user: "root",
    password: "",
    database: "estudio_scherpa",
    port: 3306
})

